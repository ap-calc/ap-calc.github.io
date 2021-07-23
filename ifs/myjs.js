

	//method: shuffle
	function shuffle(array) {
	  array.sort(() => Math.random() - 0.5);
	}
	
	//method make table	
	function makeTeams(){
		
		startOver();
		//declare individual arrays for 'positions'
		var goalies=[];
		var defense1=[];
		var defense2=[];
		var defense3=[];
		var offense1=[];
		var offense2=[];
		var offense3=[];
		var unrated=[];
	    //teams (global vars)
	    var teamA = [];
	    var teamB = [];
	    var shuffledRoster = [];
	

	//store active players in a new array
	var active=[]; 

	//print active players and push into active players' array
	var i = 0;
	for(id in players){
	
		if(players[id].playing){
		 active.push(players[id]);
			i = i+1;
			document.getElementById("playing").innerHTML += "[ (" + i + ") " + players[id].firstname +" ] <br>";
		}
	} //end for
  



	//populate position arrays
	for(id in active) {
	
		if (active[id].goalie){
			goalies.push(active[id]);	
		}
	
	    if (active[id].dlevel == 1){
			defense1.push(active[id]);
		
		} 
	    if (active[id].dlevel == 2){
			defense2.push(active[id]);
	
		} 
		if (active[id].dlevel == 3){
			defense3.push(active[id]);
		
		} 
		if (active[id].olevel == 1){
			offense1.push(active[id]);
	
		} 
	     if (active[id].olevel == 2){
			offense2.push(active[id]);
	
		} 
		 if (active[id].olevel == 3){
			offense3.push(active[id]);
	
		} 
		if (active[id].olevel == 0 && active[id].dlevel == 0 && !active[id].goalie) {
			unrated.push(active[id]);
	
		}
		
	} 

	//shuffle all position arrays
	shuffle(goalies);
	shuffle(defense1);
	shuffle(defense2);
	shuffle(defense3);
	shuffle(offense1);
	shuffle(offense2);
	shuffle(offense3);
	shuffle(unrated);

    shuffledRoster= goalies.concat(defense1, offense1, defense2, offense2, defense3, offense3,unrated);
	
    var m=0;
	while(m < shuffledRoster.length) {
		teamA.push(shuffledRoster[m]);
		teamB.push(shuffledRoster[m+1]);
		m = m + 2;
	}
	teamA.sort(function(a, b){
	    if(a.firstname < b.firstname) { return -1; }
	    if(a.firstname > b.firstname) { return 1; }
	    return 0;
	})
	
	teamB.sort(function(a, b){
	    if(a.firstname < b.firstname) { return -1; }
	    if(a.firstname > b.firstname) { return 1; }
	    return 0;
	})

/*    for(id in shuffledRoster){
 	   document.getElementById("output").innerHTML += shuffledRoster[id].firstname + " ";
 	   } 
	   */
  
   for(id in teamA){
	   document.getElementById("teama").innerHTML += teamA[id].firstname + " ";
	   } 
   
	   for(id in teamB){
		   document.getElementById("teamb").innerHTML += teamB[id].firstname + " ";
		   } 
/*		   
   //fill tables
	for(id in goalies) {	
		document.getElementById("gk").innerHTML +=  goalies[id].firstname + "<br>";
	}
	for(id in unrated) {	
		document.getElementById("ur").innerHTML +=  unrated[id].firstname + "<br>";
	}
	for(id in defense1) {	
		document.getElementById("d1").innerHTML +=  defense1[id].firstname + "<br>";
	}

	for(id in defense2) {	
		document.getElementById("d2").innerHTML +=  defense2[id].firstname + "<br>";
	}

	for(id in defense3) {	
		document.getElementById("d3").innerHTML +=  defense3[id].firstname + "<br>";
	}


	for(id in offense1) {	
		document.getElementById("o1").innerHTML +=  offense1[id].firstname + "<br>";
	}

	for(id in offense2) {	
		document.getElementById("o2").innerHTML +=  offense2[id].firstname +  "<br>";
	}

	for(id in offense3) {	
		document.getElementById("o3").innerHTML +=  offense3[id].firstname + "<br>";
	}

*/
		
	} //end makeTeams
	
function startOver(){
	/*
	document.getElementById("gk").innerHTML =   " ";

	document.getElementById("ur").innerHTML =   " ";

	document.getElementById("d1").innerHTML =   " ";

	document.getElementById("d2").innerHTML =   " ";

	document.getElementById("d3").innerHTML =  " ";

	document.getElementById("o1").innerHTML =  " ";

	document.getElementById("o2").innerHTML =  " ";
	
	document.getElementById("o3").innerHTML = " ";
	*/
	
	document.getElementById("playing").innerHTML = "<u>Playing tonight (check to make sure this list is accurate?)</u> <br> ";
	
	document.getElementById("output").innerHTML = " ";
	
	document.getElementById("teama").innerHTML = "<b> Team A: </b>";
	
	document.getElementById("teamb").innerHTML = "<b> Team B: </b> ";


}//end startOver