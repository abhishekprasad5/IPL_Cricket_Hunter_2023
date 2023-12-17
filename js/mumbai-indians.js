players = [

    
    {
        name: "Rohit Sharma",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/6.png",
        team: "Mumbai Indians",
        specialization: "Batter"
    },
    {
        name: "Ishan Kishan",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/164.png",
        team: "Mumbai Indians",
        specialization: "Wicketkeeper Batter"
    },
    {
        name: "Cameron Green",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/550.png",
        team: "Mumbai Indians",
        specialization: "All-Rounder"
    },
    {
        name: "Suryakumar Yadav",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/174.png",
        team: "Mumbai Indians",
        specialization: "Batter"
    },
    {
        name: "N. Tilak Varma",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/993.png",
        team: "Mumbai Indians",
        specialization: "Batter"
    },
    {
        name: "Nehal Wadhera",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1541.png",
        team: "Mumbai Indians",
        specialization: "All-Rounder"
    },
    {
        name: "Tim David",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/636.png   ",
        team: "Mumbai Indians",
        specialization: "Batter"
    },
    {
        name: "Hrithik Shokeen",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/992.png",
        team: "Mumbai Indians",
        specialization: "Bowler"
    },
    {
        name: "Mohd. Arshad Khan",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/988.png",
        team: "Mumbai Indians",
        specialization: "All Rounder "
    },
    {
        name: "Piyush Chawla",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/149.png",
        team: "Mumbai Indians",
        specialization: "Bowler"
    },
    {
        name: "Jofra Archer",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/181.png",
        team: "Mumbai Indians",
        specialization: "All-rounder"
    },
    {
        name: "Jason Behrendorff",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/4.png",
        team: "Mumbai Indians",
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