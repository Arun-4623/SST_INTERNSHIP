const rl=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
rl.question("who are you ?\n",(name)=>{
    rl.question("how's ur life ?\n ",(life)=>{
      console.log("maga "+name+" !!");
      console.log("so life is "+life+"." );
      rl.close();
    });
});
