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
                </form>
            </section>
            <section className='social'>
                <SiFacebook className='iconSocial'/>
                <SiInstagram className='iconSocial'/>
                <SiLinkedin className='iconSocial'/>
                <SiWhatsapp className='iconSocial'/>
                <SiX className='iconSocial'/>
            </section>
        </div>
        
    )
}
export default Contato