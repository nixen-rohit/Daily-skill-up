const findgreater = () => {
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers.filter((item) => item > 3));
};
findgreater();

const findage = () => {
  const users = [
    { name: "Aman", age: 22 },
    { name: "Ravi", age: 30 },
    { name: "Neha", age: 27 },
  ];

  console.log(users.filter((item) => item.age > 25));
};
findage();

const stock = () => {
  const products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Mouse", price: 50, inStock: true },
    { name: "Keyboard", price: 200, inStock: false },
  ];

  console.log(
    products.filter((item) => item.price > 100 && item.inStock === true),
  );
};

stock();

const removeVal = () => {
  const fruits = ["apple", "banana", "mango", "banana"];
  console.log(fruits.filter((item) => item !== "banana"));
};

removeVal();

const aboveScore = () => {
  const users = [
    { name: "Aman", score: 85 },
    { name: "Ravi", score: 60 },
    { name: "Neha", score: 95 },
  ];

  console.log(users.filter((item) => item.score > 80));
};
aboveScore();

const order = () => {
  const orders = [
    { id: 1, status: "completed" },
    { id: 2, status: "pending" },
    { id: 3, status: "completed" },
  ];

  console.log(orders.filter((item) => item.status == "completed"));
};

order();

const falsi = () => {
  const values = [0, 1, false, 2, "", 3];
  console.log(values.filter(Boolean));
  // Removes falsy values.
};
falsi();


 