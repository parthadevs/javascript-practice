/**
 * In this lab, you'll build a program that helps in managing lunch options. 
 * You'll work with an array of lunches, add and remove items from the array, 
 * and randomly select a lunch option.
 * 
 * Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.
 * 
 */


// Test Cases
// 1. You should declare a variable lunches and assign it an empty array to store the lunch items.
// 2. You should define a function addLunchToEnd.
// 3. The function addLunchToEnd should have two parameters.
// 4. addLunchToEnd(lunches, "Tacos") should log the string "Tacos added to the end of the lunch menu." to the console.
// 5. addLunchToEnd(["Pizza", "Tacos"], "Burger") should return ["Pizza", "Tacos", "Burger"].
// 6. You should define a function addLunchToStart.
// 7. The function addLunchToStart should have two parameters.
// 8. addLunchToStart(lunches, "Sushi") should log the string "Sushi added to the start of the lunch menu." to the console.
// 9. addLunchToStart(["Burger", "Sushi"], "Pizza") should return ["Pizza", "Burger", "Sushi"].
// 10. You should define a function removeLastLunch.
// 11. The function removeLastLunch should have one parameter.
// 12. When the input array is empty, the function removeLastLunch should log the string "No lunches to remove." to the console.
// 13. removeLastLunch(["Stew", "Soup", "Toast"]) should log the string "Toast removed from the end of the lunch menu." to the console.
// 14. removeLastLunch(["Sushi", "Pizza", "Noodles"]) should return ["Sushi", "Pizza"].
// 15. You should define a function removeFirstLunch.
// 16. The function removeFirstLunch should have a single parameter.
// 17. When the input array is empty, the function removeFirstLunch should log the string "No lunches to remove." to the console.
// 18. removeFirstLunch(["Salad", "Eggs", "Cheese"]) should log the string "Salad removed from the start of the lunch menu." to the console.
// 19. removeFirstLunch(["Sushi", "Pizza", "Burger"]) should return ["Pizza", "Burger"].
// 20. addLunchToEnd, addLunchToStart, removeLastLunch, and removeFirstLunch should return the same array passed as an argument after updating it.
// 21. You should define a function getRandomLunch.
// 22. The function getRandomLunch should have a single parameter.
// 23. When the input array is empty, the function getRandomLunch should log the string "No lunches available." to the console.
// 24. When the input array is not empty, the function getRandomLunch should log a string in the format Randomly selected lunch: [Lunch Item] to the console.
// 25. The getRandomLunch function should not change the array passed to it as argument.
// 26. You should define a function showLunchMenu.
// 27. The function showLunchMenu should have a single parameter.
// 28. When the input array is empty, the function showLunchMenu should log the string "The menu is empty." to the console.
// 29. showLunchMenu(["Greens", "Corns", "Beans"]) should log "Menu items: Greens, Corns, Beans" to the console.
// 30. showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]) should log "Menu items: Pizza, Burger, Fries, Salad" to the console.



let lunches = [];

function addLunchToEnd(arr,str){
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr
}

function addLunchToStart(arr,str){
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`)
  return arr
}

function removeLastLunch(arr){
  if(arr.length === 0){
    console.log("No lunches to remove.");
  }else {
    console.log(`${arr.pop()} removed from the end of the lunch menu.`);
  }

  return arr
  
}

function removeFirstLunch(arr){
  if(arr.length === 0){
    console.log("No lunches to remove.");
  }else {
    console.log(`${arr.shift()} removed from the start of the lunch menu.`);
  }
  return arr
  
}

function getRandomLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches available.");
    }else{
      const random = Math.floor(Math.random() * arr.length);
      console.log(`Randomly selected lunch: ${arr[random]}`)
    }
}

function showLunchMenu(arr) {
    if (arr.length === 0) {
        console.log("The menu is empty.");
    } else {
        console.log(`Menu items: ${arr.join(", ")}`);
    }
}
