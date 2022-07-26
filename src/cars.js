import { dbConnect } from "./dbConnect.js"

export function getAllCars(req, res) {
  // connect to the data base
  const db = dbConnect()
  // get all docs from the cars collection
  db.collection("cars").get()
    .then((collection) => {
      // reshape collection to array
      const cars = collection.docs.map((doc) => doc.data())
      // send array to response
      res.send(cars)
    })
    .catch(err => handleError(err, res))


}

export function createCar(req, res){
    // get a new car from request body
    const newCar = req.body
    // connect to db
    const db = dbConnect()
    // add that car to cars colletion 
    db.collection('cars').add(newCar)
    .then(doc => {
        res.status(201).send({
            success: true,
            id: doc.id
        })
    })
    .catch(err => handleError(err, res))
    // send back new doc id
}

function handleError(err, res){
    console.error(err)
    res.status(500).send(err)
}