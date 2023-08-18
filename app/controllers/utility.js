import constant from "../../app/controllers/constant.js";

class Utility {
  static showLoading = () => {
    constant.loading.classList.add("show");
  };
  static hideLoading = () => {
    constant.loading.classList.remove("show");
  };
}

export default Utility;
