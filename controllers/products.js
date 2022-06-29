const sql = require('mssql');

// get products
exports.products = async(req, res) => {
    const {page = 0, limit = 10} = req.query;

    // TODO: validate the input data
    try {
        const db = req.app.locals.db;
        const result = await db.request()
            .input('page', sql.Int, parseInt(page))
            .input('limit', sql.Int, parseInt(limit))
            .output('pageCount', sql.Int)
            .execute("getProducts");
        res.json({data: result.recordset, pageCount: result.output.pageCount});
    } catch (error) {
        console.log({error}); 
        // TODO: appropriate error handling e.g. send user a proper error message not just "Internal server error"
        res.status(500).send("Internal server error");
    }
}

// add a product
exports.addProduct = async (req, res) => {
    const {
        name,
        brandId,
        categoryId,
        modelYear,
        listPrice
    } = req.body;

    // TODO: validate and sanitize the input data

    // add the product

};

// delete a particular product. Question: do we need soft-deletion??
exports.deleteProduct = async (req, res) => {
    const {
        id
    } = req.params;

    // TODO: validate and sanitize input data

    // delete the product and return the number of affected rows
}

// get a particular product
exports.getProduct = async(req, res) => {

}

// update a product