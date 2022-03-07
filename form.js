

function resum(){
alert("Do You Want To Select A  File");
var x=document.getElementById("resume").type="file";
}

function menu(){
document.getElementById('menuside').style.display="block";
document.getElementById('menuside').style.left='0%';
document.getElementById('menuside').style.animation="side 0.5s linear 0s 1 reverse";


}

function back(){
document.getElementById('menuside').style.left='-110%';
document.getElementById('menuside').style.animation="side1  0.5s linear 0s 1 reverse";
document.getElementById('form').style.filter="brightness(1)";

}

function color(){
var x=document.getElementById('color').value;
document.getElementById('form').style.backgroundColor=x;
document.getElementById('menuside').style.backgroundColor=document.getElementById('color').value
back()
}


/*function fun(){
document.getElementById("reset").style.boxShadow="0px 0px 0px black";
document.getElementById("reset").style.transform="translateY(10px)";

}*/