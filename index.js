// Task 1
var customerName = 'bob'; // Declaring customerName in global scope

// Task 2
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // Converts customerName to uppercase
}

// Task 3
function setBestCustomer() {
  bestCustomer = 'not bob'; // Declaring bestCustomer in global scope (without var)
}

// Task 4
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Overwriting bestCustomer globally
}

// Task 5
const leastFavoriteCustomer = 'Alice'; // Declaring leastFavoriteCustomer as a constant

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Bob'; // This will throw an error because constants can't be reassigned
}
