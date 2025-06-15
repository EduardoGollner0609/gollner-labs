import './styles.css';
import softwareIcon from '../../assets/software-icon.png';

export default function Header() {
    return (
        <header>
            <nav className="container">
                <div className="logo">
                    <img src={softwareIcon} alt="Computador" />
                    <h1>Gollner Labs</h1>
                </div>
            </nav>
        </header>
    );
}