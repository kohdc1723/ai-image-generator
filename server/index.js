import express from "express";
import cors from "cors";
import connectDb from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
    res.send("Hello");
});

const connectServer = (port) => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

const startServer = async () => {
    try {
        connectDb(process.env.MONGODB_CONNECTION_URI);
        connectServer(process.env.PORT_NUMBER);
    } catch (error) {
        console.error(error);
    }
}

startServer();