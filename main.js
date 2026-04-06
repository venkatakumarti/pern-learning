console.log("Node is working 🚀");
console.error('this is an error');

const ger=23
const number = 21
const name = 'bobby'
const yesorno = true;
const value = null;
const id='techinoldy &hfkajdu &kjhoadfh'

const arr=new Array(2,23,45,4,4,4,4)
arr[3]=99
arr.push("hkdfhk")
console.log(arr.indexOf(45))
console.log(Array.isArray(21))
const person={
    name:'venkat',
   
    degree:'betech',
    college:'pec',
    address:{
       street:'vemulapalli ',
       village:'dwarapudi'
    }

}
console.log(person.address)
const todo=[{
    id:1,
    task:'meeting ',
    completed:true
},
{
   id:2,
    task:'showering ',
    completed:true 
},
{
    id:4,
    task:'faking ',
    completed:false
}
]
console.log(todo[1].task,todo[1].completed)

console.log(JSON.stringify(todo))
console.log(`length of the todo ${todo.length}`)
for(let i=0;i<4;i++){
    console.log(todo[i])
    todo.forEach(function(t){
        console.log('ginger')
        console.log(t)
    })
}
//for each


for( let t of todo){
    console.log(t)
}
const fruits = ["Banana", "Orange", "Apple", "Mango"];


console.log(`length of fruits ${fruits.length}`)
//map
console.log('mapping function')
const mapped= todo.map(function(t){
    return t.id===2;
});
console.log(mapped);
//filter 
console.log('using filter')
const filtered= todo.filter(function(t){
    return t.completed===true;
});

console.log(filtered)