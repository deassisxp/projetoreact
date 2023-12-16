import '../Styles/Contato.Modules.css'
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
import { SiX } from "react-icons/si";
import Header from '../Components/Header';



function Contato(){
    return(
        <div className='contato'>
            <Header/>
            <section className='sedes'>cards sede</section>
            <section className='formContato'>
                <h1 style={{color: '#F6EC72'}}>Fale Conosco</h1>
                <form action="" className='formsContato'>
                    <div className='info'>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id='nome' />
                        <label htmlFor="email">E-Mail:</label>
                        <input type="text" id='email' />
                    </div>
                    <div className='mensagem'>
                        <label htmlFor="msg">Mensagem:</label>
                        <textarea id='msg'></textarea>
                    </div>
                    <button type="submit" className="enviarMensagem">Enviar Mensagem</button>
                </form>
            </section>
            <section className='social'>
                <a href="https://www.facebook.com/deassissep" target="_blank"><SiFacebook className='iconSocial'/></a>
                <a href="https://www.instagram.com/deassissep" target="_blank"><SiInstagram className='iconSocial'/></a>
                <a href="https://www.linkedin.com/in/assis26" target="_blank"><SiLinkedin className='iconSocial'/></a>
                <a href="https://www.whatsapp.com/" target="_blank"><SiWhatsapp className='iconSocial'/></a>
                <a href="https:www.twitter.com/deassisjp" target="_blank"><SiX className='iconSocial'/></a>
                
            </section>
        </div>
        
    )
}
export default Contato