const express = require('express');
const router = express.Router();
const items = require("../fakeDB")
const ExpressError = require("../ExpressError")

router.route("")
    .get((req, res, next) => {
        try {
            res.json({items})
        } catch (err) {
            next(err)
        }
    })
    .post((req, res, next) => {
        try {
            const newItem = { name: req.body.name, price: req.body.price}
            items.push(newItem)
            res.json({ item: newItem })
        } catch (err) {
            next(err)
        }
    });

router.route("/:name")
    .get((req, res, next) => {
        try {
            const foundItem = items.find(item => item.name === req.params.name);
            if (foundItem === undefined) {
                throw new ExpressError("Item Not Found", 404)
            }
            return res.json({item: foundItem})
        } catch (err) {
            next(err)
        }

    })
    .patch((req, res, next) => {
        try{
            let foundItem = items.find(item => item.name === req.params.name)
            if (foundItem === undefined) {
                throw new ExpressError("Item Not Found", 404)
            }
            foundItem.name = req.body.name;
            foundItem.price = req.body.price;
            res.json({item: foundItem})
        } catch (err) {
            next(err)
        }
    })
    .delete((req, res, next) => {
        try{
            let foundIdx = items.findIndex(item => item.name === req.params.name);
            if (foundIdx === -1) {
                throw new ExpressError("Item Not Found", 404)
            }
            items.splice(foundIdx, 1);
            return res.json({message: "Deleted"})
        } catch (err) {
            next(err)
        }
    });

module.exports = router
