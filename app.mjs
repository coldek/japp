import express from "express"; 
import {} from "dotenv/config";
import router from "./src/router.mjs";

// Instantiate the app
const app = express();
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static("./public"));

// Use the router
app.use(router);

// Start the server
app.listen(process.env.PORT, () => console.log(`Started server on port ${process.env.PORT}`));