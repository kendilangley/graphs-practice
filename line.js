const ctx = document.getElementById('lineChart').getContext('2d');
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'];

const data = {
  labels: labels,
  datasets: [
    {
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40, 12, 20, 15],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1 //changes the ridgness of the lines
  },
  {
    label: 'My Second Dataset',
    data: [60, 19, 20, 41, 44, 23, 16, 30, 43, 37],
    fill: false,
    borderColor: 'rgb(255, 99, 71)',
    tension: 0.1 //changes the ridgness of the lines
  }
]
};

const config = {
  type: 'line',
  data: data
};

new Chart(ctx, config);
