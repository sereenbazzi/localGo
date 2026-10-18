
import express from "express";
import authRoutes from "./routes/authRoutes";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "LocalGo API is running!" });
});


app.use("/api/auth", authRoutes);

export default app;

