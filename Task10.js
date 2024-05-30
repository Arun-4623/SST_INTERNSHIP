const r1=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
r1.question("Enter the first number:\n",(num1)=>{
    r1.question("Enter the second number:\n",(num2)=>{
        var n1=parseInt(num1)
        var n2=parseInt(num2)
        sum=n1+n2;
        subs=n1-n2;
        mult=n1*n2;
        div=n1/n2;
        rem=n1%n2;
        console.log("The sum of the given numbers is "+sum);
        console.log("The substraction of the given numbers is "+subs);
        console.log("The multiplication of the given numbers is "+mult);
        console.log("The division of the given numbers is "+div);
        console.log("The remainder of the given numbers is "+rem);
        r1.close();
    });
});