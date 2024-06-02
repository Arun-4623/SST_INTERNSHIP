function digi(x)
{
let result=0;

while(x>0)
    {
        result+=x%10;
        x=parseInt(x/10);
    }
    console.log(result);
}
digi(123456789);