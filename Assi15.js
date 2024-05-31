const rl=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
rl.question("write a sentence =>",(str)=>{
    rl.question("write a number here=>",(num)=>{
        console.log(str);
        console.log(num);
        rl.close();
    });

});