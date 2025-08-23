let imgBox = document.querySelector(".imgBox");
let img = document.querySelector("#QR");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");


const generateQr = function () {
    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
    imgBox.classList.add("show-img");
}

btn.addEventListener("click", generateQr);