let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let btn = document.querySelector(".input-box button");
let calculator = document.querySelector(".calculator");

function calculateAge() {
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;  // month starts from 0
    let y1 = birthDate.getFullYear();

    let todayDate = new Date();

    let d2 = todayDate.getDate();
    let m2 = todayDate.getMonth() + 1;
    let y2 = todayDate.getFullYear();

    let d, m, y;
    y = y2 - y1;

    if (m2 >= m1) {
        m = m2 - m1;
    } else {
        y--;
        m = 12 + m2 - m1;
    }
    if (d2 >= d1) {
        d = d2 - d1;
    } else {
        m--;
        d = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if (m < 0) {
        m = 11;
        y--;
    }
    console.log(y, m, d);
    let p = document.createElement("p");
    p.innerText = `Your age is ${y} years, ${m} months, ${d} days.`;
    calculator.appendChild(p);

}

function getDaysInMonth(year, month) {
    return new Date(year.month, 0).getDate();
}

btn.addEventListener("click", calculateAge);

