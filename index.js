const express = require("express");
// const path = require("path");
const exphbs = require("express-handlebars");
const app = express();
const homeRoutes = require("./Routes/home");
const addRoutes = require("./Routes/add");
const coursesRoutes = require("./Routes/courses");

//*Setting handlebars

const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs"); // Register engine hbs
app.set("views", "views");

//*Setting handlebars

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/", homeRoutes);
app.use("/add", addRoutes);
app.use("/courses", coursesRoutes);

// app.get("/courses", (req, res) => {
//   res.render("courses", {
//     title: "Курсы",
//     isCourses: true,
//   });
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
