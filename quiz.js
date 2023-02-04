const questions = [
    {
        question: "What is Ari's full name ?",
        optionA: "Ariana Grande",
        optionB: "Ariana Elizabeth Grande",
        optionC: "Ariana-Butera",
        optionD: "Ariana Grande-Butera",
        correctOption: "optionD"
    },

    {
        question: "When is Ari's birthday ?",
        optionA: "26 July 1995",
        optionB: "26 June 1993",
        optionC: "24 June 1994",
        optionD: "18 September 1992",
        correctOption: "optionB"
    },

    {
        question: "Where state is Ariana from ?",
        optionA: "Texas",
        optionB: "New York",
        optionC: "California",
        optionD: "Florida",
        correctOption: "optionD"
    },

    {
        question: "What color is Ariana's hair naturally ?",
        optionA: "Red",
        optionB: "Black",
        optionC: "Brown",
        optionD: "Grey",
        correctOption: "optionC"
    },

    {
        question: "Who is Ariana's older brother ?",
        optionA: "Ronnie",
        optionB: "Malcolm",
        optionC: "Big Sean",
        optionD: "Frankie",
        correctOption: "optionD"
    },

    {
        question: "How many octaves Ari's voice range ?",
        optionA: "Four",
        optionB: "Eight",
        optionC: "Three",
        optionD: "Six",
        correctOption: "optionA"
    },

    {
        question: "How old was Ariana when she landed her first role on Broadway ?",
        optionA: "9yo",
        optionB: "12yo",
        optionC: "15yo",
        optionD: "18yo",
        correctOption: "optionC"
    },

    {
        question: "Who is Ariana's celebrity crush ?",
        optionA: "Jim Carey",
        optionB: "Adam Levine",
        optionC: "Justin Bieber",
        optionD: "Pharrel Williams",
        correctOption: "optionA"
    },

    {
        question: "What is Ariana's favorite sport ?",
        optionA: "Basketball",
        optionB: "Badminton",
        optionC: "Gymnastic",
        optionD: "Swimming",
        correctOption: "optionD"
    },

    {
        question: "Which Harry Potter star did Ariana admit to writing songs about when she was younger ?",
        optionA: "Daniel Radcliffe",
        optionB: "Rupert Grint",
        optionC: "Emma Watson",
        optionD: "Tom Felton",
        correctOption: "optionD"
    },

    {
        question: "Which of these is not the name of one of Ariana's dogs ?",
        optionA: "Cinnamon",
        optionB: "Lily",
        optionC: "Louis",
        optionD: "Pignoly",
        correctOption: "optionC"
    },

    {
        question: "What is Ariana's middle name ?",
        optionA: "Grande",
        optionB: "Elizabeth",
        optionC: "Dalton",
        optionD: "Butera",
        correctOption: "optionA"
    },


    {
        question: "Which important topic did Ariana write an article about ?",
        optionA: "Animal abuse",
        optionB: "Bullying",
        optionC: "Black lives matter",
        optionD: "Disability",
        correctOption: "optionB"
    },

    {
        question: "Which of these things is Ariana allergic to ?",
        optionA: "Pollen",
        optionB: "Dog",
        optionC: "Rabbit",
        optionD: "Cat",
        correctOption: "optionD"
    },

    {
        question: "What is Ariana's hidden talent ?",
        optionA: "Impersonations",
        optionB: "Acting",
        optionC: "Figure skating",
        optionD: "She doesn't have one",
        correctOption: "optionA"
    },

    {
        question: "What musical remake did Ariana appear on the title track for ?",
        optionA: "Aladdin",
        optionB: "Cinderella",
        optionC: "Beauty And The Beast",
        optionD: "The Lion King",
        correctOption: "optionC"
    },

    {
        question: "How many people attended one love manchester ?",
        optionA: "50,000 people",
        optionB: "45,000 people",
        optionC: "60,000 people",
        optionD: "55,000 people",
        correctOption: "optionA"
    },

    {
        question: "Which of these singers who not included at OLM's guest stars ?",
        optionA: "Niall Horan",
        optionB: "Katy Perry",
        optionC: "Selena Gomez",
        optionD: "Justin Bieber",
        correctOption: "optionC"
    },

    {
        question: "Who is Ariana's husband ?",
        optionA: "Malcolm",
        optionB: "Big Sean",
        optionC: "Ricky",
        optionD: "Dalton Gomez",
        correctOption: "optionD"
    },

    {
        question: "How tall is Ariana ?",
        optionA: "5'2",
        optionB: "5'3",
        optionC: "5'4",
        optionD: "5'5",
        correctOption: "optionA"
    },

    {
        question: "One Love Manchester concert held on ?",
        optionA: "4 July 2016",
        optionB: "26 June 2016",
        optionC: "26 June 2017",
        optionD: "4 June 2017",
        correctOption: "optionD"
    },

    {
        question: "One Love Manchester concert took place at ?",
        optionA: "Capitals Summertime Ball",
        optionB: "Old Trafford Cricket Ground",
        optionC: "Copacabana",
        optionD: "Moskow",
        correctOption: "optionB"
    },

    {
        question: "How much donation does The British Red Cross received in the 12 hours following the OLM concert ?",
        optionA: "more than £20 million",
        optionB: "more than £10 million",
        optionC: "more than £15 million",
        optionD: "more than £25 million",
        correctOption: "optionB"
    },

    {
        question: "Ariana subsequently suspended her tour and flew to her mother's home in ?",
        optionA: "Miami, Florida",
        optionB: "Columbus, Ohio",
        optionC: "Boca Raton, Florida",
        optionD: "Los Angeles, California",
        correctOption: "optionC"
    },

    {
        question: "K Bye for Now (SWT Live) is the debut live album by Ariana which contains guest appearances ?",
        optionA: "Big Sean, Cardi B",
        optionB: "Miley Cyrus, Victoria Monet",
        optionC: "Big Sean, Zedd.",
        optionD: "Victoria Monet, Nicki Minaj",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}