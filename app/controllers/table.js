import { constant } from "../../app/controllers/index.js";

class Table {
  static renderTable = (array) => {
    let data = [];
    data = array.map(
      (obj) => `
        <tr>
            <td>${obj.id}</td>
            <td>${obj.name}</td>
            <td>${obj.catagory}</td>
            <td>${obj.price}</td>
            <td>${obj.discount}</td>
            <td>${obj.amount}</td>
            <td>${obj.status}</td>
        </tr>
    `
    );

    constant.table.innerHTML = data.join();
  };
}

const table = new Table();
export default table;
