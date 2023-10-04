import styles from "./styles.module.css"

function Colaborador ({nome, imagem, cargo}) {
    return(
        <div className={styles.colaborador}>
            <div className={styles.cabecalho}>
                <img src={imagem} alt={nome} />
            </div>
            <div className={styles.rodape}>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador