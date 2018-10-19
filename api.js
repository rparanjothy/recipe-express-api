const express = require("express");
const recipe = require("./recipe");
const m = require("mongoose");
router = express.Router();

router.get("/", function(req, res) {
  res.json({ message: "api home" });
});

router.get("/price", function(req, res) {
  res.json({ message: "Price from api" });
});

router.get("/recipes", function(req, res) {
  recipe.find().then(doc => {
    res.json({ recipes: doc });
  });
});

router.get("/recipes/:name", function(req, res) {
  recipe
    .find({ name: req.params.name })
    .then(doc => {
      console.log(doc.length);
      if (!doc.length) {
        res.status(404).json({ msg: `${req.params.name} - not found` });
      } else {
        res.json({ doc });
      }
    })
    .catch(e => res.json(e));
});

router.post("/recipes", function(req, res) {
  const x = new recipe({
    name: req.body.name,
    ingredients: req.body.ingredients
  });
  x.save().then(x => res.json({ msg: "OK", response: x }));
});

router.patch("/recipes/:id", function(req, res) {
  //find
  //update
  const id = req.params.id;
  recipe.findById(id).then(doc => {
    if (doc) {
      doc
        .updateOne({ name: req.body.name, ingredients: req.body.ingredients })
        .then(doc => {
          res.json({ msg: "updated", id });
        })
        .catch(e => {
          res.json(e);
        });
    } else {
      res.status(404).json({ msg: `${id} - Not Found` });
    }
  });
});

router.delete("/recipes/:id", function(req, res) {
  //find
  //delete
  const id = req.params.id;
  recipe.findById(id).then(doc => {
    if (doc) {
      doc
        .remove()
        .then(doc => {
          res.json({ msg: "deleted", id });
        })
        .catch(e => {
          res.json(e);
        });
    } else {
      res.status(404).json({ msg: `${id} - Not Found` });
    }
  });
});

module.exports = router;
