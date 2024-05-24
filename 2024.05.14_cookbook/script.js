/*
todo:
- search functionality

*/



class Recipe {
  constructor(name, duration, instructions, ingredients){
    this.name = name;
    this.duration = duration; //minutes
    this.instructions = instructions;
    this.ingredients = ingredients; //array of ingredient strings
    this.showingInstructions = false;
  }
  getHTML(){
    if(this.showingInstructions){
      return `<button onclick="deleteRecipe('${this.name}')">Delete</button><span><strong>${this.name}</strong> &bull; ${this.duration} Minutes &bull; ${this.ingredients.join(', ')}</span><button onclick="toggleInstructions('${this.name}')">Hide Recipe</button><p>${this.instructions}</p>`;
    }
    return `<button onclick="deleteRecipe('${this.name}')">Delete</button><span><strong>${this.name}</strong> &bull; ${this.duration} Minutes &bull; ${this.ingredients.join(', ')}</span><button onclick="toggleInstructions('${this.name}')">Show Recipe</button>`;
  }
}

var recipeList = [];
var addMenuOpen = false;

function updateRecipeHTML(){
  document.getElementById("recipelist").innerHTML = ""; //clear html contents
  for(let i = 0; i < recipeList.length; i++){ //add every recipe in recipeList
    document.getElementById("recipelist").innerHTML += `<div id="elm${i}">${recipeList[i].getHTML()}</div>`;
  }
  //adds menu for adding recipes
  if(addMenuOpen){
    document.getElementById("recipelist").innerHTML += `<div><button onclick="toggleAddMenu()">Cancel</button><button onclick="addRecipe()">Add</button><input placeholder="Name" id="nameInput"><input placeholder="Duration (minutes)" type="number" id="durationInput"><input placeholder="Ingredients" id="ingredientsInput"><input placeholder="Instructions" id="instructionsInput"></div>`;
  } else {
    document.getElementById("recipelist").innerHTML += `<div><button onclick="toggleAddMenu()">Add</button></div>`;
  }
}

function addRecipe(){
  if(recipeList.find(x => x.name === document.getElementById("nameInput").value) === undefined){ //checks that there isnt a recipe with the same name
    recipeList.push(new Recipe(document.getElementById("nameInput").value, parseInt(document.getElementById("durationInput").value), document.getElementById("instructionsInput").value, document.getElementById("ingredientsInput").value.split(", ")));
    document.getElementById("nameInput").value = "";
    document.getElementById("durationInput").value = "";
    document.getElementById("instructionsInput").value = "";
    document.getElementById("ingredientsInput").value = "";
  } else {
    alert("Error: Recipes must not share a name.")
  }
  updateRecipeHTML();
}

function deleteRecipe(recipeName){
  recipeList = recipeList.filter(x => x.name !== recipeName)
  updateRecipeHTML();
}

function toggleInstructions(recipeName){
  //finds index of recipe with name, modifies .showingInstructions value, then updates element of array (false -> true, true -> false)
  index = recipeList.findIndex(x => x.name === recipeName);
  z = recipeList[index];
  z.showingInstructions = !z.showingInstructions;
  recipeList[index] = z;
  updateRecipeHTML();
}

function toggleAddMenu(){
  addMenuOpen = !addMenuOpen;
  updateRecipeHTML();
}

// Default recipes: pancake, barszcz, and spagetti
recipeList.push(new Recipe("Pancake", "5", "1) Measure water into bowl.<br>2) Add pancake mix and whisk.<br>3) In a pan with pre-warmed oil over medium heat pour in a half cup of batter.<br>4) When edges are bubbly, flip with spatula.<br>5) Remove once other side cooked. Serve with your choice of syrup, honey, jam, or whipped cream.", ["Pancake mix", "Oil"]));
recipeList.push(new Recipe("Barszcz", "60", "1) In a large cooking pot, saute onion on low heat until soft and caramelized.<br>2) Add 10 cups water and 1-2 teaspoons of bullion paste.<br>3) Add two bay leaves to pot as well as three or more medium-cut beets, two diced carrots, two chopped celery stocks, and half a sliced cabbage.<br>4) Bring pot to boil, then reduce to simmer for roughly 30 minutes.<br>5) Add four cloves of minced garlic, 4 tablespoons of apple cider vinegar, a quarter cup of finely chopped dill, and a quarter cup of finely chopped Italian parsley, then simmer for an additional five minutes.<br>6) Add apple cider vinegar to taste. Serve with a dollop of sour cream and a little bit of chopped dill.", ["1 Onion", "1-2 teaspoons bullion paste", "2 bay leaves", "3 beets", "2 carrots", "2 celery stocks", "1/2 cabbage", "4 cloves garlic", "4 tablespoon apple cider vinegar", "1/4 cup dill", "1/4 cup Italian parsley"]));
recipeList.push(new Recipe("Spagetti", "10", "1) Put water in a pot on stove and raise to boil.<br>2) Add pasta to pot.<br>3) Once sufficiently softened, remove pasta from pot. Serve with your choice of sauce.", ["Uncooked spagetti"]));
updateRecipeHTML();


















