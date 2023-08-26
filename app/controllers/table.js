import constant from "../../app/controllers/constant.js";
import Database from "./database.js";

class Table {
  static createHtml = (obj) => `
  <tr>
  <td>${obj.id}</td>
  <td>
    <figure class="image-container">
    <img class="image" src=${obj.img} onerror=this.src='${Database.apiDefaultImg}' alt="" /></figure>
  </td>
  <td>${obj.name}</td>
  <td>${obj.category}</td>
  <td>${obj.price}</td>
  <td>${obj.discount}</td>
  <td>${obj.amount}</td>
  <td>${obj.status}</td>
  <td>
    <div id="deleteBtn" onclick=handleData('delete',${obj.id})>
       <i class="fa-solid fa-circle-minus"></i>
     </div>
  </td>
  <td>
    <div id="editBtn" onclick=handleData('edit',${obj.id})>
        <i class="fa-solid fa-pen"></i>
    </div>
  </td>
</tr>
  `;
  static showAlert = (string) => {
    constant.alert.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 10px
    `;
    constant.alertText.innerText = string;
  };

  static hideAlert = () => {
    constant.alert.style.display = "none";
  };

  static getAllData = (array) => {
    const data = array.map((obj) => this.createHtml(obj));
    return data;
  };

  static getFilteredData = (array, searchKey) => {
    const data = array.map((obj) => obj.category === searchKey ? this.createHtml(obj) : "");
    return data;
  };

  static renderTable = (array) => {
    constant.tableBody.innerHTML = array.join(" ");
  };

  static showTable = () => constant.table.classList.add("show");
  static hideTable = () => constant.table.classList.remove("show");
}

export default Table;
