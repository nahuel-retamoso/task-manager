import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='main-nav'>
            <ul className='navbar'>
                <li className='navbar__item'>
                    <Link className='navbar__item-a' to="/">
                        <img className='navbar__item-img' src="/assets/home.svg" alt="home icon" />
                        <h3>Home</h3>
                    </Link>
                </li>
                <li className='navbar__item'>
                    <Link className='navbar__item-a' to="/agenda">
                        <img className='navbar__item-img' src="/assets/note.svg" alt="agenda icon" />
                        <h3>Agenda</h3>
                    </Link>
                </li>
                <button className='navbar__btn'>
                    <img src="/assets/plus.svg" alt="add icon" />
                </button>
                <li className='navbar__item'>
                    <Link className='navbar__item-a' to="/bienestar">
                        <img className='navbar__item-img' src="/assets/circles.svg" alt="bienestar icon" />
                        <h3>Bienestar</h3>
                    </Link>
                </li>
                <li className='navbar__item'>
                    <Link className='navbar__item-a' to="/calendario">
                        <img className='navbar__item-img' src="/assets/crown.svg" alt="logros icon" />
                        <h3>Logros</h3>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;