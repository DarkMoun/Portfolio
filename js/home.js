var page = 0;
var pos_img = 0;

document.getElementById("header").innerHTML = "Feel free to contact me at:&emsp;dmounswif@gmail.com";

var title = document.getElementById("title_proj");
var lbtn = document.getElementById("left_btn");
var rbtn = document.getElementById("right_btn");
var descr = document.getElementById("description");
var details = document.getElementById("details");
var intro = document.getElementById("introduction");
var image = document.getElementById("image_proj");
var separation = document.getElementById("separation");

intro.innerHTML = "I am Mounswif Darkaoui, a game developer and a huge fan of video games. On this web site you can see the games I worked on..";
displayIntro();

var images = {};
function loadImages(){
	images = {
		1: { 0: new Image, 1: new Image, 2: new Image, 3: new Image },
		2: { 0: new Image, 1: new Image, 2: new Image, 3: new Image },
		3: { 0: new Image, 1: new Image, 2: new Image, 3: new Image },
		4: { 0: new Image, 1: new Image, 2: new Image, 3: new Image },
		5: { 0: new Image, 1: new Image, 2: new Image, 3: new Image }
	};
	images[1][0].src = "png/projet1/p1_0.png";
	images[1][1].src = "png/projet1/p1_1.png";
	images[1][2].src = "png/projet1/p1_2.png";
	images[1][3].src = "png/projet1/p1_3.png";
	images[2][0].src = "png/projet2/p2_0.png";
	images[2][1].src = "png/projet2/p2_1.png";
	images[2][2].src = "png/projet2/p2_2.png";
	images[2][3].src = "png/projet2/p2_3.png";
	images[3][0].src = "png/projet3/p3_0.png";
	images[3][1].src = "png/projet3/p3_1.png";
	images[3][2].src = "png/projet3/p3_2.png";
	images[3][3].src = "png/projet3/p3_3.png";
	images[4][0].src = "png/projet4/p4_0.png";
	images[4][1].src = "png/projet4/p4_1.png";
	images[4][2].src = "png/projet4/p4_2.png";
	images[4][3].src = "png/projet4/p4_3.png";
	images[5][0].src = "png/projet5/p5_0.png";
	images[5][1].src = "png/projet5/p5_1.png";
	images[5][2].src = "png/projet5/p5_2.png";
	images[5][3].src = "png/projet5/p5_3.png";
}
loadImages();

function displayIntro(){
	intro.style.display = "inline-block";
	image.style.display = "none";
	title.style.display = "none";
	descr.style.display = "none";
	details.style.display = "none";
	separation.style.display = "none";
}

function hideIntro(){
	intro.style.display = "none";
	image.style.display = "block";
	title.style.display = "block";
	descr.style.display = "block";
	details.style.display = "block";
	if(details.innerHTML != "")
		separation.style.display = "block";
	else
		separation.style.display = "none";
}

