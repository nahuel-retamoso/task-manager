import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='main-nav'>
            <ul className='navbar'>
                <li className='navbar__item'>
                    <a className='navbar__item-a' href="/home.html">
                        <img className='navbar__item-img' src="/assets/home.svg" alt="home icon" />
                        <h3>Home</h3>
                    </a>
                </li>
                <li className='navbar__item'>
                    <a className='navbar__item-a' href="/agenda.html">
                        <img className='navbar__item-img' src="/assets/note.svg" alt="agenda icon" />
                        <h3>Agenda</h3>
                    </a>
                </li>
                <button className='navbar__btn'>
                    <img src="/assets/plus.svg" alt="add icon" />
                </button>
                <li className='navbar__item'>
                    <a className='navbar__item-a' href="bienestar.html">
                        <img className='navbar__item-img' src="/assets/circles.svg" alt="bienestar icon" />
                        <h3>Bienestar</h3>
                    </a>
                </li>
                <li className='navbar__item'>
                    <a className='navbar__item-a' href="logros.html">
                        <img className='navbar__item-img' src="/assets/crown.svg" alt="logros icon" />
                        <h3>Logros</h3>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;