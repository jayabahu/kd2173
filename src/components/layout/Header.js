import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import Logo from './partials/Logo';

import { supabase } from '../../lib/api';

const Header = ({
  className,
  navPosition,
  hideNav,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(false);
    const session = supabase.auth.session();
    if (session?.user) setIsLoggedIn(true);
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) setIsLoggedIn(true);
      }
    );

    return () => {
      if (authListener) {
        authListener.unsubscribe();
      }
    };
  }, []);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsActive(true);
  };

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsActive(false);
  };

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = (e) => {
    if (!nav.current) return;
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return;
    closeMenu();
  };

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  return (
    <header {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}
        >
          <Logo />
          {!hideNav && (
            <div className="website-menu">
              <button
                ref={hamburger}
                className="header-nav-toggle show-on-mobile"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner" />
                </span>
              </button>
              <nav
                ref={nav}
                className={classNames('header-nav', isActive && 'is-active')}
              >
                <div className="header-nav-inner">
                  <ul
                    className={classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}
                  >
                    <li>
                      <Link to="/" onClick={closeMenu}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/our-story" onClick={closeMenu}>
                        Our Story
                      </Link>
                    </li>
                    <li>
                      <Link to="/alliances" onClick={closeMenu}>
                        Alliances
                      </Link>
                    </li>
                    <li>
                      <Link to="/rules" onClick={closeMenu}>
                        Kingdom Rules
                      </Link>
                    </li>
                    <li>
                      <Link to="/newsletters" onClick={closeMenu}>
                        Newsletters
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard" onClick={closeMenu}>
                        Dashboard
                      </Link>
                    </li>
                    {isLoggedIn && (
                      <>
                        <li>
                          <Link to="/dashboard" onClick={closeMenu}>
                            KVK 2 Contributions
                          </Link>
                        </li>
                        <li>
                          <Link to="/" onClick={() => supabase.auth.signOut()}>
                            Logout
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
