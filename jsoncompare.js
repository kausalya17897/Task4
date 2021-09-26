var obj1={name:"person1",age:5};
var obj2={name:"person1",age:5};
function equal(object1,object2){
    var key1=Object.keys(object1);
    var key2=Object.keys(object2);
    if(key1.length===key2.length){
return true
    }else{
        return false
    }
    for(let val of key1)
    {
        if(obj1[val]===obj2[val]){
            return true
        }else{
            return false
        }
    }
}
if(equal(obj1,obj2)){
    console.log("equal")
}else{
    console.log("notequal")
}