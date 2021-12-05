const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // category. FIND ALL
  // be sure to include its associated Products
  try {
    const catData = await Category.findAll({
      include: [{ model: Product }]
    });

    if (!catData) {
      res.status(404).json({ message: 'No categories found with this id!' });
      return;
    }

    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // category FIND ONE
  // be sure to include its associated Products
  try {
    const singleCatData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!singleCatData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(singleCatData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  // category. CREATE
  try {
    const newCatData = await Category.create(req.body);
    res.status(200).json(newCatData);
  } catch (err) {
    res.status(400).json(err);
  }

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  // category. UPDATE
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  // category. DESTROY
  try {
    const delCatData = await Location.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!delCatData) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }

    res.status(200).json(delCatData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;