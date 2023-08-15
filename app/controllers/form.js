import Food from "../../app/models/food.js";
import constant from "../../app/controllers/constant.js";

class Form {
  constructor() {
    if (!Form.instance) {
      Form.instance = this;
      this.$ = (selector) => document.querySelector(selector);
      this.getInputs = () => [
        constant.id.value,
        constant.name.value,
        constant.category.value,
        constant.price.value,
        constant.discount.value,
        constant.status.value,
        constant.desc.value,
      ];
    }
    return Form.instance;
  }
}
const Form = new Form();
export default Form;
