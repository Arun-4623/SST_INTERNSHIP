function outer()
{
    let out='idiot';
    function inner()
    {
        console.log(out);
    }
    return inner;
}
const myclosure=outer();
myclosure(); 