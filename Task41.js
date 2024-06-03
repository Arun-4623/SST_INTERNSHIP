const rl=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
rl.question("enter your name:",(name)=>{
    const myName=function(x)
    {
        var full=x;
        return full;
    }
    var res = myName(name);
    console.log("hai "+res);
    rl.close();
});