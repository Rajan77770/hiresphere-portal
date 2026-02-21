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


function safeName(c){

return (

c.name ||

c.fullname ||

c.candidate ||

"Unknown"

);

}