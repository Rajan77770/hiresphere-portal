// ============================
// HIRESPHERE MASTER DATA SYSTEM
// ============================

let hiresphere = JSON.parse(
localStorage.getItem("hiresphere")
) || {

jobs:[],
applications:[],
candidates:[]

};


// SAVE MASTER DATA

function saveDB(){

localStorage.setItem(

"hiresphere",

JSON.stringify(hiresphere)

);

}



// ============================
// JOB FUNCTIONS
// ============================

function addJob(job){

hiresphere.jobs.push(job);

saveDB();

}


function getJobs(){

return hiresphere.jobs;

}



// ============================
// APPLY FUNCTIONS
// ============================

function applyJob(app){

hiresphere.applications.push(app);

saveDB();

}


function getApplications(){

return hiresphere.applications;

}



// ============================
// HR STATUS UPDATE
// ============================

function updateStatus(index,status){

hiresphere.applications[index].status = status;

saveDB();

}