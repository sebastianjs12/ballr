var changeBgColor = function(){
  var teamBackgroundLogo = document.getElementById("team1");
  var teamName = document.getElementById("team1Logo");
  teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/NBA.svg')";

  if(document.getElementById("selectTeam").value === "0"){
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/NBA.svg)";
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/NBA.svg)";
    document.getElementById("team1Name").innerHTML = "Select Team";

  }else if(document.getElementById("selectTeam").value === "1610612749"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/MIL.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/MIL.svg')";
    document.getElementById("team1Name").innerHTML = "Milwaukee Bucks";

  }else if(document.getElementById("selectTeam").value === "1610612761"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/TOR.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/TOR.svg')";
    document.getElementById("team1Name").innerHTML = "Toronto Raptors";

  }else if(document.getElementById("selectTeam").value === "1610612755"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/PHI.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/PHI.svg')";
    document.getElementById("team1Name").innerHTML = "Philadelphia 76ers";

  }else if(document.getElementById("selectTeam").value === "1610612738"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/BOS.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/BOS.svg')";
    document.getElementById("team1Name").innerHTML = "Boston Celtics";

  }else if(document.getElementById("selectTeam").value === "1610612754"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/IND.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/IND.svg')";
    document.getElementById("team1Name").innerHTML = "Indiana Pacers";

  }else if(document.getElementById("selectTeam").value === "1610612751"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/BKN.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/BKN.svg')";
    document.getElementById("team1Name").innerHTML = "Brooklyn Nets";

  }else if(document.getElementById("selectTeam").value === "1610612753"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/ORL.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/ORL.svg')";
    document.getElementById("team1Name").innerHTML = "Orlando Magic";

  }else if(document.getElementById("selectTeam").value === "1610612765"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/DET.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/DET.svg')";
    document.getElementById("team1Name").innerHTML = "Detroit Pistons";

  }else if(document.getElementById("selectTeam").value === "1610612766"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/CHA.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/CHA.svg')";
    document.getElementById("team1Name").innerHTML = "Charlotte Hornets";

  }else if(document.getElementById("selectTeam").value === "1610612748"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/MIA.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/MIA.svg')";
    document.getElementById("team1Name").innerHTML = "Miami Heat";

  }else if(document.getElementById("selectTeam").value === "1610612764"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/WAS.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/WAS.svg')";
    document.getElementById("team1Name").innerHTML = "Washington Wizards";

  }else if(document.getElementById("selectTeam").value === "1610612737"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/ATL.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/ATL.svg')";
    document.getElementById("team1Name").innerHTML = "Atlanta Hawks";

  }else if(document.getElementById("selectTeam").value === "1610612741"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/CHI.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/CHI.svg')";
    document.getElementById("team1Name").innerHTML = "Chicago Bulls";

  }else if(document.getElementById("selectTeam").value === "1610612739"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/CLE.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/CLE.svg')";
    document.getElementById("team1Name").innerHTML = "Cleveland Cavaliers";

  }else if(document.getElementById("selectTeam").value === "1610612752"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/NYK.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/NYK.svg')";
    document.getElementById("team1Name").innerHTML = "New York Knicks";

  }else if(document.getElementById("selectTeam").value === "1610612744"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/GSW.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/GSW.svg')";
    document.getElementById("team1Name").innerHTML = "Golden State Warriors";

  }else if(document.getElementById("selectTeam").value === "1610612743"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/DEN.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/DEN.svg')";
    document.getElementById("team1Name").innerHTML = "Denver Nuggets";

  }else if(document.getElementById("selectTeam").value === "1610612757"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/POR.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/POR.svg')";
    document.getElementById("team1Name").innerHTML = "Portland Trail Blazers";

  }else if(document.getElementById("selectTeam").value === "1610612745"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/HOU.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/HOU.svg')";
    document.getElementById("team1Name").innerHTML = "Houston Rockets";

  }else if(document.getElementById("selectTeam").value === "1610612762"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/UTA.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/UTA.svg')";
    document.getElementById("team1Name").innerHTML = "Utah Jazz";

  }else if(document.getElementById("selectTeam").value === "1610612760"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/OKC.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/OKC.svg')";
    document.getElementById("team1Name").innerHTML = "Oklahoma City Thunder";

  }else if(document.getElementById("selectTeam").value === "1610612759"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/SAS.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/SAS.svg')";
    document.getElementById("team1Name").innerHTML = "San Antonio Spurs";

  }else if(document.getElementById("selectTeam").value === "1610612746"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/LAC.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/LAC.svg')";
    document.getElementById("team1Name").innerHTML = "LA Clippers";

  }else if(document.getElementById("selectTeam").value === "1610612758"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/SAC.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/SAC.svg')";
    document.getElementById("team1Name").innerHTML = "Sacramento Kings";

  }else if(document.getElementById("selectTeam").value === "1610612747"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/LAL.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/LAL.svg')";
    document.getElementById("team1Name").innerHTML = "Los Angeles Lakers";

  }else if(document.getElementById("selectTeam").value === "1610612750"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/MIN.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/MIN.svg')";
    document.getElementById("team1Name").innerHTML = "Minnesota Timberwolves";

  }else if(document.getElementById("selectTeam").value === "1610612763"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/MEM.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/MEM.svg')";
    document.getElementById("team1Name").innerHTML = "Memphis Grizzlies";

  }else if(document.getElementById("selectTeam").value === "1610612740"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/NOP.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/NOP.svg')";
    document.getElementById("team1Name").innerHTML = "New Orleans Pelicans";

  }else if(document.getElementById("selectTeam").value === "1610612742"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/DAL.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/DAL.svg')";
    document.getElementById("team1Name").innerHTML = "Dallas Mavericks";

  }else if(document.getElementById("selectTeam").value === "1610612756"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/PHX.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/PHX.svg')";
    document.getElementById("team1Name").innerHTML = "Phoenix Suns";
  }
  
  else if(document.getElementById("selectTeam").value === "0"){
      teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/NBA.svg'";
  }
  teamName.style.backgroundColor = document.getElementById("selectTeam").value;
};