function afficher(n){
	pos_img = 0;

	switch(n){
		case 0:
			lbtn.src = "";
			title.innerHTML = "";
			image.src = "";
			descr.innerHTML = "";
			displayIntro();
			break;
		case 1:
			lbtn.src = "png/left_arrow.png";
			title.innerHTML = "E-LearningScape";
			image.src = images[1][0].src;
			descr.innerHTML = "&emsp;&emsp;On this project I had to adapt and reproduce as a video game an existing physical escape game originally made by SAPIENS of the university Sorbonne Paris Cité. The purpose of this escape game is to deliver pedagogic notions to new teachers researchers who didn't have a teacher formation. In addition, the development of this project was an opportunity to test an improve two tools developed by MOCAH team of Lip6. I was the only gameplay developer of this game, and I worked with a graphic designer, a game designer, a tool developper and several pedagogy engineers.";
			details.innerHTML = "&emsp;&emsp;This game is entirely made using Entity-Component-System paradigm. Since the game was developed with Unity 2017 which didn't have ECS yet, I had to use a framework called FyFy to have ECS. FyFy was developed by MOCAH team of Lip6, a research team which work on education with new technologies. E-LearningScape is one of the first project developed with FyFy and, thus, contributed to its improvement.<br/><br/>&emsp;&emsp;Having a virtual escape game rather than a physical one offers several advantages and one of them is to be able to automatically track and process players' actions. After developing the game, I used another tool called Laalys developed by MOCAH , to track the actions made in the game. Initially, Laalys could only process traces of the player after the playing session by using a Petri net representing the game and a list of actions made by the player. During the development of E-LearningScape, Laalys has been improved to be able to process each action in real time. The information given by Laalys are then automatically used in the game to adjust the tips provided to the player so that the playing session lasts one hour. On one hand we have Laalys that processes data in real time and on the other hand I developed a plugin of FyFy that sends information about the player\'s actions on a database. The plugin uses Tincan/xAPI and stores information as triples Object-Verb-Activity. By comparing all the sessions, it is then possible to detect recurring difficulties for all the players to improve the game and its content.<br/><br/>&emsp;&emsp;The last task I have been assigned to was to make the content of the game easily changeable. It is possible to do so by changing the sprites in a given folder and the content of several json files to change the text of the game and the tips given during the game. The escape game's enigmas' mechanics are unlinked to its content which represents a problem for a serious game, but thanks to that E-LearningScape is an escape game template with an easily changeable content.<br/><br/>&emsp;&emsp;After I had left the development team, a VR version was in development. An ergonomist was also hired to improve the UI of both versions.";
			hideIntro();
			break;
		case 2:
			title.innerHTML = "Extinction";
			image.src = images[2][0].src;
			descr.innerHTML = "&emsp;&emsp;Extinction is a serious game raising awareness of ecological problems made by LetsPlayGreener as part of an Erasmus project between three high schools in France, Italy and Romania. After several years working on the content of the game, the three schools hired me to support them on the development of the game. I extended the Unity 2D Game Kit, which permit to develop a game without coding, by adding functionalities they needed still preserving the idea of a kit usable without coding. While I was working on the kit, the students prepared sprites and designed some levels with my help and teachers worked on scripts and dialogs. Then the students of the three schools met in Italy to assemble everything, supervised by the teachers and me.";
			details.innerHTML = "&emsp;&emsp;The original kit has the mains mechanics necessary to make a game like for instance moving controls and camera, events, enemies and damages or doors and pressure pads. The first functionality I added is interaction and collection with elements other than doors, keys and pressure pads. Next I implemented dialogues with multiple choices and the possibility to trigger an event after a particular point of the dialogue. I also added a map and a mini map. The last gameplay features I added to the kit are missions and the triggering of related events. I also developed, in the main menu, a dashboard with a list of achievements and a trace of the movements in the last levels played. Then we used this kit to make the game Extinction, but all these features are reusable to produce another game.<br/><br/>&emsp;&emsp;I designed and made the first level and asked French students to try it to show them the potential of the kit and get an idea of the difficulty we should aim for for the game. Except for a few students, the level I made was to hard and to big which was perhaps a reflexion of my player profile. I also wrote a guide to use Unity and the extended kit. During the schools meeting in Italy, the students were divided into teams, each supervised by a teacher and assigned to a task: making sprites and animating them, translating scripts, making vocal records for dialogs, running tests with students of the Italian school that weren't working on the project, and, for the team I was in charge of, designing levels and making them by using the kit and the work of the other teams.<br/><br/>&emsp;&emsp;I officially finished to work on this project after the meeting in Italy, but the project was still going on and I kept helping and answering questions about the use of Unity and the kit until the inauguration of the game two months later. The development of the project Extinction is officially finished but the teachers plan to use the kit to produce other serious games.";
			hideIntro();
			break;
		case 3:
			title.innerHTML = "Force Fields";
			image.src = images[3][0].src;
			descr.innerHTML = "&emsp;&emsp;This project is a student project developed alone as part of a serious game engineering course and designed in interaction with a physics teacher. We had to choose among four propositions of serious games about physics and develop them using ECS paradigm. I chose a mini golf like game with force fields as obstacles and in which the player has to set some values to play like the direction and the initial speed of the ball and/or the position, and the intensity of some force fields. I got the second best grade, mainly because I made a level editor to be able to create levels from the game and save, load and share them with txt files.";
			details.innerHTML = "&emsp;&emsp;To design this game I had to focus on the six elements necessary to make a serious game (B. Marne, J. Wisdom, B. Huynh-Kim-Bang, et J.-M. Labat, « The Six Facets of Serious Game Design: A Methodology Enhanced by Our Design Pattern Library », in 21st Century Learning for 21st Century Skills, Saarbrücken, Germany, 2012, vol. 7563, p. 208-221). There is no particular order to work on these elements but I first thought about the pedagogical objectives and the conditions of use of the game. The game is meant to be played by students in first or second year of licence to help them understand the impact of initial speed of an object on its trajectory, and anticipate the effect of forces and predict the movement of the object through force fields. The actions of the player are traced so the teacher can analyze and use them. I then made the mechanics of the game by working on the domain simulation and interactions with the simulation. Finally, after making the game editor, I worked on the facet problems and progression to design the levels and to choose in what order they would be played. I didn't work much on the decorum as I thought it would be to hard and time-consuming as a lone developer on a student project.<br/><br/>&emsp;&emsp;In the level editor, the user can put force fields, obstacles and goals in the levels, and set their values like initial direction and speed of the ball or force fields intensity and direction. He can also determine the values the player will be able to change, and the type and number of forces fields the player can add. The level can be tested at any time from the editor, but for it to be playable outside of the editor, it has to be validated at least once. Even if the level is unvalidated, it is possible to save it and then load it again from the editor. The level are saved as txt files in an accessible folder so they can be easily shared and imported.<br/><br/>&emsp;&emsp;Sorbonne University was developing a platform, then called Play@SU, which would contain several serious games for the use of students and university staff. They intended to hire one student from the serious game engineering course to complete the development of their student project with graphic and game designers and then to have it released on the platform. In the end they hired two students: one of the students who worked on the project with the best grade, and me. He worked on its project, but I didn't because our projects were too alike, with the difference being his was focused on potential energies. Instead, I worked on the development of E-LearningScape.";
			hideIntro();
			break;
		case 4:
			rbtn.src = "png/right_arrow.png";
			title.innerHTML = "Ping Pong Kinect";
			image.src = images[4][0].src;
			descr.innerHTML = "&emsp;&emsp;I developed this student project alone as part of a virtual environment and interactions course. We were free to decide what to develop knowing that for grading the teachers would focus on artificial intelligence and interaction. Having a Kinect V2 I chose to do my first project with it and I made a ping pong game in which the player would face AIs with various levels, and with a mode in which the AI adapts its level to the player's level. I got the second best grade with this project, with the first being a reproduction of the maze of the movie \"The Maze Runner\".";
			details.innerHTML = "&emsp;&emsp;I made two AI scripts for this game. The first AI always reaches the ball and sends an easy ball back to the middle of the table. I used it to test and improve the gameplay with the Kinect, and it can now be used like a training wall. The second AI has several variables to set its behaviour. There is a reaction time and a speed to make the AI move towards the ball destination after the player hits it. Once the ball is reached, a random target is chosen and then the way the AI hits is calculated depending on its accuracy and its power. There are several set level of difficulty with each having different reaction time, speed, accuracy and power. The adaptative level mode just switches between these levels depending on how the player is performing. Since the variables defining the AI are floats, the adaptations could have been continuous.<br/><br/>&emsp;&emsp;This project being a student project can clearly be improved. The main issue I encountered was that the player could hardly sense how far the ball was and thus hit the ball properly. It is possible to get used to this by playing a few times, but some things can be done and the most effective solutions I found were either use a VR headset, or show a vertical projection of the ball on the table. Another problem I met is that, by using Unity physics to detect collision, if the ball and/or player's movement are too fast, the collision isn't detected because movements aren't continuous. The solutions here could have been to increase fixed updates frequency, limitate speeds, or calculate the steps between frames myself to check for collisions.";
			hideIntro();
			break;
		case 5:
			rbtn.src = "";
			title.innerHTML = "Cube Okare";
			image.src = images[5][0].src;
			descr.innerHTML = "&emsp;&emsp;This is a personal project and one of the projects I made to keep practicing while I didn't have a job. The goal of this project was to make a fun local multiplayer game. To win, a player has to color a maximum of cubes in a given time by moving on them. This project is not finished, and the next logical and necessary improvements are a menu to set a game and an AI.";
			details.innerHTML = "";
			hideIntro();
			break;
		default:
			alert("wrong page");
			break;
	}

}

function goToLeft(){
	if(page>0){
		page--;
		afficher(page);
		resetDiapoTimer();
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
}

function goToRight(){
	if(page<5){
		page++;
		afficher(page);
		resetDiapoTimer();
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
}

function scroll_img(){
	if(page == 0)
		return;
	pos_img = (pos_img+1) % 4;
	if (pos_img<0 || pos_img>3) {
		alert("wrong scroll");
	} else {
		image_proj.src = images[page][pos_img].src;
	}

}

var diapoFrequency = 4000;
function diaporama(){
	if(canDiaporama){
		scroll_img();
		setTimeout(diaporama, diapoFrequency);
	}
	else
		timersCount--;
	if(timersCount == 1)
		canDiaporama = true;
}

var timersCount = 1;
function resetDiapoTimer(){
	canDiaporama = false;
	setTimeout(diaporama, diapoFrequency);
	timersCount++;
}

var canDiaporama = true;
function onImageClicked() {
	resetDiapoTimer();
	scroll_img();
}

var Lbutton = document.getElementById("left_btn");
var Rbutton = document.getElementById("right_btn");

Lbutton.onclick = goToLeft;

Rbutton.onclick = goToRight;

image.onclick = onImageClicked;

diaporama();