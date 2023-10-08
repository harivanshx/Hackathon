// Get references to HTML elements
const exerciseInput = document.getElementById("exercise-input");
const setsInput = document.getElementById("sets-input");
const repsInput = document.getElementById("reps-input");
const addButton = document.getElementById("add-button");
const workoutList = document.getElementById("workout-list");

// Add a new exercise to the log
addButton.addEventListener("click", function() {
    const exercise = exerciseInput.value.trim();
    const sets = setsInput.value.trim();
    const reps = repsInput.value.trim();
    
    if (exercise !== "" && sets !== "" && reps !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${exercise} - Sets: ${sets}, Reps: ${reps}
            <button class="delete-button">Delete</button>
        `;
        
        workoutList.appendChild(listItem);
        exerciseInput.value = "";
        setsInput.value = "";
        repsInput.value = "";

        // Add event listener to delete button
        const deleteButton = listItem.querySelector(".delete-button");
        deleteButton.addEventListener("click", function() {
            listItem.remove();
        });
    }
});
