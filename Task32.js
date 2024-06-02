const rl=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
rl.question("enter the 1st number:",(n1)=>{
    rl.question("enter 2nd number:",(n2)=>{
        let nn1=parseInt(n1)
        let nn2=parseInt(n2)
function add(x,y)
{
    sum=x+y;
    console.log(sum);
    sub(nn1,nn2);
    mult(nn1,nn2);
    divi(nn1,nn2);
}
add(nn1,nn2);
function sub(x,y)
{
    subs=x-y;
    console.log(subs);
}
function mult(x,y)
{
    mlt=x*y;
    console.log(mlt);
}
function divi(x,y)
{
    div=x/y;
    console.log(div);
}
rl.close();

});
});