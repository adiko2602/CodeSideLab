export class Response<T> {
  constructor(
    public success: boolean,
    public message: string,
    public data?: T
  ) {}
}

export class SuccessResponse<T> extends Response<T> {
  constructor(message: string, data: T) {
    super(true, message, data);
  }
}

export class ErrorResponse<T = undefined> extends Response<T> {
  constructor(message: string) {
    super(false, message);
  }
}
