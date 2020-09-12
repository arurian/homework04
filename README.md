# homework04
Java Script Code Quiz
----------------------

1. Created the html files as follows
    a) index.html - Introdutory page.
        A heading,brief descrition about the quiz and a submit button is provided.
    b) quiz.html - The main html page for the project.
        Created the strucure for the quize page.
        Sturcutre for score,timer,question and answers are included in this page. 
    c) end.html - The end page of the quize
        The final score is displayed. Provisions for saving the score, repeating the quize and going to the home page (index.html) is being provided in this page.

2. The style sheet pages are
    a) styles.css
    b) quiz.css

3. The Java script files
    a) script.js 
        The main scripting file.
        A question array is created consisting 3 questions.The function getNewQuestions() travers through the array and displays each questions one by one.
        Based on the options selected from the answer choices, events are generated, score is calculated and time is reduced if the answer is wrong.
        When all the qustions from the question array are answered, the control goes to the end page.

    b) end.js
        The score is being stored to the local storage along with the user name.
        The control goes to the home page or the quiz page is being popped up based on the button selection.

 Not Completed:
 --------------

 The timer functionality is not being implemented completely.
 As of now, the quiz does not end even if the time counter becomes 0.
 This part need to be completed.