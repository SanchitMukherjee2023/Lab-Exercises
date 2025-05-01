const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
const values = [10, 15, 13, 17, 20];
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#FFA533'];

Plotly.newPlot('barChart', [{
  x: labels,
  y: values,
  type: 'bar',
  marker: { color: colors }
}], {
  title: 'Monthly Sales - Bar Chart',
  xaxis: { title: 'Month' },
  yaxis: { title: 'Sales' }
});

Plotly.newPlot('lineChart', [{
  x: labels,
  y: values,
  type: 'scatter',
  mode: 'lines+markers',
  line: { color: '#17BECF' }
}], {
  title: 'Monthly Sales Trend - Line Chart',
  xaxis: { title: 'Month' },
  yaxis: { title: 'Sales' }
});

const pieLabels = ['Electronics', 'Clothing', 'Home', 'Books'];
const pieValues = [30, 20, 25, 25];
const pieColors = ['#FF6384', '#36A2EB', '#FFCE56', '#66BB6A'];

Plotly.newPlot('pieChart', [{
  labels: pieLabels,
  values: pieValues,
  type: 'pie',
  marker: { colors: pieColors }
}], {
  title: 'Product Category Distribution - Pie Chart',
  showlegend: true
});

Plotly.newPlot('donutChart', [{
  labels: pieLabels,
  values: pieValues,
  type: 'pie',
  hole: 0.4,
  marker: { colors: pieColors }
}], {
  title: 'Product Category Share - Donut Chart',
  showlegend: true
});
