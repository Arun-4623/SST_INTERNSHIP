const rl=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
rl.question("Enter your year of birth:",(year)=>{
    const today= new Date();
    age=today.getFullYear()-year;
   console.log(age);
    rl.close();
});