function suggestRecipe() {
  const recipes = ["Pasta Delight", "Cheesy Pizza", "Refreshing Salad", "Grilled Chicken"];
  const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
  alert("Try making: " + randomRecipe);
}
