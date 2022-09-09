const Item = require('./item');
const express = require('express');

const router = express.Router();



//GET returns list of items 
router.get('', (req, res, next) => {
  try {
    return res.json({ items: Item.get() });
  } catch(err){
    return next(err)
  }
});

//POST adds items to the list
router.post('', (req, res, next) => {
  try {
    let item = new Item(req.body.name, req.body.price);
    return res.json({item: item});
  } catch (err) {
    return next(err)
  }
});

//GET /[name] shows single item name and price 
router.get('/:name', (req, res, next) => {
  try {
    let item = Item.find(req.params.name);
    return res.json({item: item});
  } catch(err){
    return next(err)
  }
});

//PATCH /[name] update name and/or price of item
router.patch('/:name', (req, res, next) => {
  try {
    let item= Item.update(req.params.name, req.body);
    return res.json({ item: item });
  } catch (err) {
    return next(err)
  }
});

//DELETE /[name] remove item 
router.delete('/:name', (req, res, next) => {
  try {
    Item.remove(req.params.name);
    return res.json({message:'Deleted'});
  } catch (err) {
    return next(err)
  }
});



module.exports = router;
