const quizData = [
    {
    question: "What is the scientific name of a butterfly?",
    a: "Apis",
    b: "Coleoptera",
    c: "Formicidae",
    d: "Rhopalocera",
    correct: "d",
    },
    {
    question: "How hot is the surface of the sun?",
    a: "1,233 K",
    b: "5,778 K",
    c: "12,130 K",
    d: "101,300 K",
    correct: "b",
    },
    {
    question: "Who are the actors in The Internship?",
    a: "Ben Stiller, Jonah Hill",
    b: "Courteney Cox, Matt LeBlanc",
    c: "Kaley Cuoco, Jim Parsons",
    d: "Vince Vaughn, Owen Wilson",
    correct: "d",
    },
    {
    question: "What is the capital of Spain?",
    a: "Berlin",
    b: "Buenos Aires",
    c: "Madrid",
    d: "San Juan",
    correct: "c",
    },
    {
    question: "What are the school colors of the University of Texas at Austin?",
    a: "Black, Red",
    b: "Blue, Orange",
    c: "White, Burnt Orange",
    d: "White, Old gold, Gold",
    correct: "c",
    },
    {
    question: "What is 70 degrees Fahrenheit in Celsius?",
    a: "18.8889",
    b: "20",
    c: "21.1111",
    d: "158",
    correct: "c",
    },
    {
    question: "When was Mahatma Gandhi born?",
    a: "October 2, 1869",
    b: "December 15, 1872",
    c: "July 18, 1918",
    d: "January 15, 1929",
    correct: "a",
    },
    {
    question: "How far is the moon from Earth?",
    a: "7,918 miles (12,742 km)",
    b: "86,881 miles (139,822 km)",
    c: "238,400 miles (384,400 km)",
    d: "35,980,000 miles (57,910,000 km)",
    correct: "b",
    },
    {
    question: "What is 65 times 52?",
    a: "117",
    b: "3120",
    c: "3380",
    d: "3520",
    correct: "b",
    },
    {
    question: "How tall is Mount Everest?", 
    a: "6,683 ft (2,037 m)",
    b: "7,918 ft (2,413 m)",
    c: "19,341 ft (5,895 m)",
    d: "29,029 ft (8,847 m)",
    correct: "c",
    }  
]

//// FOR TESTING ////////////
const test = quizData[0].question;
const test2 = quizData;
console.log(test2);
////////////////////////////



const quiz =  document.getElementById("quiz");
const mainQuestion =  document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;


const ans = document.querySelectorAll(".answer"); // this selects all the options A-D with the class answer

loadQuiz();   // is called each time after submit is pressed

function loadQuiz(){
    deselectAnswer()
    const currentQuizData = quizData[currentQuiz];

    mainQuestion.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let selectedAnswer = undefined;
    ans.forEach((ans1) => {  // loops through all the options
        if (ans1.checked) {  // checks if any of them is checked, then returns the checked value
            selectedAnswer = ans1.id;    
        }
    });
    return selectedAnswer;  // if nothing checked, the function returns undefined
}

function deselectAnswer(){    // to deselect the selected answer from the previous question
    ans.forEach((ans1) => {  // loops through all the options    
        ans1.checked = false;        
    });
}

submitBtn.addEventListener("click", ()=>{
    
    const answer = getSelected();
    console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {  // Check if answer is correct then increase score
            score++;
            console.log(score);     // for testing
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
            if (currentQuiz === quizData.length-1) {
                submitBtn.innerHTML = "Submit";
                submitBtn.style.backgroundColor="red";
            }
        }else{
            quiz.innerHTML = `
                <h2>You scored ${score}/${quizData.length}</h2> 
                <button onclick="location.reload()">Restart</button>
            `;
        }
    }

    
    
    
    
})



//stopped at 1.08 hours


// later work on shuffling the objects in the array so the questions come in different orders