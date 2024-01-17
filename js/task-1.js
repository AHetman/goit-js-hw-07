const numCategories = document.getElementById("categories");
console.log(`Number of categories: ${numCategories.children.length}`);
const allCategories = document.querySelectorAll(".item");
allCategories.forEach((category, i) => {
  const nameCategory = document.querySelectorAll("h2");
  console.log(`Category: ${nameCategory[i].textContent}`);
  const ulCategory = category.querySelector("ul");
  console.log(`Elements: ${ulCategory.children.length}`);
});
