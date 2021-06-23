var page = 0;
var pos_img = 0;

var header = document.getElementById("header");
var title = document.getElementById("title_proj");
var lbtn = document.getElementById("left_btn");
var rbtn = document.getElementById("right_btn");
var descr = document.getElementById("description");
var details = document.getElementById("details");
var intro = document.getElementById("introduction");
var image = document.getElementById("image_proj");
var separation = document.getElementById("separation");
var langEN = document.getElementById("langEN");
var langFR = document.getElementById("langFR");

lbtn.style.display = "none";
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

var textEN = {};
var textFR = {};
var currentText = {};
var currentLanguage = -1; //0 - EN, 1 - FR
function loadText(){
	textEN = {
		7000: "I am Mounswif Darkaoui, a game developer looking for a job and a huge fan of video games. On this website you can see the games I worked on.",
		7001: "Feel free to contact me at:&emsp;dmounswif@gmail.com",
		1: {
			0: "&emsp;&emsp;On this project I had to adapt and reproduce as a video game an existing physical escape game originally made by SAPIENS of the university Sorbonne Paris Cité. The purpose of this escape game is to deliver pedagogic notions to new teachers researchers who didn't have a teacher formation. In addition, the development of this project was an opportunity to test an improve two tools developed by MOCAH team of Lip6. I was the only gameplay developer of this game, and I worked with a graphic designer, a game designer, a tool developper and several pedagogy engineers.<br/><br/>Links:<br/><a href=https://github.com/Mocahteam/E-LearningScape>https://github.com/Mocahteam/E-LearningScape</a><br/><a href=https://github.com/Mocahteam/FYFY>https://github.com/Mocahteam/FYFY</a>",
			1: "&emsp;&emsp;This game is entirely made using Entity-Component-System paradigm. Since the game was developed with Unity 2017 which didn't have ECS yet, I had to use a framework called FyFy to have ECS. FyFy was developed by MOCAH team of Lip6, a research team which work on education with new technologies. E-LearningScape is one of the first project developed with FyFy and, thus, contributed to its improvement.<br/><br/>&emsp;&emsp;Having a virtual escape game rather than a physical one offers several advantages and one of them is to be able to automatically track and process players' actions. After developing the game, I used another tool called Laalys developed by MOCAH , to track the actions made in the game. Initially, Laalys could only process traces of the player after the playing session by using a Petri net representing the game and a list of actions made by the player. During the development of E-LearningScape, Laalys has been improved to be able to process each action in real time. The information given by Laalys are then automatically used in the game to adjust the tips provided to the player so that the playing session lasts one hour. On one hand we have Laalys that processes data in real time and on the other hand I developed a plugin of FyFy that sends information about the player\'s actions on a database. The plugin uses Tincan/xAPI and stores information as triples Object-Verb-Activity. By comparing all the sessions, it is then possible to detect recurring difficulties for all the players to improve the game and its content.<br/><br/>&emsp;&emsp;The last task I have been assigned to was to make the content of the game easily changeable. It is possible to do so by changing the sprites in a given folder and the content of several json files to change the text of the game and the tips given during the game. The escape game's enigmas' mechanics are unlinked to its content which represents a problem for a serious game, but thanks to that E-LearningScape is an escape game template with an easily changeable content.<br/><br/>&emsp;&emsp;After I had left the development team, a VR version was in development. An ergonomist was also hired to improve the UI of both versions."
		},
		2: {
			0: "&emsp;&emsp;Extinction is a serious game raising awareness of ecological problems made by LetsPlayGreener as part of an Erasmus project between three high schools in France, Italy and Romania. After several years working on the content of the game, the three schools hired me to support them on the development of the game. I extended the Unity 2D Game Kit, which permit to develop a game without coding, by adding functionalities they needed still preserving the idea of a kit usable without coding. While I was working on the kit, the students prepared sprites and designed some levels with my help and teachers worked on scripts and dialogs. Then the students of the three schools met in Italy to assemble everything, supervised by the teachers and me.<br/><br/>Links:<br/><a href=https://github.com/LetsPlayGreener/extinction>https://github.com/LetsPlayGreener/extinction</a><br/><a href=https://letsplaygreener.com>https://letsplaygreener.com</a>",
			1: "&emsp;&emsp;The original kit has the mains mechanics necessary to make a game like for instance moving controls and camera, events, enemies and damages or doors and pressure pads. The first functionality I added is interaction and collection with elements other than doors, keys and pressure pads. Next I implemented dialogues with multiple choices and the possibility to trigger an event after a particular point of the dialogue. I also added a map and a mini map. The last gameplay features I added to the kit are missions and the triggering of related events. I also developed, in the main menu, a dashboard with a list of achievements and a trace of the movements in the last levels played. Then we used this kit to make the game Extinction, but all these features are reusable to produce another game.<br/><br/>&emsp;&emsp;I designed and made the first level and asked French students to try it to show them the potential of the kit and get an idea of the difficulty we should aim for for the game. Except for a few students, the level I made was to hard and to big which was perhaps a reflexion of my player profile. I also wrote a guide to use Unity and the extended kit. During the schools meeting in Italy, the students were divided into teams, each supervised by a teacher and assigned to a task: making sprites and animating them, translating scripts, making vocal records for dialogs, running tests with students of the Italian school that weren't working on the project, and, for the team I was in charge of, designing levels and making them by using the kit and the work of the other teams.<br/><br/>&emsp;&emsp;I officially finished to work on this project after the meeting in Italy, but the project was still going on and I kept helping and answering questions about the use of Unity and the kit until the inauguration of the game two months later. The development of the project Extinction is officially finished but the teachers plan to use the kit to produce other serious games."
		},
		3: {
			0: "&emsp;&emsp;This project is a student project developed alone as part of a serious game engineering course and designed in interaction with a physics teacher. We had to choose among four propositions of serious games about physics and develop them using ECS paradigm. I chose a mini golf like game with force fields as obstacles and in which the player has to set some values to play like the direction and the initial speed of the ball and/or the position, and the intensity of some force fields. I got the second best grade, mainly because I made a level editor to be able to create levels from the game and save, load and share them with txt files.",
			1: "&emsp;&emsp;To design this game I had to focus on the six elements necessary to make a serious game (B. Marne, J. Wisdom, B. Huynh-Kim-Bang, et J.-M. Labat, « The Six Facets of Serious Game Design: A Methodology Enhanced by Our Design Pattern Library », in 21st Century Learning for 21st Century Skills, Saarbrücken, Germany, 2012, vol. 7563, p. 208-221). There is no particular order to work on these elements but I first thought about the pedagogical objectives and the conditions of use of the game. The game is meant to be played by students in first or second year of licence to help them understand the impact of initial speed of an object on its trajectory, and anticipate the effect of forces and predict the movement of the object through force fields. The actions of the player are traced so the teacher can analyze and use them. I then made the mechanics of the game by working on the domain simulation and interactions with the simulation. Finally, after making the game editor, I worked on the facet problems and progression to design the levels and to choose in what order they would be played. I didn't work much on the decorum as I thought it would be to hard and time-consuming as a lone developer on a student project.<br/><br/>&emsp;&emsp;In the level editor, the user can put force fields, obstacles and goals in the levels, and set their values like initial direction and speed of the ball or force fields intensity and direction. He can also determine the values the player will be able to change, and the type and number of forces fields the player can add. The level can be tested at any time from the editor, but for it to be playable outside of the editor, it has to be validated at least once. Even if the level is unvalidated, it is possible to save it and then load it again from the editor. The level are saved as txt files in an accessible folder so they can be easily shared and imported.<br/><br/>&emsp;&emsp;Sorbonne University was developing a platform, then called Play@SU, which would contain several serious games for the use of students and university staff. They intended to hire one student from the serious game engineering course to complete the development of their student project with graphic and game designers and then to have it released on the platform. In the end they hired two students: one of the students who worked on the project with the best grade, and me. He worked on its project, but I didn't because our projects were too alike, with the difference being his was focused on potential energies. Instead, I worked on the development of E-LearningScape."
		},
		4: {
			0: "&emsp;&emsp;I developed this student project alone as part of a virtual environment and interactions course. We were free to decide what to develop knowing that for grading the teachers would focus on artificial intelligence and interaction. Having a Kinect V2 I chose to do my first project with it and I made a ping pong game in which the player would face AIs with various levels, and with a mode in which the AI adapts its level to the player's level. I got the second best grade with this project, with the first being a reproduction of the maze of the movie \"The Maze Runner\".",
			1: "&emsp;&emsp;I made two AI scripts for this game. The first AI always reaches the ball and sends an easy ball back to the middle of the table. I used it to test and improve the gameplay with the Kinect, and it can now be used like a training wall. The second AI has several variables to set its behaviour. There is a reaction time and a speed to make the AI move towards the ball destination after the player hits it. Once the ball is reached, a random target is chosen and then the way the AI hits is calculated depending on its accuracy and its power. There are several set level of difficulty with each having different reaction time, speed, accuracy and power. The adaptative level mode just switches between these levels depending on how the player is performing. Since the variables defining the AI are floats, the adaptations could have been continuous.<br/><br/>&emsp;&emsp;This project being a student project can clearly be improved. The main issue I encountered was that the player could hardly sense how far the ball was and thus hit the ball properly. It is possible to get used to this by playing a few times, but some things can be done and the most effective solutions I found were either use a VR headset, or show a vertical projection of the ball on the table. Another problem I met is that, by using Unity physics to detect collision, if the ball and/or player's movement are too fast, the collision isn't detected because movements aren't continuous. The solutions here could have been to increase fixed updates frequency, limitate speeds, or calculate the steps between frames myself to check for collisions."
		},
		5: {
			0: "&emsp;&emsp;This is a personal project and one of the projects I made to keep practicing while I didn't have a job. The goal of this project was to make a fun local multiplayer game. To win, a player has to color a maximum of cubes in a given time by moving on them. This project is not finished, and the next logical and necessary improvements are a menu to set a game and an AI.",
			1: ""
		}
	};
	textFR = {
		7000: "Je suis Mounswif Darkaoui, un développeur de jeux à la recherche d'emploi, et un grand fan de jeux vidéo. Sur ce site vous pouvez voir les jeux sur lesquels j'ai travaillé.",
		7001: "N'hésitez pas à me contacter à:&emsp;dmounswif@gmail.com",
		1: {
			0: "&emsp;&emsp;Sur ce projet, j'ai dû adapter et reproduire sous forme de jeu vidéo un escape game physique existant, réalisé à l'origine par SAPIENS de l'université Sorbonne Paris Cité. Le but de ce jeu d'évasion est de transmettre des notions pédagogiques aux nouveaux enseignants chercheurs qui n'ont pas eu de formation pédagogique. De plus, le développement de ce projet a été l'occasion de tester et d'améliorer deux outils développés par l'équipe MOCAH du Lip6. J'étais le seul développeur de ce jeu, et j'ai travaillé avec un graphiste, un game designer, un développeur d'outils et plusieurs ingénieurs pédagogiques.<br/><br/>Liens:<br/><a href=https://github.com/Mocahteam/E-LearningScape>https://github.com/Mocahteam/E-LearningScape</a><br/><a href=https://github.com/Mocahteam/FYFY>https://github.com/Mocahteam/FYFY</a>",
			1: "&emsp;&emsp;Ce jeu est entièrement réalisé en utilisant le paradigme Entité-Composant-Système. Puisque le jeu a été développé avec Unity 2017 qui n'avait pas encore d'ECS, j'ai dû utiliser un framework appelé FyFy. FyFy a été développé par l'équipe MOCAH de Lip6, une équipe de recherche qui travaille sur l'éducation avec les nouvelles technologies. E-LearningScape est l'un des premiers projets développés avec FyFy et a donc contribué à son amélioration.<br/><br/>&emsp;&emsp;Le fait d'avoir un escape game virtuel plutôt que physique offre plusieurs avantages, l'un d'eux étant de pouvoir suivre et traiter automatiquement les actions des joueurs. Après avoir développé le jeu, j'ai utilisé un autre outil appelé Laalys, développé par MOCAH, pour suivre les actions effectuées dans le jeu. Au départ, Laalys ne pouvait traiter les traces du joueur qu'après la session de jeu en utilisant un réseau de Pétri représentant le jeu et une liste des actions effectuées par le joueur. Au cours du développement de E-LearningScape, Laalys a été amélioré pour pouvoir traiter chaque action en temps réel. Les informations données par Laalys sont ensuite automatiquement utilisées dans le jeu pour ajuster les conseils fournis au joueur afin que la session de jeu dure une heure. D'un côté, nous avons Laalys qui traite les données en temps réel et de l'autre, j'ai développé un plugin de FyFy qui envoie des informations sur les actions du joueur dans une base de données. Le plugin utilise Tincan/xAPI et stocke les informations sous forme de triplet Object-Verb-Activity. En comparant toutes les sessions, il est alors possible de détecter les difficultés récurrentes communes à tous les joueurs afin d'améliorer le jeu et son contenu.<br/><br/>&emsp;&emsp;La dernière tâche qui m'a été confiée était de rendre le contenu du jeu facilement modifiable. Il est possible de le faire en changeant les sprites d'un dossier donné et le contenu de plusieurs fichiers json pour modifier le texte du jeu et les astuces données pendant le jeu. Les mécanismes des énigmes de l'escape game ne sont pas liés à son contenu, ce qui représente un problème pour un serious game, mais grâce à cela E-LearningScape est un template d'escape game avec un contenu facilement modifiable.<br/><br/>&emsp;&emsp;Après avoir quitté l'équipe de développement, une version VR était en cours de développement. Un ergonome a également été engagé pour améliorer l'UI des deux versions."
		},
		2: {
			0: "&emsp;&emsp;Extinction est un serious game sensibilisant aux problèmes écologiques, et réalisé par LetsPlayGreener dans le cadre d'un projet Erasmus entre trois lycées en France, en Italie et en Roumanie. Après plusieurs années de travail sur le contenu du jeu, les trois écoles m'ont engagé pour les épauler dans le développement du jeu. J'ai complété l'Unity 2D Gamekit, qui permet de développer un jeu sans coder, en ajoutant des fonctionnalités dont ils avaient besoin tout en conservant l'idée d'un kit utilisable sans coder. Pendant que je travaillais sur le kit, les étudiants ont préparé des sprites et conçu certains niveaux avec mon aide et les professeurs ont travaillé sur les scripts et les dialogues. Ensuite, les élèves des trois écoles se sont réunis en Italie pour tout assembler, sous la supervision des enseignants et de moi-même.<br/><br/>Liens:<br/><a href=https://github.com/LetsPlayGreener/extinction>https://github.com/LetsPlayGreener/extinction</a><br/><a href=https://letsplaygreener.com>https://letsplaygreener.com</a>",
			1: "&emsp;&emsp;Le kit original contient les principaux mécanismes nécessaires à la réalisation d'un jeu, comme par exemple le déplacement et la gestion de la caméra, les événements, les ennemis et les dégâts, ou les portes et les interrupteurs. La première fonctionnalité que j'ai ajoutée est l'interaction et la collecte d'éléments autres que les portes, les clés et les interrupteurs. Ensuite, j'ai mis en place des dialogues à choix multiples et la possibilité de déclencher un événement après des points particuliers du dialogue. J'ai également ajouté une carte et une mini-carte. Les dernières fonctionnalités que j'ai ajoutées au kit sont les missions et le déclenchement d'événements qui y sont liés. J'ai également développé, dans le menu principal, un tableau de bord avec une liste de succès et une trace des déplacements dans les derniers niveaux joués. Nous avons ensuite utilisé ce kit pour réaliser le jeu Extinction, mais toutes ces fonctionnalités sont réutilisables pour produire d'autres jeux.<br/><br/>&emsp;&emsp;J'ai conçu et réalisé le premier niveau et j'ai demandé à des étudiants français de l'essayer pour leur montrer le potentiel du kit et avoir une idée de la difficulté que nous devrions viser pour le jeu. À l'exception de quelques étudiants, le niveau que j'ai réalisé était trop difficile et trop grand, ce qui reflétait peut-être mon profil de joueur. J'ai également rédigé un guide d'utilisation de Unity et du kit amélioré. Lors de la réunion des écoles en Italie, les élèves ont été divisés en équipes, chacune supervisée par un enseignant et chargée d'une tâche : créer des sprites et les animer, traduire des scripts, enregistrer des voix pour les dialogues, faire des tests avec les élèves de l'école italienne qui ne travaillaient pas sur le projet, et, pour l'équipe dont j'étais responsable, concevoir des niveaux et les réaliser en utilisant le kit et le travail des autres équipes.<br/><br/>&emsp;&emsp;J'ai officiellement fini de travailler sur ce projet après la réunion en Italie, mais le projet était toujours en cours et j'ai continué à aider et à répondre aux questions sur l'utilisation d'Unity et du kit jusqu'à l'inauguration du jeu deux mois plus tard. Le développement du projet Extinction est officiellement terminé, mais les enseignants prévoient d'utiliser le kit pour produire d'autres serious games."
		},
		3: {
			0: "&emsp;&emsp;Ce projet est un projet d'étudiant développé seul dans le cadre d'un cours d'ingénierie de serious game et conçu en interaction avec un professeur de physique. Nous avons dû choisir parmi quatre propositions de serious games sur la physique et les développer en utilisant le paradigme ECS. J'ai choisi un jeu de type mini-golf avec des champs de force comme obstacles et dans lequel le joueur doit définir des valeurs pour jouer comme la direction et la vitesse initiale de la balle et/ou la position, et l'intensité de certains champs de force. J'ai obtenu la deuxième meilleure note, principalement parce que j'ai créé un éditeur de niveaux permettant de créer des niveaux à partir du jeu et de les sauvegarder, les charger et les partager avec des fichiers txt.",
			1: "&emsp;&emsp;Pour concevoir ce jeu, j'ai dû me concentrer sur les six éléments nécessaires pour faire un jeu sérieux (B. Marne, J. Wisdom, B. Huynh-Kim-Bang, et J.-M. Labat, « The Six Facets of Serious Game Design: A Methodology Enhanced by Our Design Pattern Library », in 21st Century Learning for 21st Century Skills, Saarbrücken, Germany, 2012, vol. 7563, p. 208-221). Il n'y a pas d'ordre particulier pour travailler sur ces éléments mais j'ai d'abord réfléchi aux objectifs pédagogiques et aux conditions d'utilisation du jeu. Le jeu est destiné aux étudiants de première ou deuxième année de licence pour les aider à comprendre l'impact de la vitesse initiale d'un objet sur sa trajectoire, à anticiper l'effet des forces et à prédire le mouvement de l'objet à travers les champs de force. Les actions du joueur sont tracées afin que l'enseignant puisse les analyser et les utiliser. J'ai ensuite réalisé la mécanique du jeu en travaillant sur la simulation du domaine et les interactions avec la simulation. Enfin, après avoir fait l'éditeur de jeu, j'ai travaillé sur la facette problèmes et progression pour concevoir les niveaux et choisir l'ordre dans lequel ils seraient joués. Je n'ai pas beaucoup travaillé sur le décorum car je pensais que ce serait trop dur et trop chronophage en tant que développeur seul sur un projet d'étudiant.<br/><br/>&emsp;&emsp;Dans l'éditeur de niveaux, l'utilisateur peut placer des champs de force, des obstacles et des objectifs dans les niveaux, et définir leurs valeurs comme la direction initiale et la vitesse de la balle ou l'intensité et la direction des champs de force. Il peut également déterminer les valeurs que le joueur pourra modifier, ainsi que le type et le nombre de champs de force qu'il pourra ajouter. Le niveau peut être testé à tout moment depuis l'éditeur, mais pour qu'il soit jouable en dehors de l'éditeur, il doit être validé au moins une fois. Même si le niveau n'est pas validé, il est possible de l'enregistrer et de le charger à nouveau à partir de l'éditeur. Les niveaux sont enregistrés sous forme de fichiers txt dans un dossier accessible afin de pouvoir les partager et les importer facilement.<br/><br/>&emsp;&emsp;Sorbonne Université développait une plateforme, alors appelée Play@SU, qui contiendrait plusieurs jeux sérieux à l'usage des étudiants et du personnel universitaire. Ils avaient l'intention d'embaucher un étudiant du cours d'ingénierie des serious games pour compléter le développement de leur projet étudiant avec des graphistes et des concepteurs de jeux, puis de le faire publier sur la plateforme. Finalement, ils ont engagé deux étudiants : un des étudiants qui a travaillé sur le projet avec la meilleure note, et moi. Il a travaillé sur son projet, mais je ne l'ai pas fait parce que nos projets se ressemblaient trop, la différence étant que le sien était axé sur les énergies potentielles. Au lieu de cela, j'ai travaillé sur le projet E-LearningScape."
		},
		4: {
			0: "&emsp;&emsp;J'ai développé ce projet d'étudiant seul dans le cadre d'un cours sur l'environnement virtuel et les interactions. Nous étions libres de choisir ce que nous voulions développer, sachant que pour la notation, les enseignants se concentreraient sur l'intelligence artificielle et l'interaction. Ayant une Kinect V2, j'ai choisi de faire mon premier projet avec et j'ai fait un jeu de ping-pong dans lequel le joueur doit faire face à des IA de différents niveaux, et avec un mode dans lequel l'IA adapte son niveau à celui du joueur. J'ai obtenu la deuxième meilleure note avec ce projet, la première étant une reproduction du labyrinthe du film \"Le Labyrinthe\".",
			1: "&emsp;&emsp;J'ai créé deux script d'IA pour ce jeu. La première IA atteint toujours la balle et renvoie une balle facile au milieu de la table. Je l'ai utilisée pour tester et améliorer le gameplay avec la Kinect, et elle peut maintenant être utilisée comme un mur d'entraînement. La deuxième IA possède plusieurs variables pour définir son comportement. Il y a un temps de réaction et une vitesse pour que l'IA se déplace vers la destination de la balle après que le joueur l'ait frappée. Une fois que la balle est atteinte, une cible aléatoire est choisie, puis la façon dont l'IA frappe est calculée en fonction de sa précision et de sa puissance. Il existe plusieurs niveaux de difficulté, chacun ayant un temps de réaction, une vitesse, une précision et une puissance différents. Le mode de niveau adaptatif permet de passer d'un niveau à l'autre en fonction des performances du joueur. Comme les variables définissant l'IA sont des float, les adaptations auraient pu être continues.<br/><br/>&emsp;&emsp;Ce projet étant un projet d'étudiant peut clairement être amélioré. Le principal problème que j'ai rencontré était que le joueur pouvait difficilement déterminer à quelle distance se trouvait la balle et donc frapper la balle correctement. Il est possible de s'habituer à cela en jouant plusieurs fois, mais certaines choses peuvent être faites et les solutions les plus efficaces que j'ai trouvées étaient soit d'utiliser un casque VR, soit de montrer une projection verticale de la balle sur la table. Un autre problème que j'ai rencontré est que, en utilisant la physique d'Unity pour détecter les collisions, si la balle et/ou le mouvement du joueur sont trop rapides, la collision n'est pas détectée parce que les mouvements ne sont pas continus. Les solutions auraient pu être d'augmenter la fréquence des fixed update, de limiter les vitesses ou de calculer moi-même les étapes entre les frames pour vérifier les collisions."
		},
		5: {
			0: "&emsp;&emsp;C'est un projet personnel et l'un des projets que j'ai réalisés pour continuer à pratiquer alors que je n'avais pas de travail. Le but de ce projet était de créer un jeu multijoueur local fun. Pour gagner, un joueur doit colorier un maximum de cubes dans un temps donné en se déplaçant dessus. Ce projet n'est pas terminé, et les prochaines améliorations logiques et nécessaires sont un menu pour paramétrer une partie et une IA.",
			1: ""
		}
	};
	
	currentText = {
		1: {
			0: textEN[1][0],
			1: textEN[1][1],
			2: "E-LearningScape"
		},
		2: {
			0: textEN[2][0],
			1: textEN[2][1],
			2: "Extinction"
		},
		3: {
			0: textEN[3][0],
			1: textEN[3][1],
			2: "Force Fields"
		},
		4: {
			0: textEN[4][0],
			1: textEN[4][1],
			2: "Ping Pong Kinect"
		},
		5: {
			0: textEN[5][0],
			1: textEN[5][1],
			2: "Cube Okare"
		}
	};

	changeToEN();
}
loadText();

