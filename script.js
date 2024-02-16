// Function to generate a random delay between 1 and 3 seconds
const getRandomDelay = () => Math.floor(Math.random() * 3 + 1) * 1000;

// Function to add a new row to the table
const addRow = (name, time) => {
  const tbody = document.getElementById('output');
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${time}</td>
  `;
  tbody.appendChild(newRow);
};

// Add loading row by default
addRow('Loading...', 'Loading...');

// Promises
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    const time = getRandomDelay() / 1000;
    resolve(time);
  }, getRandomDelay());
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    const time = getRandomDelay() / 1000;
    resolve(time);
  }, getRandomDelay());
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    const time = getRandomDelay() / 1000;
    resolve(time);
  }, getRandomDelay());
});

// Resolve all promises and update the table
Promise.all([promise1, promise2, promise3]).then((values) => {
  // Remove loading row
  document.getElementById('output').innerHTML = '';

  // Add rows for each promise result
  addRow('Promise 1', values[0]);
  addRow('Promise 2', values[1]);
  addRow('Promise 3', values[2]);

  // Calculate and add total time taken
  const totalTime = values.reduce((acc, curr) => acc + curr, 0);
  addRow('Total', totalTime.toFixed(3));
});
