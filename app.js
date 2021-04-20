alert(" MY GRADE CALCULATOR");
function calc(){
    
    var subject1 = document.getElementById("JAVA").value.length;
    var sub1 =parseInt(document.getElementById("JAVA").value);
    var sub2=parseInt(document.getElementById("PYTHON").value);
    var sub3=parseInt(document.getElementById("PHP").value);
    var sub4=parseInt(document.getElementById("SQL").value);
    if(subject1 == 0){
        document.getElementById("demo").innerHTML = "**Field is required";
    }
    if(sub1>40 && sub2>40 && sub3>40 && sub4>40){   
    var sum=(sub1+sub2+sub3+sub4);         
    var pcen=(sum/400)*100;                 
    var grade ="your percentage is "+pcen+"%";
    if(pcen>=80 && pcen<=100){
        var pce1="Your grade is A+";
        var x= document.getElementById("display").value= grade+" "+pce1;
    }
    else if (pcen>=70 && pcen<80){
        var pce2="your grade is A";
        var x= document.getElementById("display").value= grade+" "+pce2;
    }
    else if(pcen>=60 && pcen<70){
        var pce3="your grade is B";
        var x= document.getElementById("display").value= grade+" "+pce3;
    }
    else if (pcen>=50 && pcen<60){
        var pce4="your grade is C";
        var x= document.getElementById("display").value= grade+" "+pce4;
    }
    else if(pcen>=40 && pcen<50){
        var pce5="your grade is D";
        var x= document.getElementById("display").value= grade+"  "+pce5;
    }
    else if(pcen<40){
        var pce6="You fail";
        var x= document.getElementById("display").value= grade+"  "+pce6;
    }
    }
    else{
        var grade ="Your grade is F";
        var x= document.getElementById("display").value= grade;
    }
        
}