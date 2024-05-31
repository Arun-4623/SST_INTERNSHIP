const rl=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
function area()
{
    rl.question("enter the length:",(len)=>{
        rl.question("enter the base:",(bs)=>{
           a=parseFloat(len)
           b=parseFloat(bs)
           ar=a*b;
           console.log("the area of rectangle is "+ar);
           rl.close();
        });
    });

}
area();