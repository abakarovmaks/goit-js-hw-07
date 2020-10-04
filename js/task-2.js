const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = ingredients.map(function (ingredient) {
  const createList = document.createElement("li");
  createList.textContent = ingredient;
  return createList;
});

const elList = document.querySelector("ul");
elList.append(...ingredientsList);