var changeBgColor2 = function(){
  var teamBackgroundLogo = document.getElementById("team2");
  var teamName = document.getElementById("team2Logo");
  teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/NBA.svg')";

  if(document.getElementById("selectTeam2").value === "0"){
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/NBA.svg)";
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/NBA.svg)";
    document.getElementById("team2Name").innerHTML = "Select Team";

  }else if(document.getElementById("selectTeam2").value === "1610612749"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/MIL.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/MIL.svg')";
    document.getElementById("team2Name").innerHTML = "Milwaukee Bucks";

  }else if(document.getElementById("selectTeam2").value === "1610612761"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/TOR.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/TOR.svg')";
    document.getElementById("team2Name").innerHTML = "Toronto Raptors";

  }else if(document.getElementById("selectTeam2").value === "1610612755"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/PHI.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/PHI.svg')";
    document.getElementById("team2Name").innerHTML = "Philadelphia 76ers";

  }else if(document.getElementById("selectTeam2").value === "1610612738"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/BOS.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/BOS.svg')";
    document.getElementById("team2Name").innerHTML = "Boston Celtics";

  }else if(document.getElementById("selectTeam2").value === "1610612754"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/IND.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/IND.svg')";
    document.getElementById("team2Name").innerHTML = "Indiana Pacers";

  }else if(document.getElementById("selectTeam2").value === "1610612751"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/BKN.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/BKN.svg')";
    document.getElementById("team2Name").innerHTML = "Brooklyn Nets";

  }else if(document.getElementById("selectTeam2").value === "1610612753"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/ORL.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/ORL.svg')";
    document.getElementById("team2Name").innerHTML = "Orlando Magic";

  }else if(document.getElementById("selectTeam2").value === "1610612765"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/DET.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/DET.svg')";
    document.getElementById("team2Name").innerHTML = "Detroit Pistons";

  }else if(document.getElementById("selectTeam2").value === "1610612766"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/CHA.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/CHA.svg')";
    document.getElementById("team2Name").innerHTML = "Charlotte Hornets";

  }else if(document.getElementById("selectTeam2").value === "1610612748"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/MIA.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/MIA.svg')";
    document.getElementById("team2Name").innerHTML = "Miami Heat";

  }else if(document.getElementById("selectTeam2").value === "1610612764"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/WAS.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/WAS.svg')";
    document.getElementById("team2Name").innerHTML = "Washington Wizards";

  }else if(document.getElementById("selectTeam2").value === "1610612737"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/ATL.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/ATL.svg')";
    document.getElementById("team2Name").innerHTML = "Atlanta Hawks";

  }else if(document.getElementById("selectTeam2").value === "1610612741"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/CHI.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/CHI.svg')";
    document.getElementById("team2Name").innerHTML = "Chicago Bulls";

  }else if(document.getElementById("selectTeam2").value === "1610612739"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/CLE.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/CLE.svg')";
    document.getElementById("team2Name").innerHTML = "Cleveland Cavaliers";

  }else if(document.getElementById("selectTeam2").value === "1610612752"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/NYK.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/NYK.svg')";
    document.getElementById("team2Name").innerHTML = "New York Knicks";

  }else if(document.getElementById("selectTeam2").value === "1610612744"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/GSW.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/GSW.svg')";
    document.getElementById("team2Name").innerHTML = "Golden State Warriors";

  }else if(document.getElementById("selectTeam2").value === "1610612743"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/DEN.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/DEN.svg')";
    document.getElementById("team2Name").innerHTML = "Denver Nuggets";

  }else if(document.getElementById("selectTeam2").value === "1610612757"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/POR.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/POR.svg')";
    document.getElementById("team2Name").innerHTML = "Portland Trail Blazers";

  }else if(document.getElementById("selectTeam2").value === "1610612745"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/HOU.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/HOU.svg')";
    document.getElementById("team2Name").innerHTML = "Houston Rockets";

  }else if(document.getElementById("selectTeam2").value === "1610612762"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/UTA.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/UTA.svg')";
    document.getElementById("team2Name").innerHTML = "Utah Jazz";

  }else if(document.getElementById("selectTeam2").value === "1610612760"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/OKC.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/OKC.svg')";
    document.getElementById("team2Name").innerHTML = "Oklahoma City Thunder";

  }else if(document.getElementById("selectTeam2").value === "1610612759"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/SAS.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/SAS.svg')";
    document.getElementById("team2Name").innerHTML = "San Antonio Spurs";

  }else if(document.getElementById("selectTeam2").value === "1610612746"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/LAC.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/LAC.svg')";
    document.getElementById("team2Name").innerHTML = "LA Clippers";

  }else if(document.getElementById("selectTeam2").value === "1610612758"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/SAC.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/SAC.svg')";
    document.getElementById("team2Name").innerHTML = "Sacramento Kings";

  }else if(document.getElementById("selectTeam2").value === "1610612747"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/LAL.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/LAL.svg')";
    document.getElementById("team2Name").innerHTML = "Los Angeles Lakers";

  }else if(document.getElementById("selectTeam2").value === "1610612750"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/MIN.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/MIN.svg')";
    document.getElementById("team2Name").innerHTML = "Minnesota Timberwolves";

  }else if(document.getElementById("selectTeam2").value === "1610612763"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/MEM.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/MEM.svg')";
    document.getElementById("team2Name").innerHTML = "Memphis Grizzlies";

  }else if(document.getElementById("selectTeam2").value === "1610612740"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/NOP.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/NOP.svg')";
    document.getElementById("team2Name").innerHTML = "New Orleans Pelicans";

  }else if(document.getElementById("selectTeam2").value === "1610612742"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/DAL.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/DAL.svg')";
    document.getElementById("team2Name").innerHTML = "Dallas Mavericks";

  }else if(document.getElementById("selectTeam2").value === "1610612756"){
    teamBackgroundLogo.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/PHX.svg')";
    teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/PHX.svg')";
    document.getElementById("team2Name").innerHTML = "Phoenix Suns";
  }
  
  else if(document.getElementById("selectTeam2").value === "0"){
      teamName.style.backgroundImage = "url('https://www.nba.com/assets/logos/teams/primary/web/NBA.svg'";
  }
  teamName.style.backgroundColor = document.getElementById("selectTeam2").value;
};
