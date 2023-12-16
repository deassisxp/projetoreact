
import '../Styles/Quiz.Modules.css'
import quests from '../Data/questoes.json'
import { useState } from 'react'


function Quiz(){
    var index = quests.length
    const [i, setI] = useState(0);
    var option = null
    const [answerA, setA] = useState(0)
    const [answerB, setB] = useState(0)
    const [answerC, setC] = useState(0)
    const [answerD, setD] = useState(0)




    function startQuiz(){
        const quiz = document.getElementById("quiz")
        const quizworking = document.getElementById("quizworking")
        const btnanswer = document.getElementsByClassName("btnanswer")
        const perguntaQuiz = document.getElementById("perguntaQuiz")

        quiz.setAttribute("class","none")
        quizworking.classList.remove("none")
        btnanswer[0].innerText = quests[0].opcao[0]
        btnanswer[1].innerText = quests[0].opcao[1]
        btnanswer[2].innerText = quests[0].opcao[2]
        btnanswer[3].innerText = quests[0].opcao[3]
        perguntaQuiz.innerText = quests[0].questao

    
    }
    function nextQuestions(){
        const btnanswer = document.getElementsByClassName("btnanswer")
        const perguntaQuiz = document.getElementById("perguntaQuiz")
        const quizFinal = document.getElementById("quizFinal")
        const quizworking = document.getElementById("quizworking")
        console.log(option)
        if (i < index && option != null){
            setI(i + 1);
            btnanswer[0].innerText = quests[i].opcao[0]
            btnanswer[1].innerText = quests[i].opcao[1]
            btnanswer[2].innerText = quests[i].opcao[2]
            btnanswer[3].innerText = quests[i].opcao[3]
            perguntaQuiz.innerText = quests[i].questao
            if(option === 0) setA(answerA + 1) 
            if(option === 1) setB(answerB + 1)
            if(option === 2) setC(answerC + 1)
            if(option === 3) setD(answerD + 1)
            option = null
            for (let j = 0; j<btnanswer.length; j++){
                btnanswer[j].classList.remove("selectedbtn")
            }
        }
        else if(option!=null){
            quizFinal.classList.remove("none")
            quizworking.classList.add("none")
        }
        
    }
    function setOptions(num){
        const btnanswer = document.getElementsByClassName("btnanswer")

        for (let i = 0; i<btnanswer.length; i++){
            btnanswer[i].classList.remove("selectedbtn")
        }
        option = num
        btnanswer[num].classList.add("selectedbtn")
    }
    
    //const [quizState, dispatch] = useContext(QuizContexto)
    let quizState = ["gameStage"]
        quizState.gameStage = "Start"
    return(
        <>
            {/*<div id="quiz">            
            {quizState.gameStage === "Start" && <CardsQuizInicio/>}
            {quizState.gameStage === "Playing" && <CardsQuiz/>}
            {quizState.gameStage === "End" && <CardsQuizFinal/>}
            </div>*/}
            <div id="quiz">
                <button id="button-quiz" onClick={()=>{startQuiz()}}>
                    <h1>Começar Quiz!</h1>
                </button>
            </div>
            <div id="quizworking" class='none'>
                <h4 id='perguntaQuiz'>pergunta</h4>
                <button className="btnanswer" onClick={()=>{setOptions(0)}}>botao1</button>
                <button className="btnanswer" onClick={()=>{setOptions(1)}}>botao2</button>
                <button className="btnanswer" onClick={()=>{setOptions(2)}}>botao3</button>
                <button className="btnanswer" onClick={()=>{setOptions(3)}}>botao4</button>
                <button id="btnconfirm" onClick={()=>{nextQuestions()}}>enviar</button>
            </div>
            <div className="none" id='quizFinal'>
                <h4>
                    Suas respostas foram: A:{answerA},B:{answerB},C:{answerC},D:{answerD}
                </h4>
            </div>
        </>
    )
}
export default Quiz