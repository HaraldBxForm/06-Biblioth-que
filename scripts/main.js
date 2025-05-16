// ==============================
// 🌱 Sélection des éléments
// ==============================

// Inputs
const inputName = document.querySelector(`.article-name`);
const inputPrice = document.querySelector(`.article-price`);
const inputQuantity = document.querySelector(`.article-quantity`);

// Button
const addButton = document.querySelector(`.add-button`);

// Display
const displayedList = document.querySelector(`.displayed-list`);
const displayTotalPrice = document.querySelector(`.display-total-price`)
// ==============================
// 🧠 Variables globales
// ==============================
const commandesListe = [];
// ==============================
// 🎊 Fonctionnalités
// ==============================
class Commande {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    commandePrice() {
        this.totalprice = this.quantity * this.price;
        return (this.quantity * this.price);
    }

    displayCommande() {
        return (`Product: ${this.name} | Price: ${this.price} | Quantity: ${this.quantity} | Total Price: ${this.commandePrice()}`);
    }
}

function resetInputs() {
    inputName.value = ``;
    inputPrice.value = ``;
    inputQuantity.value = ``;
}

function addCommandeToList() {
    commandesListe.push(new Commande(inputName.value, inputPrice.value, inputQuantity.value));
    resetInputs()
}

function displayCommandesList() {
    displayedList.innerHTML = ``;

    commandesListe.forEach((commande) => {
        displayedList.innerHTML += (`<div>${commande.displayCommande()} </div>`);
    })
}

function displayTotalCommandePrice() {
    displayTotalPrice.innerHTML = ``;

    totalPriceTemp = 0;
    commandesListe.forEach((commande) => {
        totalPriceTemp += commande.commandePrice();
    })

    displayTotalPrice.innerHTML += (`<div>Prix total : ${totalPriceTemp.toFixed(2)} </div>`);
}

// ==============================
// 🧲 Événements
// ==============================
addButton.addEventListener(`click`, function(e) {
    e.preventDefault();
    addCommandeToList();
    displayCommandesList();
    displayTotalCommandePrice();
    console.log(commandesListe);
    
})