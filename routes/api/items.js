const express = require('express')
const router = express.Router()

// Item Model
const Items = require('../../models/Item')

// @route GET api/items
// @desc GET All Items
// @access Public
router.get('/', (req, res) => {
  Items.find()
    .sort({
      date: -1
    })
    .then(items => res.json(items))
})

// @route POST api/items
// @desc Post All Items
// @access Public
router.post('/', (req, res) => {
  const newItem = new Items({
    name: req.body.name
  })
  newItem.save().then(item => res.json(item))
})

// @route DELETE api/items
// @desc Delete a Item
// @access Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id).then(item =>
    item.remove().then(() => res.json({
      success: true
    })))
    .catch(() => res.status(404).json({
      success: false
    }))
})

module.exports = router
