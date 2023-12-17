players = [

    
    {
        name: "Mandeep Singh",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/132.png",
        team: "Kolkata Knight Riders",
        specialization: "Batter"
    },
    {
        name: "Rahmanullah Gurbaz",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/641.png",
        team: "Kolkata Knight Riders",
        specialization: "Batter"
    },
    {
        name: "Anukul Roy",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/160.png",
        team: "Kolkata Knight Riders",
        specialization: "Batting Allrounder"
    },
    {
        name: "Venkatesh Iyer",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/584.png",
        team: "Kolkata Knight Riders",
        specialization: "All-rounder"
    },
    {
        name: "Nitish Rana",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/148.png",
        team: "Kolkata Knight Riders",
        specialization: "Batter"
    },
    {
        name: "Rinku Singh",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/152.png",
        team: "Kolkata Knight Riders",
        specialization: "Batter"
    },
    {
        name: "Andre Russell",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/141.png",
        team: "Kolkata Knight Riders",
        specialization: "All-rounder"
    },
    {
        name: "Shardul Thakur",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/105.png",
        team: "Kolkata Knight Riders",
        specialization: "Bowler"
    },
    {
        name: "Sunil Narine",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/156.png",
        team: "Kolkata Knight Riders",
        specialization: "Bowler"
    },
    {
        name: "Tim Southee",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/77.png",
        team: "Kolkata Knight Riders",
        specialization: "Bowler"
    },
    {
        name: "Umesh Yadav",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/21.png",
        team: "Kolkata Knight Riders",
        specialization: "Bowler"
    },
    {
        name: "Varun Chakaravarthy",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/140.png",
        team: "Kolkata Knight Riders",
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