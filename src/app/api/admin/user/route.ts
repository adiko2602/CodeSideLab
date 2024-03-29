import {
  ErrorResponse,
  ServerResponse,
  SuccessResponse,
} from "@/lib/api/Response";
import {
  TAdminSignUpSchema,
  adminSignUpSchema,
} from "@/lib/forms/adminSignUpSchema";
import { hash } from "@/lib/helpers/Password";
import prisma from "@/lib/prisma/prismaClient";
import { HttpStatusCode } from "axios";
import { NextRequest } from "next/server";

// get users
export async function GET(req: NextRequest) {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
      },
    });

    if (!users || users.length === 0)
      return ServerResponse.send(
        new ErrorResponse("Nie znaleziono użytkowników"),
        HttpStatusCode.BadRequest
      );

    return ServerResponse.send(
      new SuccessResponse("Znaleziono użytkowników", users),
      HttpStatusCode.Ok
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

// create user by admin
export async function POST(req: NextRequest) {
  const body: TAdminSignUpSchema = await req.json();

  try {
    const result = adminSignUpSchema.safeParse(body);

    if (!result.success)
      return ServerResponse.send(
        new ErrorResponse("Brak wymaganych danych"),
        HttpStatusCode.BadRequest
      );

    const userExist = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (userExist)
      return ServerResponse.send(
        new ErrorResponse("Użytkownik już istnieje"),
        HttpStatusCode.Conflict
      );

    const hashedPassword = await hash(body.password);

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
