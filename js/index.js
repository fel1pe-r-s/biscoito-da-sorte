const luck = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.",
  "Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.",
  "A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores.",
  "Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito.",
  "Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.",
  "A perseverança é a mãe da boa sorte.",
  "Que sorte possuir uma grande inteligência: nunca te faltam asneiras para dizer.",
  "Destino não é uma questão de sorte, mas uma questão de escolha; não é uma coisa que se espera, mas que se busca.",
  "Sorte é estar pronto quando a oportunidade vem.",
  "A sorte favorece a mente bem preparada."
];

// element
const fortuneCookie = document.querySelector("#fortuneCookie");

const fortuneCookieReset = document.querySelector("#fortuneCookieReset");

const yourLuck = document.querySelector("#yourLuck");

const screen = document.querySelector(".screen");
const screen2 = document.querySelector(".screen2");

// event
fortuneCookie.addEventListener("click", drawYourLuckClick);

fortuneCookieReset.addEventListener("click", drawYourLuckResetClick);

// function
function drawYourLuckClick() {
  let randomLuck = Math.round(Math.random() * 10);
  drawYourLuckResetClick();
  yourLuck.innerText = luck[randomLuck];
}

function drawYourLuckResetClick() {
  screen.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
