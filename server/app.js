const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose"); //using mongoose to connect with db
const cors = require("cors");

const schema = require("./schema/schema");
const db = require('./config').mongoURI


const app = express();

mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser:true })
.then(() => console.log("DB connected"))
.catch(err => console.log(err))

/*
We can use graphql on express server with middlewares, so that whenever
we need graphql query from frontend, our express server can handle it
smoothly.
*/


// Cors added as middleware
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(4000, () => {
 console.log("Server is listening on port 4000");
});
