// Settings
var instanceid = "83e9181" // Right click instance and open in new tab, copy the ID in the URL
var server = "ARK" // Server Name
var corsproxy = "https://cors.proxy.com/?" // Proxy you're using for CORS (if applicable)
var panelurl = "https://my.panel.url/" // Panel URL
var apiusername = "USERNAME" // Username for API user
var apipassword = "PASSWORD" // Password for API user
var webhook = "https://discord.com/api/webhooks/12345/12345" // Discord Webhook URL

// Code
var XMLHttpRequest = require('xhr2');
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

var loginurl = `${corsproxy}${panelurl}API/ADSModule/Servers/${instanceid}/API/Core/Login`;
var loginRequest = new XMLHttpRequest();
loginRequest.open("POST", loginurl);

loginRequest.setRequestHeader("Accept", "text/javascript");
loginRequest.setRequestHeader("Content-Type", "application/json");

loginRequest.onreadystatechange = function update() {
   if (loginRequest.readyState === 4) {
      console.log(loginRequest.status);
      console.log(loginRequest.responseText);
      JSON.parse(loginRequest.responseText);

      var obj = JSON.parse(loginRequest.responseText);

var statusdata = `{"SESSIONID":"${obj.sessionID}"}`;

statusreq.open("POST", statusurl);

statusreq.setRequestHeader("Accept", "text/javascript");
statusreq.setRequestHeader("Content-Type", "application/json");

statusreq.send(statusdata);

console.log(obj.sessionID)

   }};


var logindata = `{"username":"${apiusername}", "password":"${apipassword}", "token":"", "rememberMe":"false"}`;

loginRequest.send(logindata);

setInterval(loginRequest.onreadystatechange, 10000)

// 2ND HALF

var statusurl = `${corsproxy}${panelurl}API/ADSModule/Servers/${instanceid}/API/Core/GetUpdates`;

var statusreq = new XMLHttpRequest();
statusreq.open("POST", statusurl);

statusreq.setRequestHeader("Accept", "text/javascript");
statusreq.setRequestHeader("Content-Type", "application/json");

var oldstate = null;

statusreq.onreadystatechange = function () {
   if (statusreq.readyState === 4) {
      console.log(statusreq.status);
      console.log(statusreq.responseText);
      JSON.parse(statusreq.responseText);

      var obj2 = JSON.parse(statusreq.responseText);

      console.log(obj2.Status.State);
      
      if (oldstate != obj2.Status.State) {
         console.log("changed")
         const request = new XMLHttpRequest();
      if(obj2.Status.State == 20) {
         console.log("Running")
      request.open("POST", `${webhook}`);
      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: `${server} Server`,
        avatar_url: "",
        content: "Running"
      }

      request.send(JSON.stringify(params));
      }
      else {
      if(obj2.Status.State == 0) {
         console.log("Stopped")
      request.open("POST", `${webhook}`);
      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: `${server} Server`,
        avatar_url: "",
        content: "Stopped"
      }

      request.send(JSON.stringify(params));
         }
      else {
      if(obj2.Status.State == 10) {
         console.log("Starting")
         request.open("POST", `${webhook}`);
         request.setRequestHeader('Content-type', 'application/json');
   
         const params = {
           username: `${server} Server`,
           avatar_url: "",
           content: "Starting"
         }
   
         request.send(JSON.stringify(params));
      }
      else {
      if(obj2.Status.State == 40) {
         console.log("Stopping")
      request.open("POST", `${webhook}`);
      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: `${server} Server`,
        avatar_url: "",
        content: "Stopping"
      }

      request.send(JSON.stringify(params));
      }
      else {
      if(obj2.Status.State == 75) {
         console.log("Updating")
      request.open("POST", `${webhook}`);
      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: `${server} Server`,
        avatar_url: "",
        content: "Updating"
      }

      request.send(JSON.stringify(params));
      }
      else {
      if(obj2.Status.State == 50) {
         console.log("Sleeping")
      request.open("POST", `${webhook}`);
      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: `${server} Server`,
        avatar_url: "",
        content: "Sleeping"
      }

      request.send(JSON.stringify(params));
      }
   }}}}}

   }
   else {console.log("same")}
      oldstate = obj2.Status.State;
}}
