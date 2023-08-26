class Constant {
  constructor() {
    if (!Constant.instance) {
      Constant.instance = this;
      this.$ = (selector) => document.querySelector(selector);

      //Form
      this.form = this.$(".modal-body form");
      this.id = this.$("#idField");
      this.name = this.$("#nameField");
      this.category = this.$("#categoryField");
      this.price = this.$("#priceField");
      this.discount = this.$("#discountField");
      this.status = this.$("#statusField");
      this.img = this.$("#imgField");
      this.desc = this.$("#descField");
      this.addBtn = this.$("#addBtn");
      this.updateBtn = this.$("#updateBtn");
      this.closeBtn = this.$(".btn-close");
      this.openBtn = this.$("#openBtn");

      // Form Alert
      this.alertId = this.$("#idFeedback");
      this.alertName = this.$("#nameFeedback");
      this.alertCategory = this.$("#categoryFeedback");
      this.alertPrice = this.$("#priceFeedback");
      this.alertDiscount = this.$("#discountFeedback");
      this.alertStatus = this.$("#statusFeedback");

      //Table
      this.table = this.$(".food-table");
      this.tableBody = this.$("#tbodyFood");

      //Table Alert
      this.alert = this.$(".alert-table");
      this.alertText = this.$(".alert-table .text");

      //Table Search
      this.searchBar = this.$("#search-table")

      //Loading
      this.loading = this.$("#loadingAnimation");

    }

    return Constant.instance;
  }
}

const constant = new Constant();

export default constant;
