import express from "express"
import { createCar, getAllCars, updateCar } from "./src/cars.js"

const app = express()
//port should be in scream snake case
const PORT = 3002
app.use(express.json())

// put our routes here
app.get('/cars', getAllCars)
app.post('/cars', createCar)
app.patch('/cars/:id', updateCar)


// conventionally listen goes on the bottem
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT} ...`)
})
