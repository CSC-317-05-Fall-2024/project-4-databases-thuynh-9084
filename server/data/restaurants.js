import { pool } from '../config/database.js';

const getRestaurants = async () => {
    try {
        const results = await pool.query('SELECT * FROM restaurants ORDER BY id ASC')
        return results.rows;
    } catch (error) {
        console.error( error.message )
    }
};

const getRestaurant = async (id) => {
    try {
        const results = await pool.query('SELECT * FROM restaurants WHERE id=$1', [id])
        return results.rows[0];
    } catch (error) {
        console.error( error.message )
    }
};


const createRestaurant = async (data) => {
    try {
        const { name, phone, address, photo } = data;
        const results = await pool.query('INSERT INTO restaurants (name, phone_number, address, photo) VALUES ($1, $2, $3, $4) RETURNING *', [name, phone, address, photo]);
        console.log(results)
        return results.rows[0];
    } catch (error) {
        console.error( error.message )
    }
};

const updateRestaurant = async (id, data) => {
    try {
        const query = await pool.query('SELECT * FROM restaurants WHERE id = $1', [id])
        const current = query.rows[0];
        let updatedData = {
            ...current,
            ...data
        }
        const { name, phone_number, address, photo} = updatedData;
        const results = await pool.query('UPDATE restaurants SET name = $1, color = $2, human = $3, photo = $4 WHERE id = $5 RETURNING *', [name, phone_number, address, photo, id])
        console.log(results.rows)
        return results.rows;
    } catch (error) {
        console.error( error.message )
    }
};

const deleteRestaurant = async (id) => {
    try {
        const results = await pool.query('DELETE FROM restaurants WHERE id = $1', [id])
        return results.rows;
    } catch (error) {
        console.error( error.message )
    }
};

const getRestaurantsForReview = async (restaurant_id) => {
    try {
        const results = await pool.query('SELECT name FROM reviews WHERE restaurant_id = $1', [restaurant_id])
        return results.rows;
    } catch (error) {
        console.error( error.message )
    }
};


export {getRestaurants, getRestaurant, createRestaurant, updateRestaurant, deleteRestaurant,getRestaurantsForReview};