const person =
{
    Name:"Deepak Nayak",
    Age:30,
    batch:6,
    Gender:"Male",
    Place:"Odisha"
}
console.log(person);

function printDetails({Name , Age ,batch,Gender,Place})
{
    console.log(Name);
    console.log(Age);
    console.log(batch);
    console.log(Gender);
    console.log(Place); 
}
printDetails(person);