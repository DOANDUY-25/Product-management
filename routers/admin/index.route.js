const dashboardRoute=require("./dashboard.route")
const productRoute=require("./product.route")
const pathadmin=require("../../config/system")
module.exports=(app)=>{
    const PATH_ADMIN=pathadmin.confixADMIN;
    app.use(PATH_ADMIN + "/dashboard",dashboardRoute)
    app.use(PATH_ADMIN + "/products",productRoute)
}