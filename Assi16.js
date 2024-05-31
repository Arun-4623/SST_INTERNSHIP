const rl=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
function avg()
{
rl.question("enter first number:",(n1)=>{
    rl.question("enter the second number:",(n2)=>{
        let a=parseFloat(n1)
        let b=parseFloat(n2)
        ag=(a+b)/2;
        console.log("the average of the numbers is "+ag);
        rl.close();
        
    });
});
}
avg();