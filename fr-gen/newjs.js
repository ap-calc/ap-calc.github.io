/*
Free Response Generator for AP Calculus AB and BC
Denis Shubleka
Last updated: Summer 2023
*/

//class definition for Question objects
class Question {
   //The constructor takes a filename and assigns properties.
    constructor(fname) {
        this.level   = fname.slice(0,2)
        this.year    = fname.slice(3,7)
        this.form    = fname.slice(8,9)
        this.qnumber = fname.slice(11,12)
    }

    //Get filename
    filename(){
        let x = ""
        return x.concat(this.level,"_",this.year,"_",this.form,"_0",this.qnumber,".png")

    }
    //Calculator Active?
     calculator(){
        if (this.qnumber < 3)
            return "YES"
        else if (this.qnumber == 3  && this.year < 2011)
            return "YES"
        else
            return "NO"
    }
    //Get general information about a question. 
    info(){
        let y= "Level: "
        return y.concat(this.level," | Year: ",this.year," | Form: ", this.form," | Problem: ",this.qnumber," | Calculator Active: ", this.calculator(),".")
    }
}

//Data - add new questions here
const abfnames = ["AB_1998_A_01.png","AB_1998_A_02.png","AB_1998_A_03.png","AB_1998_A_04.png","AB_1998_A_05.png","AB_1998_A_06.png","AB_1999_A_01.png","AB_1999_A_02.png","AB_1999_A_03.png","AB_1999_A_04.png","AB_1999_A_05.png","AB_1999_A_06.png","AB_2000_A_01.png","AB_2000_A_02.png","AB_2000_A_03.png","AB_2000_A_04.png","AB_2000_A_05.png","AB_2000_A_06.png","AB_2001_A_01.png","AB_2001_A_02.png","AB_2001_A_03.png","AB_2001_A_04.png","AB_2001_A_05.png","AB_2001_A_06.png","AB_2002_A_01.png","AB_2002_A_02.png","AB_2002_A_03.png","AB_2002_A_04.png","AB_2002_A_05.png","AB_2002_A_06.png","AB_2002_B_01.png","AB_2002_B_02.png","AB_2002_B_03.png","AB_2002_B_04.png","AB_2002_B_05.png","AB_2002_B_06.png","AB_2003_A_01.png","AB_2003_B_01.png","AB_2003_A_02.png","AB_2003_B_02.png","AB_2003_A_03.png","AB_2003_B_03.png","AB_2003_A_04.png","AB_2003_B_04.png","AB_2003_A_05.png","AB_2003_B_05.png","AB_2003_A_06.png","AB_2003_B_06.png","AB_2004_A_01.png","AB_2004_B_01.png","AB_2004_A_02.png","AB_2004_B_02.png","AB_2004_A_03.png","AB_2004_B_03.png","AB_2004_A_04.png","AB_2004_B_04.png","AB_2004_A_05.png","AB_2004_B_05.png","AB_2004_A_06.png","AB_2004_B_06.png","AB_2005_A_01.png","AB_2005_B_01.png","AB_2005_A_02.png","AB_2005_B_02.png","AB_2005_A_03.png","AB_2005_B_03.png","AB_2005_A_04.png","AB_2005_B_04.png","AB_2005_A_05.png","AB_2005_B_05.png","AB_2005_A_06.png","AB_2005_B_06.png","AB_2006_A_01.png","AB_2006_B_01.png","AB_2006_A_02.png","AB_2006_B_02.png","AB_2006_A_03.png","AB_2006_B_03.png","AB_2006_A_04.png","AB_2006_B_04.png","AB_2006_A_05.png","AB_2006_B_05.png","AB_2006_A_06.png","AB_2006_B_06.png","AB_2007_A_01.png","AB_2007_B_01.png","AB_2007_A_02.png","AB_2007_B_02.png","AB_2007_A_03.png","AB_2007_B_03.png","AB_2007_A_04.png","AB_2007_B_04.png","AB_2007_A_05.png","AB_2007_B_05.png","AB_2007_A_06.png","AB_2007_B_06.png","AB_2008_A_01.png","AB_2008_B_01.png","AB_2008_A_02.png","AB_2008_B_02.png","AB_2008_A_03.png","AB_2008_B_03.png","AB_2008_A_04.png","AB_2008_B_04.png","AB_2008_A_05.png","AB_2008_B_05.png","AB_2008_A_06.png","AB_2008_B_06.png","AB_2009_A_01.png","AB_2009_B_01.png","AB_2009_A_02.png","AB_2009_B_02.png","AB_2009_A_03.png","AB_2009_B_03.png","AB_2009_A_04.png","AB_2009_B_04.png","AB_2009_A_05.png","AB_2009_B_05.png","AB_2009_A_06.png","AB_2009_B_06.png","AB_2010_A_01.png","AB_2010_B_01.png","AB_2010_A_02.png","AB_2010_B_02.png","AB_2010_A_03.png","AB_2010_B_03.png","AB_2010_A_04.png","AB_2010_B_04.png","AB_2010_A_05.png","AB_2010_B_05.png","AB_2010_A_06.png","AB_2010_B_06.png","AB_2011_A_01.png","AB_2011_B_01.png","AB_2011_A_02.png","AB_2011_B_02.png","AB_2011_A_03.png","AB_2011_B_03.png","AB_2011_A_04.png","AB_2011_B_04.png","AB_2011_A_05.png","AB_2011_B_05.png","AB_2011_A_06.png","AB_2011_B_06.png","AB_2012_A_01.png","AB_2012_A_02.png","AB_2012_A_03.png","AB_2012_A_04.png","AB_2012_A_05.png","AB_2012_A_06.png","AB_2013_A_01.png","AB_2013_A_02.png","AB_2013_A_03.png","AB_2013_A_04.png","AB_2013_A_05.png","AB_2013_A_06.png","AB_2014_A_01.png","AB_2014_A_02.png","AB_2014_A_03.png","AB_2014_A_04.png","AB_2014_A_05.png","AB_2014_A_06.png","AB_2015_A_01.png","AB_2015_A_02.png","AB_2015_A_03.png","AB_2015_A_04.png","AB_2015_A_05.png","AB_2015_A_06.png","AB_2016_A_01.png","AB_2016_A_02.png","AB_2016_A_03.png","AB_2016_A_04.png","AB_2016_A_05.png","AB_2016_A_06.png","AB_2017_A_01.png","AB_2017_A_02.png","AB_2017_A_03.png","AB_2017_A_04.png","AB_2017_A_05.png","AB_2017_A_06.png","AB_2018_A_01.png","AB_2018_A_02.png","AB_2018_A_03.png","AB_2018_A_04.png","AB_2018_A_05.png","AB_2018_A_06.png","AB_2019_A_01.png","AB_2019_A_02.png","AB_2019_A_03.png","AB_2019_A_04.png","AB_2019_A_05.png","AB_2019_A_06.png","AB_2021_A_06.png","AB_2021_A_05.png","AB_2021_A_04.png","AB_2021_A_03.png","AB_2021_A_02.png","AB_2021_A_01.png","AB_2022_A_01.png","AB_2022_A_02.png","AB_2022_A_03.png","AB_2022_A_04.png","AB_2022_A_05.png","AB_2022_A_06.png","AB_2023_A_01.png","AB_2023_A_02.png","AB_2023_A_03.png","AB_2023_A_04.png","AB_2023_A_05.png","AB_2023_A_06.png"];
const bcfnames = ["BC_2001_A_01.png","BC_2001_A_02.png","BC_2001_A_03.png","BC_2001_A_04.png","BC_2001_A_05.png","BC_2001_A_06.png","BC_2002_A_01.png","BC_2002_A_02.png","BC_2002_A_03.png","BC_2002_A_04.png","BC_2002_A_05.png","BC_2002_A_06.png","BC_2002_B_01.png","BC_2002_B_02.png","BC_2002_B_03.png","BC_2002_B_04.png","BC_2002_B_05.png","BC_2002_B_06.png","BC_2003_A_01.png","BC_2003_B_01.png","BC_2003_A_02.png","BC_2003_B_02.png","BC_2003_A_03.png","BC_2003_B_03.png","BC_2003_A_04.png","BC_2003_B_04.png","BC_2003_A_05.png","BC_2003_B_05.png","BC_2003_A_06.png","BC_2003_B_06.png","BC_2004_A_01.png","BC_2004_B_01.png","BC_2004_A_02.png","BC_2004_B_02.png","BC_2004_A_03.png","BC_2004_B_03.png","BC_2004_A_04.png","BC_2004_B_04.png","BC_2004_A_05.png","BC_2004_B_05.png","BC_2004_A_06.png","BC_2004_B_06.png","BC_2005_A_01.png","BC_2005_B_01.png","BC_2005_A_02.png","BC_2005_B_02.png","BC_2005_A_03.png","BC_2005_B_03.png","BC_2005_A_04.png","BC_2005_B_04.png","BC_2005_A_05.png","BC_2005_B_05.png","BC_2005_A_06.png","BC_2005_B_06.png","BC_2006_A_01.png","BC_2006_B_01.png","BC_2006_A_02.png","BC_2006_B_02.png","BC_2006_A_03.png","BC_2006_B_03.png","BC_2006_A_04.png","BC_2006_B_04.png","BC_2006_A_05.png","BC_2006_B_05.png","BC_2006_A_06.png","BC_2006_B_06.png","BC_2007_A_01.png","BC_2007_B_01.png","BC_2007_A_02.png","BC_2007_B_02.png","BC_2007_A_03.png","BC_2007_B_03.png","BC_2007_A_04.png","BC_2007_B_04.png","BC_2007_A_05.png","BC_2007_B_05.png","BC_2007_A_06.png","BC_2007_B_06.png","BC_2008_A_01.png","BC_2008_B_01.png","BC_2008_A_02.png","BC_2008_B_02.png","BC_2008_A_03.png","BC_2008_B_03.png","BC_2008_A_04.png","BC_2008_B_04.png","BC_2008_A_05.png","BC_2008_B_05.png","BC_2008_A_06.png","BC_2008_B_06.png","BC_2009_A_01.png","BC_2009_B_01.png","BC_2009_A_02.png","BC_2009_B_02.png","BC_2009_A_03.png","BC_2009_B_03.png","BC_2009_A_04.png","BC_2009_B_04.png","BC_2009_A_05.png","BC_2009_B_05.png","BC_2009_A_06.png","BC_2009_B_06.png","BC_2010_A_01.png","BC_2010_B_01.png","BC_2010_A_02.png","BC_2010_B_02.png","BC_2010_A_03.png","BC_2010_B_03.png","BC_2010_A_04.png","BC_2010_B_04.png","BC_2010_A_05.png","BC_2010_B_05.png","BC_2010_A_06.png","BC_2010_B_06.png","BC_2011_A_01.png","BC_2011_B_01.png","BC_2011_A_02.png","BC_2011_B_02.png","BC_2011_A_03.png","BC_2011_B_03.png","BC_2011_A_04.png","BC_2011_B_04.png","BC_2011_A_05.png","BC_2011_B_05.png","BC_2011_A_06.png","BC_2011_B_06.png","BC_2012_A_01.png","BC_2012_A_02.png","BC_2012_A_03.png","BC_2012_A_04.png","BC_2012_A_05.png","BC_2012_A_06.png","BC_2013_A_01.png","BC_2013_A_02.png","BC_2013_A_03.png","BC_2013_A_04.png","BC_2013_A_05.png","BC_2013_A_06.png","BC_2014_A_01.png","BC_2014_A_02.png","BC_2014_A_03.png","BC_2014_A_04.png","BC_2014_A_05.png","BC_2014_A_06.png","BC_2015_A_01.png","BC_2015_A_02.png","BC_2015_A_03.png","BC_2015_A_04.png","BC_2015_A_05.png","BC_2015_A_06.png","BC_2016_A_01.png","BC_2016_A_02.png","BC_2016_A_03.png","BC_2016_A_04.png","BC_2016_A_05.png","BC_2016_A_06.png","BC_2017_A_01.png","BC_2017_A_02.png","BC_2017_A_03.png","BC_2017_A_04.png","BC_2017_A_05.png","BC_2017_A_06.png","BC_2018_A_01.png","BC_2018_A_02.png","BC_2018_A_03.png","BC_2018_A_04.png","BC_2018_A_05.png","BC_2018_A_06.png","BC_2019_A_01.png","BC_2019_A_02.png","BC_2019_A_03.png","BC_2019_A_04.png","BC_2019_A_05.png","BC_2019_A_06.png","BC_2021_A_01.png","BC_2021_A_02.png","BC_2021_A_03.png","BC_2021_A_04.png","BC_2021_A_05.png","BC_2021_A_06.png","BC_2022_A_01.png","BC_2022_A_02.png","BC_2022_A_03.png","BC_2022_A_04.png","BC_2022_A_05.png","BC_2022_A_06.png","BC_2022_A_03.png","BC_2023_A_02.png","BC_2023_A_03.png","BC_2023_A_04.png","BC_2023_A_05.png","BC_2023_A_06.png"];
const completeList = abfnames.concat(bcfnames) 

