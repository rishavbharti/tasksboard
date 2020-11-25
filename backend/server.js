import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import listRoutes from "./routes/listRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import boardRoutes from "./routes/boardRoutes.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API available at /api/user | board | list");
});

app.use("/api/list", listRoutes);
app.use("/api/user", userRoutes);
app.use("/api/board", boardRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch((error) => console.log(error));
