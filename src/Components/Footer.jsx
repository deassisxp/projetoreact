import '../Styles/Footer.Modules.css'

function Footer(){
    return(
        <footer>
            <li className='footer'>
                <span>copyright &copy;</span><span >Nome do site</span><span> 2023</span>
            </li>
            <li className='footer'>
                <a href="#"><span>Termos de Uso</span></a>
            </li>
            <li className='footer'>
                <a href="#"><p><span>Politicas de Privacidade</span></p></a>
            </li>
        </footer>
    )
}
export default Footer