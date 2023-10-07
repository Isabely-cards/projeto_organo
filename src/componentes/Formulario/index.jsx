import { useState } from "react"
import Button from "../Button"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../listaSuspensa"
import styles from "./styles.module.css"

const Formulario = ({aoCadastrar, times, cadastrarTime}) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCor] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log('form enviado', nome, cargo, imagem, time )
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        })
        // Limpar os campos de entrada definindo os estados para uma string vazia
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    return (
        <section className={styles.form}>
            <form onSubmit={aoSubmeter}>
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
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true}
                    label="Times" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Button>Criar card</Button>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                cadastrarTime({nome: nomeTime, cor: corTime})
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <CampoTexto 
                    obrigatorio
                    label="Nome" 
                    placeholder="Digite o nome do time" 
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <CampoTexto 
                    obrigatorio
                    label="Cor" 
                    placeholder="Digite a cor do time" 
                    valor={corTime}
                    aoAlterado={valor => setCor(valor)}
                />
                <Button>Criar um novo time</Button>
            </form>
        </section>
    )
}

export default Formulario