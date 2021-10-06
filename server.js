////////////////////////////////////
// Import all our dependencies
/////////////////////////////////////
const express = require("express") // import express
const middleware = require("./utils/middleware")


//////////////////////////////////////////
// Create App Object
//////////////////////////////////////////
const app = express()

//////////////////////////////////////////
// Middleware
///////////////////////////////////////////
middleware(app);

/////////////////////////////////////////////
// Server Listener
/////////////////////////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`listening on ${PORT}`))
