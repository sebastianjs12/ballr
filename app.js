//TODO - Add a config file and hide all connection details
//TODO - FIX ORLANDO MAGIC AND DETROIT PISTONS SELECT
//TODO - ADD PACE OF PLAY
//Dependencies
const mysql = require('mysql');
const express = require('express');
const nba = require('nba-api-client');
const nbaPlayers = require('nba');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const app = express();
const path = require('path');


const con = mysql.createConnection({
    host: "host",
    user: "user",
    password: "pw",
    database: "database"
}); 

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.render('index');
});
app.get('/teamVS', function (req, res){
    res.render('teamVS');
})



//Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
`select concat(first_name, ' ', last_name) as Player, points as PPG from nba_players order by points desc limit 5`

//Multiple queries disallowed for sql injection protection

app.post('/getVS', async (req, res) =>{
    const team1Select = req.body.Team1Select;
    const team2Select = req.body.Team2Select;
    let team1Pts;
    let team2Pts;
    let team1Ast;
    let team2Ast;
    let team1Reb;
    let team2Reb;
    let team1Tov;
    let team2Tov;
    let team1PtsAvg;
    let team2PtsAvg;
    let team1AstAvg;
    let team2AstAvg;
    let team1RebAvg;
    let team2RebAvg;
    let team1TovAvg;
    let team2TovAvg;
    let team1Vals;
    let team2Vals;

    console.log(team1Select);
    console.log(team2Select);

    let team1PlayersSql = `select concat(first_name, ' ', last_name) as Player, points, assists, rebounds, turnovers from nba_players where team_id = ${team1Select} order by points desc limit 5`;
    let team2PlayersSql = `select concat(first_name, ' ', last_name) as Player, points, assists, rebounds, turnovers from nba_players where team_id = ${team2Select} order by points desc limit 5`;
    
    try{
        con.query(team1PlayersSql, function (err, result){
            if (err) throw err;
            console.log('success');
            for(var x = 0; x<result.length; x++){
                team1Pts += result[x].points;
                team1Ast += result[x].assists;
                team1Reb += result[x].rebounds;
                team1Tov += result[x].turnovers;
            }
            team1PtsAvg = team1Pts / result.length;
            team1AstAvg = team1Ast / result.length;
            team1RebAvg = team1Reb / result.length;
            team1TovAvg = team1Tov / result.length;
    
        })
    
        con.query(team2PlayersSql, function (err, result){
            if (err) throw err;
            console.log('success');
            console.log(result[0].points);
            for(var x = 0; x<result.length; x++){
                team2Pts += result[x].points;
                team2Ast += result[x].assists;
                team2Reb += result[x].rebounds;
                team2Tov += result[x].turnovers;
            }
            team2PtsAvg = team2Pts / result.length;
            team2AstAvg = team2Ast / result.length;
            team2RebAvg = team2Reb / result.length;
            team2TovAvg = team2Tov / result.length;
        })

  
    }
    catch(err){
        console.log(err);
    }
    finally{
        let finalVSSql;
        if(team1PtsAvg > team2PtsAvg){
            team1Vals++;
        }
        else if(team1PtsAvg < team2PtsAvg){
            team2Vals++;
        }
        else if(team1AstAvg > team2AstAvg){
            team1Vals++;
        }
        else if(team1AstAvg < team2AstAvg){
            team2Vals++;
        }
        else if(team1RebAvg > team2RebAvg){
            team1Vals++;
        }
        else if(team1RebAvg < team2RebAvg){
            team2Vals++;
        }
        else if(team1TovAvg > team2TovAvg){
            team2Vals++;
        }
        else if(team1TovAvg < team2TovAvg){
            team1Vals++;
        }
    
        console.log(team1Vals);
        console.log(team2Vals);
        if(team1Vals > team2Vals){
            console.log('Team 1 Wins');
            finalVSSql = `select team_name from nba_teams where team_id = ${team1Select}`;
        }
        else if(team1Vals == team2Vals){
            if (Math.random() >= 0.5){
                console.log('Team 1 Wins');
                finalVSSql = `select team_name from nba_teams where team_id = ${team1Select}`;
            }
            else{
                console.log('Team 2 Wins');
                finalVSSql = `select team_name from nba_teams where team_id = ${team2Select}`;
            }
        }
        else{
            console.log('Team 2 Wins');
            finalVSSql = `select team_name from nba_teams where team_id = ${team2Select}`;
        }

        
        
       
        con.query(finalVSSql, function (err, result){
            if (err) throw err;
            console.log('success');
            console.log(result[0].team_name + ' wins');
            let theWinner = result[0].team_name;
            res.render('teamVS',{winner: theWinner});
        })


    }


})


