const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const cors = require('cors');
require('dotenv').config();
// const formData = require('form-data');
// const Mailgun = require('mailgun.js');
// const mailgun = new Mailgun(formData);
// const mg = mailgun.client({
//     username: 'api',
//     key: process.env.MAIL_GUN_API_KEY,
// });


const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.USER_BD}:${process.env.PASS_BD}@cluster0.j0ovfoc.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        // Send a ping to confirm a successful connection

        const userCollection = client.db("portfolio").collection("users");
        const offerCollection = client.db("portfolio").collection("offers");



        // app.post('/users', async (req, res) => {
        //     const user = req.body;
        //     console.log(user);
        //     const result = await userCollection.insertOne(user);
        //     res.send(result);
        //     mg.messages
        //         .create( process.env.MAIL_GUN_DOMAIN, {
        //             from: "Mailgun Sandbox <postmaster@sandboxaf2fe97ea6084cedb983969853a87ecb.mailgun.org>",
        //             to: ["jalil.mariya.31@gmail.com"],
        //             subject: "Hello",
        //             text: "Testing some Mailgun awesomness!",
        //         })
        //         .then(msg => console.log(msg)) // logs response data
        //         .catch(err => console.log(err)); // logs any error`;
        // });
        app.get('/offers', async (req, res) => {
            const result = await serviceCollection.find().toArray();
            res.send(result);
          });

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);
app.get('/', (req, res) => {
    res.send('boss is  running')
})

app.listen(port, () => {
    console.log(`boss is sitting on port ${port}`);
})
 
 

 

 
