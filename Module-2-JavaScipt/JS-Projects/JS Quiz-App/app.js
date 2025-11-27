// console.log("Javascript running -->")

// Quiz Data -->
let quizData = [
    {
        question: "Which architecture is central to most modern large language models (LLMs)?",
        options: [
            "Recurrent Neural Network (RNN)",
            "Convolutional Neural Network (CNN)",
            "Transformer",
            "Generative Adversarial Network (GAN)"
        ],
        answer: "Transformer",
    },
    {
        question: "Which of the following best describes the role of RLHF (Reinforcement Learning from Human Feedback) in LLM training?",
        options: [
            "It is used only for generating training data",
            "It replaces supervised learning entirely",
            "It fine-tunes model outputs by rewarding preferred responses",
            "It converts text data into numerical tokens"
        ],
        answer: "It fine-tunes model outputs by rewarding preferred responses",
    },
    {
        question: "Which organization released ChatGPT and in which year was it first publicly launched?",
        options: [
            ["Google DeepMind, 2021"],
            ["OpenAI, 2022"],
            ["Microsoft Research, 2020"],
            ["Facebook AI Research (FAIR), 2023"]
        ],
        answer: ["OpenAI, 2022"],
    },
    {
        question: "What is a known limitation of LLMs when they produce seemingly correct but incorrect information?",
        options: [
            "Latency",
            "Token-overflow",
            "Hallucination",
            "Over-fitting"
        ],
        answer: "Hallucination",
    },
    {
        question: "In the context of LLMs, what does ‘chain-of-thought’ refer to?",
        options: [
            "A method of pre-processing tokens in batches",
            "A technique where the model generates intermediate reasoning steps",
            "A hardware technique for faster GPU communication",
            "A method of tokenizing long sequences into chains"
        ],
        answer: "A technique where the model generates intermediate reasoning steps",
    },
    {
        question: "Which paper introduced the Transformer architecture that underpins many modern LLMs?",
        options: [
            "Transformers for Language Modelling",
            "Attention Is All You Need",
            "Deep Neural Networks for NLP",
            "Sequence to Sequence Learning with Attention"
        ],
        answer: "Attention Is All You Need",
    },
    {
        question: "Which dataset type is **not** commonly used in pre-training large language models?",
        options: [
            "Web scraped text corpora",
            "Books and articles",
            "High-resolution satellite imagery",
            "Code repositories"
        ],
        answer: "High-resolution satellite imagery",
    },
    {
        question: "What does the model version “7B” typically refer to in LLMs like DeepSeek‑R1 or similar?",
        options: [
            "Number of layers in the model",
            "Number of training epochs",
            "Approximate number of millions of parameters",
            "Approximate number of billions of parameters"
        ],
        answer: "Approximate number of billions of parameters",
    },
    {
        question: "Which of the following strategies helps improve reasoning ability in LLMs according to recent research on DeepSeek-R1?",
        options: [
            "Training only on very short sentences",
            "Using group-relative policy optimization (GRPO) in RLHF",
            "Limiting model to single-task learning",
            "Removing all unsupervised pre-training"
        ],
        answer: "Using group-relative policy optimization (GRPO) in RLHF",
    },
    {
        question: "Which of the following best explains why LLMs need tokenization of text before training?",
        options: [
            "To make text human-readable",
            "To reduce vocabulary size and convert text into numbers",
            "To encrypt text for security",
            "To compress the model weights"
        ],
        answer: "To reduce vocabulary size and convert text into numbers",
    },
    {
        question: "What does LLM stand for in Artificial Intelligence?",
        options: [
            "Large Language Model",
            "Long Learning Machine",
            "Logical Language Module",
            "Layered Learning Model"
        ],
        answer: "Large Language Model",
    },
    {
        question: "Which company developed GPT-based LLMs?",
        options: [
            "Google",
            "OpenAI",
            "Meta",
            "IBM"
        ],
        answer: "OpenAI",
    },
    {
        question: "LLMs are primarily trained using which method?",
        options: [
            "Supervised Learning",
            "Unsupervised Learning",
            "Reinforcement Learning",
            "Genetic Algorithms"
        ],
        answer: "Unsupervised Learning",
    },
    {
        question: "Which of the following is a popular LLM?",
        options: [
            "BERT",
            "TensorFlow",
            "NumPy",
            "React"
        ],
        answer: "BERT",
    },
    {
        question: "Which type of data do LLMs usually learn from?",
        options: [
            "Only images",
            "Only videos",
            "Large text datasets",
            "Only numerical values"
        ],
        answer: "Large text datasets",
    },
    {
        question: "Transformer architecture was introduced in which paper?",
        options: [
            "The Learning Machine",
            "Language Understanding Systems",
            "Attention Is All You Need",
            "Neural Networks and Beyond"
        ],
        answer: "Attention Is All You Need",
    },
    {
        question: "What is the key mechanism used by Transformers?",
        options: [
            "Backtracking",
            "Attention",
            "Binary Search",
            "Hash Mapping"
        ],
        answer: "Attention",
    },
    {
        question: "Which of the following is an advantage of LLMs?",
        options: [
            "They work only offline",
            "They can generate human-like text",
            "They require no training data",
            "They cannot understand context"
        ],
        answer: "They can generate human-like text",
    },
    {
        question: "What is a common limitation of LLMs?",
        options: [
            "They always give accurate answers",
            "They sometimes hallucinate incorrect information",
            "They cannot generate text",
            "They cannot be fine-tuned"
        ],
        answer: "They sometimes hallucinate incorrect information",
    },
    {
        question: "Which technique helps LLMs reduce hallucinations?",
        options: [
            "Random Sampling",
            "Reinforcement Learning from Human Feedback (RLHF)",
            "Memory Overloading",
            "Loop Execution"
        ],
        answer: "Reinforcement Learning from Human Feedback (RLHF)",
    }
];



