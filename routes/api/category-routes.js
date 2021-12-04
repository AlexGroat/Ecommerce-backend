const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // category. FIND ALL
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // category FIND ONE
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  // category. CREATE
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  // category. UPDATE
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  // category. DESTROY
});

module.exports = router;