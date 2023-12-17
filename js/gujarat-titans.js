players = [


    {
        name: "Wriddhiman Saha",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/225.png",
        team: "Gujrat Titans",
        specialization: "Wicketkeeper Batter"
    },
    {
        name: "Shubman Gill",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/62.png",
        team: "Gujrat Titans",
        specialization: "Batter"
    },
    {
        name: "B. Sai Sudharsan",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/976.png",
        team: "Gujrat Titans",
        specialization: "All Rounder"
    },
    {
        name: "Hardik Pandya",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/54.png",
        team: "Gujrat Titans",
        specialization: "All-rounder"
    },
    {
        name: "Vijay Shankar",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/61.png",
        team: "Gujrat Titans",
        specialization: "All-rounder"
    },
    {
        name: "Rashid Khan",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/218.png",
        team: "Gujrat Titans",
        specialization: "Bowler"
    },
    {
        name: "Kane Williamson",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/65.png",
        team: "Gujrat Titans",
        specialization: "Batter"
    },
    {
        name: "Rahul Tewatia",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/120.png",
        team: "Gujrat Titans",
        specialization: "Bowler"
    },
    {
        name: "Mohammad Shami",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/47.png",
        team: "Gujrat Titans",
        specialization: "Bowler"
    },
    {
        name: "Joshua Little",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/678.png",
        team: "Gujrat Titans",
        specialization: "Bowler"
    },
    {
        name: "Yash Dayal",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/978.png",
        team: "Gujrat Titans",
        specialization: "Bowler"
    },
    {
        name: "Alzarri Joseph",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/229.png",
        team: "Gujrat Titans",
        specialization: "Bowler"
    }


]


function searchPlayer() {
    let playerName = document.getElementById('search').value;

    if (playerName !== "") {
        let result = players.filter(function (player) {
            return player.name.toUpperCase().includes(playerName.toUpperCase())


        })
        displayPlayer(result);
    }

    else {
        displayPlayer(players);
    }

}


function displayPlayer(data) {

    document.getElementById("players").innerHTML = ""

    let htmlString = ``

    for (let i = 0; i < data.length; i++) {

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
        document.getElementById("players").innerHTML = htmlString
        // console.log(htmlString);

    }

}

displayPlayer(players);