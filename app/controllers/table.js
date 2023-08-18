import constant from "../../app/controllers/constant.js";

class Table {
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

  static renderTable = (array) => {
    let data = [];
    data = array.map(
      (obj) => `
        <tr>
            <td>${obj.id}</td>
            <td>
              <figure class="image-container"><img class="image" src="${obj.img}" alt="" /></figure>
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
    `
    );

    constant.tableBody.innerHTML = data.join(" ");
  };
  static showTable = () => constant.table.classList.add("show");
  static hideTable = () => constant.table.classList.remove("show");
}

export default Table;
