
var triviaQuestions = [
	{
		question: "This Japanese dessert is made from sticky rice and ice cream, and comes in balls.",
		choices: ["mochi", "anpan", "chinsuko", "anmitsu"],
		correctAnswer: 0,
	},
	{
		question: "What does the Italian word 'tiramisu' literally translate to?",
		choices: ["sweet cake", "pick me up", "alcohol treat", "for the rich"],
		correctAnswer: 1,
	},
	{
		question: "Which of these ingredients is NOT in baklava?",
		choices: ["honey", "chocolate", "phyllo dough", "nuts"],
		correctAnswer: 1,
	},
	{
		question: "This type of cake contains chocolate, whipped cream, and cherries and shares its name with a region in Germany:",
		choices: ["Hamburg", "Berlin", "Black Forest", "Cologne"],
		correctAnswer: 2,	
	},
	{
		question: "How many times are biscotti biscuits baked?",
		choices: ["four", "three", "two", "one"],
		correctAnswer: 2,
	},
	{
		question: "Which of these is NOT a flavor of Oreo that has been created?",
		choices: ["watermelon", "candy corn", "fruit punch", "bubblegum"],
		correctAnswer: 3,
	},
	{
		question: "What does the 'pound' in pound cake refer to?",
		choices: ["1 pound of flour, sugar, butter and eggs", "How much the cake weighs after it's cooked", "How much weight you gain for every piece you eat", "How much it used to cost to purchase at the bakery"],
		correctAnswer: 0,	
	},
	{
		question: "Which of these is not a type of ice cream?",
		choices: ["sorbet", "faloodeh", "gelato", "kulfi"],
		correctAnswer: 0,
	},
	{
		question: "Which of these desserts does not traditionally get set on fire before being served?",
		choices: ["bananas foster", "baked alaska", "cherries jubilee", "black forest cake"],
		correctAnswer: 3,
	},
	{
		question: "What type of cheese is typically used in New York cheesecakes?",
		choices: ["cream cheese", "marscapone", "brie", "ricotta"],
		correctAnswer: 0,
	}];


	var intervalId;
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	number = 120;


//click start button, hide start button, start timer, show questions
	$(document).ready(function() {
		$("#done").hide();
		$("#start").on("click", run);
	})

	function run() {
	  $("#start").hide();
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
      displayQuestions;
    }

	function displayQuestions() {
		$("#questions").html("<h2>" + questions.question);
	}



    function decrement() {
    	number--;
    	$("#timerDisplay").html("<h2>" + "Time Remaining: " + number + " seconds" + "</h2>");

    	if (number === 0) {
    		stop();
    		alert ("Sorry, Time's Up!");
    	}
    }

    function stop() {
    	clearInterval(intervalId);	
    	$("#winLose").html("<h2>" + "Correct Answers: " + correct + "</h2>" + "<h2>" + "Incorrect Answers: " + incorrect + "</h2>" + "<h2>" + "Questions Unanswered: " + unanswered + "</h2>");
    }

    function restart() {
		var correct = 0;
		var incorrect = 0;
		var unanswered = 0; 
		displayQuestions();
	}

$("#done").on("click", stop);
	
