//function myfunc(a,b,...c)
//{
  //  console.log(`a is ${a}`);
  //  console.log(`b is ${b}`);
   // console.log('c is ',c);
//}
//myfunc(3,4,5,6,7,8,9)
function addAll(...numbers)
{
    let total= 0;
    for (number of numbers)
    {
        total = total + number ;
       // console.log(total);
    }
    return total ;
}
const ans = addAll(4,5,4,2,10)
console.log(ans);

