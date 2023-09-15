import styles from "./styles.module.css"

const CampoTexto = () => {
    return (
        <form className={styles.form}>
            <h1>Preencha os dados para criar o card do colaborador.</h1>
            <div>
                <label>Nome</label>
                <input placeholder="Digite seu nome"/>
            </div>
            <div>
                <label>Cargo</label>
                <input placeholder="Digite seu cargo"/>
            </div>
            <div>
                <label>Imagem</label>
                <input placeholder="Informe o endereço da imagem"/>
            </div>
            <div>
                <label>Time</label>

            </div>
        </form>
    )
}

export default CampoTexto