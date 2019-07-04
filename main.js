function makeBold(){
    /*var tab=document.getElementsByClassName("textarea"); 
    for(i=0; i<tab.length; i++) { tab[i].style.fontWeight="bold";*/

       if(document.getElementById("textarea").style.fontWeight=="normal")
       {document.getElementById("textarea").style.fontWeight="bold" ;}
       else
        {document.getElementById("textarea").style.fontWeight="normal"}
}

function changeSize(){
    // if(size== "20px") {document.getElementById("textarea").style.fontSize="20px"}
    // else if (size=="30px") {document.getElementById("textarea").style.fontSize="30px"}
    // else {document.getElementById("textarea").style.fontSize="40px"}
  document.getElementById("textarea").style.fontSize=document.getElementById('size').value;
}
function changeFont(){
    document.getElementById("textarea").style.fontFamily=document.getElementById('font').value;
}
function makeItalic(){
    if(document.getElementById("textarea").style.fontStyle=="normal")
    {document.getElementById("textarea").style.fontStyle="italic"}
    else {document.getElementById("textarea").style.fontStyle="normal"
    }
}
function makeUnderline(){
    if (document.getElementById("textarea").style.textDecoration=="none")
    {document.getElementById("textarea").style.textDecoration="underline";
}
    else {
        document.getElementById("textarea").style.textDecoration="none" }
}

