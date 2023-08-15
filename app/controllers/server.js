import { table } from "../../app/controllers";
import { utility } from "../../app/controllers";

class Server {
  static fetchData = (url) => {
    const axios = require("axios");
    utility.showLoading();
    axios
      .get(url)
      .then((response) => {
        // table.renderTable();
        //   utility.hideLoading();
        console.log(response);
      })
      .catch((error) => {
        utility.hideLoading();
      });
  };
}

export default Server;
