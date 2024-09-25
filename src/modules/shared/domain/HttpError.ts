/* HttpError es una clase custom para controlar errores de peticiones http */

export class HttpError extends Error {
    statusCode: number;

    constructor(statusCode: number, message: string) {
        super(message);
        this.name = "HttpError";
        this.statusCode = statusCode;
    }

    log() {
        console.log(`Http error ${this.statusCode}: ${this.message}`);
    }
}
