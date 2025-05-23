const ctx = document.getElementById('doughnutChart').getContext('2d');

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green'],
  datasets: [{
    label: 'Data',
    data: [300, 50, 100, 20],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)', 
      'rgb(46, 204, 113)'
    ],
    hoverOffset: 4
  }]
};

const config = {
  type: 'doughnut',
  data: data
};

new Chart(ctx, config);
