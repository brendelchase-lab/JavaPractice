console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favortieFoods = ["steak", "Seafood", "Mac & Cheese", "Cheese Burger", "Spaghetti", "Burritos"]


// 2. Loop through the list and print: "One of my favorite foods is ______."
for (let i=0; i<favortieFoods.length; i++){
  console.log(favoriteFoods[i])
}




// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.
for (let i=0; i<favortieFoods.length; i++){
  console.log("My #"+i+" favorite food is "+favoriteFoods[i]);
}




// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."
function printFoodRecommendation(foodName) {
    console.log("Have you ever tried " + foodName + "?");
    console.log("I always recommend " + foodName + " to friends.");
    console.log("Trust me — " + foodName + " is delicious.");
}

// 4b. Call the function at least 3 times
printFoodRecommendation("pizza");
printFoodRecommendation("tacos");
printFoodRecommendation("sushi");


// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Donuts" would be.
let AFoods = friendFavorites.filter(food => food.toLowerCase().includes("a"));

console.log("Foods with an 'a':");
console.log(AFoods);



// 6. Store the result in an array called foodsWithA. Print out the array.
// Did this in 5 already, I hope that works


// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
let longFoodNames = friendFavorites.filter(food => food.length > 6);


// 8. Create another array shortFoodNames for foods 6 characters or shorter.
let shortFoodNames = friendFavorites.filter(food => food.length <=6);


// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."
console.log(longFoodNames);
console.log(shortFoodNames);
if (longFoodNames.length > shortFoodNames.length){
  console.log("There are more long-named foods.");
  } else {
    console.log("There are more short-named foods.");
  }
  




// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
let longest = "a";
for (let i = 0; i< friendFavorites.length; i++){
  if (favortieFoods[i].length > longest.length){
    longest = favortieFoods[i];
  }
console.log("The longest food name in the list is "+ longest +" with "+ longest.length +" characters.")
}