const trendData = {
    'Python': [20, 22, 25, 28, 30, 35, 40, 45, 50, 55],
    'JavaScript': [15, 18, 20, 22, 25, 28, 30, 32, 35, 38],
    'Java': [20, 20, 21, 22, 24, 26, 28, 30, 32, 35],
    'Csharp': [10, 12, 13, 15, 17, 18, 20, 22, 23, 25],
    'TypeScript': [5, 7, 8, 10, 12, 14, 16, 18, 20, 22],
    'Go': [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    'Rust': [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    'Kotlin': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    'SQL': [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    'HTML': [5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    'PHP': [9, 8, 7, 6, 5, 4, 4, 3, 3, 2],
    'C': [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    'Cpp': [6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
};

const ctx = document.getElementById('languageChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {},
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        updateChart(button.id);
    });
});
const colorPalette = [
    'skyblue', 'lightgreen', 'lightpink', '#FFFFE0', 'lavender',
    '#FFDAB9', ' lightblue', '#4BC0C0', '#36A2EB', '#FFCD56'
];


function updateChart(language) {
    myChart.destroy(); // Destroy the existing chart to recreate with new data(here destroy means  incresing the data percentages )

    // Use predefined color palette and cycle through if more than 10 data points (as we can comfort colors)
    const colors = trendData[language].map((_, index) => colorPalette[index % colorPalette.length]);

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: language,
                data: trendData[language],
                borderColor: colors,
                backgroundColor: colors,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            animation: {
                duration: 8000,
                easing: 'easeInQuard' // Starts slowly and accelerates the bar graph
            },
            hover: {
                animationDuration: 3500, // Shorter duration for hover animations of the bar graph
            },
            tooltips: {
                mode: 'index',
                intersect: false
            }
        }
    });
}
