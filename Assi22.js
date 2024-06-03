function add(n1,n2,callback)
{
    sum=n1+n2;
    callback();
}
function cBfunction()
{
    console.log("sum is :"+sum);
}
add(3,3,cBfunction);