const form = document.querySelector("form");
const input = document.getElementById("new-item");
const ul = document.getElementById("grocery-list");
const deleteBtns = document.querySelectorAll("#grocery-list li img");
const alertBtn = document.getElementById("close-btn");

form.onsubmit = (event) => {
  event.preventDefault();
  const value = input.value;

  if (value.trim() === "") {
    return alert("Digite o novo item!");
  }

  const newItem = createNewItem(value);
  addNewItemToList(newItem);
  input.value = "";
};

deleteBtns.forEach((btn) => {
  btn.onclick = removeItemFromList;
});

alertBtn.addEventListener("click", (event) => {
  const parent = document.getElementById("alert-message");
  parent.style.visibility = "hidden";
});

function createNewItem(value) {
  const li = document.createElement("li");
  const img = document.createElement("img");

  img.setAttribute("src", "assets/delete.svg");
  img.addEventListener("click", removeItemFromList);

  li.append(value);
  li.appendChild(img);

  return li;
}

function addNewItemToList(item) {
  ul.appendChild(item);
}

function removeItemFromList(event) {
  const parent = event.target.parentNode;
  parent.remove();

  const alert = document.getElementById("alert-message");
  alert.style.visibility = "visible";

  setTimeout(() => {
    alert.style.visibility = "hidden";
  }, 3000);
}
