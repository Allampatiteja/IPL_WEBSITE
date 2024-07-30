const pointsTableData = {
    2014: [
        { position: 1, team: "Kings XI Punjab", matches: 14, wins: 11, losses: 3, points: 22 },
        { position: 2, team: "Kolkata Knight Riders", matches: 14, wins: 9, losses: 5, points: 18 },
        { position: 3, team: "Chennai Super kings", matches: 14, wins: 9, losses: 5, points: 18 },
        { position: 4, team: "Mumbai Indians", matches: 14, wins: 7, losses: 7, points: 14 },
        { position: 5, team: "Rajasthan Royals", matches: 14, wins: 7, losses: 7, points: 14},
        { position: 6, team: "Sunrises Hyderabad", matches: 14, wins: 6, losses: 8, points: 12 },
        { position: 7, team: "Royal Challengers Banglore", matches: 14, wins: 5, losses: 9, points: 10 },
        { position: 8, team: "Delhi Daredevils", matches: 14, wins: 2, losses: 12, points: 4 },
        // Add more teams as necessary
    ],
    2015: [
        { position: 1, team: "Chennai Super kings", matches: 14, wins: 9, losses: 5, points: 18 },
        { position: 2, team: "Mumbai Indians", matches: 14, wins: 8, losses: 6, points: 16 },
        { position: 3, team: "Royal Challengers Banglore", matches: 14, wins: 7, losses: 5, points: 16 },
        { position: 4, team: "Rajasthan Royals", matches: 14, wins: 7, losses: 5, points: 16},
        { position: 5, team: "Kolkata Knight Riders", matches: 14, wins: 7, losses: 6, points: 15 },
        { position: 6, team: "Sunrises Hyderabad", matches: 14, wins: 7, losses: 7, points: 14},
        { position: 7, team: "Delhi Daredevils", matches: 14, wins: 5, losses: 8, points: 11 },
        { position: 8, team: "Kings XI Punjab", matches: 14, wins: 3, losses: 11, points: 6 },  
    ],
    2016: [
        { position: 1, team: "Gujarath Lions", matches: 14, wins: 9, losses: 5, points: 18 },
        { position: 2, team: "Royal Challengers Banglore", matches: 14, wins: 8, losses: 6, points: 16 },
        { position: 3, team: "Sunrises Hyderabad", matches: 14, wins: 8, losses: 6, points: 16 },
        { position: 4, team: "Kolkata Knight Riders", matches: 14, wins: 8, losses: 6, points: 16},
        { position: 5, team: "Mumbai Indians", matches: 14, wins: 7, losses: 7, points: 14},
        { position: 6, team: "Delhi Daredevils", matches: 14, wins: 7, losses: 7, points: 14},
        { position: 7, team: "Rising Pune Supergiants", matches: 14, wins: 5, losses: 9, points: 10 },
        { position: 8, team: "Kings XI Punjab", matches: 14, wins: 4, losses: 10, points: 8 },   
    ],
    2017: [
        { position: 1, team: "Mumbai Indians", matches: 14, wins: 10, losses: 4, points: 20 },
        { position: 2, team: "Rising Pune Supergiants", matches: 14,  wins: 9, losses: 5, points: 18 },
        { position: 3, team: "Sunrises Hyderabad", matches: 14, wins: 8, losses: 5, points: 17 },
        { position: 4, team: "Kolkata Knight Riders", matches: 14, wins: 8, losses: 6, points: 16},
        { position: 5, team: "Kings XI Punjab", matches: 14, wins: 7, losses: 7, points: 14},
        { position: 6, team: "Delhi Daredevils", matches: 14, wins: 6, losses: 8, points: 12},
        { position: 7, team: "Gujarath Lions", matches: 14, wins: 4, losses: 10, points: 8},
        { position: 8, team: "Royal Challengers Banglore", matches: 14, wins: 3, losses: 10, points: 7},   
    ],
    2018: [
        { position: 1, team: "Sunrises Hyderabad", matches: 14, wins: 9, losses: 5, points: 18 },
        { position: 2, team: "Chennai Super kings", matches: 14,  wins: 9, losses: 5, points: 18 },
        { position: 3, team: "Kolkata Knight Riders", matches: 14,wins: 8, losses: 6, points: 16},
        { position: 4, team: "Rajasthan Royals", matches: 14,  wins: 7, losses: 7, points: 14},
        { position: 5, team: "Mumbai Indians", matches: 14, wins: 6, losses: 8, points: 12},
        { position: 6, team: "Royal Challengers Banglore", matches: 14, wins: 6, losses: 8, points: 12},
        { position: 7, team: "Kings XI Punjab", matches: 14, wins: 6, losses: 8, points: 12},
        { position: 8, team: "Delhi Daredevils", matches: 14, wins: 5, losses: 9, points: 10},   
    ],
    2019: [
        { position: 1, team: "Mumbai Indians", matches: 14, wins: 9, losses: 5, points: 18 },
        { position: 2, team: "Chennai Super kings", matches: 14,  wins: 9, losses: 5, points: 18 },
        { position: 3, team: "Delhi Capitals", matches: 14, wins: 9, losses: 5, points: 18 },
        { position: 4, team: "Sunrises Hyderabad", matches: 14, wins: 6, losses: 8, points: 12},
        { position: 5, team: "Kolkata Knight Riders", matches: 14, wins: 6, losses: 8, points: 12},
        { position: 6, team: "Kings XI Punjab", matches: 14, wins: 6, losses: 8, points: 12},
        { position: 7, team: "Rajasthan Royals", matches: 14, wins: 5, losses: 8, points: 11},
        { position: 8, team: "Royal Challengers Banglore", matches: 14,  wins: 5, losses: 8, points: 11},   
    ],
    2020: [
        { position: 1, team: "Mumbai Indians", matches: 14, wins: 9, losses: 5, points: 18 },
        { position: 2, team: "Delhi Capitals", matches: 14,  wins: 9, losses: 5, points: 18 },
        { position: 3, team: "Sunrises Hyderabad", matches: 14, wins: 7, losses: 7, points: 14 },
        { position: 4, team: "Royal Challengers Banglore", matches: 14,wins: 7, losses: 7, points: 14 },
        { position: 5, team: "Kolkata Knight Riders", matches: 14,wins: 7, losses: 7, points: 14 },
        { position: 6, team: "Kings XI Punjab", matches: 14, wins: 6, losses: 8, points: 12},
        { position: 7, team: "Chennai Super Kings", matches: 14, wins: 6, losses: 8, points: 12},
        { position: 8, team: "Rajasthan Royals", matches: 14, wins: 6, losses: 8, points: 12},
    ],
    2021: [
        { position: 1, team: "Mumbai Indians", matches: 14, wins: 9, losses: 5, points: 18 },
        { position: 2, team: "Delhi Capitals", matches: 14,  wins: 9, losses: 5, points: 18 },
        { position: 3, team: "Sunrises Hyderabad", matches: 14, wins: 7, losses: 7, points: 14 },
        { position: 4, team: "Royal Challengers Banglore", matches: 14,wins: 7, losses: 7, points: 14 },
        { position: 5, team: "Kolkata Knight Riders", matches: 14,wins: 7, losses: 7, points: 14 },
        { position: 6, team: "Kings XI Punjab", matches: 14, wins: 6, losses: 8, points: 12},
        { position: 7, team: "Chennai Super Kings", matches: 14, wins: 6, losses: 8, points: 12},
        { position: 8, team: "Rajasthan Royals", matches: 14, wins: 6, losses: 8, points: 12},
    ],
    2022: [
        { position: 1, team: "Gujarat Titans", matches: 14, wins: 10, losses: 4, points: 20},
        { position: 2, team: "Rajasthan Royals", matches: 14,  wins: 9, losses: 5, points: 18 },
        { position: 3, team: "Lucknow Super Giants", matches: 14, wins: 9, losses: 5, points: 18 },
        { position: 4, team: "Royal Challengers Banglore", matches: 14,wins: 8, losses: 6, points: 16},
        { position: 5, team: "Delhi Capitals", matches: 14,wins: 7, losses: 7, points: 14 },
        { position: 6, team: "Punjab Kings", matches: 14,wins: 7, losses: 7, points: 14 },
        { position: 7, team: "Kolkata Knight Riders", matches: 14, wins: 6, losses: 8, points: 12},
        { position: 8, team: "Sunrises Hyderabad", matches: 14, wins: 6, losses: 8, points: 12},
        { position: 9, team: "Chennai Super Kings", matches: 14, wins: 4, losses: 10, points: 8},
        { position: 10, team: "Mumbai Indians", matches: 14,  wins: 4, losses: 10, points: 8},
        
    ],
    2023: [
        { position: 1, team: "Gujarat Titans", matches: 14, wins: 10, losses: 4, points: 20},
        { position: 2, team: "Chennai Super Kings", matches: 14,  wins: 8, losses: 5, points: 17 },
        { position: 3, team: "Lucknow Super Giants", matches: 14,  wins: 8, losses: 5, points: 17 },
        { position: 4, team: "Mumbai Indians", matches: 14,wins: 8, losses: 6, points: 16},
        { position: 5, team: "Rajasthan Royals", matches: 14,wins: 7, losses: 7, points: 14 },
        { position: 6, team: "Royal Challengers Banglore", matches: 14,wins: 7, losses: 7, points: 14 },
        { position: 7, team: "Kolkata Knight Riders", matches: 14, wins: 6, losses: 8, points: 12},
        { position: 8, team: "Punjab Kings", matches: 14, wins: 6, losses: 8, points: 12},
        { position: 9, team: "Delhi Capitals", matches: 14, wins: 5, losses: 9, points: 10},
        { position: 10, team: "Sunrises Hyderabad", matches: 14,  wins: 4, losses: 10, points: 8},
        
    ],
    2024: [
        { position: 1, team: "Kolkata Knight Riders", matches: 14, wins: 9, losses: 3, points: 20},
        { position: 2, team: "Sunrises Hyderabad", matches: 14,  wins: 8, losses: 5, points: 17 },
        { position: 3, team: "Rajasthan Royals", matches: 14, wins: 8, losses: 5, points: 17 },
        { position: 4, team: "Royal Challengers Banglore", matches: 14,wins: 7, losses: 7, points: 14 },
        { position: 5, team: "Chennai Super Kings", matches: 14,wins: 7, losses: 7, points: 14 },
        { position: 6, team: "Delhi Capitals", matches: 14,wins: 7, losses: 7, points: 14 },
        { position: 7, team: "Lucknow Super Giants", matches: 14,wins: 7, losses: 7, points: 14 },
        { position: 8, team: "Gujarat Titans", matches: 14, wins: 5, losses: 7, points: 12},
        { position: 9, team: "Punjab Kings", matches: 14, wins: 5, losses: 9, points: 10},
        { position: 10, team: "Mumbai Indians", matches: 14,  wins: 4, losses: 10, points: 8},
        
    ],
    // Add data for other years up to 2024
};

function fetchPointsTable() {
    const year = document.getElementById('year-select').value;
    const tableBody = document.getElementById('points-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    if (pointsTableData[year]) {
        pointsTableData[year].forEach(team => {
            const row = document.createElement('tr');
            Object.values(team).forEach(value => {
                const cell = document.createElement('td');
                cell.textContent = value;
                row.appendChild(cell);
            });
            tableBody.appendChild(row);
        });
    } else {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 6;
        cell.textContent = 'No data available for this year.';
        row.appendChild(cell);
        tableBody.appendChild(row);
    }
}

// Initialize the table with the first year's data
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year-select').value = '2014';
    fetchPointsTable();
});
