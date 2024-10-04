import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();
let datas = [];

const __filename = fileURLToPath(import.meta.url); // Get the current file path
const __dirname = path.dirname(__filename); // Get the directory name

const filePath = path.join(__dirname, "..", "restaurants.json");
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  try {
    datas = JSON.parse(data);
  } catch (err) {
    console.error("Error parsing JSON:", err);
  }
});

router.get("/", (req, res) => {
  res.send(datas);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const restaurants = datas.restaurants;
  const foundResto = restaurants.find((item) => item.id == id);
  res.send(foundResto);
});

router.get("/search/:category", (req, res) => {
  const { category } = req.params;

  const restaurants = datas.restaurants;

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.categories.some(
      (c) => c.name.toLowerCase() === category.toLowerCase()
    )
  );
  res.send(filteredRestaurants);
});

export default router;
