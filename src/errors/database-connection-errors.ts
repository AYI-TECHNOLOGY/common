import { CustomError } from "./custom-errors"
class DatabaseConnectionError extends CustomError {
    statusCode = 500
    reason : string = 'Error connecting to database';
    constructor() {
        super('Error connecting to database');

        // only because we are extending a builtin class
        Object.setPrototypeOf(this,DatabaseConnectionError.prototype);
    }

    serializeErrors() {
        return [{ message: this.reason }]
    }
}

export { DatabaseConnectionError }