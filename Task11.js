const rl=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
rl.question("Enter a number: \n",(input)=>{
    let number=parseInt(input)
    console.log("Intial number : "+number);
    console.log("number++ : "+number++);
    console.log("After ++number : ",++number);
    rl.close();
});