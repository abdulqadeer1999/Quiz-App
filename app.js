function check(){
    var correct = document.getElementById("option1")
    var notCorrect = document.getElementById("ques1")
    var inCorrect = document.getElementById("opttion2")
    var inAcuu = document.getElementById("opttion3")
    if(correct.checked === true){
        alert("Q1 is correct")
     
    }else{
       alert(" Q1 is incorrect")
    }



    var correc2 = document.getElementById("ques2")
    var notCorrect1 = document.getElementById("opt1")
    var notCorrect2 = document.getElementById("opt2")
    var notCorrect3 = document.getElementById("opt3")
    if(correc2.checked === true){
       alert("Q2 is correct")
        
    }else{
       alert("Q2 is incorrect")
    }



    var correct3 = document.getElementById("para")
    var noCorrect = document.getElementById("ans1")
    var innCorr = document.getElementById("ans2")
    var inSec = document.getElementById("ans3")
    if(correct3.checked === true){
      
        alert("Q3 is correct")
    }else{
        alert("Q3 is incorrect ")
    }
}
