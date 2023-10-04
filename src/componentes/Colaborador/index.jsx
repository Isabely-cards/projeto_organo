import styles from "./styles.module.css"

function Colaborador () {
    return(
        <div className={styles.colaborador}>
            <div className={styles.cabecalho}>
                <img src="https://github.com/Isabely-cards.png" alt="Isabely" />
            </div>
            <div className={styles.rodape}>
                <h4>Isabely</h4>
                <h5>Programadora</h5>
            </div>
        </div>
    )
}

export default Colaborador