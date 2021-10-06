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
    { name: "Orange", color: "orange", extinct: false },
    { name: "Grape", color: "purple", extinct: false },
    { name: "Banana", color: "orange", extinct: false },
    { name: "Strawberry", color: "red", extinct: false },
    { name: "Coconut", color: "brown", extinct: false },
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
