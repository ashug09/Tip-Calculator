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
  amount.value == "" ? alert("Please, Enter Some Amount") : null;
  tip.value == "" ? alert("Please, Enter Some Tip") : null;
  amount.value == "" && tip.value == "" ? alert("Please, Enter Some Amount and Tip") : alert("Thank You" + "\n" + "Your Tip is " + tip.value + "%" + "\n" + "Your Total Amount is " + amt_display.innerHTML + "\n" + "Number of People is " + numberOfPeople);
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
  if (numberOfPeople === 1) return alert("Minimum number of people is 1");
  numberOfPeople--;
  people.innerHTML = numberOfPeople;
  totalAmt();
};
