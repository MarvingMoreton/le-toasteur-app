import React, { useState, useRef, useEffect } from 'react';
import classes from './MainNavigation.module.css';
import Link from 'next/link';
import Image from 'next/image';
import blueLogo from '../../public/images/logos/logo-toasteur-villeray-navy.png';
import blueToast from '../../public/images/logos/toast-blue-navy-ellipsed.svg';
import { useRouter } from 'next/router';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

function MainNavigation() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    let header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <React.Fragment>
      <div
        className={`${classes['navbar']} ${sticky.isSticky ? ' sticky' : ''}`}
        ref={headerRef}
        id="sticky-header"
      >
        <header className={classes['header-mobile']}>
          <div className={classes['nav-logo']}>
            <Link href="/">
              <a>
                <Image
                  src={blueLogo}
                  alt="test"
                  layout="responsive"
                  // width={133}
                  // height={68}
                />
              </a>
            </Link>
          </div>

          <button
            className={classes['hamburger']}
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <FontAwesomeIcon
              icon={faBars}
              size="2xl"
              className={`${classes['icon--open']} ${classes['centering']} ${
                isNavExpanded ? `${classes['hidden']}` : `${classes['visible']}`
              }`}
            />
            <div className={classes['centering']}>
              <FontAwesomeIcon
                icon={faX}
                size="2xl"
                className={`${classes['icon--close']} ${
                  isNavExpanded
                    ? `${classes['visible']}`
                    : `${classes['hidden']}`
                }`}
              />
            </div>
            {/* icon from Heroicons.com */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg> */}
          </button>

          <div className={classes['nav-container']}>
            <nav
              className={`${classes['main-nav']} ${
                isNavExpanded
                  ? `${classes['navigation-menu']} ${classes['expanded']}`
                  : `${classes['navigation-menu']}`
              }`}
            >
              <ul className={classes['main-nav-list']}>
                <li>
                  <Link href="/">
                    <a
                      className={`${classes['main-nav-link']} ${
                        currentRoute === '/' ? 'active' : ''
                      }`}
                      onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                      }}
                    >
                      Home
                    </a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/menu">
                    <a
                      className={`${classes['main-nav-link']} ${
                        currentRoute === '/' ? 'active' : ''
                      }`}
                      onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                      }}
                    >
                      Menu
                    </a>
                  </Link>
                </li> */}
                <li className={classes['image-toast']}>
                  <Link href="/">
                    <a>
                      <Image
                        src={blueToast}
                        alt="test"
                        // layout="responsive"
                        // width={124}
                        // height={124}
                      />
                    </a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/gallerie">
                    <a
                      className={`${classes['main-nav-link']} ${
                        currentRoute === '/' ? 'active' : ''
                      }`}
                      onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                      }}
                    >
                      Photos
                    </a>
                  </Link>
                </li> */}
                {/* <li>
                  <Link href="/notre-histoire">
                    <a
                      className={`${classes['main-nav-link']} ${
                        currentRoute === '/' ? 'active' : ''
                      }`}
                      onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                      }}
                    >
                      Notre Histoire
                    </a>
                  </Link>
                </li> */}

                <li>
                  <Link href="/menu">
                    <a
                      className={`${classes['main-nav-link']} ${
                        currentRoute === '/menu' ? 'active' : ''
                      }`}
                      onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                      }}
                    >
                      Menu
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/contact">
                    <a
                      className={`${classes['main-nav-link']} ${
                        currentRoute === '/' ? 'active' : ''
                      }`}
                      onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                      }}
                    >
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <hr className={classes.line}></hr>
      </div>
    </React.Fragment>
  );
}

export default MainNavigation;
