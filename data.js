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

return(

c.name ||

(c.email ?
c.email.split("@")[0] : "")

||

"Candidate"

);

}