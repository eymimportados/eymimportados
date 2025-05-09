import express from "express";
import {PORT, URL} from "./config.js";
import userRoutes from "./routes/users.routes.js";
import productsRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";
import ordersRoutes from "./routes/orders.routes.js";
import notesRoutes from "./routes/notes.routes.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from 'cors';

const app = express();

app.use(cors({
    origin: URL,
    credentials: true
}))

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use("/", userRoutes);
app.use("/api", productsRoutes);
app.use("/api", authRoutes);
app.use("/api", ordersRoutes);
app.use("/api", notesRoutes);

app.listen(PORT);

console.log("Server listen om Port:", PORT);
