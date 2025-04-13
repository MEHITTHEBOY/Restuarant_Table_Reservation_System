import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errormiddleware } from "./error/error.js";
import router from "./routes/reservationRoutes.js";
const app = express();

/*why dotenv.config({ path: "./config/config.env" }) is required?
By calling dotenv.config(), you are telling your application to:
Read the .env file.
Load the variables specified there into process.env.
Access these environment variables throughout your application using process.env
VARIABLE_NAME.*/
dotenv.config({ path: "./config/config.env" });

//how to connect frontend with backend
//1. CORS Middleware Configuration:
// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL],
//     methods: ["POST"],
//     credentials: true,
//     allowedHeaders: ["*"],
//   })
// );

app.use(cors());

//2.body parsing middleware
//This middleware parses incoming requests with JSON payloads. It allows your backend to accept and process requests where the body is in JSON format.
//express.json() middleware automatically parse request into js object and make it available into req.body
app.use(express.json());

//This middleware parses incoming requests with URL-encoded payloads (typically from HTML forms).
//The extended: true option allows for more complex, nested objects in the request body (using the qs library).
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", router);

dbConnection();

app.use(errormiddleware);

export default app;
