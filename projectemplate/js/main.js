// array of questions with answers
var questionsArray = [
  {
    question: "How old was Tyson when he first won the heavyweight belt?",
    answer: 19
  },
  {
    question: "Where was Tyson born?",
    answer: "Catskill NY"
  },
  {
    question: "Who did Tyson lose to twice?",
    answer: "Holyfield"
  },
  {
    question: "Who knocked Tyson out for the first time?",
    answer: "Buster Douglas"
  },
  {
    question: "Who was Tyson's mentor/first trainer?",
    answer: "Cus D'Amato"
  }
];

// loop through each question
  for(var i = 0; i < questionsArray.length; i++){
    // store each question value
    var question = questions[i].question;
    // store each element to add question
    var element = document.getElementById("question" + [i]);
    // check what question and element is being selected
    console.log(question, element);
    // update text content of each element(question)
    element.textContent = question;
}
// check answers when the user submits quiz
function checkAnswer() {
    // store variables to update correct and incorrect totals
    var correct = 0;
    var incorrect = 0;

    // loop through questions array
    for(var i = 0; i < questions.length; i++){
        // store each correct answer
        var answer = questions[i].answer;
        // store each user answer by using .value
        var guess = document.getElementById("answer" + [i]).value;
        // store element to add a class if correct or incorrect to tally each
        var questionSpot = document.getElementById("question" + [i]);

        // check if the user answer matches the correct answer
        if(answer == guess){
          // update class on question spot for correct answers
          questionSpot.classname = "correct";
          // add one to correct tally
          correct++;
        } else {
          // update class on question spot for incorrect answers
          questionSpot.classname = "incorrect";
          // add one to incorrect tally
          incorrect++;
        };
      };

      // update to show tally of correct and incorrect answers
      document.getElementById("correct").textContent = correct;
      document.getElementById("incorrect").textContent = incorrect;
}
