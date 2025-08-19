const express = require('express')
require('dotenv').config();
const app = express()
const port = process.env.PORT;
const router=require("./routers/client/index.route")
const routerAdmin=require("./routers/admin/index.route")
app.set("views","./views");
app.set("view engine","pug");
//database
const database=require("./config/database");
database.connect();
app.use(express.static("public"))
//router
router(app);
routerAdmin(app);
//local
const local=require("./config/system");
app.locals.PATH_ADMIN=local.confixADMIN;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
