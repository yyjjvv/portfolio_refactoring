import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer id={styles.footer}>
            <div className="container">
                <p>
                    This site is for personal portfolio purposes and not for
                    commercial use.
                </p>
                <small>Copyright &copy; Jiwon Yoo. All Rights Reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;
