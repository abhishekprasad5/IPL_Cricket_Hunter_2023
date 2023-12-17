players = [

    {
        name: "Rohit Sharma",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/6.png",
        team: "Mumbai Indian"
    },

    {
        name: "Faf du Plessis",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/94.png",
        team: "Royal Challengers Bangalore",
    },
    {
        name: "MS Dhoni",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/57.png",
        team: "Chennai Super Kings"
    },
    {
        name: "David Warner",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/214.png",
        team: "Delhi Capitals"
    },
    {
        name: "Hardik Pandya",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/54.png",
        team: "Gujrat Titans",
    },
    {
        name: "Nitish Rana",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/148.png",
        team: "Kolkata Knight Riders",
    },
    {
        name: "Sam Curran",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/138.png",
        team: "Punjab Kings",
    },
    {
        name: "K L Rahul",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/19.png",
        team: "Lucknow Super Giants"
    },
    {
        name: "Sanju Samson",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/190.png",
        team: "Rajasthan Royal",
    },
    {
        name: "Glenn Phillips",
        poster: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/635.png",
        team: "Sunrisers Hyderabad"
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