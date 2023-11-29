function Outerfunction ()
{
    const Innerfunction=()=>
    {
        console.log("i am the text present in the inner function")
    }

    const Addnum =(num1,num2)=>
    {
        return num1 + num2 ;
    }

    const mul =(num1 , num2)=>
    {
        return num1 * num2 ;
    }
    console.log (Addnum(4,5));
    Innerfunction ()
    console.log("mul result is ", mul(10,100))
}
Outerfunction ()