# Stored-procedures-api
The API for the stored procedures

## Setting up the database
1. Create a database called `BikeStores` (or any other name you want)
2. Run the SQL script `database/scripts/bikestores/BikeStores Sample Database - create objects.sql`.
 **Remember to include a `USE BikeStores` at the top of your script**
3. Run the SQL script `database/scripts/bikestores/BikeStores Sample Database - load data.sql` to 
add the data into your database.
4. Run the SQL script `database/scripts/stored procedures/getProducts.sql` to create the stored 
procedure used to get products (with pagination)


## Setting up the project
1. Create a .env file with values similar to those in .env.sample
2. Run `npm install` to install dependencies
3. Run `npm start` to start the Express app
