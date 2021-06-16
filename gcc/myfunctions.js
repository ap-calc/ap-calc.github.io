//METHODS
function clearTable(){


  //clear table
    document.getElementById('student-id').innerHTML = " ";
    document.getElementById('raw-scores').innerHTML = " ";
    document.getElementById('p-scores').innerHTML = " ";
    document.getElementById('m-scores').innerHTML = " ";
    document.getElementById('pm-scores').innerHTML = " ";
    document.getElementById('raw-average').innerHTML = " ";
    document.getElementById('p-average').innerHTML = " ";
    document.getElementById('m-average').innerHTML = " ";
    document.getElementById('pm-average').innerHTML = " ";
    document.getElementById('messageAlert').innerHTML = "";

}


function makeChart(){
//create Google Chart
     google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

var scoresA = sortIt(scores);
var scoresPMA = sortIt(scoresPM);

var mydata = Array(classSize+1);
       mydata[0]=['Raw Score','Adjusted Score'];

          for(var i=1; i<=classSize;i++){
        mydata[i] = [scoresA[i-1], scoresPMA[i-1]];
       }

     
      function drawChart() {
        var data = google.visualization.arrayToDataTable(mydata);
        
        var options = {
          title: 'Raw vs Adjusted Score',
          hAxis: {title: 'Raw Score', minValue: 0, maxValue: 100},
          vAxis: {title: 'PM-Adjusted Score', minValue: 0, maxValue: 100},
          legend: 'none',
          backgroundColor: 'transparent'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('myChart'));
          chart.draw(data, options);
        
      }

}//end makeChart()

function sortIt(myarray) {

var array2 = myarray.slice();

array2.sort(function(a, b){return a - b});
  return array2;
}

function pmUpdate (){

clearTable();
//mslider.value = 0.0;

 classSize = scores.length;

  for(var x=0; x < classSize; x++){

      scoresP[x] = 100.0 - Math.pow(1- scores[x]/100,p)*(100-scores[x]);

      scoresM[x] = Math.pow(100,m)*Math.pow(scores[x],1-m);

      scoresPM[x] = 0.5*(scoresM[x] + scoresP[x]);

      document.getElementById('student-id').innerHTML += students[x] + "<br />";
      document.getElementById('raw-scores').innerHTML += scores[x] + "<br />";
      document.getElementById('p-scores').innerHTML += scoresP[x].toFixed(3) + "<br />";
      document.getElementById('m-scores').innerHTML += scoresM[x].toFixed(3) + "<br />";
      document.getElementById('pm-scores').innerHTML += scoresPM[x].toFixed(3) + "<br />";


    }

  //Print Averages and P/M Values
      document.getElementById('raw-average').innerHTML ="<b>"+ (getAvg(scores)).toFixed(3)+ "</b>";
      document.getElementById('p-average').innerHTML ="<b>"+ (getAvg(scoresP)).toFixed(3)+ "</b>";
      document.getElementById('m-average').innerHTML ="<b>"+ (getAvg(scoresM)).toFixed(3)+ "</b>";
      document.getElementById('pm-average').innerHTML ="<b>"+ (getAvg(scoresPM)).toFixed(3)+ "</b>";
      
makeChart();

}//end pmUpdate()
 

function resetter () {
   document.getElementById('userScores').value = "";
 // document.getElementById('printout').innerHTML ="";
clearTable();
document.getElementById("pRange").value = 0.0;
pslider = 0.0; 
document.getElementById("pvalue").value = 0.0;
poutput.innerHTML = 0.0;
p =0.0;

document.getElementById("mRange").value = 0.0;
mslider = 0.0; 
document.getElementById("mvalue").value = 0.0;
moutput.innerHTML = 0.0;
m =0.0;

}
function updater () {
  
clearTable();
document.getElementById("pRange").value = 0.0;
pslider = 0.0; 
document.getElementById("pvalue").value = 0.0;
poutput.innerHTML = 0.0;
p =0.0;

document.getElementById("mRange").value = 0.0;
mslider = 0.0; 
document.getElementById("mvalue").value = 0.0;
moutput.innerHTML = 0.0;
m =0.0;

var rawdata = document.getElementById('userScores').value;
    // document.getElementById('printout').innerText = rawdata;
scores = rawdata.split('\n');
 classSize = scores.length;
 p = 0.0;
 m = 0.0;
students = Array(classSize);
 scoresP = Array(classSize);
 scoresM = Array(classSize);
 scoresPM = Array(classSize);

for(var x=0; x < classSize; x++){

      students[x] = "Student " + (x+1);
      scoresP[x] = 0.0;
      scoresM[x] = 0.0;
      scoresPM[x] = 0.0;

  }
  

      pmUpdate();




}//end function

//Get Average Function
function getAvg(grades) {
var total = 0.0;
grades.forEach(function (grade) {
   total += 1.0*grade;     }
);
return (total / grades.length);
}