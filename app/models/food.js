import Database from "../controllers/database.js";

class Food {
  constructor(id, name, category, price, discount, status, img, desc) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.discount = discount;
    this.amount = this.calDiscount(this.discount);
    this.status = status;
    this.img = this.handleImg(img);
    this.desc = this.handleEmptyValue(desc);
  }

  calDiscount = (discount = 0) => {
    discount = discount * 1;
    let amount;
    switch (discount) {
      case 0:
        amount = this.price;
        return this.price;
      case 10:
        amount = this.price * 0.1;
        return amount.toFixed(2);
      case 20:
        amount = this.price * 0.2;
        return amount.toFixed(2);
    }
  };

  handleImg = async (url) => {
    let img = await this.handleError(url);
    return img;
  };

  handleError = (url) => {
    if (url === "" || url === undefined)
      return Promise.resolve(Database.apiDefaultImg);

    return axios({
      url: url,
      method: "GET",
    })
      .then(() => {
        return url;
      })
      .catch(() => {
        return Database.apiDefaultImg;
      });
  };

  handleEmptyValue = (value) => {
    if (value === "" || value === undefined) return "N/A";
  };
}

export default Food;
