const Key = 'GOOGLE_API_KEY'; // replace with the API key you got from the website
const username = 'USERNAME'; // replace with the string when you go to your youtube channel
const subCount = document.getElementById('subCount');
var alarm = new Audio("alert.mp3")
var oldCount;

let getCount = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${username}&key=${Key}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            subCount.innerHTML = data["items"][0].statistics.subscriberCount;
            viewCount.innerHTML = data["items"][0].statistics.viewCount;
            videoCount.innerHTML = data["items"][0].statistics.videoCount;
            var newCount = data["items"][0].statistics.subscriberCount;
            if (newCount > oldCount) {
                document.getElementById("solveScreen").style.display = "block";
                alarm.play();
            }
            oldCount < newCount;
        })
}

setInterval(function () {
    getCount();
    // console.log("updated!") // Optional
}, 30000);

function done() {
    document.getElementById("solveScreen").style.display = "none";
    alarm.pause();
    alarm.currentTime = 0;
}

getCount(); // initial get count so it's not blank lmao