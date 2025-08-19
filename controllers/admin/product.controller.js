const Product = require("../../models/products.model")
module.exports.index = async (req, res) => {
    const filterStatus = [{
            name: "Tất cả",
            status: "",
            class: ""
        },
        {
            name: "Hoạt động",
            status: "active",
            class: ""
        },
        {
            name: "Dừng hoạt động",
            status: "inactive",
            class: ""
        }
    ];
    const find = {
        deleted: false
    }
    if (req.query.status) {
        find.status = req.query.status
        const index = filterStatus.findIndex(item => item.status === req.query.status);
        if (index !== -1) {
            filterStatus[index].class = "active";
        } else {
            filterStatus[0].class = "active";
        }
    } else {
        filterStatus[0].class = "active";
    }

    const products = await Product.find(find);

    res.render("admin/pages/products/index.pug", {
        pageTitle: "Trang sản phẩm",
        products: products,
        filterStatus: filterStatus
    })
}