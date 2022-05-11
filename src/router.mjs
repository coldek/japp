import express from "express";
import Client from 'shopify-buy';
import fetch from 'node-fetch';

// Instanstiate shopify client
const shopifyClient = Client.buildClient({
    domain: "eldrippy.myshopify.com",
    storefrontAccessToken: process.env.SHOPIFY_CLIENT
}, fetch);

// Instantiate the router
const router = express.Router();

/**
 * Route for index page
 * @name get/index
 * @function
 * @param {callback} middleware - Express middleware
 */
router.get('/', async (req, res) => {
    console.log(req);
    res.render("index");
})

export default router;