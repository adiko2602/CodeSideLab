import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";

export class Response<ResponseDataType> {
  constructor(
    public success: boolean,
    public message: string,
    public data?: ResponseDataType
  ) {}
}

export class SuccessResponse<
  ResponseDataType
> extends Response<ResponseDataType> {
  constructor(message: string, data: ResponseDataType) {
    super(true, message, data);
  }
}

export class ErrorResponse<
  ResponseDataType
> extends Response<ResponseDataType> {
  constructor(message: string, data?: ResponseDataType | undefined) {
    super(false, message, data);
  }
}

export class ServerResponse<ResponseDataType> {
  private constructor(
    private res: Response<ResponseDataType>,
    private status: HttpStatusCode
  ) {}

  static send<ResponseDataType>(
    res: Response<ResponseDataType>,
    status: HttpStatusCode
  ) {
    return NextResponse.json(res, {
      status: status,
    });
  }
}
