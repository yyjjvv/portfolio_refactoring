import { ReactTyped } from "react-typed";
import styles from "./Intro.module.scss";

const Intro = () => {
    return (
        <div id={styles.visual}>
            <div className="container">
                <div className={styles.txt}>
                    <div className={styles.intro}>
                        <h2>
                            <p>Hello!</p>
                            <p>
                                I'm{" "}
                                <span className={styles.highlight}>Jiwon,</span>
                            </p>
                        </h2>
                    </div>
                    <div className={styles.typo}>
                        <img
                            src="./img/common/headline.png"
                            alt="UX UI Designer"
                        />
                    </div>
                    <div className={styles.typing}>
                        <ReactTyped
                            strings={["FRONT-END {DEVELOPER}"]}
                            typeSpeed={46}
                            autoStart={true}
                            startDelay={1400}
                            loop={false}
                        />
                        <span className={styles.cover}></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
