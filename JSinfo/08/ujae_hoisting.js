let user1 = {
  name: "adas",

  get age() {
    return this._age;
  },

  set age(value) {
    this._age = value;
  },

  f: (function (that) {
    console.log(that);
    let message = "Hello";
    that.abc = 1;
  })(this),

  age: 24,
};

user1.age = 24;

console.log(user1.age);

console.log(user1.age, user1._age);
console.log(Object.getOwnPropertyNames(user1));
console.log(Object.keys(user1));
console.log(user1);