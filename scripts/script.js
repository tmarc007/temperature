console.log("Script");

var userName="George";// creating and assigning value to the var

userName = "James"; //changing the var value


console.log(userName);

var employeeName="Kory";
var employeeAge=27;
var employeeCountry="USA";
var employeePhone="5558965";
var employeeSalaryMonthly=20000;
var employeeSalaryYearly=employeeSalaryMonthly *12;

var videoTitle="URL";
var backgroundImage="Clickable URL (same as aboove)";
var videoChannel="URL to channel";
var views="upticking number";
var postedDate="changes daily with date";
var thumbsUp="upticking thumbs up/down buttons";

let clientName="John";
let isActive=true;
let credit=1000; //they do not change

document.write(
    `
    <h3>Employee Info</h3>
    <p>Name: ${employeeName} </P>
    <p>Age: ${employeeAge} </p>
<br><br>
    <h3>YouTube Variables</h3>
    <p>Title: ${videoTitle}</p>
    <p>Image Thumbnail: ${backgroundImage}</p>
    <p>Video Channel: ${videoChannel}</p>
    <p>Views: ${views}</p>
    <p>Date Posted: ${postedDate}</p>
    <p>Thumbs Up${thumbsUp}</p>
    


    `

);