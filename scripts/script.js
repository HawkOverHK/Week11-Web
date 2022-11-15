// function greet(user){
// console.log(`Hello ${user}`)
// }

// greet("JOTARO");
// let name = function () {

// }
// const greet = function (user){
//     console.log(`Hello ${user}`)
// }
// greet("DIO")
// const greet = (user) =>
// {
//     console.log(`KONO ${user} DA WRRYYYYYYYYYYYY. MUDA MUDA`);
// }
// greet("DIO")
// function greet(user, time = "day")
// {
//     console.log(`Good ${time} ${user}`);
// }
// greet("JoJo")
// greet("JoJo", "night")
let r = prompt("Enter a Radius");
console.log(r)
function circleArea (radius)
{
    let radiusP = document.querySelector("#radius");
    // console.log(radiusP)
    let resultP = document.querySelector("#result");
    // console.log(resultP)
    radiusP.textContent =radius;
    return Math.PI * radius * radius;
    resultP.textContent = calculatedArea
    return calculatedArea;
}
let area = circleArea(r).toFixed(2);
alert(`The Area is ${area}`)
