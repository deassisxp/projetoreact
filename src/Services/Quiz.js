

module.exports = function startQuiz(){
    const button = document.getElementById("button-quiz")
    const quiz = document.getElementById("quiz")
    const quizworking = document.getElementById("quizworking")
    const btnconfirm = document.getElementById("btnconfirm")
    quiz.setAttribute("className","none")
    quizworking.id = null
    quizworking.setAttribute("id","quizworking")

}