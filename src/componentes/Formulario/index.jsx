import Button from "../Button"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../listaSuspensa"
import styles from "./styles.module.css"

const Formulario = () => {
    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    return (
        <section className={styles.form}>
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa label="Times" itens={times}/>
                <Button button="Criar card"/>
            </form>
        </section>
    )
}

export default Formulario