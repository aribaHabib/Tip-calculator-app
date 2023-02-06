let bill_amount = document.getElementById("bill-amount");
let no_of_people = document.getElementById("no-of-people");
let tip_amount = document.getElementById("tip_amount");
let total_per_person = document.getElementById("total_per_person");
let tip_per_person = parseFloat(0.0);
let bill_per_person = parseFloat(0.0);
let bill = 0;
let tip_percentage = 0;
let people = 1;
let btns = document.querySelectorAll("#btn");
console.log(btns);
let curr = null;

function calculateBill() {
  if (bill != null && tip_percentage != null && people > 0) {

    bill = parseInt(bill);
    people = parseInt(people);
    let tip = (bill / 100) * tip_percentage;
    tip = parseFloat(tip);
    tip_per_person = tip / people;
    tip_per_person = parseFloat(tip_per_person).toFixed(2);
    bill_per_person = (tip + bill) / people;
    bill_per_person = parseFloat(bill_per_person).toFixed(2);
    tip_amount.innerHTML = "$" + tip_per_person;
    total_per_person.innerHTML = "$" + bill_per_person;
    tip_amount.style.color = "hsl(172, 67%, 45%)";
    tip_amount.style.fontSize = "30px";
    total_per_person.style.color = "hsl(172, 67%, 45%)";
    total_per_person.style.fontSize = "30px";
  }
}

function billAmount() {
  bill = bill_amount.value;
  console.log(bill);
  calculateBill();
}

function tipBtn(a) {
  tip_percentage = btns[a].value;
  console.log(tip_percentage); 
  curr = a;
  calculateBill();
}

function noOfPeople() {
  people = no_of_people.value;
  console.log(people);
  if (people == 0) {
    document.getElementById("error").innerHTML = "Can't be zero";
    let txt = document.getElementById("no-of-people");
    txt.style.outline = "2px solid #fca600!important";
    txt.style.outlineColor = " rgb(230, 103, 103)";
  } else {
    document.getElementById("error").innerHTML = " ";
    let txt = document.getElementById("no-of-people");
    txt.style.border = " none";
    txt.style.outlineColor = " hsl(172, 67%, 45%)";
    calculateBill();
  }
}
function reset() {
  bill = 0;
  people = 1;
  tip_percentage = 0;
  btns.value = null;
  bill_amount.value = null;
  no_of_people.value = null;
  document.getElementById("error").innerHTML = " ";
  tip_amount.innerHTML = "$0.00";
  total_per_person.innerHTML = "$0.00";

  tip_amount.style.color = "hsl(172, 67%, 45%)";
  tip_amount.style.fontSize = "30px";
  total_per_person.style.color = "hsl(172, 67%, 45%)";
  total_per_person.style.fontSize = "30px";
}