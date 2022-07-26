import { dbConnect } from "./dbConnect.js"

export function getAllCars(req, res) {
  // connect to the data base
  const db = dbConnect()
  // get all docs from the cars collection
  db.collection("cars")
    .get()
    .then((collection) => {
      // reshape collection to array
      const cars = collection.docs.map((doc) => doc.data())
      // send array to response
      res.send(cars)
    })
    .catch((err) => res.status(500).send(err))
}
