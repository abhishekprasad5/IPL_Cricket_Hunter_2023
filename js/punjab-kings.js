players = [

    
    {
        name: "Prabhsimran Singh",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/137.png",
        team: "Punjab Kings",
        specialization: "Wicketkeeper Batter"
    },
    {
        name: "Shikhar Dhawan",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/11.png",
        team: "Punjab Kings",
        specialization: "Batter"
    },
    {
        name: "Bhanuka Rajapaksa",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/372.png",
        team: "Punjab Kings",
        specialization: "Batter"
    },
    {
        name: "Jitesh Sharma",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1000.png",
        team: "Punjab Kings",
        specialization: "Wicket-keeper"
    },
    {
        name: "Sikandar Raza",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/820.png",
        team: "Punjab Kings",
        specialization: "All-Rounder"
    },
    {
        name: "Sam Curran",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/138.png",
        team: "Punjab Kings",
        specialization: "All-Rounder"
    },
    {
        name: "Shahrukh Khan",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/590.png",
        team: "Punjab Kings",
        specialization: "Batter"
    },
    {
        name: "Nathan Ellis",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/633.png",
        team: "Punjab Kings",
        specialization: "Bowler"
    },
    {
        name: "Harpreet Brar",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/130.png",
        team: "Punjab Kings",
        specialization: "Bowler"
    },
    {
        name: "Rahul Chahar",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/171.png",
        team: "Punjab Kings",
        specialization: "Bowler"
    },
    {
        name: "Arshdeep Singh",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/125.png",
        team: "Punjab Kings",
        specialization: "Bowler"
    },
    {
        name: "Rishi Dhawan",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/996.png",
        team: "Punjab Kings",
        specialization: "All-rounder"
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