const express = require("express");
const app = express();
const items = require("./routes/items")
const ExpressError = require("./ExpressError")

app.use(express.json())
app.use("/items", items);

app.use((req, res, next) => {
    return new ExpressError("Not Found", 404);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({
        error: err.message,
    });
});
