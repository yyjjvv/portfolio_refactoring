import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faQuoteLeft,
    faQuoteRight,
    faGraduationCap,
    faEarthAsia,
    faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import styles from "./AboutMe.module.scss";

const AboutMe = () => {
    return (
        <section className={styles.about}>
            <h3>About Me</h3>
            <div className="container">
                <div className={styles.intro}>
                    <h4 className={styles.name}>
                        Jiwon Yoo <small>based in Korea</small>
                    </h4>
                    <div>
                        <p className="en">
                            Enthusiastic recent graduate from ‘UX UI Design &
                            Web Publishing’ course, also graduate with a B.A. in
                            Media Communication looking to apply for a Junior UX
                            UI Designer/ Front-End Developer position. Proven
                            teamplayer with communication skill by international
                            co-production documentary projects. Hoping to
                            utilize my understanding of visual contents to make
                            better user experience and user interface.
                        </p>
                        <p className={styles.kr}>
                            <FontAwesomeIcon icon={faQuoteLeft} /> 리더쉽과
                            책임감 그리고 창의력을 가진 팀플레이어, UX UI
                            디자이너/ 프론트엔드 개발자 유지원입니다.{" "}
                            <FontAwesomeIcon icon={faQuoteRight} />
                        </p>
                    </div>
                </div>
                <div className={styles.resume}>
                    <ul className={styles.resumeArea}>
                        <motion.li
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                ease: "easeInOut",
                                duration: 0.5,
                                y: { duration: 0.5 },
                            }}
                        >
                            <span>
                                <FontAwesomeIcon icon={faGraduationCap} />
                            </span>
                            <h4>Education</h4>
                            <div className={styles.detail}>
                                <p>
                                    <small>2023.02 ~ 2023.08</small>
                                    <span className="en">
                                        CodeStates Front-end Bootcamp Completion
                                    </span>
                                    <span className={styles.kr}>
                                        코드스테이츠 프론트엔드 부트캠프 수료
                                    </span>
                                </p>
                                <p>
                                    <small>2021.10 ~ 2022.04</small>
                                    <span className="en">
                                        UX UI Design & Web Publishing Course
                                        Completion
                                    </span>
                                    <span className={styles.kr}>
                                        UX UI 디자인 & 웹 퍼블리싱 과정 수료
                                    </span>
                                </p>
                                <p>
                                    <small>2014.03 ~ 2020.02</small>
                                    <span className="en">
                                        BSc in Media Communication, Kwangwoon
                                        University
                                    </span>
                                    <span className={styles.kr}>
                                        광운대학교 미디어영상학부 졸업
                                    </span>
                                </p>
                            </div>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                ease: "easeInOut",
                                duration: 1,
                                y: { duration: 0.5 },
                            }}
                        >
                            <p>
                                <FontAwesomeIcon icon={faEarthAsia} />
                            </p>
                            <h4>Global Experience</h4>
                            <div className={styles.detail}>
                                <p>
                                    <small>2019.07 ~ 2019.08 Laos</small>
                                    <span className="en">
                                        International Volunteer Work/ Kwangwoon
                                        University
                                    </span>
                                    <span className={styles.kr}>
                                        국제 봉사 활동/ 광운대학교
                                    </span>
                                </p>
                                <p>
                                    <small>2018.01 ~ 2018.06 Denmark</small>
                                    <span className="en">
                                        lnternational People’s College 2018
                                        Spring term Completion
                                    </span>
                                    <span className={styles.kr}>
                                        국제 시민 대학 2018년 봄학기 수료
                                    </span>
                                </p>
                            </div>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                ease: "easeInOut",
                                duration: 1.5,
                                y: { duration: 0.5 },
                            }}
                        >
                            <p>
                                <FontAwesomeIcon icon={faBriefcase} />
                            </p>
                            <h4>Work Experience</h4>
                            <div className={styles.detail}>
                                <p>
                                    <small>2022.06 ~ 2023.02 CNDF</small>
                                    <span className="en">Markup Developer</span>
                                    <span className={styles.kr}>
                                        웹 퍼블리셔
                                    </span>
                                </p>
                                <p>
                                    <small>
                                        2020.12 ~ 2021.06 IMTV Production
                                    </small>
                                    <span className="en">
                                        Planning Producer/ Assistant Producer
                                    </span>
                                    <span className={styles.kr}>
                                        기획 PD/ 조연출
                                    </span>
                                </p>
                            </div>
                        </motion.li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
