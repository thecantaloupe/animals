///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require("./connection");
const Animal = require("./animal")

///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////

// Make sure code is not run till connected
mongoose.connection.on("open", () => {

  ///////////////////////////////////////////////
  // Write your Seed Code Below
  //////////////////////////////////////////////

  // Run any database queries in this function
  const startAnimals = [
    { species: "Orange", location: "orange", extinct: false, lifeExpectancy: "5" },
    { species: "Grape", location: "purple", extinct: false, lifeExpectancy: "5" },
    { species: "Banana", location: "orange", extinct: false, lifeExpectancy: "5" },
    { species: "Strawberry", location: "red", extinct: false, lifeExpectancy: "5" },
    { species: "Coconut", location: "brown", extinct: false, lifeExpectancy: "5" },
  ];

  // Delete all animals
  Animal.remove({}, (err, data) => {
    // Seed Starter Animals
    Animal.create(startAnimals, (err, data) => {
      // log the create animals to confirm
      console.log("--------FRUITS CREATED----------");
      console.log(data);
      console.log("--------FRUITS CREATED----------");

      // close the DB connection
      mongoose.connection.close();
    });
  });

  ///////////////////////////////////////////////
  // Write your Seed Code Above
  //////////////////////////////////////////////

});
