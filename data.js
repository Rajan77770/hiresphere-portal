function getCandidates(){

return JSON.parse(

localStorage.getItem("candidates")

)||[];

}

function saveCandidates(data){

localStorage.setItem(

"candidates",

JSON.stringify(data)

);

}