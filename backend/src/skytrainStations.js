import fs from "fs";
import express from "express";

export const router = express.Router();

const data = '../data/skytrain-stations.json'

function loadSkytrainStations() {
  const raw = fs.readFileSync(data, "utf-8");
  const stations = JSON.parse(raw);
  return stations;
}

router.get("/", (res) => {
  res.json(loadSkytrainStations());
});
