/** @format */

let groceryName = document.getElementById("itemName");
let groceryValue = document.getElementById("itemPrice");
const lib = new Allproduct();
let grocerylist = document.getElementById("grocery-list");
let editid;
let submitBtn = document.getElementById("addBtn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (groceryName.value == "") {
    alert("your item name is empty");

    return;
  }

  if (groceryValue.value == "") {
    alert("your item value is empty");

    return;
  }

  if (submitBtn.textContent == "edit") {
    lib.editing(editid, groceryName.value, groceryValue.value);
    addListProduct();
    submitBtn.textContent = "submit";
    editid;
    alert("your value is edited");
    groceryName.value = "";
    groceryValue.value = "";
    return;
  }
  if (groceryName && groceryValue) {
    let item = new product(groceryName.value, groceryValue.value);

    lib.addProducts(item);

    addListProduct();

    groceryName.value = "";
    groceryValue.value = "";
  }
});

function removeProduct(index) {
  lib.removeItem(index);
  addListProduct();
}

function editProduct(index, name, price) {
  submitBtn.textContent = "edit";
  groceryName.value = name;
  groceryValue.value = price;
  editid = index;
}

function addListProduct() {
  grocerylist.innerHTML = "";
  lib.getProduct().forEach((produ, index) => {
    grocerylist.innerHTML += ` 
  <li class="grocery-item">
    <div class="item-info">
         <h3>Name :</h3>${produ.name} 
         <h3>Quantity :</h3> ${produ.quantity}
    </div>
    <div class="item-actions">
      <button onclick="editProduct(${index},'${produ.name}',${produ.quantity})">Edit</button>
      <button onclick="removeProduct(${index})">Remove</button>
    </div>
  </li>
`;
  });
}
