// import * as module from "../../app/controllers/index.js";
import constant from "../../app/controllers/constant.js";
import Database from "../../app/controllers/database.js";
import Form from "../../app/controllers/form.js";
import Server from "../../app/controllers/server.js";
import Food from "../../app/models/food.js";
import Validator from "../../app/controllers/validation.js";

let currentId;
document.addEventListener("DOMContentLoaded", init);
constant.openBtn.addEventListener("click", () => {
  Form.preventUpdate();
  Form.resetForm();
});

constant.addBtn.addEventListener("click", () => {
  handleData("create");
});

constant.updateBtn.addEventListener("click", () => {
  handleData("update");
});

const handleData = (operation, id = currentId) => {
  if (operation === "delete") {
    Server.deleteData(Database.apiFood, id);
  } else if (operation === "edit") {
    Server.fetchDateById(Database.apiFood, id, Form.setInputs);
    currentId = id
    Form.preventAdd();
    Form.openForm();
  } else {
    let formData = Form.getInputs();
    let areValid = Validator.validateInputs(formData);

    if (areValid) {
      let { foodId, name, category, price, discount, status, img, desc } =
        formData;
      let food = new Food(
        foodId,
        name,
        category,
        price,
        discount,
        status,
        img,
        desc
      );
      switch (operation) {
        case "create":
          Server.createNewData(Database.apiFood, food);
          break;
        case "update":
          Server.updateData(Database.apiFood, id, food);
          break;
      }
    }
  }
};

function init() {
  window.handleData = handleData;
  constant.id.focus();
  Server.fetchData(Database.apiFood);
}
