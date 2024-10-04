import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import restaurantRoutes from "./routes/restaurants.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/restaurants", restaurantRoutes);

app.get("/", (req, res) => res.send("Dummy API Restaurants"));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
