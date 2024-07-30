const pointsTableData = {
    2014: [
     {Sno:"1", Team: "KKR", Player: "Robin Uthappa", Role: "Batting-allrounder", Awarded: "Orange-cap", Country: "India"},
     {Sno:"2", Team: "CSK", Player: "Mohit Sharma", Role: "Bowler", Awarded: "Purple-cap", Country: "India"   },
     {Sno:"3", Team: "PBKS", Player: "Virender Sehwag", Role: "Batting-allrounder", Awarded: "Highest scores", Country: "India"},
     {Sno:"4", Team: "CSK", Player: "Ravindra jadeja", Role: "Bowling-allrounder", Awarded: "Best bowling Figures", Country: "India"},
     {Sno:"5", Team: "KKR", Player: "Robin uthappa", Role: "Batting-allrounder", Awarded: "MVP", Country: "India"   },
     {Sno:"6", Team: "CSK", Player: "MS.Dhoni", Role: "Captain", Awarded: "Fair-play", Country: "India"},
     {Sno:"7", Team: "PBKS", Player:"Axar patel", Role: "Bowling-allrounder", Awarded: "Emerging Player", Country: "India"   },
    ],
    2015: [
     {Sno:"1", Team: "SRH", Player: "David Warner", Role: "Batting-allrounder", Awarded: "Orange-cap", Country: "Australia"},
     {Sno:"2", Team: "CSK", Player: "DJ Bravo", Role: "Bowling-allrounder", Awarded: "Purple-cap", Country: "Trinidadia"   },
     {Sno:"3", Team: "RCB", Player: "AB de villiers", Role: "Wicket-keeper,Batsmen", Awarded: "Highest scores", Country: "South Africa"},
     {Sno:"4", Team: "CSK", Player: "Ashish Nehra", Role: "Bowler", Awarded: "Best bowling Figures", Country: "India"},
     {Sno:"5", Team: "KKR", Player: "Andre Russell", Role: "Batting-allrounder", Awarded: "MVP", Country: "West Indies"   },
     {Sno:"6", Team: "CSK", Player: "MS.Dhoni", Role: "Captain", Awarded: "Fair-play", Country: "India"},
     {Sno:"7", Team: "DC", Player:"Shreyas Iyer", Role: "Batsmen", Awarded: "Emerging Player", Country: "India"   },
    ],
   
   2016: [
     {Sno: "1", Team: "RCB", Player: "Virat Kohli", Role: "Batsman", Awarded: "Orange-cap", Country: "India", Year: "2016"},
     {Sno: "2", Team: "SRH", Player: "Bhuvneshwar Kumar", Role: "Bowler", Awarded: "Purple-cap", Country: "India", Year: "2016"},
     {Sno: "3", Team: "RCB", Player: "AB de Villiers", Role: "Batsman", Awarded: "Highest scores", Country: "South Africa", Year: "2016"},
     {Sno: "4", Team: "SRH", Player: "Mustafizur Rahman", Role: "Bowler", Awarded: "Emerging Player", Country: "Bangladesh", Year: "2016"},
     {Sno: "5", Team: "SRH", Player: "David Warner", Role: "Captain", Awarded: "Fair-play", Country: "Australia", Year: "2016"},
     {Sno: "6", Team: "KKR", Player: "Andre Russell", Role: "Batting-allrounder", Awarded: "MVP", Country: "West Indies", Year: "2016"},
     ],
 
      2017: [
     {Sno: "1", Team: "SRH", Player: "David Warner", Role: "Batsman", Awarded: "Orange-cap", Country: "Australia", Year: "2017"},
     {Sno: "2", Team: "SRH", Player: "Bhuvneshwar Kumar", Role: "Bowler", Awarded: "Purple-cap", Country: "India", Year: "2017"},
     {Sno: "3", Team: "RCB", Player: "Chris Gayle", Role: "Batsman", Awarded: "Highest scores", Country: "West Indies", Year: "2017"},
     {Sno: "4", Team: "MI", Player: "Krunal Pandya", Role: "Allrounder", Awarded: "Emerging Player", Country: "India", Year: "2017"},
     {Sno: "5", Team: "MI", Player: "Rohit Sharma", Role: "Captain", Awarded: "Fair-play", Country: "India", Year: "2017"},
     {Sno: "6", Team: "MI", Player: "Jasprit Bumrah", Role: "Bowler", Awarded: "Best bowling Figures", Country: "India", Year: "2017"},
      ],
 
      2018: [
     {Sno: "1", Team: "SRH", Player: "Kane Williamson", Role: "Batsman", Awarded: "Orange-cap", Country: "New Zealand", Year: "2018"},
     {Sno: "2", Team: "KXIP", Player: "Andrew Tye", Role: "Bowler", Awarded: "Purple-cap", Country: "Australia", Year: "2018"},
     {Sno: "3", Team: "RCB", Player: "AB de Villiers", Role: "Batsman", Awarded: "Highest scores", Country: "South Africa", Year: "2018"},
     {Sno: "4", Team: "CSK", Player: "Rishabh Pant", Role: "Batsman", Awarded: "Emerging Player", Country: "India", Year: "2018"},
     {Sno: "5", Team: "CSK", Player: "MS Dhoni", Role: "Captain", Awarded: "Fair-play", Country: "India", Year: "2018"},
     {Sno: "6", Team: "SRH", Player: "Rashid Khan", Role: "Bowler", Awarded: "MVP", Country: "Afghanistan", Year: "2018"},
      ],
 
     2019: [
     {Sno: "1", Team: "SRH", Player: "David Warner", Role: "Batsman", Awarded: "Orange-cap", Country: "Australia", Year: "2019"},
     {Sno: "2", Team: "DC", Player: "Kagiso Rabada", Role: "Bowler", Awarded: "Purple-cap", Country: "South Africa", Year: "2019"},
     {Sno: "3", Team: "RCB", Player: "AB de Villiers", Role: "Batsman", Awarded: "Highest scores", Country: "South Africa", Year: "2019"},
     {Sno: "4", Team: "KKR", Player: "Shubman Gill", Role: "Batsman", Awarded: "Emerging Player", Country: "India", Year: "2019"},
     {Sno: "5", Team: "MI", Player: "Rohit Sharma", Role: "Captain", Awarded: "Fair-play", Country: "India", Year: "2019"},
     {Sno: "6", Team: "MI", Player: "Hardik Pandya", Role: "Allrounder", Awarded: "MVP", Country: "India", Year: "2019"},
     ],
 
      2020: [
     {Sno: "1", Team: "KXIP", Player: "KL Rahul", Role: "Batsman", Awarded: "Orange-cap", Country: "India", Year: "2020"},
     {Sno: "2", Team: "DC", Player: "Kagiso Rabada", Role: "Bowler", Awarded: "Purple-cap", Country: "South Africa", Year: "2020"},
     {Sno: "3", Team: "RR", Player: "Jofra Archer", Role: "Bowler", Awarded: "MVP", Country: "England", Year: "2020"},
     {Sno: "4", Team: "RCB", Player: "Devdutt Padikkal", Role: "Batsman", Awarded: "Emerging Player", Country: "India", Year: "2020"},
     {Sno: "5", Team: "MI", Player: "Trent Boult", Role: "Bowler", Awarded: "Best bowling Figures", Country: "New Zealand", Year: "2020"},
      ],
      
     2021: [
     {Sno: "1", Team: "CSK", Player: "Ruturaj Gaikwad", Role: "Batsman", Awarded: "Orange-cap", Country: "India", Year: "2021"},
     {Sno: "2", Team: "RCB", Player: "Harshal Patel", Role: "Bowler", Awarded: "Purple-cap", Country: "India", Year: "2021"},
     {Sno: "3", Team: "CSK", Player: "Faf du Plessis", Role: "Batsman", Awarded: "Highest scores", Country: "South Africa", Year: "2021"},
     {Sno: "4", Team: "KKR", Player: "Venkatesh Iyer", Role: "Allrounder", Awarded: "Emerging Player", Country: "India", Year: "2021"},
     {Sno: "5", Team: "MI", Player: "Rohit Sharma", Role: "Captain", Awarded: "Fair-play", Country: "India", Year: "2021"},
     ],
      
     2022: [
     {Sno: "1", Team: "RR", Player: "Jos Buttler", Role: "Batsman", Awarded: "Orange-cap", Country: "England", Year: "2022"},
     {Sno: "2", Team: "RCB", Player: "Wanindu Hasaranga", Role: "Bowler", Awarded: "Purple-cap", Country: "Sri Lanka", Year: "2022"},
     {Sno: "3", Team: "RR", Player: "Yuzvendra Chahal", Role: "Bowler", Awarded: "Best bowling Figures", Country: "India", Year: "2022"},
     {Sno: "4", Team: "RCB", Player: "Faf du Plessis", Role: "Batsman", Awarded: "Highest scores", Country: "South Africa", Year: "2022"},
     {Sno: "5", Team: "LSG", Player: "Avesh Khan", Role: "Bowler", Awarded: "Emerging Player", Country: "India", Year: "2022"},
     ],
 
      2023: [
     {Sno: "1", Team: "RCB", Player: "Faf du Plessis", Role: "Batsman", Awarded: "Orange-cap", Country: "South Africa", Year: "2023"},
     {Sno: "2", Team: "CSK", Player: "Matheesha Pathirana", Role: "Bowler", Awarded: "Purple-cap", Country: "Sri Lanka", Year: "2023"},
     {Sno: "3", Team: "MI", Player: "Suryakumar Yadav", Role: "Batsman", Awarded: "Highest scores", Country: "India", Year: "2023"},
     {Sno: "4", Team: "MI", Player: "Tilak Varma", Role: "Batsman", Awarded: "Emerging Player", Country: "India", Year: "2023"},
     {Sno: "5", Team: "CSK", Player: "Ruturaj Gaikwad", Role: "Batsman", Awarded: "MVP", Country: "India", Year: "2023"},
      ],
 
      2024: [
     {Sno: "1", Team: "GT", Player: "Shubman Gill", Role: "Batsman", Awarded: "Orange-cap", Country: "India", Year: "2024"},
     {Sno: "2", Team: "DC", Player: "Anrich Nortje", Role: "Bowler", Awarded: "Purple-cap", Country: "South Africa", Year: "2024"},
     {Sno: "3", Team: "CSK", Player: "Devon Conway", Role: "Batsman", Awarded: "Highest scores", Country: "New Zealand", Year: "2024"},
     {Sno: "4", Team: "RCB", Player: "Rajat Patidar", Role: "Batsman", Awarded: "Emerging Player", Country: "India", Year: "2024"},
     {Sno: "5", Team: "RR", Player: "Jos Buttler", Role: "Batsman", Awarded: "MVP", Country: "England", Year: "2024"}
    ],
     
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
 
 document.addEventListener('DOMContentLoaded', () => {
     document.getElementById('year-select').value = '2014';
     fetchPointsTable();
 });
 