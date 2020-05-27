var question = document.getElementById('question');
var choices = Array.from(document.getElementsByClassName('ans-text'));

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var qNumber = 0;
var availableQuestions = []
var questions = [
    {
        question: "If I wanted to create a variable that couldn't be changed, what would I call it?",
        choice1: "var",
        choice2: "let",
        choice3: "const",
        choice4: "stay",
        answer: 3
    },
    {
        question: "How would I link a CSS file called 'style.css' to my HTML file?",
        choice1: "<link rel='stylesheet' href='/style.css'>",
        choice2: "<a rel='stylesheet' link='/style.css'>",
        choice3: "<href rel='stylesheet' link='/style.css'>",
        choice4: "<style rel='stylesheet' href='/style.css'>",
        answer: 1
    },
    {
        question: "Would I need a .js file to apply style to a website?",
        choice1: "Yes",
        choice2: "No",
        choice3: "Yes, if you wanted it to change based on input.",
        choice4: "No, if you wanted it to change based on input.",
        answer: 3
    },
    {
        question: "In the 1981 Blue Oyster Cult song 'Veteran of the Psychic Wars' what does the line 'I'm young enough to look at and far too old to see' mean?",
        choice1: "I have no idea",
        choice2: "I don't like Blue Oyster Cult",
        choice3: "I've never heard that song before",
        choice4: "Oh man I love Blue Osyter Cult!",
        answer: 4 && 1
    },
    {
        question: "What's the name of the popular website for hosting your own code?",
        choice1: "Botstrap",
        choice2: "Github",
        choice3: "Virtual Studio Code",
        choice4: "Overstack",
        answer: 2
    },
    {
        question: "Can you make a functioning website without CSS?",
        choice1: "No, you need CSS to make a website functional.",
        choice2: "Yes, but it will look horrible.",
        choice3: "Yes, if you don't want any user interactivity.",
        choice4: "Yes, but only for other web developers.",
        answer: 2
    },
    {
        question: "What is the base file that git automatically looks for and loads as the main page without prompting?",
        choice1: "base.html",
        choice2: "instance.html",
        choice3: "index.html",
        choice4: "home.html",
        answer: 3
    },
    {
        question: "How would I link the CSS sheet to my HTML file?",
        choice1: "<link rel='stylesheet' href='/style.css'>",
        choice2: "<a rel='stylesheet' link='/style.css'>",
        choice3: "<href rel='stylesheet' link='/style.css'>",
        choice4: "<style rel='stylesheet' href='/style.css'>",
        answer: 1
    },
    {
        question: "What code can tell if an event happens?",
        choice1: "eventHappen",
        choice2: "eventTrue",
        choice3: "eventPlacement",
        choice4: "eventListener",
        answer: 4
    },
    {
        question: "How do I change the color of text in CSS?",
        choice1: "color",
        choice2: "text-color",
        choice3: "text",
        choice4: "color-text",
        answer: 2
    },
];

var questionPoints = 10;
var questionAmount = 3;

function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

function getNewQuestion() {
    questionCounter++;
    var qIndex = Math.floor(Math.random() * availableQuestions.length)+1;
    currentQuestion = availableQuestions[qIndex];
    question.innerText = currentQuestion.question;
    choices.forEach(replaceText)
    function replaceText(choice) {
        var number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    }
}

startGame()


// Button Info

$('.button--bubble').each(function() {
    var $circlesTopLeft = $(this).parent().find('.circle.top-left');
    var $circlesBottomRight = $(this).parent().find('.circle.bottom-right');
  
    var tl = new TimelineLite();
    var tl2 = new TimelineLite();
  
    var btTl = new TimelineLite({ paused: true });
  
    tl.to($circlesTopLeft, 1.2, { x: -25, y: -25, scaleY: 2, ease: SlowMo.ease.config(0.1, 0.7, false) });
    tl.to($circlesTopLeft.eq(0), 0.1, { scale: 0.2, x: '+=6', y: '-=2' });
    tl.to($circlesTopLeft.eq(1), 0.1, { scaleX: 1, scaleY: 0.8, x: '-=10', y: '-=7' }, '-=0.1');
    tl.to($circlesTopLeft.eq(2), 0.1, { scale: 0.2, x: '-=15', y: '+=6' }, '-=0.1');
    tl.to($circlesTopLeft.eq(0), 1, { scale: 0, x: '-=5', y: '-=15', opacity: 0 });
    tl.to($circlesTopLeft.eq(1), 1, { scaleX: 0.4, scaleY: 0.4, x: '-=10', y: '-=10', opacity: 0 }, '-=1');
    tl.to($circlesTopLeft.eq(2), 1, { scale: 0, x: '-=15', y: '+=5', opacity: 0 }, '-=1');
  
    var tlBt1 = new TimelineLite();
    var tlBt2 = new TimelineLite();
    
    tlBt1.set($circlesTopLeft, { x: 0, y: 0, rotation: -45 });
    tlBt1.add(tl);
  
    tl2.set($circlesBottomRight, { x: 0, y: 0 });
    tl2.to($circlesBottomRight, 1.1, { x: 30, y: 30, ease: SlowMo.ease.config(0.1, 0.7, false) });
    tl2.to($circlesBottomRight.eq(0), 0.1, { scale: 0.2, x: '-=6', y: '+=3' });
    tl2.to($circlesBottomRight.eq(1), 0.1, { scale: 0.8, x: '+=7', y: '+=3' }, '-=0.1');
    tl2.to($circlesBottomRight.eq(2), 0.1, { scale: 0.2, x: '+=15', y: '-=6' }, '-=0.2');
    tl2.to($circlesBottomRight.eq(0), 1, { scale: 0, x: '+=5', y: '+=15', opacity: 0 });
    tl2.to($circlesBottomRight.eq(1), 1, { scale: 0.4, x: '+=7', y: '+=7', opacity: 0 }, '-=1');
    tl2.to($circlesBottomRight.eq(2), 1, { scale: 0, x: '+=15', y: '-=5', opacity: 0 }, '-=1');
    
    tlBt2.set($circlesBottomRight, { x: 0, y: 0, rotation: 45 });
    tlBt2.add(tl2);
  
    btTl.add(tlBt1);
    btTl.to($(this).parent().find('.button.effect-button'), 0.8, { scaleY: 1.1 }, 0.1);
    btTl.add(tlBt2, 0.2);
    btTl.to($(this).parent().find('.button.effect-button'), 1.8, { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) }, 1.2);
  
    btTl.timeScale(2.6);
  
    $(this).on('mouseover', function() {
      btTl.restart();
    });
  });