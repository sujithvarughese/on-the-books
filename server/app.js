import express from "express"
import dotenv from "dotenv"
import "express-async-errors";

//security package imports
import cors from "cors";

// router imports
import authRouter from "./routes/auth-router.js"
import libraryRouter from "./routes/library-router.js";

// remaining middleware imports
import morgan from "morgan";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/error-handler.js";
import notFound from "./middleware/not-found.js";
import { authenticateUser, authorizePermissions } from "./middleware/authentication.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express()
dotenv.config();

app.use(cors({
	origin: ["http://localhost:5173", "http://localhost:5175", "https://on-the-books.netlify.app"],
	credentials: true
}));

app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET));

if (process.env.NODE_ENV !== "production") {
	app.use(morgan("dev"));
}

// in production
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./client/build")));

app.use("/api/v1/auth", authRouter);  // login, logout, register
app.use("/api/v1/library", authenticateUser, libraryRouter) // library functions - getLibrary, add/update/removeBook
app.use(notFound);
app.use(errorHandler);

app.get("/api/v1", (req, res) => {
	res.send("onthebooks API")
})
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
})

export default app