const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require("dotenv").config({ path: require('find-config')('.env') })
const stripeKey = process.env.STRIPE_SECRET_KEY
const stripe = require('stripe')(stripeKey)
const nanoid = require('nanoid')


// Allow any method from any host and log requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
})

app.get('/', (req, res) => {
res.send("hello");
});

/*
 *
 * Starter methods to create products and prices 
 * 
 */ 

//create some test products and prices
const createProduct = async () => {
    const product = await stripe.products.create({
        name: 'Tarot reading 3',
        description: 'general love reading'
    });

    const product1 = await stripe.products.create({
        name: 'Solar Return reading',
        description: 'a general solar return reading'
    });

    console.log(product.id, product1.id);
    return product.id;
}

//createProduct();

const createPrice = async () => {
    const price = await stripe.prices.create({
        unit_amount: 4400,
        currency: 'usd',
        product: 'prod_Ke2utMOnQAHyXc'
    });

    const price1 = await stripe.prices.create({
        unit_amount: 9900,
        currency: 'usd',
        product: 'prod_Ke2u1DgySLO3sr'
    });

    console.log(price.id, price1.id);

}

//createPrice();

// update a product
const updateProduct = async () => {
    const product = await stripe.products.update(
        'prod_Ke2utMOnQAHyXc',
        {images: ['assets/images/SantaMuerte.jpg']}
    )

    const product2 = await stripe.products.update(
        'prod_Ke2u1DgySLO3sr',
        {images: ['assets/images/SolarReturn.jpg']}
    )
}

//updateProduct();

/*
 *
 * Form submission
 * 
 */ 

app.use(bodyParser.json())


/*
 *
 * Methods for stripe integration 
 * 
 */

//Get a list of all products, with a limit of 5
app.route('/products').get(async (req, res) => {
    const products = await stripe.products.list({
        limit: 5,
    });
    res.send(products);
});

//Get the details of a product by id and create a JSONObject to map to Product class
app.route('/product-details/:id').get(async (req, res) => {
    const product = await stripe.products.retrieve(
        req.params.id
    );

    let price;
    //get the price of a product by id
    const prices = await stripe.prices.list({
        limit: 5
    });
    console.log(prices);
    for(let i = 0; i < prices.data.length; i++) {
        if(prices.data[i].product === req.params.id) {
            price = prices.data[i].unit_amount;
        }
    }

    const jsonProduct = {};
    jsonProduct.id =product.id;
    jsonProduct.name = product.name;
    jsonProduct.description = product.description;
    jsonProduct.price = price
    jsonProduct.imageUrl = product.images[0];
    res.send(jsonProduct);
})

//Get a product by id
app.route('/product/:id').get(async (req, res) => {
    const product = await stripe.products.retrieve(
        req.params.id
    );
    res.send(product);
})


// Get a list of product ids, limit to 5
app.route('/productIds').get(async (req, res) => {
    const products = await stripe.products.list({
        limit: 5,
    });
    //console.log("products ", products);
    //console.log("product id ", products.data[0].id);
    //console.log("product list length ", products.data.length);
    const productIdList = new Array();
    for(let i = 0; i < products.data.length; i++) {
        productIdList.push(products.data[i].id);
    }
   // console.log("array with product ids ", productIdList);
    res.send(productIdList);
}); 

// Get a list of prices and limit to 5

//Create a custm JSONObject of all products that maps to the Product class
app.route('/productList').get(async (req, res) => {
    const products = await stripe.products.list({
        limit: 5,
    });

    const prices = await stripe.prices.list({
        limit: 5,
    });

    const jsonProducts = {products: []};
    for(let i = 0; i < products.data.length; i++) {
        jsonProducts.products.push({
            id: products.data[i].id,
            name: products.data[i].name,
            description: products.data[i].description,
            price: prices.data[i].unit_amount,
            imageUrl: products.data[i].images[0]
        });
    }
    res.send(jsonProducts);

});

/*
 * Creating a PaymentIntent
 */
app.post("/create-payment-intent", async(req, res) => {

    const paymentIntent = await stripe.paymentIntents.create({
        amount: parseInt(req.body.amount),
        currency: "usd",
        payment_method_types: ["card"],
        receipt_email: req.body.receiptEmail
    },
    function (err, paymentIntent) {
        if (err) {
          res.status(500).json(err.message);
        } else {
          res.status(201).json(paymentIntent);
        }
      });

    /*const clientSecret = JSON.stringify(paymentIntent.client_secret);
    console.log("client-secret ", clientSecret);

    res.send({
        clientSecret,
    });*/
});

//create a random order number
app.get("/orderId", (req, res) => {
    nanoid.customAlphabet('1234567890abcdefghijklmnopqrstuz', 6);
    res.send({
        id: nanoid.nanoid()
    });
})



app.listen(process.env.PORT || 8000, () => {
console.log('Server started')
})
