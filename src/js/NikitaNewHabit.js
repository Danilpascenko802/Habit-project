"use strict";

const inputs = document.getElementById("habitForm").elements;
const inputByIndex = inputs[0];
const inputByName = inputs["name"];

function getInputByName(name) {
  return document.querySelector(`input[name=${name}]`);
}

const form = document.getElementById("habitForm");
const habit_title = document.querySelector("#habit_title");
const habit_desc = document.querySelector("#habit_desc");
const habit_not = document.querySelector("#habit_not");
const habit_remind = document.querySelector("#habit_remind");
const habit_submit = document.querySelector("#habit_submit");
const habit_area = document.querySelector(".habits_area");
// const habit_article = document.querySelector(".newHabit_modal");

class NewHabit {
  constructor(habit_title, habit_desc, habit_not, habit_remind, habit_submit) {
    this.title = habit_title;
    this.content = habit_desc;
    this.frequency = habit_not;
    this.reminder = habit_remind;
    this.submit = habit_submit;
  }
}

function getSubmit(event) {
  event.preventDefault();
  const habitTitle = habit_title.value.trim();
  const habitDesc = habit_desc.value.trim();
  const habitNot = habit_not.value.trim();
  const habitRemind = habit_remind.value.trim();
  const habitSubmit = habit_submit.value.trim();

  //   const obj = {};
  const newHabit = new NewHabit(
    habitTitle,
    habitDesc,
    habitNot,
    habitRemind,
    habitSubmit
  );

  console.log(newHabit);
  return newHabit;
}

const habitWrapper = document.querySelector(".habit_wrapper");

function addNewHabitSection(obj) {
  for (let i = 0; i < inputs.length; i++) {
    obj[inputs[i].name] = inputs[i].value;
  }
  
  const newHabitSection = document.createElement("div");
  const newHabitTitle = document.createElement("h2");
  const newHabitContent = document.createElement("p");

  newHabitSection.classList.add("habitSection");
  newHabitTitle.setAttribute("id", "habitTitle");
  newHabitContent.setAttribute("id", "habitContent");

  newHabitTitle.innerText = obj.title;
  newHabitContent.innerText = obj.content;

  newHabitSection.append(newHabitTitle, newHabitContent);
  habit_area.prepend(newHabitSection);
  console.log(habit_area);

  newHabitSection.style.backgroundColor = "#EAE7F2";
  newHabitSection.style.width = "200px";
  newHabitSection.style.height = "80px";
  newHabitSection.style.borderRadius = "20px";
  newHabitTitle.style.paddingLeft = "20px";
  newHabitTitle.style.paddingTop = "12px";
  newHabitTitle.style.marginBottom = "0px";
  newHabitContent.style.marginTop = "10px";
  newHabitContent.style.paddingLeft = "20px";
  return habit_area;
}

form.addEventListener("submit", getSubmit);

habit_submit.addEventListener("click", (newHabit) => {
  addNewHabitSection(newHabit);
});

const colors = [
  { label: "Красный", value: "#C0024A" },
  { label: "Зелёный", value: "#02C0B9" },
  { label: "Синий", value: "#390093" },
  { label: "Персиковый", value: "#FFDAB9" },
  { label: "Розовенький", value: "#F4C2C2" },
];

function makeSelect() {
  const select = document.getElementById("select-color");

  colors.forEach((c) => {
    let opt = document.createElement("option");
    opt.value = c.value;
    opt.innerHTML = c.label;
    select.appendChild(opt);
  });
}

function makeDiv(obj) {
  const pickedColor = document.getElementById("select-color").value;
  habitWrapper.style.backgroundColor = pickedColor;
  habitWrapper.style.color = "white";
}

makeSelect();
