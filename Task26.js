const rl=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
function data()
{
    rl.question("what is your name:",(name)=>{
        rl.question("what's ur age:",(age)=>{
            console.log("your name is "+name+" and your age is "+age);
            rl.close();
        });

    });
}
data();