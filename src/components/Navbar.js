import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navTheme = location.pathname.split('/')[1] || 'home';

  const toggleHamburger = () => setIsMenuOpen(isMenuOpen ? false : true);
  const closeMenuIfOpen = () => isMenuOpen && setIsMenuOpen(false);

  const token = sessionStorage.getItem('token');

  return (
    <header className={`header ${navTheme} || articles`}>
      <div className='container container-grid container-header'>
        <Link to='/' className='logo' onClick={closeMenuIfOpen}>
          LOGO
        </Link>
        <div
          className={`menu-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleHamburger}
        >
          <div className='menu-btn__lines'></div>
        </div>
        <nav className={`main-navigation ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link className='menu-item' to='/about' onClick={closeMenuIfOpen}>
                About
              </Link>
            </li>
            <li>
              <Link
                className='menu-item'
                to='/athletes'
                onClick={closeMenuIfOpen}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                className='menu-item'
                to='/discover'
                onClick={closeMenuIfOpen}
              >
                Discover
              </Link>
            </li>
            {token && (
              <li>
                <Link
                  className='menu-item'
                  to='/manage'
                  onClick={closeMenuIfOpen}
                >
                  Manage
                </Link>
              </li>
            )}

            {!token && (
              <>
                <li>
                  <Link
                    className='menu-item'
                    to='/login'
                    onClick={closeMenuIfOpen}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className='menu-item'
                    to='/register'
                    onClick={closeMenuIfOpen}
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
          <Link
            to='#'
            className='menu-item btn btn-support'
            onClick={closeMenuIfOpen}
          >
            Support us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
