players = [

    
    {
        name: "Virat Kohli",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2.png",
        team: "Royal Challengers Bangalore",
        specialization: "Batter"
    },
    {
        name: "Faf du Plessis",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/94.png",
        team: "Royal Challengers Bangalore",
        specialization: "Batter"
    },
    {
        name: "Dinesh Karthik",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/13.png",
        team: "Royal Challengers Bangalore",
        specialization: "Wicketkeeper Batter"
    },
    {
        name: "Glenn Maxwell",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/28.png",
        team: "Royal Challengers Bangalore",
        specialization: "All-rounder"
    },
    {
        name: "Michael Bracewell",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1465.png",
        team: "Royal Challengers Bangalore",
        specialization: "Batting Allrounder"
    },
    {
        name: "Anuj Rawat",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/534.png",
        team: "Royal Challengers Bangalore",
        specialization: "Wicketkeeper Batter"
    },

    {
        name: "Shahbaz Ahamad",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/523.png",
        team: "Royal Challengers Bangalore",
        specialization: "Bowler"
    },
    {
        name: "Karn Sharma",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/98.png",
        team: "Royal Challengers Bangalore",
        specialization: "All-rounder"
    },
    {
        name: "Harshal Patel",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/114.png",
        team: "Royal Challengers Bangalore",
        specialization: "Bowler"
    },
    {
        name: "Akash Deep",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1007.png",
        team: "Royal Challengers Bangalore",
        specialization: "Bowler"
    },
    {
        name: "Reece Topley",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/574.png",
        team: "Royal Challengers Bangalore",
        specialization: "Bowler"
    },
    {
        name: "Mohammed Siraj",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/63.png",
        team: "Royal Challengers Bangalore",
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