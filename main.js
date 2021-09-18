var elapsedTime = document.querySelector("#elapsed");
var homeTeamImage = document.querySelector("#homeLogo");
var homeTeamName = document.querySelector("#homeName");
var awayTeamImage = document.querySelector("#awayLogo");
var awayTeamName = document.querySelector("#awayName");
var lastMatchGoal = document.querySelector("#goals");
var matchTable = document.querySelector("#matchTable");


fetch("https://v3.football.api-sports.io/fixtures?live=all", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "86070cd6fdf532eb0fdfa3c531679192"
    }
})
.then(response => response.json().then(data => {
  var matchesList = data['response'];
  var fixture = matchesList[0]['fixture'];
  var goals = matchesList[0]['goals'];
  var teams = matchesList[0]['teams'];
  console.log(matchesList.length)

  elapsedTime.innerHTML = fixture['status']['elapsed'] + "'";
   homeTeamImage.src = teams['home']['logo'];
   homeTeamName.innerHTML = teams['home']['name'];
   awayTeamImage.src = teams['away']['logo'];
   awayTeamName.innerHTML = teams['away']['name'];
   lastMatchGoal.innerHTML = goals['home']+ " - " + goals['away'];

  for(var i = 1; i<matchesList.length;i++){
  addMatchTile(matchesList[i]);
}
}))
.catch(err => {
  console.log(err);
});

  

