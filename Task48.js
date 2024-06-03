function greet(name,callback)
{
    console.log("hello "+name);
    callback();
}
function callbackfunction()
{
    console.log("onnu erangi povavo");
}
greet("aju",callbackfunction);