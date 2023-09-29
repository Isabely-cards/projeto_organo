import { useState } from "react"
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
    const aoSalvar = (e) => {
        e.preventDefault()
        console.log("Form foi submetido!", nome, cargo, imagem)
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')

    return (
        <section className={styles.form}>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true}
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setNome(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Times" 
                    itens={times}
                />
                <Button>Criar card</Button>
            </form>
        </section>
    )
}

export default Formulario