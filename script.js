const brand_input = document.getElementById("brand_input");
const storage_input = document.getElementById("storage_input");
const price_input = document.getElementById("price_input");
const RAM_input = document.getElementById("RAM_input");
const OS_input = document.getElementById("OS_input");
const color_input = document.getElementById("color_input");
const brand_p = document.getElementById("brand_p");
const storage_p = document.getElementById("storage_p");
const RAM_p = document.getElementById("RAM_p");
const OS_p = document.getElementById("OS_p");
const color_p = document.getElementById("color_p");
const price_p = document.getElementById("price_p");
const delete_btn = document.getElementById("delete_btn");

function ShowFromLocalStorage() {
    brand_p.innerText = "Brand: " + localStorage.getItem("brand");
    storage_p.innerText = "Storage: " + localStorage.getItem("storage") + "GB";
    RAM_p.innerText = "RAM: " + localStorage.getItem("RAM") + " GB";
    OS_p.innerText = "Operating System: " + localStorage.getItem("OS");
    color_p.innerText = "Color: " + localStorage.getItem("color");
    price_p.innerText = "Price: " + localStorage.getItem("price") + "$";
}

function SubmitADD() {
    event.preventDefault();
    let smartphone = {
        brand: brand_input.value,
        storage: storage_input.value,
        price: price_input.value,
        RAM: RAM_input.value,
        OS: OS_input.value,
        color: color_input.value,
    };

    brand_input.value = "";
    storage_input.value = "";
    price_input.value = "";
    RAM_input.value = "";

    localStorage.setItem("brand", smartphone.brand);
    localStorage.setItem("storage", smartphone.storage);
    localStorage.setItem("price", smartphone.price);
    localStorage.setItem("RAM", smartphone.RAM);
    localStorage.setItem("OS", smartphone.OS);
    localStorage.setItem("color", smartphone.color);

    ShowFromLocalStorage();
}

delete_btn.onclick = () => {
    localStorage.clear();

    brand_p.innerText = "Brand: ";
    storage_p.innerText = "Storage: " + "GB";
    RAM_p.innerText = "RAM: " + " GB";
    OS_p.innerText = "Operating System: ";
    color_p.innerText = "Color: ";
    price_p.innerText = "Price: " + "$";
};