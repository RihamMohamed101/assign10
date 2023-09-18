
//1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let res = mix.map( (ele) => { return isNaN(ele) ? ele : "";},).reduce( (occ , ele)=>{ return occ+ele;},);
console.log(res);


//2

let myString = "EElllzzzzzzzeroo";

// Elzero
myString =myString.split("");
let z =[] ;
let re = myString.filter( (el) =>
{
    if(!z.includes(el))
    {
        z.push(el);
        return el;
    }


} 
).join("");

console.log(re);



//3

let myArray = ["E", "l", "z", ["e","r"], "o" ];

// Elzero

let a = myArray.reduce((oc , e)=>
{
    if(Array.isArray(e))
    {
    e =  e.join("");
    }

    return oc+e;
});

console.log(a);

//4

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let k = numsAndStrings.filter((t)=>
{
    return !isNaN(t) ? -t : "";
}
);

console.log(k);

// [-1, -10, 10, 20, -5, -3]



//5

let nums = [2, 12, 11, 5, 10, 1, 99];

let o = nums.reduce((b , c)=>
{
    if(c%2==0)
    return c*b;
    else
    return c+b;
}
)

console.log(o);

// 500







