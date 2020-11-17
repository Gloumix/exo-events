var footer = document.querySelector('footer');
let e = 0;

footer.addEventListener('click', showCliqueConsole);

function showCliqueConsole() {
    console.log('clique');
    e = e + 1;
    console.log(`Clique numéro : ${e}`);
}







let hamburger = document.querySelectorAll("#navbarHeader")[0]; 

let hamburgerButton = document.querySelector("button.navbar-toggler");

hamburgerButton.addEventListener('click', addClassButton);

function addClassButton() {
    hamburger.classList.toggle("collapse");
}






let firstCard = document.querySelectorAll("div.album div.container div.row div.col-md-4")[0];

let textFirstCard = firstCard.querySelector("div.card-body p.card-text");

let editButtonFirstCard = firstCard.querySelector("div.card-body div.d-flex div.btn-group button.btn-outline-secondary");

editButtonFirstCard.addEventListener('click', editInRedTheText);

function editInRedTheText() {
    textFirstCard.style.color = "red";
}






let secondCard = document.querySelectorAll("div.album div.container div.row div.col-md-4")[1];

let textSecondCard = secondCard.querySelector("div.card-body p.card-text");

let editButtonSecondCard = secondCard.querySelector("div.card-body div.d-flex div.btn-group button.btn-outline-secondary");

editButtonSecondCard.addEventListener('click', editInGreenTheText);

function editInGreenTheText() {
    if (textSecondCard.style.color == 'green') {
        textSecondCard.style.color = "black";
    }
    else if (textSecondCard.style.color == 'black') {
        textSecondCard.style.color = "green";
    }
    else {
        textSecondCard.style.color = "green";
    }
}





let linkHeader = document.querySelector("head link");

let navBar = document.querySelector("header div.navbar");

navBar.addEventListener('dblclick', disableCDN);

function disableCDN() {
    if (linkHeader.disabled == false) {
        linkHeader.disabled = true;
    }
    else {
        linkHeader.disabled = false;
    }
}


viewButtons = document.querySelectorAll("button.btn.btn-sm.btn-success")
viewButtons.forEach(Button.addEventListener('mouseover', cardExpand));

function cardExpand(Button) {
  card = e.target.offsetParent.offsetParent.offsetParent
	text = card.firstElementChild.lastElementChild.firstElementChild
			if (card.style.maxWidth != "20%") {
				text.hidden = true
				card.style.maxWidth = "20%"
			} else {
				text.hidden = false
				card.style.maxWidth = "100%"
			}
}