// Global Variables -->
let quiz = false;
let currentQuesIndex = 0;
let score = 0;
// let currentQues = currentQuesIndex;

// HTML Element in Js  -->
let mainQuizContainer = document.querySelector(".main")
let parentmain = document.querySelector(".parent-main")
let startScreen = document.querySelector(".startScreen")
let resultScreen = document.querySelector(".resultScreen")
let result = document.querySelector(".score")
let CompletedQuizUi = document.querySelector("#completedQuizid")
let loader = document.querySelector("#loader");
let resultbox = document.querySelector("#resultbox");


// console.log(result)

// Functions -->

// restart quiz -->
// const restartQuiz = () => {
//     console.log("mai chl raha hon")
//     currentQuesIndex = 0;
//     score = 0;

//     // console.log(currentQuesIndex)
//     // window.location.reload()
//     resultScreen.classList.add("hidden")
//     startScreen.classList.add("hidden")
//     mainQuizContainer.classList.remove("hidden")
//     showData()

// }



// restart quiz -->
const restartQuiz = () => {
    currentQuesIndex = 0;
    score = 0;

    startQuiz()

}


// main ui data -->
const showData = () => {
    // console.log(currentQuesIndex)
    if (currentQuesIndex < quizData.length) {
        let currentQues = quizData[currentQuesIndex]
        mainQuizContainer.innerHTML = `
    <div class="quiz-app-container">
    <h1 class="name" >
    LLM Quiz-1
    </h1>
    
  

            <h3 class="name">Question ${currentQuesIndex + 1} Of ${quizData.length}</h3>

            <div class="question">
                <h1 id="question">
                    ${currentQues.question}
                </h1>
            </div>

            <div class="buttons">
                <button onclick="checkAns(this)" class="btn_options">${currentQues.options[0]}</button>
                <button onclick="checkAns(this)" class="btn_options">${currentQues.options[1]}</button>
                <button onclick="checkAns(this)" class="btn_options">${currentQues.options[2]}</button>
                <button onclick="checkAns(this)" class="btn_options">${currentQues.options[3]}</button>
            </div>
        </div>
          <h2 class="name" >
                           <br><i>Designed By: Abdullah Shah Alam</i>
            </h2>
        `
    }
    else {
        showResult()
    }
}






const delayData = () => {
    // mainQuizContainer.innerHTML = "";    // hide question box
    loader.classList.remove("hidden");  

    setTimeout(() => {
        loader.classList.add("hidden");  
        showData();                      
    }, 1000);
}








