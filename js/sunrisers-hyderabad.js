players = [

    
    {
        name: "Abhishek Sharma",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/212.png",
        team: "Sunrisers Hyderabad",
        specialization: "All-rounder"
    },
    {
        name: "Mayank Agarwal",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/55.png",
        team: "Sunrisers Hyderabad",
        specialization: "Batter"
    },
    {
        name: "Rahul Tripathi",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/188.png",
        team: "Sunrisers Hyderabad",
        specialization: "Batter"
    },
    {
        name: "Harry Brook",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1218.png",
        team: "Sunrisers Hyderabad",
        specialization: "Batter"
    },
    {
        name: "Washington Sundar",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/20.png",
        team: "Sunrisers Hyderabad",
        specialization: "All-rounder"
    },
    {
        name: "Glenn Phillips",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/635.png",
        team: "Sunrisers Hyderabad",
        specialization: "Wicketkeeper Batter"
    },
    {
        name: "Abdul Samad",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/525.png",
        team: "Sunrisers Hyderabad",
        specialization: "Batter"
    },
    {
        name: "Adil Rashid",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/311.png",
        team: "Sunrisers Hyderabad",
        specialization: "Bowler"
    },
    {
        name: "Bhuvneshwar Kumar",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/15.png",
        team: "Sunrisers Hyderabad",
        specialization: "Bowler"
    },
    {
        name: "Umran Malik",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/637.png",
        team: "Sunrisers Hyderabad",
        specialization: "Bowler"
    },
    {
        name: "T Natarajan",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/224.png",
        team: "Sunrisers Hyderabad",
        specialization: "Bowler"
    },
    {
        name: "Fazalhaq Farooqi",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1011.png",
        team: "Sunrisers Hyderabad",
        specialization: "Bowler"
    }
    

    
]


function searchPlayer() {
    let playerName = document.getElementById('search').value;
    
    if (playerName !== ""){
        let result = players.filter(function(player)
        
                {
                    return player.name.toUpperCase().includes(playerName.toUpperCase())


                })
                displayPlayer(result);
            }

    else{
        displayPlayer(players);
    }

}


function displayPlayer(data) {

    document.getElementById("players").innerHTML=""

    let htmlString = ``

        for (let i = 0 ; i < data.length ; i++){

            htmlString = htmlString + `
            <div class="player">

            <div class="overlay">

                <div class="details">

                    <h1>${data[i].name}</h1>
                    <h2>${data[i].team}</h2>
                    <h2>${data[i].specialization}</h2>
                    
                </div>
            </div>

            <img class="poster"
                src="${data[i].poster}"
                alt="poster">
        </div>
        `
            document.getElementById("players").innerHTML=htmlString
        // console.log(htmlString);

        }

}

displayPlayer(players);