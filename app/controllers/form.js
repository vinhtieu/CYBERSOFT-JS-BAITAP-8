import constant from "../../app/controllers/constant.js";
import Database from "./database.js";
class Form {
  static getInputs = () => ({
    id: constant.id.value,
    name: constant.name.value,
    category: constant.category.value,
    price: constant.price.value,
    discount: constant.discount.value,
    status: constant.status.value,
    desc: constant.desc.value,
    img: constant.img.value,
  });

  static setInputs = ({
    id,
    name,
    category,
    price,
    discount,
    status,
    img,
    desc,
  }) => {
    constant.id.value = id;
    constant.name.value = name;
    constant.category.value = category;
    constant.price.value = price;
    constant.discount.value = discount;
    constant.status.value = status;
    constant.img.value =
      img === Database.apiDefaultImg || img === undefined || img === ""
        ? ""
        : img;
    constant.desc.value = desc === "N/A" ? "" : desc;
  };

  static disableButton = (button) => {
    button.disabled = true;
  };

  static enableButton = (button) => {
    button.disabled = false;
  };

  static preventAdd = () => {
    this.disableButton(constant.addBtn);
    this.enableButton(constant.updateBtn);
  };

  static preventUpdate = () => {
    this.disableButton(constant.updateBtn);
    this.enableButton(constant.addBtn);
  };

  static closeForm = () => {
    $("#exampleModal").modal("hide");
  };

  static openForm = () => {
    $("#exampleModal").modal("show");
  };

  static resetForm = () => {
    constant.form.reset();
    this.hideAllAlerts();
  };

  static alert = (
    operation,
    alertId,
    errorMessage = "This field is required"
  ) => {
    let alert = document.querySelector(alertId);
    switch (operation) {
      case "show":
        alert.classList.add("show");
        alert.innerText = errorMessage;
        break;
      case "hide":
        alert.classList.remove("show");
        break;
    }
  };

  static hideAllAlerts = () => {
    constant.alertId.classList.remove("show");
    constant.alertName.classList.remove("show");
    constant.alertCategory.classList.remove("show");
    constant.alertPrice.classList.remove("show");
    constant.alertDiscount.classList.remove("show");
    constant.alertStatus.classList.remove("show");
  };

  //

  static showLoadingBtn = () => {
    let button = constant.updateBtn;
    this.disableButton(button);
    button.innerHTML = `
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">Loading...</span>`;

    // const content = element.innerHTML;
  };

  static hideLoadingBtn = () => {
    let button = constant.updateBtn;
    this.enableButton(button);
    button.innerHTML = `update`;
  };
}
export default Form;
