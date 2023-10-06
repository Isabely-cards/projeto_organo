import styles from './styles.module.css'

function Rodape() {
    return (
        <footer className={styles.footer}>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target='_blank'>
                            <img src="" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target='_blank'>
                            <img src="" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target='_blank'>
                            <img src="" alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="../../../public/imagens/Logo.png" alt="Logo" />
            </section>
            <section>
                <p>Desenvolvido por Isabely.</p>
            </section>
        </footer>
    )
}

export default Rodape