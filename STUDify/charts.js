// Sample data for the charts (you can replace this with real data)
const weeklyExpensesData = [20, 30, 25, 35, 20, 40, 30];
const monthlyExpensesData = [10, 10, 10, 30, 10, 10, 12];

// Function to create a line chart
function createLineChart(elementId, data, label) {
    const ctx = document.getElementById(elementId).getContext('2d');
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
            datasets: [{
                label: label,
                data: data,
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Weeks'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Amount ($)'
                    }
                }
            }
        }
    });
}

// Function to create a doughnut chart
function createDoughnutChart(elementId, data, labels) {
    const ctx = document.getElementById(elementId).getContext('2d');
    return new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Create line charts for weekly and monthly expenses
createLineChart('weeklyExpensesChart', weeklyExpensesData, 'Weekly Expenses');
createLineChart('monthlyExpensesChart', monthlyExpensesData, 'Monthly Expenses');

// Sample data for the doughnut chart
const calorieData = [80, 20, 30];
const calorieLabels = ['Breakfast', 'Lunch', 'Dinner'];

// Create a doughnut chart for calorie intake
createDoughnutChart('calorieIntakeChart', calorieData, calorieLabels);