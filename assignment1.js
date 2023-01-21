var serverVerbs =["GET","GET","GET","POST","GET","POST"]
var serverPaths = ["/","/about","/contact","/login","/panel","/logout"]
var serverResponses =["Welcome to WEB700 Assignment 1","This assignment was prepared by Dipendra Adhikari","Student Name: iamdipenadk@gmail.com","User Logged In","Main Panel","Logout Complete"]


function httpRequest(httpVerb, path){
  for(i = 0; i<=serverPaths.length; i++){
    if(serverVerbs[i] == httpVerb && serverPaths[i] == path){
      return "200: " + serverResponses[i];
    }
  }

    return `400: Unable to request ${httpVerb} for ${path}`;

}

console.log(httpRequest("GET", "/"))


function random(min,max){
  return Math.floor(Math.random() * (max - min) + min);
}
function automateTests(){

var testVerbs = [ "GET", "POST"];
var testPaths = [ "/", "/about", "/contact","/login", "/panel","/logout","/randompath1","/randompath2"];

function randomRequest (){
  randVerb=random(0,1)
  randPath=random(0,7)

  console.log(httpRequest(testVerbs[randVerb],testPaths[randPath]))
}

setInterval(randomRequest,1)
}
automateTests();


