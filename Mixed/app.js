const totalsalarydev = () => {
  const employees = [
    { name: "Aman", role: "developer", salary: 50000 },
    { name: "Ravi", role: "designer", salary: 40000 },
    { name: "Neha", role: "developer", salary: 60000 },
  ];

  console.log(
    employees
      .filter((item) => item.role === "developer")
      .reduce((sum, i) => sum + i.salary, 0),
  );
};

totalsalarydev();

const age = () => {
  const users = [
    { name: "Aman", age: 22 },
    { name: "Ravi", age: 30 },
    { name: "Neha", age: 27 },
  ];

  console.log(users.filter((item) => item.age > 25).map((item) => item.name));
};

age();

const price = () => {
  const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 200 },
  ];
  console.log(
    products
      .filter((item) => item.price > 100)
      .reduce((sum, i) => sum + i.price, 0),
  );
};
price();

const topper = () => {
  const users = [
    { name: "Aman", scores: [80, 90] },
    { name: "Ravi", scores: [60, 70] },
    { name: "Neha", scores: [95, 85] },
  ];

  console.log(
    users
      .map(item => ({
        name: item.name,
        total: item.scores.reduce((sum, i) => sum + i, 0)
      }))
      .filter(item => item.total > 170),
  );
};
topper();



const output=()=>{
  const orders = [
 {id:1, status:"completed", price:100},
 {id:2, status:"pending", price:50},
 {id:3, status:"completed", price:200}
];
console.log(orders.filter(item=>item.status==="completed").reduce((sum,i)=>sum+i.price,0))
}
output()


const salary_age =()=>{

  const users = [
 {name:"Aman", age:22, salary:50000},
 {name:"Ravi", age:30, salary:60000},
 {name:"Neha", age:27, salary:55000}
];

 const filtered = users.filter(user => user.age > 25);

  const totalSalary = filtered.reduce((sum, user) => sum + user.salary, 0);

  const average = totalSalary / filtered.length;

  console.log(average);
}

salary_age()