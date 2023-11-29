const myvar = "Deepak Nayak"
function Outerfunction()

{
    console.log("i am a outer function able to access all function and variable ")
    function Innerfunction()
    { 

        console.log("this is method in outer function");
         
        const insideinnerfunion = () =>
        {
            console.log("this is method in outer function"myvar);
        }
        insideinnerfunion();
    }
    Innerfunction();
}
Outerfunction();