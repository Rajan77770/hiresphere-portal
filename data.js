/* HireSphere GOD DATA ENGINE */

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

/* SAFE NAME FIX */

function getName(c){

return(

c.name ||
c.fullname ||
c.candidateName ||
(c.email ? c.email.split("@")[0] : "") ||
"Candidate"

);

}
