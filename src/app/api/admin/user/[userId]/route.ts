import {
  ErrorResponse,
  ServerResponse,
  SuccessResponse,
} from "@/lib/api/Response";
import prisma from "@/lib/prisma/prismaClient";
import { HttpStatusCode } from "axios";
import { NextRequest } from "next/server";

// get user
export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;
  if (!userId)
    return ServerResponse.send(
      new ErrorResponse("Brak wymaganych danych"),
      HttpStatusCode.BadRequest
    );

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
      return ServerResponse.send(
        new ErrorResponse("Nie znaleziono użytkownika"),
        HttpStatusCode.BadRequest
      );
    return ServerResponse.send(
      new SuccessResponse("Znaleziono użytkownika", userExist),
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

// delete user
export async function DELETE(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;
  if (!userId)
    return ServerResponse.send(
      new ErrorResponse("Brak wymaganych danych"),
      HttpStatusCode.BadRequest
    );

  try {
    await prisma.user.delete({
      where: {
        id: parseInt(userId),
      },
    });

    return ServerResponse.send(
      new SuccessResponse("Usunięto użytkownika", null),
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
