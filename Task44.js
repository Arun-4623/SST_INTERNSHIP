function modobj(obj)
{
    obj.value=100;
    console.log("inside the function:"+obj.value);
}
let myobj={value:39};
console.log("before function call:"+myobj.value);
modobj(myobj);
console.log("after function call:"+myobj.value);