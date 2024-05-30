const rl=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
rl.question("Enter the length of base:",(a)=>{
    rl.question("Enter the length of height:",(b)=>{
            let x=parseInt(a)
            let y=parseInt(b)
            var area=(0.5*(a*b));
            console.log("The area of triangle is "+area);
            rl.close();
    });
});