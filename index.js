import express from "express"
import { getAllCars } from "./src/cars.js"

const app = express()
//port should be in scream snake case
const PORT = 3002
app.use(express.json())

// put our routes here
app.get("/", (req, res) => {
  res.send("Express is working!")
})

app.get('/cars', getAllCars)

// conventionally listen goes on the bottem
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT} ...`)
})
