
var size = 300;
var path ="dat/"
var img="";
var imga ="";
var mcq = new Array(size);

for(var i = 0; i <= size; i++) {
  mcq[i] = (i+1)+".png";
}

var mcqa = ['E','E','C','D','C','B','E','A','B','E','A','D','D','A','B','B','D','D','D','B','B','A','C','C','A',
      'C','D','E','E','A','D','B','B','C','D','E','A','E','E','A','A','B','B','E','D','D','B','A','C','B',
      'C','B','E','C','B','B','C','B','C','A','B','E','A','C','C', 'C','E','B','B','C','E','B','D','D','B',
      'C','E','E','D','C','E','B','D','B','D','E','D','D','C','C','B','E','E','B','A','D','B','A','C','D',
      'A','D','B','D','B','B','D','C','B','C','E','B','C','B','C','B','D','A','C','A','D','E','C','C','E',
      'E','A','D','D','A','C','A','D','E','C','A','A','B','E','C','D','C','D','D','C','B','E','A','B','D',
      'E','B','A','D','E','C','E','D','B','D','D','B','B','B','A','E','C','D','C','B','C','C','C','B','B',
      'E','D','E','C','D','E','C','D','B','D','B','C','C','D','B','D','D','C','B','D','E','E','A','C','D',
      'E','A','C','E','B','A','E','C','E','D','C','B','B','D','E','B','D','B','B','B','A','D','E','B','E',
      'C','B','E','B','A','C','D','E','B','E','B','B','B','D','C','C','A','C','C','E','B','D','D','C','D',
      'C','A','D','A','A','B','B','C','D','E','B','C','D','C','E','B','A','E','E','B','C','A','B','E','C',
'A','A','D','D','A','E','B','B','A','A','B','C','C','D','E','D','A','D','A','D','E','D','E','D','D'];

function getRandomImage(imagesArray, path) {
   
    path = path || 'dat/'; // default path here
    
    var i = Math.floor( Math.random() * imagesArray.length );
    
       img = imagesArray[i];
       imga = mcqa[i];
    


      setupAnswer();

     w3.hide('#cardanswer');

    return '<img src="' + path + img + '" alt ="Mouse Over to Flip">';
    
}



function setupAnswer(){
  
document.getElementById('cardanswer').innerHTML='<center><h2>'+ imga + '</h2></center>';  

}


