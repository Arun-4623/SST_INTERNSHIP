const rl=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
var res=0;
rl.question("Enter the number to be calculated:",(n)=>{
    while(n>0)
        {
            res+=n%10;
            n=parseInt(n/10);
        }
        console.log("sum:"+res);
    
    rl.close();

});