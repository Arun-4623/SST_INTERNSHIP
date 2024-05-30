const rl=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
rl.question("Enter the celcius value :",(cell)=>{
    var cel=parseInt(cell)
    var fah=(9/5)*cel+32;
    console.log("The fahrenheit value is "+fah);
    rl.close();
});
