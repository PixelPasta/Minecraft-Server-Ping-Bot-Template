<center>
<h1> Minecraft Server Ping Bot </h1>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
<img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white">
<hr>
</center>
<ul> <li> MSBP is a useful bot to get stats of your own minecraft server in a few seconds.
</li> <li> Takes only a few minutes to setup. </li>
<hr> </h2> <center> <h1 style="border-bottom: none">
📕 Commands  </center> </h1> <h2 style="border-bottom: none">
 <dl> <dt>• Ping -</dt>
 <dd> ⏰Get The Latency of the server.</dd>
 <dt>• Players - 
 <dd> 🔄Get The Number of Players Online. </dd>
 <dt>• MOTD - 
 <dd> 🎏Get The Current MOTD of the server. </dd>
 <dt>• Version - </dt>
 <dd> 📋Get the Current Version of the server.
<hr> </h1> <center>
<h1> 📚 Setup - </h1> </center>
<h2>
<ol style="margin-top: 0px">  <li> Install <a href="https://nodejs.org/en/" > <u> NodeJS</u> </a> LTM v16.13.0 or above. </li>
<li> Download <a href=""><u>This</u></a> ZIP file and extract it.
<li> Go to <a href="https://discord.com/developers/applications"><u>Discord Developer Portal</u></a> and create a new application  <img src="./Docs File/application.png"> </li>
<li> Click On Bot <br> <img src="./Docs File/bot.png"> </li>
<li> Click On Add Bot <br> <img src="./Docs File/Add.png"> </li>
<li> Click On Copy <br> <img src="./Docs File/copy.png"> </li>
<li> Now Go To The Extracted Folder, Then Open config.json in notepad. </li>
<li> Replace "Your Token" With the bot's token. (The One you just copied) </li>
<li> Replace "Your Minecraft Server" with the ip address of your minecraft server. (Example - "mc.hypixel.net
") </li>
<li> Replace "Your Discord server id" with the ID of the discord server you want the bot in. To Get the ID, first enable Developer mode in your account settings. (Advanced > Developer Mode). Then Right Click your server's icon on the left side of your screen and click copy ID. <br><img src="./Docs File/ID.png"> </li>
<li> Replace "your desired prefix" with the prefix you want for the bot. </li>
<li> Now Open CMD and navigate to the bot's folder. </li>
<li> Type the command "npm install" </li>
<li> Wait for All the important modules to be installed. </li>
<li> Go Back to the Discord Developer Portal and click on the application that you just made. 
Click on Oauth2 and click on URL generator. <br>
<img src="./Docs File/OA.png"> <br>
Now Check The Bot Check Mark in the scopes section. <br> <img src="./Docs File/scopes.png"> <br>
Scroll down and check these permissions in the permission section. <br> <img src="./Docs File/erms.png"> <br>
Scroll Down a Bit More and click copy <br>
<img src="./Docs File/invite.png"> <br>
Now Paste this URL in the browser and invite the bot to your server. </li>
<li> Open CMD back and type the command "node index.js". After a while, it should display "Minecraft Server Ping Bot is ready to use". And the Bot Should come online.
<hr>
<center> Congrats! You've setup the bot <hr>
☁ Hosting <br>
</center>
Now, you've made your bot, but you it to be online 24/7. We've got a solution for that! <br>
<a href="https://railway.app/"><u>Railway.app</u></a> is a hosting service that provides free hosting for discord bots without any extra costs.
<br>
• First, Make an account on <a href="https://railway.app"><u>Railway</u></a>.
• Then Open the CMD in which your bot's folder is open and type this command: 
"npm i -g @railway/cli" <br>
• Then Type the command "railway login" and follow the steps to login.
• Go to <a href="https://railway.app/dashboard"><u>Railway's dashboard</u></a> and click on new project. <br> <img src="./Docs File/new.png"> <br>
• Click on empty project. <br> <img src="./Docs File/empty.png">
• Once the project is created, clik on setup on the left side. <br> <img src="./Docs File/setup.png"> <br>
• Now Copy the command under the "Connect to this project" heading like this. <br> <img src="./Docs File/link.png">
• Paste and run the command in CMD.
• Once the project is linked, type the command "railway up" and enter. After a while, the upload should be completed and the bot should be online. Your bot is now hosted 24/7.
<hr> <center>
❤ Thank You for using MSBP
<hr>
Notes <br> </center>
• For support, you can join the <a href="https://discord.gg/GDbTdhKs9c"><u>Support Server</u></a>. <br>
• To Report a bug, create a issue in the issues tab. <br>
• <b>This bot only works for Java servers</b>

