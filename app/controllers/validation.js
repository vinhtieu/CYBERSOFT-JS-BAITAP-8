import Form from "./form.js";

class Validator {
  static validateInputs = (obj) => {
    let idValidation = this.isNumberValid(obj.id, "#idFeedback");
    let nameValidation = this.isNameValid(obj.name);
    let categoryValidation = this.isCategoryValid(obj.category);
    let priceValidation = this.isNumberValid(obj.price, "#priceFeedback");
    let discountValidation = this.isDiscountValid(obj.discount);
    let statusValidation = this.isStatusValid(obj.status);

    return (
      idValidation &&
      nameValidation &&
      categoryValidation &&
      priceValidation &&
      discountValidation &&
      statusValidation
    );
  };

  static isNumberValid(arg, alertId) {
    if (arg === undefined || arg === "") {
      Form.alert("show", alertId);
      return false;
    }

    let digitPattern = /^\d+$/;
    if (digitPattern.test(arg * 1)) return true;

    return false;
  }

  static isNameValid = (name) => {
    let alertId = "#nameFeedback";
    if (name === undefined || name === "") {
      Form.alert("show", alertId);
      return false;
    }

    let isValid = true;
    let alphabeticCharsRegex = /^[A-Za-z\s\-éÉ]/;
    let moreThan2CharRegex = /^.{2,}$/;
    let checks = [
      {
        regex: alphabeticCharsRegex,
        message: "Name should be alphabetic characters",
      },
      {
        regex: moreThan2CharRegex,
        message: "Name should be at least 2 characters",
      },
    ];

    for (const check of checks) {
      isValid = check.regex.test(name);
      if (!isValid) {
        Form.alert("show", alertId, check.message);
        return isValid;
      }
    }
    Form.alert("hide", alertId);
    return isValid;
  };

  static isDiscountValid = (discount) => {
    let alertId = "#discountFeedback";
    if (discount === undefined || discount === "") {
      Form.alert("show", alertId);
      return false;
    }

    Form.alert("hide", alertId);
    return true;
  };

  static isStatusValid = (status) => {
    let alertId = "#statusFeedback";

    if (status === undefined || status === "") {
      Form.alert("show", alertId);
      return false;
    }
    Form.alert("hide", alertId);

    return true;
  };

  static isCategoryValid = (category) => {
    let alertId = "#categoryFeedback";
    if (category === undefined || category === "") {
      Form.alert("show", alertId);
      return false;
    }
    Form.alert("hide", alertId);
    return true;
  };

}

export default Validator;
