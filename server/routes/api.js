 import express from 'express';
 import { createRestaurant, deleteRestaurant, getRestaurant } from '../data/restaurants.js';
const router = express.Router();

// Add routes here

router.get("/restaurants",(req,res)=> {
    try{
        const restaurant = getRestaurant();
        res.status(200).json(restaurant);
    }catch {
        console.log(error)
        res.status(500).json({"message": `${error}`})
    }
});

router.post("/restaurants",(req,res) =>{
    const restaurantData = req.body;
    try{
        const restaurant = createRestaurant(restaurantData);
        res.status(200).json(restaurant);
    } catch {
        console.log(error)
        res.status(500).json({"message": `${error}`})
    }
});

router.patch('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const restaurantData = req.body;
    const restaurant = updateCat(id, restaurantData);
    res.status(200).json(restaurant);

});

router.delete('/restaurants/:id',(req,res)=> {
    const id = parseInt(req.params.id);
    try{
        const restaurant = deleteRestaurant(id);
        res.status(200).json(restaurant);
    } catch {
        res.status(500).json({"message":`${error}`});
    }
});

export {router as backendRouter};