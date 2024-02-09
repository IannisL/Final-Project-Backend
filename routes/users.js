import { Router } from 'express';
import db from "../db/conn.js";
import { ObjectId } from "mongodb";


const router = new Router();

router.get('/', async (req, res) => {
    try {
      const collection = await db.collection("users");
  
      const pokedex = await collection.find().toArray();
  
      const topThreeHundred = pokedex.slice(0, 300);
  console.log(topThreeHundred)
      res.status(200).json(topThreeHundred);
    } catch (error) {
      console.log(error);
    }
  });


router.get("/:id", async (req, res) => {
    const collection = await db.collection('users');

    const query = { _id: new ObjectId(req.params.id) };

    const result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});


router.post('/', async (req, res) => {
    const collection = await db.collection('users');
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
        team: [],// make an array in front end......
        boxed: []// make an array in front end......
    }
    console.log(newUser)
    const result = await collection.insertOne(newUser);
    res.send(result).status(204);
});
router.put('/:id/add-team', async (req, res) => {
    let collection = await db.collection("users");
    let query = { _id: new ObjectId(req.params.id) };
    const result = collection.updateOne({ _id: query._id }, { $push: { team: req.body.pokemon } })

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

router.put('/:id/add-boxed', async (req, res) => {
    let collection = await db.collection("users");
    let query = { _id: new ObjectId(req.params.id) };
    collection.updateOne({ _id: query._id }, { $push: { boxed: req.body.pokemon } })

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});


router.post('/signin', async (req, res) => {
    // check if user exist
    // check if password is a match
    // send the db user
    const user = { _id: '1', email: 'alex@gmail.com', userName: 'alex123' };
    res.json(user);
});




export default router;