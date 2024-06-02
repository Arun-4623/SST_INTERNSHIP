const rl=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
rl.question("enter the lenght:",(lg)=>{
    rl.question("enter the base:",(bs)=>{
        function areas(x,y)
        {
            ar=(x*y);
            console.log(ar);
        }
        areas(lg,bs);
        rl.close();
    });
});