const api = "https://thequoteshub.com/api/random-quote";
const h3 = document.querySelector(".quote");
const btn = document.querySelector(".new");
const p = document.querySelector(".author");

const result = async function (api) {
    let res = await fetch(api);
    const data = await res.json();
    console.log(data);
    h3.innerText = data.text;
    p.innerText = data.author;
}

btn.addEventListener("click", () => {
    result(api);
});
