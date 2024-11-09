/* Initialize the data in the DB */
import { pool } from './database.js';

const dropTables = async () => {
    try {
        console.log('dropping tables...');
        const dropTablesQuery = `
            DROP TABLE IF EXISTS reviews;
            DROP TABLE IF EXISTS restaurants;
        `;
        await pool.query(dropTablesQuery);
    } catch (error) {
        console.log(error)
    }
}

const createTables = async () => {
    try {
        console.log('creating restaurants...');
        const createQuery = `
            CREATE TABLE IF NOT EXISTS restaurants (
                id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                name TEXT NOT NULL,
                phone_number TEXT NOT NULL,
                address TEXT NOT NULL,
                photo TEXT
            );
            CREATE TABLE IF NOT EXISTS reviews (
                id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                rating INT NOT NULL,
                content TEXT NOT NULL,
                restaurant_id INT NOT NULL,
                FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE
            );
        `;
        await pool.query(createQuery);
        console.log('created restaurants and reviews');
    } catch (error) {
        console.log(error)
    }
}

const insertData = async () => {
    try {
        console.log('adding initial data...');
        const insertQuery = `
        INSERT INTO restaurants (name, phone_number,address, photo) VALUES 
            ('Scomas Restaurant', '(415) 771-4383', '1965 Al Scoma Way San Francisco, United States', '/images/scoma.png');
        INSERT INTO restaurants (name, phone_number,address, photo) VALUES 
            ('Abacá', '(415) 486-0788', '2700 Jones St San Francisco, United States', '/images/abacá.png');
        INSERT INTO restaurants (name, phone_number,address, photo) VALUES 
            ('Dalida', '(415) 237-1999', '1101 Montgomery St San Francisco, United States', '/images/dalida.png');
        INSERT INTO restaurants (name, phone_number,address, photo) VALUES 
            ('Golden Boy Pizza', '(415) 982-1111', '542 Green St (at Grant) San Francisco, United States', '/images/golden_boy.png');
        INSERT INTO restaurants (name, phone_number,address, photo) VALUES 
            ('Maison Nico', '(415) 359-1000', '710 Montgomery St (Washinton St) San Francisco, United States', '/images/maison_nico.png');
        INSERT INTO restaurants (name, phone_number,address, photo) VALUES 
            ('Hog Island Oyster Co', '(415) 391-7117', 'Ferry Building, #11 San Francisco, United States', '/images/hog_island.png');
        INSERT INTO restaurants (name, phone_number,address, photo) VALUES 
            ('City View Resturant', '(415) 398-2838', '33 Walter U Lum P1 San Francisco, United States', '/images/city_view.png');
        INSERT INTO restaurants (name, phone_number,address, photo) VALUES 
            ('Sam Wo Resturant', '(415) 989-8898', '713 Clay St San Francisco, United States', '/images/samwo.png');
        INSERT INTO restaurants (name, phone_number,address, photo) VALUES 
            ('Mister Jiu', '(415) 857-9688', '28 Waverly P1 San Francisco, United States', '/images/misterjiu.png');

        INSERT INTO reviews (rating, content,restaurant_id) VALUES (5,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 1);
        INSERT INTO reviews (rating, content,restaurant_id) VALUES (4,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 1);
        INSERT INTO reviews (rating, content,restaurant_id) VALUES (5,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 2);
        INSERT INTO reviews (rating, content,restaurant_id) VALUES (4,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 2);
        INSERT INTO reviews (rating, content,restaurant_id) VALUES (5,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 3);   
        `;
        await pool.query(insertQuery);
    } catch (error) {
        console.log(error)
    }
}

const setup = async () => {
    await dropTables();
    await createTables();
    await insertData();
}

setup();
