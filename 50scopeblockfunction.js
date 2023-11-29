//block vs function scope

//let and const are block scope
//var is function scope

function myApp ()
{
    if(true)
    {
        var firstName = "Deepak";
        console.log(firstName);
    }
}
myApp();