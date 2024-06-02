const rl=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
rl.question("enter the radius:",(r)=>{
    function area()
    {
    ar=Math.PI *Math.pow(r,2);
    return ar;
    }
    var s=area(r);
    console.log(s);
    rl.close();
});