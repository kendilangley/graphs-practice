const ctx = document.getElementById('bubbleChart').getContext('2d');

const data = {
  datasets: [{
    label: 'Datapoint',
    data: [
      { x: 20, y: 40, r: 15 },
      { x: 10, y: 5, r: 10 },
      { x: 15, y: 20, r: 10 },
      { x: 12, y: 2, r: 5 },
      { x: 11, y: 20, r: 9 },
      { x: 5, y: 7, r: 7 },
      { x: 14, y: 9, r: 11 },
      { x: 17, y: 3, r: 11 },
      { x: 20, y: 12, r: 6 },
      { x: 9, y: 13, r: 13 },
      { x: 8, y: 19, r: 11 },
      { x: 40, y: 10, r: 7 },
      { x: 17, y: 25, r: 11 },
      { x: 20, y: 28, r: 6 },
      { x: 9, y: 38, r: 13 },
      { x: 8, y: 23, r: 11 },
      { x: 40, y: 34, r: 7 },
      { x: 33, y: 31, r: 11 },
      { x: 20, y: 28, r: 6 },
      { x: 30, y: 38, r: 13 },
      { x: 33, y: 23, r: 11 },
      { x: 31, y: 34, r: 7 },
      { x: 29, y: 31, r: 11 }
    ],
    backgroundColor: 'rgb(3, 138, 255)', 
    hoverBackgroundColor: 'rgba(189, 195, 199)',
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
          text: 'X Axis Name'
        },
        beginAtZero: true,
        min: 0,
        max: 50
      },
      y: {
        title: {
          display: true,
          text: 'Y Axis Name'
        },
        beginAtZero: true,
        min: 0,
        max: 50
      }
    }
  }
};

new Chart(ctx, config);
