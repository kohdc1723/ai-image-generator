import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDb from "./mongodb/connect.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
    res.send("Hello");
});

const connectExpress = () => {
    const port = process.env.PORT_NUMBER;

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

const startServer = async () => {
    try {
        connectDb(process.env.MONGODB_CONNECTION_URI, connectExpress);
    } catch (error) {
        console.error(error);
    }
}

startServer();