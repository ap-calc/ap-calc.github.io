
var size = 167;
var path ="dat/"
var img="";
var imga ="5a.png";
var f = new Array(size);
var fa = new Array(size);
for(var i = 0; i <= size; i++) {
  f[i] = i+1+".png";
  fa[i] =i+1+"a.png";
}

function getRandomImage(imagesArray, path) {
   
    path = path || 'dat/'; // default path here
    
    var i = Math.floor( Math.random() * imagesArray.length );
    
       img = imagesArray[ i ];
       imga = fa[ i ];
    


      setupAnswer();

     w3.hide('#cardanswer');

    return '<img src="' + path + img + '" alt ="Mouse Over to Flip">';
    
}



function setupAnswer(){
  
document.getElementById('cardanswer').innerHTML='<img src="' + path + imga + '">';  

}


