import {
  ErrorResponse,
  ServerResponse,
  SuccessResponse,
} from "@/lib/api/Response";
import { TSignUpSchema, signUpSchema } from "@/lib/forms/signUpSchema";
import { hash } from "@/lib/helpers/Password";
import prisma from "@/lib/prisma/prismaClient";
import { HttpStatusCode } from "axios";
import { NextRequest } from "next/server";

// create new user
export async function POST(req: NextRequest) {
  const body: TSignUpSchema = await req.json();

  try {
    const result = signUpSchema.safeParse(body);

    if (!result.success)
      return ServerResponse.send(
        new ErrorResponse("Brak wymaganych danych"),
        HttpStatusCode.BadRequest
      );

    if (body.passwords.password !== body.passwords.confirmedPassword)
      return ServerResponse.send(
        new ErrorResponse("Podane hasła nie są takie same"),
        HttpStatusCode.BadRequest
      );
    const userExist = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (userExist) {
      return ServerResponse.send(
        new ErrorResponse(`Użytkownik już istnieje`),
        HttpStatusCode.BadRequest
      );
    }

    const hashedPassword = await hash(body.passwords.password);

    const userNew = await prisma.user.create({
      data: {
        email: body.email,
        password: hashedPassword,
      },
      select: {
        id: true,
        email: true,
      },
    });

    if (!userNew)
      return ServerResponse.send(
        new ErrorResponse("Błąd tworzenia użytkownika"),
        HttpStatusCode.BadRequest
      );

    return ServerResponse.send(
      new SuccessResponse("Utworzono nowego użytkownika", userNew),
      HttpStatusCode.Created
    );
  } catch (err: unknown) {
    return ServerResponse.send(
      new ErrorResponse("Nieznany błąd"),
      HttpStatusCode.BadRequest
    );
  } finally {
    prisma.$disconnect();
  }
}
