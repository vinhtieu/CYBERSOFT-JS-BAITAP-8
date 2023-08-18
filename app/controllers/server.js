import Table from "../../app/controllers/table.js";
import Utility from "../../app/controllers/utility.js";
import Form from "./form.js";

class Server {
  static fetchData = (url) => {
    Table.hideAlert();
    Table.hideTable();
    Utility.showLoading();
    axios({
      url: url,
      method: "GET",
    })
      .then((response) => {
        let data = response.data;
        if (data.length >= 1) {
          Table.hideAlert();
          Table.renderTable(data);
          Table.showTable();
        } else {
          Table.showTable();
          Table.showAlert("NO DATA");
        }
      })
      .catch((error) => {
        console.log("errors");
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
