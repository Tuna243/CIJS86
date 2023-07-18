/* 
scope
var: function, global scope
hoisting : var, function
let vs const :
*/
// console.log("HelloWorld!")
// const num = 2;
// function multiplyBy2(n)
// {
//     return n * 2;
// }
// console.log(multiplyBy2);

// const num1 = [1, 2, 3, 4, 5];
// const num2 = [...num1];
// const obj1 = {
//     name:"John", 
//     age: "30",
//     address: "234 Ender Street"
// }
// const obj2 = {...obj1};
// console.log(obj2);
// console.log(num2);
const protocol = 'https'
const baseURL = 'google.com'
const type = 'api'
const app = 'youtube'
const version = 'v3'
const get = 'info'
const path = `${protocol}://${baseURL}/${type}/${app}/${version}/${get}`;
const info = {
    name: 'MindX',
    year: 2010,
    description: function() {
        return 'Establish' + this.year
    },
    //amount:500
    list:[{
    }],
}

const studenA = {
    name:'A',
    class:'1',
    birth:2000,
}
// Destructuring

const {name} = info;
console.log(name);
// const info2 = {...info,amount:500}
// const {amount,...rest} = info;
console.log(rest);
console.log(path);

