const express = require("express");
// bring in express

const app = express();
// connects express instance to the variable app
// -------------------------------------------{Requirements}

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
// --------------------------------------------------{Middleware}

const plants = [
  "Monstera Deliciosa",
  "Corpse Flower",
  "Elephant-Foot Yam",
  "Witches' Butter",
];

const foods = ["Apple", "Orange", "Pear"];

const movies = [
  "The Godfather Part II",
  "Barbie",
  "The Dark Knight",
  "The Lion King",
  "Fantastic Mr. Fox",
  "The Lion King",
  "Talk to Me",
  "Captain American and the Winter Solider",
  "Black Pather",
  "Finding Nemo",
];
// -------------------------------------------{create Routes based on Path/REST}

app.get("/", (req, res) => {
  res.send("<h1>Hola Mundo</h1>");
});

// -------------------{create ROUTES based on path}

app.get("/home", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/contact", (req, res) => {
  res.send("Contact");
});

app.get("/something", (req, res) => {
  res.send("Something");
});

app.get("/allfood", (req, res) => {
  res.send(foods);
});
// ---------------{get all foods}
app.get("/allmovies", (req, res) => {
  res.send(movies);
});
// ----------------------{get all movies}

// ----------------------{QueryParam}
// app.get("/:indexOfFoodsArray", (req, res) => {
//   if (foods[req.params.indexOfFoodsArray]) {
//     res.send(foods[req.params.indexOfFoodsArray] + " are my favorite treat");
//   } else {
//     res.send(
//       "cannot find anything at this index: " + req.params.indexOfFoodsArray
//     );
//   }
// });

app.get("/:indexOfMoviesArray", (req, res) => {
  if (movies[req.params.indexOfMoviesArray]) {
    res.send(movies[req.params.indexOfMoviesArray] + " is my favorite movie!");
  } else {
    res.send("cannot find anything at this index");
  }
});

// app.get("/linkedin/:firstname", (req, res) => {
//   console.log("REQ PARAMS: ", req.params);
//   console.log("REQ QUERY: ", req.query);
//   res.send(`Hola ${req.query.title}  ${req.params.firstname}`);
// });

// --------HOME ROUTE-------

app.listen("3000", (req, res) => {
  console.log("Server is now listening on port 3000");
});
// Creates the server based on PORT value
