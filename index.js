let cart = [];
let total = 0;

let addItem = () => {
    let product = document.getElementById("itemname").textContent;
    let price = document.getElementById("price").textContent;
    alert("Still a work in progress.  Cannot buy " + product + ". The price will be $" + price);
};

let testAdd = () => {
    let price = document.getElementById("price").textContent;
    let value = parseFloat(price);
    total += value;
    alert("Your new total is $" + total);
}