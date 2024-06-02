const rl=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
rl.question("enter the number:",(n)=>{
    function squr()
    {
        srt=n*n;
        return srt;
    }
    var res=squr(n);
    console.log(res);
    rl.close();
});