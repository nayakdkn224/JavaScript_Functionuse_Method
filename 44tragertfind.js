function findTarget(array , target)
{
    for(let i=0;i<array.length ;i++)
    {
        if(array[i]===target)
        {
            return i;
        }
    }
    return -1 ;

}
const Myarray = [1,2,3,4,5,6,7,88,9,12,23,34,56,67,78,89,]
const ans =findTarget(Myarray, 2);
console.log("target found at  index position of the number ",ans);
