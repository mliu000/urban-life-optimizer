import fs from "fs";
// import express from "express";

// export const router = express.Router();

const data = '../data/skytrain-stations.json'

function loadSkytrainStations() {
  const raw = fs.readFileSync(data, "utf-8");
  const parsed = JSON.parse(raw);
  return parsed;
}

// router.get("/", (res) => {
//   res.json(loadSkytrainStations());
// });

const stations = loadSkytrainStations();

console.log("Loaded skytrain stations:", stations);

export function getSkytrainStations() {
  return stations;
}
