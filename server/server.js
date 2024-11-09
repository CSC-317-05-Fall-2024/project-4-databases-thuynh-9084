// Add your server code here.
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { getRestaurant, getRestaurants } from './data/restaurants.js';
import {backendRouter} from "./routes/api.js"; 

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use("/api",backendRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/attractions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'attractions.html'));
});

app.get('/restaurants', async (req, res) => {
    const restaurant = await getRestaurants();
    //console.log(restaurant);
    res.render('restaurants', { restaurants: restaurant });
});

app.get('/restaurant_form', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'restaurant_form.html'));
});

app.get('/restaurants/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const restaurants = await getRestaurant(id);
    console.log(restaurants);
    res.render('restaurant-details', {restaurants});
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
