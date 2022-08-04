const express = require("express");

const app = express();
const port = 3001;

const redis = require("redis");
const client = redis.createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

client.connect();

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const greet = async (req, res) => {
  if (client.get("cacheKey")) {
    const result = await client.get("cacheKey");
    res.send(`Hello, I just waited ${JSON.parse(result)} ms`);
  } else {
    const between1and3seconds =
      1000 + Math.floor(Math.random() * Math.floor(2000));
    wait(between1and3seconds).then(() => {
      client.set("cacheKey", between1and3seconds, { EX: 7 });
      res.send(`Hello, I just waited ${between1and3seconds} ms`);
    });
  }
};

app.get("/", greet);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
