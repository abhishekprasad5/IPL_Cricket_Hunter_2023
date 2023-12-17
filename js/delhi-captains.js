players = [

    
    {
        name: "Prithvi Shaw",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/51.png",
        team: "Delhi Capitals",
        specialization: "Batter"
    },
    {
        name: "David Warner",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/214.png",
        team: "Delhi Capitals",
        specialization: "Batter"
    },
    {
        name: "Mitchell Marsh",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/40.png",
        team: "Delhi Capitals",
        specialization: "All-rounder"
    },
    {
        name: "Sarfaraz Khan",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/139.png",
        team: "Delhi Capitals",
        specialization: "Batter"
    },
    {
        name: "Rilee Rossouw",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1426.png",
        team: "Delhi Capitals",
        specialization: "Batter"
    },
    {
        name: "Rovman Powell",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/329.png",
        team: "Delhi Capitals",
        specialization: "Batter"
    },
    {
        name: "Aman Khan",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/979.png",
        team: "Delhi Capitals",
        specialization: "Batsman"
    },
    {
        name: "Axar Patel",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/110.png",
        team: "Delhi Capitals",
        specialization: "All-rounder"
    },
    {
        name: "Kuldeep Yadav",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/14.png",
        team: "Delhi Capitals",
        specialization: "Bowler"
    },
    {
        name: "Chetan Sakariya",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/592.png",
        team: "Delhi Capitals",
        specialization: "Bowler"
    },
    {
        name: "Mukesh Kumar",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1462.png",
        team: "Delhi Capitals",
        specialization: "Bowler"
    },
    {
        name: "Khaleel Ahmed",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/8.png",
        team: "Delhi Capitals",
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