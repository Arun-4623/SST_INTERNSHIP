const rl=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
rl.question("enter a decimal value:",(n)=>{
    function dec(n)
    {
        let a=parseInt(n);
        return a;
    }
    var res=dec(n);
    console.log(res);
    rl.close();
});