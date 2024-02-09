import {Router} from 'express';
import {objectId} from 'mongoose';
import pokemon from '../db/models/pokemon';

const router = new Router;

// Get
router.get('/', async (req, res) => {
      try {
        const collection = await db.collection("pokemon");
    
        const pokemon = await collection.find().toArray();
    
        const topThreeHundred = pokemon.slice(0, 300);
    console.log(topThreeHundred)
        res.status(200).json(topThreeHundred);
      } catch (error) {
        console.log(error);
      }
    });

    router.get("/:id", async (req, res) => {
      const collection = await db.collection('pokemon');
  
      const query = { _id: new ObjectId(req.params.id) };
  
      const result = await collection.findOne(query);
  
      if (!result) res.send("Not found").status(404);
      else res.send(result).status(200);
  });
















      export default router;