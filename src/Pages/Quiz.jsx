import { Link } from "react-router-dom"
import '../Styles/Quiz.Modules.css'
import CardsQuizInicio from "../Components/CardsQuizInicio"

function Quiz(){
    return(
        <div className="quiz">
            <CardsQuizInicio/>
        </div>
    )
}
export default Quiz