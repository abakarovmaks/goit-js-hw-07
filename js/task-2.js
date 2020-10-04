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
console.log(ingredientsList);

const elList = document.createElement("ul");
elList.append(...ingredientsList);
console.log(elList);
