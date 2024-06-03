function changecarpricevalue(price)
{
    price=250000;
    console.log("Inside function,price:",price);
}
let carprice=200000;
console.log("Before funtion call:",carprice);
changecarpricevalue(carprice);
console.log("After function call,car price:",carprice);