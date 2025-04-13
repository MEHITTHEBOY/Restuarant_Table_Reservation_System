//This code defines a function sendReservation that handles reservation requests in a web application using JavaScript
import ErrorHandler from "../error/error.js";
import { Reservartion } from "../models/reservationSchema.js";

/*Declares an asynchronous function named sendReservation that handles incoming reservation requests. It accepts three parameters:
req: The request object, containing data sent from the client.
res: The response object, used to send data back to the client.
next: A function that passes control to the next middleware or error handler.*/
export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, time, date } = req.body; //Uses object destructuring to extract firstName, lastName, email, phone, time, and date from the body of the incoming request (req.body). These represent the details needed for a reservation.
  if (!firstName || !lastName || !email || !phone || !time || !date) {
    return next(new ErrorHandler("Please fill full reservation form!!!", 400));
  } //if any field is missing then it calls next with new ErrorHandler object
  try {
    await Reservartion.create({
      firstName,
      lastName,
      email,
      phone,
      time,
      date,
    }); //new reservation creation
    res
      .status(200) //sending a success response
      .json({
        success: true,
        message: "Reservation sent successfully!!!",
      });
  } catch (error) {
    //Checks if the error is a ValidationError (typically, this happens if some of the data does not meet the requirements defined in the reservationSchema).
    /*If it’s a validation error, it gathers all error messages using Object.values() and map():
Object.values(error.errors): Extracts all validation errors from the error object.
.map((err) => err.message): Creates an array of error messages.
Joins the error messages into a single string, separated by commas.
Calls next with a new ErrorHandler containing:The combined validation error messages.400: Status code indicating that the input data is invalid.*/
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(" , "), 400));
    }
    return next(error);
  }
};
