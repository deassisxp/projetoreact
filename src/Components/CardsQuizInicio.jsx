import '../Styles/CardsQuizInicio.Modules.css' 
import Quiz from '../imagens/quiz.jpeg'

function CardsQuizInicio(){
  return (
    <div id='bemvindo'>
        <img src={Quiz} alt="Inicio do Quiz" />
        <h2>Seja Bem-Vindo</h2>
        <p>Clique no botão para começar:</p>
        <button>Iniciar</button>        
    </div>
  )
}

export default CardsQuizInicio