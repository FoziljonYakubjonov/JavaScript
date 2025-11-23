// THIS

let obj = {
    name: "Ruchka",
    color: "Red",
    price: "5000",
    sum : function () {
        console.log(this.name);
    }

}


let obj2 = obj
obj = null
let obj3 = obj2
obj2 = null
let newObj = obj3
obj3 = null

newObj.sum()