import * as module from "../../app/controllers/index.js";
import Food from "../../app/models/food.js";

let foodList = [];

document.addEventListener("DOMContentLoaded", () => {
  module.server.fetchData(database.URL);
  console.log("hello");

  // table.renderTable(foodList)
});
module.constant.addBtn.addEventListener("click", () => {
  //   let [id, name, category, price, discount, status, desc] = module.form.getInput();
  //     let food = new Food(id, name, category, price, discount, status, desc);
  //     module.table.renderTable(food)
  console.log("hello");
});
