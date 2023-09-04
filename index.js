import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {
  getDatabase,
  push,
  ref,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";

const appSettings = {
  databaseURL: "https://grocify-3e577-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list");

addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;
  push(shoppingListInDB, inputValue);
  inputFieldEl.value = "";

  shoppingListEl.innerHTML += `<li>${inputValue}</li>`;

  console.log(inputValue);
});
