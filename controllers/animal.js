////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Animal = require("../models/animal");

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

///////////////////////////////////////
// router middleware
///////////////////////////////////////
router.use((req, res, next) => {
  if (req.session.loggedIn){
      next()
  } else {
      res.redirect("/user/login")
  }
})

/////////////////////////////////////////
// Routes
/////////////////////////////////////////

// index route
router.get("/", (req, res) => {
  Animal.find({username: req.session.username}, (err, animals) => {
    res.render("animals/index.ejs", { animals });
  });
});

//new route
router.get("/new", (req, res) => {
  res.render("animals/new.ejs");
});

// create route
router.post("/", (req, res) => {
  // check if the extinct property should be true or false
  req.body.extinct = req.body.extinct === "on" ? true : false;
  // add username to req.body to track related user
  req.body.username = req.session.username
  // create the new animal
  Animal.create(req.body, (err, animal) => {
    // redirect the user back to the main animals page after animal created
    res.redirect("/animals");
  });
});

// edit route
router.get("/:id/edit", (req, res) => {
  // get the id from params
  const id = req.params.id;
  // get the animal from the database
  Animal.findById(id, (err, animal) => {
    // render template and send it animal
    res.render("animals/edit.ejs", { animal });
  });
});

//update route
router.put("/:id", (req, res) => {
  // get the id from params
  const id = req.params.id;
  // check if the extinct property should be true or false
  req.body.extinct = req.body.extinct === "on" ? true : false;
  // update the animal
  Animal.findByIdAndUpdate(id, req.body, { new: true }, (err, animal) => {
    // redirect user back to main page when animal
    res.redirect("/animals");
  });
});

router.delete("/:id", (req, res) => {
  // get the id from params
  const id = req.params.id;
  // delete the animal
  Animal.findByIdAndRemove(id, (err, animal) => {
    // redirect user back to index page
    res.redirect("/animals");
  });
});

// show route
router.get("/:id", (req, res) => {
  // get the id from params
  const id = req.params.id;

  // find the particular animal from the database
  Animal.findById(id, (err, animal) => {
    // render the template with the data from the database
    res.render("animals/show.ejs", { animal });
  });
});

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;
