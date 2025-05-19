const ctx = document.getElementById('basicChart').getContext('2d');
const basicChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      axis: 'y',
      barPercentage: 0.9,
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: [
        'rgba(201, 203, 207, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',

      ],
      hoverBackgroundColor: 'rgba(189, 195, 199)',
      borderColor: 'rgba(0,0,0)',
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y',
  }
});