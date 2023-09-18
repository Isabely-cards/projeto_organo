import CampoTexto from "../CampoTexto"
import styles from "./styles.module.css"

const Formulario = () => {
    <section className={styles.form}>
        <form>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <CampoTexto label="Nome" placeholder="Digite seu nome" />
            <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
            <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
            <CampoTexto label="nome" placeholder="Digite seu nome" />
        </form>
    </section>
}

export default Formulario