import './style.css';
import logo from '../../assets/footer-logo.svg'

export function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">
                <p>@ 2024 - Felipe Castilho</p>
                <img src={logo} alt="logo portfólio" />
            </div>
        </footer>
    )
}