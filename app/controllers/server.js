import Table from "../../app/controllers/table.js";
import constant from "../../app/controllers/constant.js";
import Utility from "../../app/controllers/utility.js";
import Form from "./form.js";

class Server {
  static fetchData = (url, searchKey = "All") => {
    Table.hideAlert();
    Table.hideTable();
    Utility.showLoading();
    axios({
      url: url,
      method: "GET",
    })
      .then((response) => {
        let data = response.data;
        let result =
          searchKey === "All"
            ? Table.getAllData(data)
            : Table.getFilteredData(data, searchKey);

        if (result.length >= 1) {
          Table.hideAlert();
          Table.renderTable(result);
          Table.showTable();
        } else {
          Table.hideTable();
          Table.showAlert("NO DATA");
        }
      })
      .catch((error) => {
        console.log("errors: " , error);
      })
      .finally(() => {
        Utility.hideLoading();
      });
  };

  static fetchDateById = (url, id, callback) => {
    axios({
      url: url.concat(`/${id}`),
      method: "GET",
    })
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log("error");
      })
      .finally(() => {
        Utility.hideLoading();
      });
  };

  static createNewData = (url, content) => {
    Form.closeForm();
    Table.hideTable();
    Table.hideAlert();
    Utility.showLoading();
    axios({
      url: url,
      method: "POST",
      data: content,
    })
      .then(() => {
        this.fetchData(url);
      })
      .catch((error) => {
        console.log("error");
      })
      .finally(() => {
        Utility.hideLoading();
      });
  };

  static updateData = (url, id, content) => {
    Form.closeForm();
    Table.hideTable();
    Utility.showLoading();
    axios({
      url: url.concat(`/${id}`),
      method: "PUT",
      data: content,
    })
      .then(() => {
        this.fetchData(url);
      })
      .catch((error) => {
        console.log("error");
      })
      .finally(() => {
        Utility.hideLoading();
      });
  };

  static deleteData = (url, id) => {
    Table.hideTable();
    Utility.showLoading();
    axios({
      url: url.concat(`/${id}`),
      method: "DELETE",
    })
      .then(() => {
        this.fetchData(url);
      })
      .catch((error) => {
        console.log("error");
      })
      .finally(() => {
        Utility.hideLoading();
      });
  };
}

export default Server;
