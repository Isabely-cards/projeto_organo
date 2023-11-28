import styles from './styles.module.css'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Rodape() {
    return (
        <footer className={styles.footer}>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target='_blank'>
                            <FaFacebook style={{color: 'white'}}/>
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target='_blank'>
                            <FaTwitter style={{color: 'white' }}/>
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target='_blank'>
                            <FaInstagram style={{color: 'white' }}/>
                        </a>
                    </li>
                </ul>
            </section>
            <section className={styles.img}>
                <img src="/imagens/Logo.png" alt="Logo" />
            </section>
            <section>
                <p>Desenvolvido por Isabely.</p>
            </section>
        </footer>
    )
}

export default Rodape