function changeToFR(){
	if(currentLanguage != 1){
		langEN.style.fontSize = "30px";
		langEN.style.fontWeight = "100";
		langEN.style.color = "white";
		langFR.style.fontSize = "33px";
		langFR.style.fontWeight = "600";
		langFR.style.color = "lightskyblue";

		currentText[1][0] = textFR[1][0];
		currentText[1][1] = textFR[1][1];
		currentText[2][0] = textFR[2][0];
		currentText[2][1] = textFR[2][1];
		currentText[3][0] = textFR[3][0];
		currentText[3][1] = textFR[3][1];
		currentText[4][0] = textFR[4][0];
		currentText[4][1] = textFR[4][1];
		currentText[5][0] = textFR[5][0];
		currentText[5][1] = textFR[5][1];
		intro.innerHTML = textFR[7000];
		header.innerHTML = textFR[7001];
		if(page != 0){
			descr.innerHTML = currentText[page][0];
			details.innerHTML = currentText[page][1];
		}
		currentLanguage = 1;
	}
}

function changeToEN(){
	if(currentLanguage != 0){
		langFR.style.fontSize = "30px";
		langFR.style.fontWeight = "100";
		langFR.style.color = "white";
		langEN.style.fontSize = "33px";
		langEN.style.fontWeight = "600";
		langEN.style.color = "lightskyblue";

		currentText[1][0] = textEN[1][0];
		currentText[1][1] = textEN[1][1];
		currentText[2][0] = textEN[2][0];
		currentText[2][1] = textEN[2][1];
		currentText[3][0] = textEN[3][0];
		currentText[3][1] = textEN[3][1];
		currentText[4][0] = textEN[4][0];
		currentText[4][1] = textEN[4][1];
		currentText[5][0] = textEN[5][0];
		currentText[5][1] = textEN[5][1];
		intro.innerHTML = textEN[7000];
		header.innerHTML = textEN[7001];
		if(page != 0){
			descr.innerHTML = currentText[page][0];
			details.innerHTML = currentText[page][1];
		}
		currentLanguage = 0;
	}
}

function displayIntro(){
	lbtn.style.display = "none";
	intro.style.display = "inline-block";
	image.style.display = "none";
	title.style.display = "none";
	descr.style.display = "none";
	details.style.display = "none";
	separation.style.display = "none";
}

function hideIntro(){
	lbtn.style.display = "block";
	if(page == 5)
		rbtn.style.display = "none";
	else
		rbtn.style.display = "block";
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

function display(n){
	pos_img = 0;

	if(n == 0){
			lbtn.style.display = "none";
			title.innerHTML = "";
			image.src = "";
			descr.innerHTML = "";
			displayIntro();
	}
	else{
		if(n > 5)
			alert("wrong page");
		else{
			title.innerHTML = currentText[n][2];
			image.src = images[n][0].src;
			descr.innerHTML = currentText[n][0];
			details.innerHTML = currentText[n][1];
			hideIntro();
		}
	}
}

function goToLeft(){
	if(page>0){
		page--;
		display(page);
		resetDiapoTimer();
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
}

function goToRight(){
	if(page<5){
		page++;
		display(page);
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

langEN.onclick = changeToEN;
langFR.onclick = changeToFR;

diaporama();