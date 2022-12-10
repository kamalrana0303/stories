export class ErrorResponse{
    status:number | undefined;
    url: string | undefined;
    message: string | undefined;
    error: Error | undefined;
}
export class Error {
    error: string | undefined;
    path: string | undefined;
}