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
        return (`Produit: ${this.name} | Prix: ${this.price} | Quantité: ${this.quantity} | Prix: ${this.commandePrice()} €`);
    }
}

function checkEmptyCommandesList() {
    if (commandesListe.length < 1) {
        displayedList.innerHTML = `🛒 Aucune commande n'a été ajoutée 🛒`;
    }
}

function resetInputs() {
    inputName.value = ``;
    inputPrice.value = ``;
    inputQuantity.value = ``;
}

function addCommandeToList() {
    if (inputName.value && inputPrice.value && inputQuantity.value) {
        commandesListe.push(new Commande(inputName.value, inputPrice.value, inputQuantity.value));
        resetInputs()
    } else {
        alert(`Veuillez remplir tous les champs`)
    }
}

function displayCommandesList() {
    displayedList.innerHTML = ``;

    commandesListe.forEach((commande, i) => {
        displayedList.innerHTML += (`<div class="article-container"> <div>${commande.displayCommande()} </div> <button class="delete-button" data-index="${i}">❌</button></div>`);
    })
}

function displayTotalCommandePrice() {
    displayTotalPrice.innerHTML = ``;

    totalPriceTemp = 0;
    commandesListe.forEach((commande) => {
        totalPriceTemp += commande.commandePrice();
    })

    displayTotalPrice.innerHTML += (`<div>Prix total : ${totalPriceTemp.toFixed(2)} €</div>`);
}

function deleteCommande(index) {
    // const montant = parseFloat(commandesListe[index].price);
    commandesListe.splice(index, 1);
    // totalPriceTemp -= montant;
    displayCommandesList();
    displayTotalCommandePrice();
}

// ==============================
// 🧲 Événements
// ==============================
checkEmptyCommandesList();

addButton.addEventListener(`click`, function(e) {
    e.preventDefault();
    addCommandeToList();
    displayCommandesList();
    displayTotalCommandePrice();
    console.log(commandesListe);
    
})

displayedList.addEventListener(`click`, (e) => {
    if (e.target.matches(`.delete-button`)) {
        const index = e.target.dataset.index;
        deleteCommande(index);
    }
})