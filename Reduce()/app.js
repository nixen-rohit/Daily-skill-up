const total = () => {
  const numbers = [1, 2, 3, 4];
  console.log(numbers.reduce((sum, num) => sum + num, 0));
};

total();

const multiply = () => {
  const numbers = [2, 3, 4];
  console.log(numbers.reduce((mul, i) => mul * i, 1));
};
multiply();

const market = () => {
  const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 200 },
  ];
  console.log(products.reduce((sum, i) => sum + i.price, 0));
};
market();

const count = () => {
  const fruits = ["apple", "banana", "apple", "orange", "banana"];
  console.log(fruits.reduce((count, i) =>{

    count[i] =( count[i] || 0) + 1;
    return count;

  },{}))

   
};

count();


const flat =()=>{
  const arr = [[1,2],[3,4],[5,6]];
  console.log(arr.reduce((ft,i)=>ft.concat(i),[]))

  //or flat() funciton 

  //console.log(arr.flat())
}

flat()


const group=()=>{
  const users = [
 {name:"Aman", age:22},
 {name:"Ravi", age:22},
 {name:"Neha", age:25}
];
console.log(users.reduce((acc, user) => {
  (acc[user.age] = acc[user.age] || []).push(user);
  return acc;
}, {}));
}

group()


  
const object =()=>{
  const users = [
 {id:1,name:"Aman"},
 {id:2,name:"Ravi"}
];
console.log(users.reduce((acc,i)=>{

acc[i.id]=i;
return acc;

},{}))
}
object()


const people=()=>{
  const users = [
 {name:"Aman", age:22},
 {name:"Ravi", age:30},
 {name:"Neha", age:22}
];
console.log(users.reduce((count,i)=>{

  count[i.age]=(count[i.age] || 0) + 1;

  return count;

},{}))
}

people()