//Construct arrays of Question objects
const questions = [] //to store objects
completeList.forEach(el => {questions.push(new Question(el))});
const abquestions = questions.filter(function(q) { return q.level === 'AB' })
const bcquestions = questions.filter(function(q) { return q.level === 'BC' })

//Pick a random question from either level
function randomQuestion(){
    return questions[Math.floor(Math.random()*questions.length)]
}
function randomQuestionAB(){
    return abquestions[Math.floor(Math.random()*abquestions.length)]
}
function randomQuestionBC(){
    return bcquestions[Math.floor(Math.random()*bcquestions.length)]
}

let chosenq = randomQuestion()
let source = "<b>" + chosenq.info() + "</b";

function generate(level) {
    document.getElementById("info").style.display = "none";
    if (level ==="AB"){
        chosenq = randomQuestionAB()
        
    } else if (level ==="BC") {
        chosenq = randomQuestionBC()
    } else {
        chosenq = randomQuestion()
    }
    
    source = "<b>" + chosenq.info() + "</b";
    const code = '<img src="fr-img/' + chosenq.filename() + '" alt="' + chosenq.info+'">' 
    document.getElementById("stage").innerHTML = code;
     
 }

 //A function to show/hide information about the question
 function showInfo() { 
   let x = document.getElementById("info");
          if (x.style.display === "none") {
       x.style.display = "block";
       document.getElementById('info').innerHTML = source;
   
     } else {

        x.style.display = "none";
     }
   
   }
