import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPaperPlane,
    faMobileScreenButton,
    faDesktop,
    faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./ContactArea.module.scss";

const ContactArea = () => {
    return (
        <section className={styles.contact}>
            <div className="container">
                <div className={styles.row}>
                    <div className={styles.deco}>
                        <img src="./img/common/me.jpg" alt="Me" />
                    </div>
                    <div className={styles.txt}>
                        <h3>Contact</h3>
                        <ul className={styles.info}>
                            <li>
                                <span className="hide">E-mail</span>
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className={styles.iconFirst}
                                />
                                <a href="mailto:jiwonyoo66@gmail.com">
                                    <span className={styles.highlight}>
                                        jiwonyoo66@gmail.com
                                    </span>
                                    <FontAwesomeIcon
                                        icon={faPaperPlane}
                                        className={styles.iconSecond}
                                    />
                                </a>
                            </li>
                            <li>
                                <span className="hide">Phone Number</span>
                                <FontAwesomeIcon
                                    icon={faMobileScreenButton}
                                    className={styles.iconFirst}
                                />
                                +82 (0)10 4065 7089
                            </li>
                            <li>
                                <span className="hide">Blog</span>
                                <FontAwesomeIcon
                                    icon={faDesktop}
                                    className={styles.iconFirst}
                                />
                                <a
                                    href="https://velog.io/@yyjjvv/posts"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className={styles.highlight}>
                                        Blog
                                    </span>
                                    <FontAwesomeIcon
                                        icon={faSquareArrowUpRight}
                                        className={styles.iconSecond}
                                    />
                                </a>
                            </li>
                            <li>
                                <span className="hide">Git Hub Link</span>
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className={styles.iconFirst}
                                />
                                <a
                                    href="https://github.com/yyjjvv"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className={styles.highlight}>
                                        Git Hub
                                    </span>
                                    <FontAwesomeIcon
                                        icon={faSquareArrowUpRight}
                                        className={styles.iconSecond}
                                    />
                                </a>
                            </li>
                            <li className={styles.smallLogo}>
                                <img
                                    src="./img/common/bg.png"
                                    alt="Simple Logo"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactArea;
