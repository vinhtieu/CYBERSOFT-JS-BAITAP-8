class Constant {
  constructor() {
    if (!Constant.instance) {
      Constant.instance = this;
      this.$ = (selector) => document.querySelector(selector);

      //Form
      this.id = this.$("#idField");
      this.name = this.$("#nameField");
      this.category = this.$("#categoryField");
      this.price = this.$("#priceField");
      this.discount = this.$("#discountField");
      this.status = this.$("#statusField");
      this.image = this.$("#imageField");
      this.desc = this.$("#descField");
        this.addBtn = this.$("#addBtn");

      // Table
        this.table = this.$("#tbody")
    }

    return Constant.instance;
  }
}

const constant = new Constant();

export default constant;
