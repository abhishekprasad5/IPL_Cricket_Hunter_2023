players = [

    
    {
        name: "Devon Conway",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/601.png",
        team: "Chennai Super Kings",
        specialization: "Wicketkeeper Batsman"
    },
    {
        name: "Ruturaj Gaikwad",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/102.png",
        team: "Chennai Super Kings",
        specialization: "Batsman"
    },
    {
        name: "Moeen Ali",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/206.png",
        team: "Chennai Super Kings",
        specialization: "Batting all-rounder"
    },
    {
        name: "Ben Stokes",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/177.png",
        team: "Chennai Super Kings",
        specialization: "All-rounder"
    },
    {
        name: "Ambati Rayudu",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/60.png",
        team: "Chennai Super Kings",
        specialization: "Wicketkeeper Batter"
    },
    {
        name: "Shivam Dube",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/211.png",
        team: "Chennai Super Kings",
        specialization: "All-rounder"
    },
    {
        name: "Ravindra Jadeja",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/46.png",
        team: "Chennai Super Kings",
        specialization: "All-rounder"
    },
    {
        name: "MS Dhoni",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/57.png",
        team: "Chennai Super Kings",
        specialization: "Wicketkeeper Batsman"
    }
    ,
    {
        name: "Mitchell Santner",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/75.png",
        team: "Chennai Super Kings",
        specialization: "Bowling all-rounder"
    },
    {
        name: "Tushar Deshpande",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/539.png",
        team: "Chennai Super Kings",
        specialization: "Bowler"
    },
    {
        name: "Deepak Chahar",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/91.png",
        team: "Chennai Super Kings",
        specialization: "Bowler"
    },
    {
        name: "Rajvardhan Hangargekar",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/783.png",
        team: "Chennai Super Kings",
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