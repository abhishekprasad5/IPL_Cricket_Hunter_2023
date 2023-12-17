players = [

    
    {
        name: "Yashasvi Jaiswal",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/533.png",
        team: "Rajasthan Royal",
        specialization: "Batter"
    },
    {
        name: "Jos Buttler",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/182.png",
        team: "Rajasthan Royal",
        specialization: "Wicketkeeper Batter"
    },
    {
        name: "Sanju Samson",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/190.png",
        team: "Rajasthan Royal",
        specialization: "Wicketkeeper Batter"
    },
    {
        name: "Devdutt Padikkal",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/200.png",
        team: "Rajasthan Royal",
        specialization: "Batter"
    },
    {
        name: "Riyan Parag",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/189.png",
        team: "Rajasthan Royal",
        specialization: "Batter"
    },
    {
        name: "Shimron Hetmyer",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/210.png",
        team: "Rajasthan Royal",
        specialization: "Batter"
    },
    {
        name: "Ravichandran Ashwin",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/45.png",
        team: "Rajasthan Royal",
        specialization: "Bowling All-rounder"
    },
    {
        name: "Jason Holder",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/263.png",
        team: "Rajasthan Royal",
        specialization: "All-rounder"
    },
    {
        name: "Trent Boult",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/66.png",
        team: "Rajasthan Royal",
        specialization: "Bowler"
    },
    {
        name: "KM Asif",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/88.png",
        team: "Rajasthan Royal",
        specialization: "Bowler"
    },
    {
        name: "Yuzvendra Chahal",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/10.png",
        team: "Rajasthan Royal",
        specialization: "Bowler"
    },
    {
        name: "Navdeep Saini",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/207.png",
        team: "Rajasthan Royal",
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