let express = require("express");
var HTMLRoutes = require("./app/routing/htmlRoutes"); 
var APIRoutes = require("./app/routing/apiRoutes");
let path = require("path");

let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});

var htmlRoutes = new HTMLRoutes(app);
var apiRoutes = new APIRoutes(app);


