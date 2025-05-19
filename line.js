// Simulated version of Utils.months({ count: 7 }) since we aren't using Chart.js utils directly.
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const config = {
  type: 'line',
  data: data
};

const ctx = document.getElementById('lineChart').getContext('2d');
new Chart(ctx, config);
