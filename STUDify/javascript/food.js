// Get references to HTML elements
const foodInput = document.getElementById("food-input");
const caloriesInput = document.getElementById("calories-input");
const addButton = document.getElementById("add-button");
const foodList = document.getElementById("food-list");

// Add a new food item to the log
addButton.addEventListener("click", function() {
    const foodItem = foodInput.value.trim();
    const calories = caloriesInput.value.trim();
    
    if (foodItem !== "" && calories !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${foodItem} - Calories: ${calories}
            <button class="delete-button">Delete</button>
        `;
        
        foodList.appendChild(listItem);
        foodInput.value = "";
        caloriesInput.value = "";

        // Add event listener to delete button
        const deleteButton = listItem.querySelector(".delete-button");
        deleteButton.addEventListener("click", function() {
            listItem.remove();
        });
    }
});
