//Dependencies
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const creds = require('./config/creds');

//Hiding DB Credentials in config file that will only appear locally, not in production environment
const con = mysql.createConnection({
    host: 'remotemysql.com',
    user: creds.mySQLUser,
    password: creds.mySQLPass,
    database: 'YooUVf8BSA'
});


//Using Handlebars for templating and displaying server response
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Using Bodyparser to pass info in to functions
app.use(bodyParser.urlencoded({
    extended: true
}));

//Routes
app.get('/', function (req, res) {
    res.render('index');
});


//Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

//If in production, use production port, else use localhost:5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//Multiple queries disallowed for sql injection protection, algorithm for finding out who won
//If user tries to manually change what value is passed in, it's checked anyway.
let validIds = [
    1610612749,
    1610612761,
    1610612755,
    1610612738,
    1610612754,
    1610612751,
    1610612753,
    1610612765,
    1610612766,
    1610612748,
    1610612764,
    1610612737,
    1610612741,
    1610612739,
    1610612752,
    1610612744,
    1610612743,
    1610612757,
    1610612745,
    1610612762,
    1610612760,
    1610612759,
    1610612746,
    1610612758,
    1610612747,
    1610612750,
    1610612763,
    1610612740,
    1610612742,
    1610612756
]
app.post('/getData', async (req, res) => {
    let team1Select = req.body.Team1Select;
    console.log(team1Select);
    let filterSelect = req.body.NumTeamDisplay;
    if (filterSelect != 2) {
        filterSelect = 1;
    }
    var valid = validIds.includes(team1Select);
    if (valid == false) {
        team1Select = 1610612749;
    }
    team1Select = req.body.Team1Select;
    let playerData = [];
    try {
      
        if (team1Select.length < 5) {
            team1Select = 1610612741;
        }
        let teamObj = {};
        let selectPlayerSql = `select * from nba_players where team_id = ${team1Select}`;
        
        let sql = `select * from nba_teams where team_id = ${team1Select}`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log('success');
            teamObj = {
                teamID: result[0].team_id,
                teamName: result[0].team_name,
                teamAbbreviation: result[0].teamAbbreviation,
                wins: result[0].wins,
                losses: result[0].losses,
                winPCT: result[0].win_percent,
                homeRecord: result[0].home_record,
                awayRecord: result[0].away_record
            }
        })

        let allTeamArr = [];
        let allTeam = `select team_name as Team, concat(wins, ' - ', losses) as Record, win_percent, home_record, away_record from nba_teams order by wins desc`;
        let top5Team = `select team_name as Team, concat(wins, ' - ', losses) as Record, win_percent, home_record, away_record from nba_teams order by wins desc limit 5`;
        let top5TeamObj = {};
        let top5TeamArr = [];
        let top5AstObj = {};
        let top5AstArr = [];
        let top5Ast = `select concat(first_name, ' ', last_name) as Player, assists as APG from nba_players order by assists desc limit 5`;
        let top5RebObj = {};
        let top5RebArr = [];
        let top5Reb = `select concat(first_name, ' ', last_name) as Player, rebounds as RPG from nba_players order by rebounds desc limit 5`;
        let top5obj = {};
        let top5pointsArr = [];
        let top5points = `select concat(first_name, ' ', last_name) as Player, points as PPG from nba_players order by points desc limit 5`;
        con.query(top5Team, function (err, result) {
            if (err) throw err;
            for (var x = 0; x < result.length; x++) {
                top5TeamArr.push(result[x]);
            }
            top5TeamObj = {
                rank1pts: result[0],
                rank2pts: result[1],
                rank3pts: result[2],
                rank4pts: result[3],
                rank5pts: result[4]
            }

        })

        if (filterSelect == 2) {
            con.query(allTeam, function (err, result) {
                if (err) throw err;
                for (var x = 0; x < result.length; x++) {
                    allTeamArr.push(result[x]);
                }
            })
        }

        con.query(top5points, function (err, result) {
            if (err) throw err;
            for (var x = 0; x < result.length; x++) {
                top5pointsArr.push(result[x]);
            }
            top5obj = {
                rank1pts: result[0],
                rank2pts: result[1],
                rank3pts: result[2],
                rank4pts: result[3],
                rank5pts: result[4]
            }
        })

        con.query(top5Ast, function (err, result) {
            if (err) throw err;
            for (var x = 0; x < result.length; x++) {
                top5AstArr.push(result[x]);
            }
            top5AstObj = {
                rank1pts: result[0],
                rank2pts: result[1],
                rank3pts: result[2],
                rank4pts: result[3],
                rank5pts: result[4]
            }

        })
        con.query(top5Reb, function (err, result) {
            if (err) throw err;
            for (var x = 0; x < result.length; x++) {
                top5RebArr.push(result[x]);
            }
            top5RebObj = {
                rank1pts: result[0],
                rank2pts: result[1],
                rank3pts: result[2],
                rank4pts: result[3],
                rank5pts: result[4]
            }

        })
        con.query(selectPlayerSql, function (err, result) {
            if (err) throw err;
            for (var x = 0; x < result.length; x++) {
                playerData.push(result[x]);
            }

            if (filterSelect == 2) {
                res.render('index', {
                    playerInfo: playerData,
                    teamInfo: teamObj,
                    top5pts: top5obj,
                    top5reb: top5RebObj,
                    top5Ast: top5AstObj,
                    top5Team: allTeamArr
                });
            } else if (filterSelect == 1 || filterSelect == 0) {
                res.render('index', {
                    playerInfo: playerData,
                    teamInfo: teamObj,
                    top5pts: top5obj,
                    top5reb: top5RebObj,
                    top5Ast: top5AstObj,
                    top5Team: top5TeamObj
                });
            }
        })


    } catch (err) {
        console.log(err);
    }
})