const ctx = document.getElementById('pieChart').getContext('2d');

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Orange'],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100, 150, 200],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(46, 204, 113)',
      'rgb(249, 105, 14)'
    ],
    hoverOffset: 4
  }]
};

const config = {
  type: 'pie',
  data: data
};

new Chart(ctx, config);
