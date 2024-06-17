import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.scss";

const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const handleMobileMenu = () => {
        setIsMenuActive((prev) => !prev);
        if (isMenuActive) {
            document.querySelector("body").style.overflow = "auto";
        } else {
            document.querySelector("body").style.overflow = "hidden";
        }
    };

    return (
        <header id={styles.header} className={`${isMenuActive && styles.on}`}>
            <div className={styles.container}>
                <h1 className={styles.logo}>
                    <Link to="/">
                        <img src="/img/common/logo.png" alt="YJW" />
                    </Link>
                </h1>
                <div className={styles.shadow}></div>
                <nav className={styles.nav}>
                    <h2 className="hide">Main Navigation</h2>
                    <ul className={styles.gnb}>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? `${styles.active}` : ""
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/web-publishing"
                                className={({ isActive }) =>
                                    isActive ? `${styles.active}` : ""
                                }
                            >
                                Web Publishing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/frontend"
                                className={({ isActive }) =>
                                    isActive ? `${styles.active}` : ""
                                }
                            >
                                Frontend
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? `${styles.active}` : ""
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div
                    className={`${styles.hamburger} ${
                        isMenuActive && styles.active
                    }`}
                    onClick={handleMobileMenu}
                >
                    <span
                        className={`${styles.menu} ${styles.half} ${styles.first}`}
                    ></span>
                    <span className={styles.menu}></span>
                    <span
                        className={`${styles.menu} ${styles.half} ${styles.last}`}
                    ></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
