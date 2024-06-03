function changebyref(car)
{
    car.price=250000;
    console.log("Inside function:",car.price);
}
let car={
    model:"toyota",
    price:200000,
};
console.log("Before function call,car model:",car.model);
console.log("Before function call,car price:",car.price);
//console.log("Before function call,car price:",car.brand);
changebyref(car);
console.log("After function call,car model:",car.model);
console.log("After function call,car price:",car.price);
//console.log("After function call,car price:",car.brand);