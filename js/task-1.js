const totalCategories = document.querySelector("#categories").children;
console.log(`В списке ${totalCategories.length} категории.`);

const resultItems = Array.from(document.querySelector("#categories").children);
for (let item of resultItems) {
  let category = item.firstElementChild.textContent;
  let elemQuantity = item.lastElementChild.children.length;
  console.log(`Категория ${category} \nКоличество элементов ${elemQuantity}`);
}
