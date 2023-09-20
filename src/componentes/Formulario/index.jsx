import CampoTexto from "../CampoTexto"
import styles from "./styles.module.css"

function Formulario() {
    return (
        <section className={styles.form}>
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
            </form>
        </section>
    )
}

export default Formulario