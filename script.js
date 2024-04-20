// Function to create a Promise that resolves after a random time between 1 and 3 seconds
function createPromise(name) {
  const randomTime = Math.floor(Math.random() * 3000) + 1000; // Random time between 1000 ms (1 second) and 3000 ms (3 seconds)
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} resolved after ${randomTime / 1000} seconds`);
      resolve(randomTime);
    }, randomTime);
  });
}

// Function to update the table with the resolved promises
function updateTable(promises) {
  const tableBody = document.getElementById("output");
  
  // Remove loading text
  tableBody.innerHTML = "";

  // Add rows for each resolved promise
  promises.forEach((time, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>Promise ${index + 1}</td>
      <td>${(time / 1000).toFixed(3)}</td>
    `;
    tableBody.appendChild(row);
  });

  // Calculate total time
  const totalTime = promises.reduce((acc, curr) => acc + curr, 0);
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td>Total</td>
    <td>${(totalTime / 1000).toFixed(3)}</td>
  `;
  tableBody.appendChild(totalRow);
}

// Create an array of three promises
const promises = [
  createPromise("Promise 1"),
  createPromise("Promise 2"),
  createPromise("Promise 3"),
];

// Update the table when all promises resolve
Promise.all(promises)
  .then((results) => {
    updateTable(results);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
