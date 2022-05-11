import Client from 'shopify-buy';
import express from "express"; 
import {} from 'dotenv/config';
import fetch from 'node-fetch';
import router from './src/router.mjs';

const app = express();
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static("./public"));

const shopifyClient = Client.buildClient({
    domain: "eldrippy.myshopify.com",
    storefrontAccessToken: process.env.SHOPIFY_CLIENT
}, fetch);

app.use(router);

app.listen(process.env.PORT, () => console.log(`Started server on port ${process.env.PORT}`));