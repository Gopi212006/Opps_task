/** @format */

class product {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }

  getitemName() {
    return this.name;
  }

  getitemQuantity() {
    return this.quantity;
  }

  isRead() {
    return this.read;
  }
}

class Allproduct {
  constructor() {
    this.allItems = [];
  }

  addProducts(product) {
    return this.allItems.push(product);
  }

  getProduct() {
    return this.allItems;
  }

  itemCount() {
    return this.allItems.length;
  }

  editing(index, names, prices) {
    this.allItems[index].name = names;
    this.allItems[index].quantity = prices;
  }

  removeItem(index) {
    if (index >= 0 && index < this.allItems.length) {
      this.allItems.splice(index, 1);
    }
  }
}