// answer check  -->
const checkAns = (e) => {
    // console.log("mai chl raha hon -->",e.innerHTML)
    // console.log(e)
    // console.log("mai chl raha hon -->",event.target.innerHTML)
    // let userAns = event.target.innerHTML;
    let userAns = e.innerHTML;

    if (userAns == quizData[currentQuesIndex].answer) {
        e.style.backgroundColor = "green"
        score++;

        console.log(score)
        currentQuesIndex++;
        delayData()

    } else {
        e.style.backgroundColor = "red"
        currentQuesIndex++;
        delayData()

    }
}


// show results -->
const showResult = () => {
    mainQuizContainer.classList.add("hidden")
    resultScreen.classList.remove("hidden")
    result.innerHTML = `You Score ${score} out of ${quizData.length}`
}

// start quiz  -->
const startQuiz = () => {
    // console.log("mai chl raha hon")
    quiz = true;

    startScreen.classList.add("hidden")
    /* ====================M2  for hiding question in first instance */
    // document.querySelector(".parent-main").classList.add("active");

    // console.log(quiz)   
    parentmain.classList.remove("hidden")
    loader.classList.remove("hidden");

    setTimeout(() => {
        loader.classList.add("hidden");
        mainQuizContainer.classList.remove("hidden")
    }, 2000);


    showData()
    resultScreen.classList.add("hidden")
    CompletedQuizUi.classList.add("hidden");
}
    function celebrateAgain() {
    alert("🎉$$Celebration Triggered!$$ 🎉\n Congradulations User");
}


const completedQuiz = () => {

    resultScreen.classList.add("hidden");
    //  mainQuizContainer.classList.add("hidden")
    parentmain.classList.add("hidden")
    CompletedQuizUi.classList.remove("hidden");

celebrateAgain();


    console.log('main chl raha hu completed quiz')

    let grade = "F";
    let percentage = (score / quizData.length) * 100;
    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 60) grade = "C";
    else if (percentage >= 50) grade = "D";






//     CompletedQuizUi.innerHTML = `
//     <div class="result-card">
//   <h2>Result Summary</h2>

//   <div class="score-box">
//     <p>You secured <span id="marks">${score}</span> out of ${quizData.length}</p>
//   </div>

//   <div class="grade-box">
//     <p><i>Congradulations</i><br>Your Grade is: <span id="grade">${grade}</span></p>
//   </div>
// </div>
// `



    resultbox.innerHTML = `

<div class="result-container">

    <div class="achievement-banner">
         Achievement Unlocked!    🎉   🎉   🎉 
        <span>Great job! You scored ${score} out of ${quizData.length}. </span>
    </div>

    <div class="result-card-modern">

        <h1 class="title">Quiz Completed</h1>
        <p class="subtitle">Congratulations on completing the quiz Of LLM!</p>

        <div class="summary-grid">

    
 <div class="Performance-Summary">
   <h3>Performance Summary</h3>
   
   
   <div class="spaceing">
      <span>Total Questions:</span>
      <span>${quizData.length}</span>
   </div>
         
   <div class="spaceing">
      <span>Correct Answers:</span>
      <span>${score}</span>
   </div>

   <div class="spaceing">
      <span>Incorrect Answers:</span>
      <span>${quizData.length - score}</span>
   </div>

<div class="spaceing">
   <span>Accuracy:</span>
   <span>${Math.round(score/quizData.length * 100)}%</span>
</div>
</div>
        
            
            <div class="score-summary">
                <h3>Score Distribution</h3>

                <div class="progress-bar">
                    <div class="progress-fill" style="width:${(score/quizData.length)*100}%"></div>
                </div>

                <p class="Percent-score-numeric">${Math.round(score/quizData.length * 100)}%</p>
                <p class="over-score">Overall Score</p>
            </div>
        </div>

        <div class="footer-buttons">
            <button onclick="restartQuiz()" class="back-btn">Back to Quiz</button>
            <button onclick="celebrateAgain();" class="celebrate-btn">Celebrate Again 🎉</button>
            </div>
            
    </div>
    </div>
    
    <h2 class="name" >
    <br><i>Powered By: m@Shaikhabdullah.Shah</i>
    </h2>`
    
}
// <button onclick="completedQuiz();" class="celebrate-btn">Celebrate Again 🎉</button>
// we can also call same working of clerbrate again for  calling their fucntion whre alert is calling