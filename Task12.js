const rl=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
rl.question("Enter the first number : \n",(a)=>{
    rl.question("Enter the second number: \n",(b)=>{
        const n1=parseInt(a)
        const n2=parseInt(b)
        console.log("Intial number 1 : ",n1,"Intial number 2: ",n2);
        console.log("num1==num2: ",n1==n2);
        console.log("num1!=num2: ",n1!=n2);
        console.log("num1===num2: ",n1===n2);
        console.log("num1!==num2: ",n1!==n2);
        console.log("num1>num2: ",n1>n2);
        console.log("num1<num2: ",n1<n2);
        console.log("num1>=num2: ",n1>=n2);
        console.log("num1<=num2: ",n1<=n2);

        rl.close();
    });
});