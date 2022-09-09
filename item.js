/** Item in a shopping cart. */
const items = require("./fakeDb")

// items is an array with array functions available in JS

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;

    // keep track of all items
    items.push(this);
  }

  static get(){
    return items
  }

  // Find & return item with matching name.
  static find(name) {
    const item = items.find(element => element.name === name);
    if(item === undefined){
      throw { message: "Not Found", status: 404 }
    }
    return item
  }

  // Update found item with matching name to data. 
  static update(name, data) {
    let item = Item.find(name);
    if (item === undefined) {
      throw {message: "Not Found", status: 404}
    }
    item.name = data.name;
    item.price = data.price;

    return item;
  }

  // Remove item with matching id.
  static remove(name) {
    let itemIndex = items.findIndex(elt => elt.name === name);
    if (itemIndex === -1) {
      throw {message: "Not Found", status: 404}
    }
    items.splice(itemIndex, 1);
  }

}

module.exports = Item;
