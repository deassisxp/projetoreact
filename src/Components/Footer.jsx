import '../Styles/Footer.Modules.css'

function Footer(){
    return(
        <footer>
            <li className='footer'>
                <h5>copyright &copy;</h5><h5 >Nome do site</h5><h5> 2023</h5>
            </li>
            <li className='footer'>
                <a href="#"><h5>Termos de Uso</h5></a>
            </li>
            <li className='footer'>
                <a href="#"><p><h5>Politicas de Privacidade</h5></p></a>
            </li>
        </footer>
    )
}
export default Footer