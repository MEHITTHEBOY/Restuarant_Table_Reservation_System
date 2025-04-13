//Error handling mechanism for express js application

//The ErrorHandler class is a custom class that extends JavaScript's built-in Error class. It adds the ability to set both an error message and a status code (typically an HTTP status code).
class ErrorHandler extends Error {
  constructor(message, statuscode) {
    super(message);
    this.statuscode = statuscode;
  }
}

//Error handling middleware
//This middleware is responsible for catching and handling errors that occur during the execution of the request-response cycle in your Express application.
//How it works:
/* Set Error Message: If the error object (err) doesn’t already have a message, it defaults to "Internal server error".

Set Status Code: If the error object doesn’t have an associated status code, it defaults to 500, which indicates a general server error.

-> Send Response: The middleware sends an HTTP response to the client with:
status(err.statuscode): Sets the HTTP status code based on the statuscode property of the error object.
json(): Sends a JSON response with:
success: false: Indicates that the request failed.
message: err.message: Sends the error message to the client.*/
export const errormiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal server error";
  err.statuscode = err.statuscode || 500;

  return res.status(err.statuscode).json({
    success: false,
    message: err.message,
  });
};

export default ErrorHandler;
