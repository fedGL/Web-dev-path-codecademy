const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers () { return this._courses.appetizers},
  get mains () {return this._courses.mains},
  get desserts () {return this._courses.desserts},
  get courses () {return {
    appetizers: this.appetizers,
    mains: this.mains,
    desserts: this.desserts
  }},
  
  set appetizers(newAppetizer){
    this._courses.appetizers.push(newAppetizer);
  },
  set mains(newMain){
    this._courses.appetizers.push(newMain);
  },
  set desserts(newDessert){
    this._courses.appetizers.push(newDessert);
  },

  addDishToCourse(courseName,dishName,dishPrice){
    const dish = {name: dishName, price: dishPrice};
    this._courses[courseName.toLowerCase()].push(dish);
  },
  getRandomDishFromCourse (courseName){
    const dishes = this._courses[courseName.toLowerCase()];
    const randomIdx = Math.floor(Math.random() * dishes.length);
    return dishes[randomIdx];
  },
  generateRandomMeal (){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    let totalPrice = appetizer.price + main.price + dessert.price;
    totalPrice = totalPrice.toFixed(2);
    return `Appetizer: ${appetizer.name}\nMain: ${main.name}\nDessert: ${dessert.name}\nTotal price: ${totalPrice}`;
  }
}

menu.addDishToCourse('Appetizers','Salad',7.95);
menu.addDishToCourse('Appetizers','Cheesesticks',11.95);
menu.addDishToCourse('Appetizers','Onion Rings',9.95);
menu.addDishToCourse('Mains','Cheeseburger',12.95);
menu.addDishToCourse('Mains','Pizza',14.95);
menu.addDishToCourse('Mains','Ribeye',19.99);
menu.addDishToCourse('desserts','Fruit bowl',4.95);
menu.addDishToCourse('desserts','Ice cream',5.95);
menu.addDishToCourse('desserts','Chocolate cake',8.95);
const meal = menu.generateRandomMeal();
console.log(meal);

