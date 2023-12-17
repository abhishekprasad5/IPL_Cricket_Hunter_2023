players = [

    
    {
        name: "KL Rahul",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/19.png",
        team: "Lucknow Super Giants",
        specialization: "Wicketkeeper Batsman"
    },
    {
        name: "Kyle Mayers",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/726.png",
        team: "Lucknow Super Giants",
        specialization: "All Rounder"
    },
    {
        name: "Deepak Hooda",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/215.png",
        team: "Lucknow Super Giants",
        specialization: "Bowling All Rounder"
    },
    {
        name: "Krunal Pandya",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/17.png",
        team: "Lucknow Super Giants",
        specialization: "All Rounder"
    },
    {
        name: "Marcus Stoinis",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/23.png",
        team: "Lucknow Super Giants",
        specialization: "All Rounder"
    },
    {
        name: "Nicholas Pooran",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/136.png",
        team: "Lucknow Super Giants",
        specialization: "Wicketkeeper Batsman"
    },
    {
        name: "Ayush Badoni",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/985.png",
        team: "Lucknow Super Giants",
        specialization: "Bowler All Rounder"
    },
    {
        name: "Krishnappa Gowtham",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/179.png",
        team: "Lucknow Super Giants",
        specialization: "Bowler All Rounder"
    },
    {
        name: "Mark Wood",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/315.png",
        team: "Lucknow Super Giants",
        specialization: "Bowler"
    },
    {
        name: "Jaydev Unadkat",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/180.png",
        team: "Lucknow Super Giants",
        specialization: "Bowler"
    },
    {
        name: "Ravi Bishnoi",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/520.png",
        team: "Lucknow Super Giants",
        specialization: "Bowler"
    },
    {
        name: "Avesh Khan",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/109.png",
        team: "Lucknow Super Giants",
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