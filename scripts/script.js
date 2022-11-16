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
// let r = prompt("Enter a Radius");
// console.log(r)
// function circleArea (radius)
// {
//     let radiusP = document.querySelector("#radius");
//     // console.log(radiusP)
//     let resultP = document.querySelector("#result");
//     // console.log(resultP)
//     radiusP.textContent =radius;
//     return Math.PI * radius * radius;
//     resultP.textContent = calculatedArea
//     return calculatedArea;
// }
// let area = circleArea(r).toFixed(2);
// alert(`The Area is ${area}`)
const unorderedList = document.querySelector(".shopping");
// console.log(unorderedList)
function populateList(list)
{
    for (let i = 0; i < list.length; i++)
    {
        let listItem = document.createElement("li");
        listItem.textContent = list[i] 
        // console.log(list[i])
        unorderedList.appendChild(listItem)
    }
}
const shoppingList = ["cheese", "bread", "green pepper"];
populateList(shoppingList);

function changeListStyle()
{
 unorderedList.classList.remove("circleList");
 unorderedList.classList.add("squareList");
}
changeListStyle()

const listItem = document.querySelectorAll(".shopping li")

function greenItem()
{
    for (let i = 0 ; i <listItem.length; i++)
    {
        if (listItem[i].textContent.includes("green"))
        {
            listItem[i].classList.add("green")
        }
    }
}
greenItem();