let fakeRarity = document.querySelector('.fake-rarity');
let rdm = Math.ceil(Math.random() * 8);
fakeRarity.innerHTML = `(Stock) Seulement ${rdm} exemplaires restants !`

function waitSeconds() {
    setTimeout(() => {
        fakeRarity.innerHTML = `(Stock) Seulement ${rdm} exemplaire(s) restants !`
    }, rdm * 250);
}

