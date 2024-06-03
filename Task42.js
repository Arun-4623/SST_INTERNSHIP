const palins=function(x)
{
    let out=x.split('').reverse().join('');
    if(out===x)
        {
            var z=" is palindrom";
            var ab=x + z;
            return ab;
        }
    else
        {
            var y=" is not palindrome";
            var bc=x + y;
            return bc;
        }
}
var res=palins("malayalam");
console.log(res);
