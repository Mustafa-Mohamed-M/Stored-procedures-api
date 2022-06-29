require("dotenv").config(); // prepare environment variables

const express = require("express");
const cors = require("cors");
const sql = require("mssql");

//instantiate a connection pool
const config = require("./database/config");
const appPool = new sql.ConnectionPool(config);
appPool.connect().then(pool => {

    const app = express();
    app.use(express.json());
    app.use(cors());

    const productRoutes = require("./routes/products");
    app.use("/products", productRoutes);

    app.locals.db = pool; // use pool so that we don't call connect() for every request

    const envPort = parseInt(process.env.APP_PORT);
    const port = isNaN(envPort) ? 5003 : envPort;
    app.listen(port, ()=>{
        console.log(`App is running on port ${port}`);
    });

}).catch(error => {
    console.log({error});
});