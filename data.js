function getCandidates(){

try{

return JSON.parse(

localStorage.getItem("candidates")

)||[];

}catch{

return[];

}

}


function saveCandidates(data){

localStorage.setItem(

"candidates",

JSON.stringify(data)

);

}


function getName(c){

if(!c) return "Unknown";

return (

c.name ||

c.fullname ||

c.candidate ||

"Unknown"

);

}