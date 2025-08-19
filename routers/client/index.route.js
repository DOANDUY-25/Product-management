const homeRouter=require("./home.route")
const productsRouter=require("./product.route")
module.exports=(app)=>{
    app.use('/',homeRouter )
    app.use('/products',productsRouter )
}
