const express = require("express")
const cors = require("cors")

const port = 8000;
const app = express();


app.use(cors());

app.get("/", (request, response) => {
    const { id } = request.query
    console.log("hello", id);
    response.json({ status: "true", result: [{ id: 1, name: "Calculator" }] });
});

app.get("/add", (request, response) => {
    const { a, b } = request.query
    let result = Number(a) + Number(b);
    response.json({ value: result });
});
app.get("/minus", (request, response) => {
    const { a, b } = request.query
    let resultMinus = Number(a) - Number(b);
    response.json({ value: resultMinus });
});

app.get("/multiply", (request, response) => {
    const { a, b } = request.query
    let resultMultiply = Number(a) * Number(b);
    response.json({ value: resultMultiply })
})
app.get("/divide", (request, response) => {
    const { a, b } = request.query
    let resultDivide = Number(a) / Number(b);
    response.json({ value: resultDivide })
})

app.get("/api", (request, response) => {
    const { id } = request.query;
    console.log("api is running");
    response.json({ value: true });
})

app.listen(port, () => {
    `Server is running at localhost:${port}`;
})
