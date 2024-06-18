import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./ScrollTopBtn.module.scss";

const ScrollTopBtn = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY >= 100) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    const MoveToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    
    return (
        scroll && (
            <button className={styles.sideBtn} onClick={MoveToTop}>
                <span className={styles.btnTop}>
                    <FontAwesomeIcon icon={faCircleArrowUp} />
                </span>
            </button>
        )
    );
};

export default ScrollTopBtn;
