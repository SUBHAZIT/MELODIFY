// Charts functionality
function setupListeningChart() {
    const ctx = document.getElementById('listeningChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Listening Hours',
                data: [2.5, 3.2, 4.1, 3.8, 5.2, 6.0, 4.5],
                backgroundColor: 'rgba(29, 185, 84, 0.7)',
                borderColor: 'rgba(29, 185, 84, 1)',
                borderWidth: 1,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'white'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'white'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white',
                        font: {
                            weight: 'bold'
                        }
                    }
                }
            }
        }
    });
    
    // Time range buttons
    document.querySelectorAll('.time-range button').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelector('.time-range button.active').classList.remove('active');
            this.classList.add('active');
            // In a real app, you would update the chart data here
        });
    });
}