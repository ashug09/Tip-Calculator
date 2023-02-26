const submit = document.getElementById("submit");
const amount = document.getElementById("amt");
const tip = document.getElementById("tip");
const amt_display = document.getElementById("amt_display");
const incre = document.getElementById("incre");
const decre = document.getElementById("decre");
const people = document.getElementById("people");
let numberOfPeople = 1;

submit.onclick = () => {
  totalAmt();
};

incre.onclick = () => {
  increment();
};

decre.onclick = () => {
  decrement();
};

const totalAmt = () => {
  let amt = Number(amount.value);
  let tipped = Number(tip.value);
  let total = Number(amt + amt * (tipped / 100));
  let perPerson = total / numberOfPeople;
  amt_display.innerHTML = `$${perPerson.toFixed(2)}`;
  //alert(`total amount with tip in percentage is ${total}`);
};

const increment = () => {
  numberOfPeople++;
  people.innerHTML = numberOfPeople;
  totalAmt();
};

const decrement = () => {
  if (numberOfPeople === 1) return alert("chomu paise tera chacha dega");
  numberOfPeople--;
  people.innerHTML = numberOfPeople;
  totalAmt();
};
