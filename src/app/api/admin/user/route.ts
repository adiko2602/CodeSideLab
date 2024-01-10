import { ErrorResponse, SuccessResponse } from "@/lib/api/Response";
import { TAdminCreateUserSchema } from "@/lib/forms/adminCreateUserSchema";
import { hash } from "@/lib/helpers/Password";
import prisma from "@/lib/prisma/prismaClient";
import { HttpStatusCode } from "axios";
import { NextRequest, NextResponse } from "next/server";

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
      return NextResponse.json(
        new ErrorResponse("Nie znaleziono użytkowników"),
        { status: HttpStatusCode.BadRequest }
      );
    return NextResponse.json(
      new SuccessResponse("Znaleziono użytkowników", users),
      { status: HttpStatusCode.Ok }
    );
  } catch (err: unknown) {
    return NextResponse.json(new ErrorResponse("Nieznany błąd"), {
      status: HttpStatusCode.BadRequest,
    });
  } finally {
    prisma.$disconnect();
  }
}
// create new user
export async function POST(req: NextRequest) {
  const body: TAdminCreateUserSchema = await req.json();
  if (!body.email || !body.password)
    return NextResponse.json(new ErrorResponse("Brak wymaganych danych"), {
      status: HttpStatusCode.BadRequest,
    });

  try {
    const userExist = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (userExist)
      return NextResponse.json(new ErrorResponse("Użytkownik już istnieje"), {
        status: HttpStatusCode.Conflict,
      });

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
      return NextResponse.json(
        new ErrorResponse("Błąd tworzenia użytkownika"),
        { status: HttpStatusCode.BadRequest }
      );

    return NextResponse.json(
      new SuccessResponse("Utworzono nowego użytkownika", userNew),
      { status: HttpStatusCode.Created }
    );
  } catch (err: unknown) {
    return NextResponse.json(new ErrorResponse("Nieznany błąd"), {
      status: HttpStatusCode.BadRequest,
    });
  } finally {
    prisma.$disconnect();
  }
}
