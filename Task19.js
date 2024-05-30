const rl=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
rl.question("Enter the number to be multiplied:",(num)=>{
for(let i=1;i<=10;i++)
    {
        mult=i*num;
        console.log(""+i+"x"+num+"="+mult);
    }
    rl.close();
});