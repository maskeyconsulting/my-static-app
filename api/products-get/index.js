module.exports = async function (context, req) {
    try{
        const prodcuts = data.getProducts();
        context.res.status(200).json(products);
    } catch(error){
        context.res.status(500).send(error);
    }
};