const ctx = document.getElementById('myChart').getContext('2d');

const data = {
  datasets: [{
    label: 'First Dataset',
    data: [
      { x: 20, y: 30, r: 15 },
      { x: 40, y: 10, r: 10 }
    ],
    backgroundColor: 'rgb(255, 99, 132)'
  }]
};

const config = {
  type: 'bubble',
  data: data,
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: 'X Axis'
        },
        beginAtZero: true,
        min: 0,
        max: 50
      },
      y: {
        title: {
          display: true,
          text: 'Y Axis'
        },
        beginAtZero: true,
        min: 0,
        max: 50
      }
    }
  }
};

new Chart(ctx, config);
