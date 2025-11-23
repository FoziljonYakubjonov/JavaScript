// let obj ={
//     name :Eshmat,
// age: 40
// }
// let{name , age:yosh}=obj
// console.log(yosh);

// let obj1 = { 
//     name:"Ali"
// }

// let obj2 ={
//     age :40
// }

// let newObj=Object.assign(obj1,obj2)
// console.log(newObj);

// let obj = {
//     id: 1,
//     name: "Eshmat",
//     age: 40,
//     address: "Namangan",
//     status: "talaba"
// }

// for(let key in obj){
//     if(typeof key in obj === "string"){
//         console.log(key,obj[key]);
        
//     }
// }
// let obj = {
//     id: 1,
//     name: "Eshmat",
//     age: 40,
//     address: "Namangan",
//     status: "talaba",
//     salary:100
// }

// let obj2=Object.assign({},obj)
// obj2.salary=200
// console.log(obj, obj2);


// function Person(name,age){
// this.name=name
// this.age=age
// }

// let obj1=new Person("Ali", 20)
// let obj2=new Person("Vali", 30)

// console.log(obj1, obj2);

// let obj = {
//     id: 1,
//     name: "Eshmat",
//     age: 40,
//     address: "Namangan",
//     status: "talaba",
//     [Symbol("salary")]:100
// }

// for (let key in obj){
//     console.log(obj[key]);
    
// }


// let obj = {
//     id: 1,
//     name: "Eshmat",
//     age: 40,
//     address: "Namangan",
//     status: "talaba",
//     newObj:function(){
//         console.log(this.name);
        
//     }
// }

// let newObj=obj
// obj = null
// console.log(newObj);



// let parent = {
//     name: "Eshmat",
//     age: 40,
//     child:{
//     name: "Toshmat",
//     age: 20,
//     }
// }

// let {child:{
//     name:newname,
//     age:newage
// }
// } = parent

// let obj=Object.assign({},parent)
// obj.child.name="Ali"
// console.log(obj);

// let obj2=structuredClone(parent)
// obj2.child.age=10
// console.log(obj2);


// let obj={}

// obj["name"]="Ali"
// obj["age"]=20
// obj["status"]="talaba"
// console.log(obj);

let binary="1001"
let num = parseInt(Number(binary), 2)
console.log(num.toString(2));
