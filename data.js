const labels = ['Pizza', 'Burgers', 'Pasta', 'Sushi', 'Tacos'];
const data = [25, 20, 15, 30, 10];

new Chart(document.getElementById('doughnutChart'), {
  type: 'doughnut',
  data: {
    labels: labels,
    datasets: [{
      label: 'Favorite Foods by Ahmad Baig',
      data: data,
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#2ecc71', '#e67e22']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Favorite Foods (Doughnut Chart)'
      }
    }
  }
});

new Chart(document.getElementById('barChart'), {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Food Popularity by Ahmad Baig',
      data: data,
      backgroundColor: '#3498db'
    }]
  },
  options: {
    indexAxis: 'y',
    plugins: {
      title: {
        display: true,
        text: 'Favorite Foods (Horizontal Bar Chart)'
      }
    }
  }
});
