class Food {
  constructor(id, name, category, price, discount, status, desc) {
    (this.id = id),
      (this.name = name),
      (this.category = category),
      (this.price = price),
      (this.discount = discount),
      (this.amount = this.calDiscount(this.discount)),
      (this.status = status),
      (this.desc = desc);
  }

  calDiscount = (discount = 0) => {
    discount = discount * 1;
    switch (discount) {
      case 0:
        return this.price;
      case 10:
        return this.price * 0.1;
      case 20:
        return this.price * 0.2;
    }
  };
}

export default Food;
