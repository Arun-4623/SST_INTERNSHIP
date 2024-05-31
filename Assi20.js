const rl=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
rl.question("write 1st sentence:",(l1)=>{
    rl.question("write 2nd sentence:",(l2)=>{
        if(l1==l2)
            {
                console.log("They both are same!");
            }
        else
            {
                console.log("They are not the same");
            }
            rl.close();
    });
});