const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const { ObjectId } = require("mongodb");
const app = express();
const port = process.env.port || 5000;
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@crud-mongodb.bkqhhcm.mongodb.net/?retryWrites=true&w=majority&appName=crud-mongodb`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    const database = client.db("hillTour");
    const servicesCollection = database.collection("services");
    const orderCollection = database.collection("order");

    // Get Method All Services
    app.get("/services", async (req, res) => {
      const cursor = servicesCollection.find({});
      const result = await cursor.toArray();
      res.send(result);
    });

    // Get Method Single Service
    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await servicesCollection.findOne(query);
      res.send(result);
    });

    // Post Method (Services)
    app.post("/services", async (req, res) => {
      const addService = req.body;
      const result = await servicesCollection.insertOne(addService);
      res.json(result);
    });

    // Put Method (Service)
    app.put("/services/:id", async (req, res) => {
      const id = req.params.id;
      const updateServiceData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          title: updateServiceData.title,
          image: updateServiceData.image,
          price: updateServiceData.price,
          description: updateServiceData.description,
        },
      };

      const result = await servicesCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.json(result);
    });

    // Delete Method (Service)
    app.delete("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await servicesCollection.deleteOne(query);
      res.json(result);
    });

    // Get Method All Orders
    app.get("/order", async (req, res) => {
      const cursor = orderCollection.find({});
      const result = await cursor.toArray();
      res.send(result);
    });

    // Get Method Single Order
    app.get("/order/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await orderCollection.findOne(query);
      res.send(result);
    });

    // Post Method (Order)
    app.post("/order", async (req, res) => {
      const addOrder = req.body;
      const result = await orderCollection.insertOne(addOrder);
      res.json(result);
    });

    // Delete Method (Order)
    app.delete("/order/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await orderCollection.deleteOne(query);
      res.json(result);
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send(
    "Hello, I'm a node server. Now I'm working... please don't disturbe me."
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
