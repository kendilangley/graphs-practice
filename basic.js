// Optional: Set global styles
Chart.defaults.backgroundColor = '#9BD0F5';
Chart.defaults.borderColor = '#36A2EB';
Chart.defaults.color = '#000';

// Create the chart with JS
const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
      label: 'Votes',
      data: [12, 19, 3]
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
