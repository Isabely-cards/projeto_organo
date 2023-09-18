import CampoTexto from "../CampoTexto"
import styles from "./styles.module.css"

const Formulario = () => {
    <section>
        <form>
            <CampoTexto label="Nome" placeholder="Digite seu nome" />
            <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
            <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
            <CampoTexto label="nome" placeholder="Digite seu nome" />
        </form>
    </section>
}

export default Formulario