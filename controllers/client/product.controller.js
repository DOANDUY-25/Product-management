const Product=require("../../models/products.model.js");
module.exports.index = async(req, res) => {
    const products=await Product.find({
        status:"active",
        deleted:false
    }); 
    const newProducts=products.map(item=>{
        item.priceNew=(item.price*(100-item.discountPercentage)/100).toFixed(2);
        return item;
    })

  
    
        res.render("client/pages/product/index.pug",{
            pageTitle:"Trang quản lý sản phẩm",
            products:products
        })
    }

