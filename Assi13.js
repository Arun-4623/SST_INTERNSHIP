const rl=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
rl.question("plaese give the range to print even numbers:",(n)=>{
    var num=parseInt(n) 
    let i=1;
while(i<=num)
    {
        if(i%2==0)
            {
                console.log(i);
            }
            i++;
    }
    rl.close();
    
});