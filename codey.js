const express = require('express');
const nba = require('nba-api-client');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});


async function f(){
  let finalString;
  let teamString = [];
  let teamArray = [];
  let playerIds = [];
  const insertSqlString = `insert into nba_players (player_id, first_name, last_name, team_id, height, position, games_played, points, rebounds, assists, field_goal_attempted, field_goal_pct, field_goal_3attempted, field_goal_3pct, free_throw_pct, steals, blocks, turnovers, personal_fouls, player_image) VALUES`;
  
  let basicPlayerInfo;
    let roster = await(nba.teamRoster({
            LeagueID: "00",
            Season: "2018-19",
            TeamID: 1610612741  
        }))
        console.log(roster.CommonTeamRoster);
        let responseLength = Object.keys(roster.CommonTeamRoster).length;
        console.log(responseLength);

        for(var x = 0; x < responseLength; x++){
          console.log(roster.CommonTeamRoster[x].PLAYER_ID);
          playerIds.push(roster.CommonTeamRoster[x].PLAYER_ID);
        }

        for(var x = 0; x < playerIds.length; x++){
          basicPlayerInfo = await(nba.playerInfo({
            PlayerID: playerIds[x]
        }))

       
            
        
        
  
        
        
        let tempPlayerID = basicPlayerInfo.CommonPlayerInfo.PERSON_ID;
        let fNAME = basicPlayerInfo.CommonPlayerInfo.FIRST_NAME;
        let lNAME = basicPlayerInfo.CommonPlayerInfo.LAST_NAME;
        let playerTeamID = basicPlayerInfo.CommonPlayerInfo.TEAM_ID;
        let height = basicPlayerInfo.CommonPlayerInfo.HEIGHT;
        let position = basicPlayerInfo.CommonPlayerInfo.POSITION;

       
        let playerStats = await(nba.playerSplits({
            Season: "2018-19",
            LeagueID: "00",
            PlayerID: playerIds[x]
        }))

        let playerImages = await(nba.getPlayerHeadshotURL({
            PlayerID: playerIds[x],
            TeamID: 1610612741
        }))

        let GP = playerStats.OverallPlayerDashboard.GP;
        let PTS = playerStats.OverallPlayerDashboard.PTS;
        let REB = playerStats.OverallPlayerDashboard.REB;
        let AST = playerStats.OverallPlayerDashboard.AST;
        let fgPCT = playerStats.OverallPlayerDashboard.FG_PCT;
        let fg3PCT = playerStats.OverallPlayerDashboard.FG3_PCT;
        let ftPCT = playerStats.OverallPlayerDashboard.FT_PCT;
        let STL = playerStats.OverallPlayerDashboard.STL;
        let BLK = playerStats.OverallPlayerDashboard.BLK;
        let FGA = playerStats.OverallPlayerDashboard.FGA;
        let FG3A = playerStats.OverallPlayerDashboard.FG3A;
        let TOV = playerStats.OverallPlayerDashboard.TOV;
        let PF = playerStats.OverallPlayerDashboard.PF;
        let player_image = playerImages;
    
        finalString = insertSqlString + '('
        + tempPlayerID + ',' + `'` + fNAME + `'` + ',' 
                            + `'` + lNAME + `'` + ',' 
        + playerTeamID + ',' + `'` + height + `'` + ',' 
                            + `'`  + position + `'` + ',' 
        + `'`+GP+`'` + ',' 
        + `'`+PTS+`'` + ',' 
        +`'`+ REB+`'` + ',' 
        + `'`+AST+`'` + ',' 
        + `'`+FGA+`'` + ',' 
        + `'`+fgPCT+`'` + ',' 
        + `'`+FG3A+`'` + ',' 
        + `'`+fg3PCT+`'` + ',' 
        + `'`+ftPCT+`'` + ',' 
        + `'`+STL+`'` + ',' 
        + `'`+BLK+`'` + ',' 
        + `'`+TOV+`'` + ',' 
        + `'`+PF+`'` +','+`'`+player_image+`'`+');';

        teamString.push(finalString);
        console.log(finalString);
        
            
        }

}
try{
f();

}

catch(err){
  if (err) throw err;
}

// const express = require('express');
// const nba = require('nba-api-client');

// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello Express app!')
// });

// app.listen(3000, () => {
//   console.log('server started');
// });


// async function f(){
//   let playerIds = [];
//   let updatePlayerImage;

//   updatePlayerImage = `update nba_players set player_image = `;

// let basicPlayerInfo;
//     let roster = await(nba.teamRoster({
//             LeagueID: "00",
//             Season: "2018-19",
//             TeamID: 1610612738  
//         }))
//         console.log(roster.CommonTeamRoster);
//         let responseLength = Object.keys(roster.CommonTeamRoster).length;
//         console.log(responseLength);

//         for(var x = 0; x < responseLength; x++){
//           playerIds.push(roster.CommonTeamRoster[x].PLAYER_ID);
//         }

//         for(var x = 0; x < playerIds.length; x++){
//           basicPlayerInfo = await(nba.getPlayerHeadshotURL({
//             PlayerID: playerIds[x],
//             TeamID: 1610612737
//           }))
//              updatePlayerImage = `update nba_players set player_image =` +`'${basicPlayerInfo}' where player_id = ${playerIds[x]};`;
//            console.log(updatePlayerImage)
//         }
        
            
//         }

// try{
// f();

// }

// catch(err){
//   if (err) throw err;
// }
