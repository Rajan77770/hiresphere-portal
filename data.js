let data = JSON.parse(localStorage.getItem("data")) || [];

function saveData(){

localStorage.setItem("data",JSON.stringify(data));

}