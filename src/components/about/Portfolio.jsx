import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faQuoteLeft,
    faQuoteRight,
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Portfolio.module.scss";

const Portfolio = () => {
    return (
        <section className={styles.portfolio}>
            <h3>
                <FontAwesomeIcon icon={faQuoteLeft} />
                &nbsp;Portfolio&nbsp;
                <FontAwesomeIcon icon={faQuoteRight} />
            </h3>
            <div className="container">
                <ul className={styles.goto}>
                    <li className={styles.publishing}>
                        <Link to='/web-publishing'>
                            <div className={styles.pic}>
                                <span className="hide">Go to Wed Publishing Portfolio</span>
                            </div>
                            <div className={styles.txt}>
                                <p>
                                    <span>WEB PUBLISHING PORTFOLIO</span>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className={styles.frontend}>
                        <Link to='/frontend'>
                            <div className={styles.pic}>
                                <span className="hide">
                                    Go to Frontend Project Portfolio
                                </span>
                            </div>
                            <div className={styles.txt}>
                                <p>
                                    <span>FRONTEND PORTFOLIO</span>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Portfolio;
