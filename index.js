import express from "express";
import cors from "cors";
import path from "path";

import restaurantRoutes from "./routes/restaurants.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/restaurants", restaurantRoutes);

app.get("/", (req, res) => {
  const __dirname = path.resolve();
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
