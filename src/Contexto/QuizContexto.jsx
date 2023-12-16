import { createContext, useReducer, useState} from "react";
import questoes from '../Data/questoes.js'

const STAGES = ["Start", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    questoes,
    questaoAtual: 0,
    score: 0,
}

const quizReducer = (state, acao) =>{
    console.log(state,acao)

    switch (acao.type){
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
            };
        case "CHANGE_QUESTION":
            const proxQuestao = state.questaoAtual + 1;
            let endGame = false;

            if(!questoes[proxQuestao]){
                endGame = true;
            }

            return {
                ...state,
                questaoAtual: proxQuestao,
                gameStage: endGame ? STAGES[2] : state.gameStage,
            };
        default:
            return state;
    }
}


export const QuizContexto = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState)
    return <QuizContexto.Provider value={value}>{children}</QuizContexto.Provider>
}