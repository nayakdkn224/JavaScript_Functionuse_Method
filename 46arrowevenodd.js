const isEven= number => number%2==0;
console.log("the even number is ?",isEven(7));

const isOdd= number => number!==0;
console.log("the even number is ?",isOdd(7));
const firstChar = anyString => anyString[3];
console.log(firstChar("deepak"))



const findTarget = (array , target)=>
{
    for (let i=0 ;i<array.length ; i++)
    {
        if(array===target)
        {
            return i;
        }
    }
    return -1;
}
const Myarray=[1,2,3,4,5,6,7,8,9]
const ans = findTarget(Myarray,3);
console.log(ans);