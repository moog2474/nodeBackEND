const express = require("express")
const cors = require("cors")
const json = require("body-parser")

const port = 8001;
const app = express();

let products = [
    { id: 1, productName: "Iphone" },
    { id: 2, productName: "IMac" },
    { id: 3, productName: "Macbook" },
];

app.use(cors());
app.use(json());


app.get("/", (request, response) => {
    response.json({ message: "Welcome to my API" });
});

app.get("/products", (req, res) => {
    if (!products) res.json({ status: false, message: "not found" });

    if (products.length == 0) res.json({ status: true, message: "empty" });

    res.json({ status: true, result: products });
});

app.get("/product", (req, res) => {
    const { id } = req.query;
    if (!id) res.json({ status: false, message: "param id not found" });

    const newArr = products.filter((e) => e.id);
    if (newArr.length == 0) {
        res.json({ status: false, message: "product id oldsongu" });
    }
    res.json({ status: true, result: newArr[0] });
});

app.post("/product", (req, res) => {
    const { productName } = req.body;
    console.log(req.body);
    let id = products.length + 1;

    products.push({ id, productName });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