app.post('/getData', async (req, res) => {
    const team1Select = req.body.Team1Select;
    let teamData = [];
    let playerIds = [];
    let teamArray = [];
    let playerData = [];
    let playerObj = {};
    try{
        // console.log('befre executed');
        // let roster = await(nba.teamRoster({
        //     LeagueID: "00",
        //     Season: "2018-19",
        //     TeamID: team1Select  
        // }))

        // console.log('this executed');
        // let responseLength = Object.keys(roster.CommonTeamRoster).length;
        // console.log(responseLength);


      
           
       
        // for(let x = 0; x < responseLength; x++){
        //     playerIds.push(roster.CommonTeamRoster[x].PLAYER_ID);
        //     console.log(roster.CommonTeamRoster[x].PLAYER_ID);
        // }


            // let basicPlayerInfo = [];
        // let playerStatsInfo = []

        // var y = 0;
        // while(y < playerIds.length){
        //     basicPlayerInfo[y] = await(nba.playerInfo({
        //         PlayerID: playerIds[y]
        //     }))
            // playerStatsInfo[y] = await(nba.playerInfo({
            //     Season: "2018-19",
            //     LeagueID: "00",
            //     PlayerID: playerIds[y]
            // }))
        //     setTimeout(function(){console.log(`y done`);},5000);
        //     y++;
        // }

        // for(x = 0; x < basicPlayerInfo.length; x++){
        //     console.log(basicPlayerInfo[x]);
        // }
        // playerStatsInfo.toString();

       

        // for(var i = 0; i<response.length; i++){
        //     console.log(response[i].CommonPlayerInfo.FIRST_NAME + ' ' + response[i].CommonPlayerInfo.LAST_NAME);
        // }
        
        // let playerStats = await(nba.playerSplits({
        //     Season: "2018-19",
        //     LeagueID: "00",
        //     PlayerID: 201935
        // }))

        // basicPlayerinfo = await(nba.playerInfo({PlayerID: 201935}))

        //console.log(playerStats.OverallPlayerDashboard);

   


        // for(let x = 0; x < playerIds.length; x++){
        // nba.playerInfo({PlayerID: playerIds[x]})
        // .then(function(data){
        //     console.log(data.CommonPlayerInfo.PERSON_ID);
            // let tempPlayerID = basicPlayerInfo.CommonPlayerInfo.PERSON_ID;
            // let fNAME = basicPlayerInfo.CommonPlayerInfo.FIRST_NAME;
            // let lNAME = basicPlayerInfo.CommonPlayerInfo.LAST_NAME;
            // let playerTeamID = basicPlayerInfo.CommonPlayerInfo.TEAM_ID;
            // let height = basicPlayerInfo.CommonPlayerInfo.HEIGHT;
            // let position = basicPlayerInfo.CommonPlayerInfo.POSITION;
        // })
        // .catch(function(data){
        //     console.log('Error');
        // })
        // }
  

        // nba.playerSplits({
        //     Season: "2018-19",
        //     LeagueID: "00",
        //     PlayerID: playerIds[x]
        // })
        // .then(function(data){
        //     let GP = playerStats.OverallPlayerDashboard.GP;
        //     let PTS = playerStats.OverallPlayerDashboard.PTS;
        //     let REB = playerStats.OverallPlayerDashboard.REB;
        //     let AST = playerStats.OverallPlayerDashboard.AST;
        //     let fgPCT = playerStats.OverallPlayerDashboard.FG_PCT;
        //     let fg3PCT = playerStats.OverallPlayerDashboard.FG3_PCT;
        //     let ftPCT = playerStats.OverallPlayerDashboard.FT_PCT;
        //     let STL = playerStats.OverallPlayerDashboard.STL;
        //     let BLK = playerStats.OverallPlayerDashboard.BLK;
            // let FGA = playerStats.OverallPlayerDashboard.FGA;
            // let FG3A = playerStats.OverallPlayerDashboard.FG3A;
            // let TOV = playerStats.OverallPlayerDashboard.TOV;
            // let PF = playerStats.OverallPlayerDashboard.PF;
        // })
        // .catch(function(data){
        //     console.log('Error');
        // })

        //     playerObj = {
        //         playerID: tempPlayerID,
        //         firstName: fNAME,
        //         lastName: lNAME,
        //         teamID: playerTeamID,
        //         playerHeight: height,
        //         playerPos: position,
        //         gamesPlayed: GP,
        //         points: PTS,
        //         rebounds: REB,
        //         assists: AST,
        //         fieldGoalPer: fgPCT,
        //         fieldGoal3Per: fg3PCT,
        //         freeThrowPer: ftPCT,
        //         steals: STL,
        //         blocks: BLK
        //     }
    
        //     teamArray.push(playerObj);
    
        // })
        // let basicPlayerInfo;
        // playerIds.forEach(function(item,i){
        //     let basicPlayerInfo = await(nba.playerInfo({
        //         PlayerID: 201935
        //     }))
        //     console.log(i);
        // })


        // let basicPlayerInfo = await(nba.playerInfo({
        //     PlayerID: 201935
        // }))

        // console.log(basicPlayerInfo);

        // let tempPlayerID = basicPlayerInfo.CommonPlayerInfo.PERSON_ID;
        // let fNAME = basicPlayerInfo.CommonPlayerInfo.FIRST_NAME;
        // let lNAME = basicPlayerInfo.CommonPlayerInfo.LAST_NAME;
        // let playerTeamID = basicPlayerInfo.CommonPlayerInfo.TEAM_ID;
        // let height = basicPlayerInfo.CommonPlayerInfo.HEIGHT;
        // let position = basicPlayerInfo.CommonPlayerInfo.POSITION;
           
        // let playerStats = await(nba.playerSplits({
        //     Season: "2018-19",
        //     LeagueID: "00",
        //     PlayerID: 201935
        // }))

        // let GP = playerStats.OverallPlayerDashboard.GP;
        // let PTS = playerStats.OverallPlayerDashboard.PTS;
        // let REB = playerStats.OverallPlayerDashboard.REB;
        // let AST = playerStats.OverallPlayerDashboard.AST;
        // let fgPCT = playerStats.OverallPlayerDashboard.FG_PCT;
        // let fg3PCT = playerStats.OverallPlayerDashboard.FG3_PCT;
        // let ftPCT = playerStats.OverallPlayerDashboard.FT_PCT;
        // let STL = playerStats.OverallPlayerDashboard.STL;
        // let BLK = playerStats.OverallPlayerDashboard.BLK;
        // let FGA = playerStats.OverallPlayerDashboard.FGA;
        // let FG3A = playerStats.OverallPlayerDashboard.FG3A;
        // let TOV = playerStats.OverallPlayerDashboard.TOV;
        // let PF = playerStats.OverallPlayerDashboard.PF;
        
        // playerObj = {
        //     playerID: tempPlayerID,
        //     firstName: fNAME,
        //     lastName: lNAME,
        //     teamID: playerTeamID,
        //     playerHeight: height,
        //     playerPos: position,
        //     gamesPlayed: GP,
        //     points: PTS,
        //     rebounds: REB,
        //     assists: AST,
        //     fieldGoalsAtt: FGA,
        //     fieldGoalPer: fgPCT,
        //     fieldGoals3att: FG3A,
        //     fieldGoal3Per: fg3PCT,
        //     freeThrowPer: ftPCT,
        //     steals: STL,
        //     blocks: BLK,
        //     turnovers: TOV,
        //     fouls: PF
        // }

        //     teamArray.push(playerObj);
        //     console.log(teamArray[0]);
     
       


            // teamArray.push(playerStats.overallPlayerDashboard[0].gp);
            // teamArray.push(playerStats.overallPlayerDashboard[0].pts);
            // teamArray.push(playerStats.overallPlayerDashboard[0].reb);
            // teamArray.push(playerStats.overallPlayerDashboard[0].ast);
            // teamArray.push(playerStats.overallPlayerDashboard[0].fgPct);
            // teamArray.push(playerStats.overallPlayerDashboard[0].fg3Pct);
            // teamArray.push(playerStats.overallPlayerDashboard[0].ftPct);
            // teamArray.push(playerStats.overallPlayerDashboard[0].blk);
            // playerData.push(
            // playerStats.overallPlayerDashboard[0].gp + ' ' + 
            // playerStats.overallPlayerDashboard[0].pts + ' ' + 
            // playerStats.overallPlayerDashboard[0].reb + ' ' +
            // playerStats.overallPlayerDashboard[0].ast + ' ' +
            // playerStats.overalllayerDashboard[0].fgPct + ' ' +
            // playerStats.overallPlayerDashboard[0].fg3Pct + ' ' + 
            // playerStats.overallPlayerDashboard[0].ftPct + ' ' + 
            // playerStats.overallPlayerDashboard[0].blk);
            // teamArray = [];
        
        
       
        //console.log(playerStats);
      
        
        
        // let teamDetails = await(nba.teamDetails({
        //     TeamID: team1Select
        // }))
        // let teamName = teamDetails.TeamBackground.CITY + " " + teamDetails.TeamBackground.NICKNAME;
        // let teamAbbreviation = teamDetails.TeamBackground.ABBREVIATION;

        // let teamNumStats = await(nba.teamGeneralSplits({LeagueID: "00", 
        // TeamID: team1Select, MeasureType: 'Base', 
        // Season: '2018-19', 
        // SeasonType: 'Regular+Season'}));

        // let Wins = teamNumStats.OverallTeamDashboard.W;
        // let Losses = teamNumStats.OverallTeamDashboard.L;
        // let winPercent = teamNumStats.OverallTeamDashboard.W_PCT;
        // let homeRecord = teamNumStats.LocationTeamDashboard[0].W + " - " + teamNumStats.LocationTeamDashboard[0].L;
        // let awayRecord = teamNumStats.LocationTeamDashboard[1].W + " - " + teamNumStats.LocationTeamDashboard[1].L;
        let teamObj = {};
        let updatePlayerTable = `update nba_players set first_name = ? where first_name = null;`;
        let selectPlayerSql =  `select * from nba_players where team_id = ${team1Select}`;
        let playerTableSql = `create table nba_players(first_name letchar(24) 
        not null, last_name letchar(24) not null, team_id int(11) not null,
        height letchar(8), position letchar(15), games_played int, points double not null,
        rebounds double not null, assists double not null, field_goal_pct double not null,
        field_goal_3pct double not null, field_goal_attempted double not null, field_goal_3attempted double not null,
        free_throw_pct double not null, turnovers double not null, personal_fouls double not null, steals double not null,
        blocks double not null, player_id int not null, primary key (player_id), foreign key(team_id) references nba_teams(team_id));`;
        let sql = `select * from nba_teams where team_id = ${team1Select}`;
        con.query(sql, function (err, result){
            if (err) throw err;
            console.log('success');
            teamObj ={
                teamID:result[0].team_id,
                teamName:result[0].team_name,
                teamAbbreviation:result[0].teamAbbreviation,
                wins:result[0].wins,
                losses:result[0].losses,
                winPCT:result[0].win_percent,
                homeRecord:result[0].home_record,
                awayRecord:result[0].away_record
            }
        })
        let top5AstObj = {};
        let top5AstArr = [];
        let top5Ast = `select concat(first_name, ' ', last_name) as Player, assists as APG from nba_players order by assists desc limit 5`;
        let top5RebObj = {};
        let top5RebArr = [];
        let top5Reb = `select concat(first_name, ' ', last_name) as Player, rebounds as RPG from nba_players order by rebounds desc limit 5`;
        let top5obj = {};
        let top5pointsArr = [];
        let top5points = `select concat(first_name, ' ', last_name) as Player, points as PPG from nba_players order by points desc limit 5`;
        con.query(top5points, function (err, result){
            if (err) throw err;
            for(var x = 0; x<result.length; x++){
                top5pointsArr.push(result[x]);
            }
            top5obj ={
                rank1pts:result[0],
                rank2pts:result[1],
                rank3pts:result[2],
                rank4pts:result[3],
                rank5pts:result[4]
            }            
        }) 
        con.query(top5Ast, function (err, result){
            if (err) throw err;
            for(var x = 0; x<result.length; x++){
                top5AstArr.push(result[x]);
            }
            top5AstObj ={
                rank1pts:result[0],
                rank2pts:result[1],
                rank3pts:result[2],
                rank4pts:result[3],
                rank5pts:result[4]
            }
            
        }) 
        con.query(top5Reb, function (err, result){
            if (err) throw err;
            for(var x = 0; x<result.length; x++){
                top5RebArr.push(result[x]);
            }
            top5RebObj ={
                rank1pts:result[0],
                rank2pts:result[1],
                rank3pts:result[2],
                rank4pts:result[3],
                rank5pts:result[4]
            }
            
        }) 
        con.query(selectPlayerSql, function (err, result){
            if (err) throw err;
            for(var x = 0; x < result.length; x++){
                playerData.push(result[x]);
            }

            res.render('index', {playerInfo: playerData, teamInfo: teamObj, top5pts: top5obj, top5reb: top5RebObj, top5Ast: top5AstObj});
        })

  
    }

    catch(err){
        console.log(err);
    }
})

// Team DB Order 1. team_id 2. team_name 3. team_abbreviation 4. wins 5. losses 6. win_percent 7. home_record 8. away_record
// Player DB Order 1. player_id 2. first_name 3. last_name 4. team_id 5. Points 6. Assists 7. Rebounds 8. PIE