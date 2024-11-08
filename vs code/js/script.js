const userDistance = document.getElementById("distance-form");
console.log(userDistance);
const userAge = document.getElementById("age-form");
console.log(userAge);
const formElem = document.getElementById("form");
console.log(formElem);
const btnElem = document.getElementById("btn");
console.log(btnElem);
const resultElem = document.getElementById("your-result");
console.log(resultElem);

const finalePrice = (km, age) => {
    const ticketPrice = km * 0.21;
    let discountPerc = 0;
    if (age < 18) {
        discountPerc = 20;
    } else if (age >= 65) {
        discountPerc = 40;
    }
    const discount = ticketPrice / 100 * discountPerc;
    const resultPrice = ticketPrice - discount;
    return resultPrice;
}
// console.log(finalePrice());

formElem.addEventListener("submit", function (event) {
    event.preventDefault();
    // console.log("Sono entrato nel submit")
    const ageValue = parseInt(userAge.value);
    const distanceValue = parseInt(userDistance.value);
    // console.log(distanceValue, ageValue);
    const finalResult = finalePrice(distanceValue, ageValue);
    console.log(finalResult);
    console.log(typeof(ageValue));
    resultElem.textContent = finalResult.toFixed(2);
});
