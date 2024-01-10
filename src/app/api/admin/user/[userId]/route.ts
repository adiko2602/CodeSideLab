import { ErrorResponse, SuccessResponse } from "@/lib/api/Response";
import prisma from "@/lib/prisma/prismaClient";
import { HttpStatusCode } from "axios";
import { NextRequest, NextResponse } from "next/server";

// get user
export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;
  if (!userId)
    return NextResponse.json(new ErrorResponse("Brak wymaganych danych"), {
      status: HttpStatusCode.BadRequest,
    });

  try {
    const userExist = await prisma.user.findUnique({
      where: {
        id: parseInt(userId),
      },
      select: {
        id: true,
        email: true,
      },
    });

    if (!userExist)
      return NextResponse.json(
        new ErrorResponse("Nie znaleziono użytkownika"),
        { status: HttpStatusCode.BadRequest }
      );
    return NextResponse.json(
      new SuccessResponse("Znaleziono użytkownika", userExist),
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

// delete user
export async function DELETE(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;
  if (!userId)
    return NextResponse.json(new ErrorResponse("Brak wymaganych danych"), {
      status: HttpStatusCode.BadRequest,
    });

  try {
    await prisma.user.delete({
      where: {
        id: parseInt(userId),
      },
    });

    return NextResponse.json(
      new SuccessResponse("Usunięto użytkownika", null),
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
