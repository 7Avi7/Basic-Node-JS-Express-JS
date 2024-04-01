// res.json([{name:'Avi'}, {id:'3'}])
// http://192.168.0.107:5000/api/v1/query?name=avi&id=3
// http://192.168.0.107:5000/api/v1/query?search=a&limit=2
// http://localhost:5000/api/v1/query?search=a&limit=1
const express = require("express");

const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1> <a href = "/api/products">Products</a>');
});

//Multiple Products specific Key with Value

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

// Single Product Details

app.get("/api/products/:productID", (req, res) => {
  console.log(req);
  console.log(req.params);

  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  if (!singleProduct) {
    console.log("Console: Product Does Not Exists");
    return res.status(404).send("Product Does Not Exists");
  }

  console.log(singleProduct);

  return res.json(singleProduct);
});

// Params Extra Info

app.get("/api/products/:productID/reviews/:review", (req, res) => {
  console.log(req);
  console.log(req.params);
  res.send("hello world");
});

// Query param 1

// app.get("/api/v1/query", (req, res) => {
//   console.log(req.query);
//   res.send("hello world");
// });

// Query param 2

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);

  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts < 1) {
    res.status(200).send("No Products Matched your search");
    // return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(sortedProducts);
  // res.send("hello world");
});

// 404
app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
