let array=[
{id:1,name:"john",age:"18",profession:"developer"},
{id:2, name:"jack",age:"20", profession:"developer"},
{id:3, name:"karen", age:"19",profession:"admin"}
]

let index
array.forEach(function (d){
    index = array.findIndex((obj => obj.name == "john"));
    array[index].age = 19;   
})
console.log("After Object Updation: ", array[index]);


