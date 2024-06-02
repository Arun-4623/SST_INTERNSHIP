const rl=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
rl.question("Enter the first number:",(n1)=>{
    rl.question("Enter the second number:",(n2)=>{
        function prod(x,y)
        {

        mlt=(x*y);
        console.log(mlt);
        }
        prod(n1,n2);
        rl.close();
    });
});
