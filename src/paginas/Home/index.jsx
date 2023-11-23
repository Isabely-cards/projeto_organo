import { styled } from 'styled-components';
import Formulario from "../../componentes/Formulario"
import Time from "../../componentes/Time"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'; 

const HomeEstilizado = styled.section`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`
const TimesEstilizado = styled.div`
      text-align: center;
    h1 {
        font-size: 40px;
        color: #6278F7;
        border-bottom: 4px solid #6278F7;
        display: inline-block;
        padding-bottom: 24px;
        margin: 32px 0;
    }
    h1, h2 {
    font-family: 'Prata', serif;
    }
`

function Home() {
    const [colaboradores, setColaboradores] = useState([])


    const [times, setTimes] = useState([
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Programação',
            cor: '#57C278'
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Front-end',
            cor: '#82CFFA'
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Data Science',
            cor: '#A6D157'
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Devops',
            cor: '#E06B69'
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'UX e Design',
            cor: '#DB6EBF'
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Mobile',
            cor: '#FFBA05'
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Inovação e Gestão',
            cor: '#FF8A29'
        }
    ])

    function deletarColaborador(id) {
        setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
    }

    function mudarCor(cor, id) {
        setTimes(times.map(time => {
            if (time.id === id) {
                time.cor = cor;
            }
            return time;
        }));
    }
    function cadastrarTime(novoTime) {
        setTimes([...times, { ...novoTime, id: uuidv4() }])
    }

    function resolverFavorito(id) {
        setColaboradores(colaboradores.map(colaborador => {
            if (colaborador.id === id) colaborador.favorito = !colaborador.favorito
            return colaborador
        })
        )
    }
    function aoCadastrar(novoColaborador) {
        const colaboradorComID = { ...novoColaborador, id: uuidv4() };
        setColaboradores([...colaboradores, colaboradorComID]);
    }
    return (
        <HomeEstilizado>
            <Formulario
                aoCriarTime={cadastrarTime}
                times={times.map(time => time.nome)}
                aoCadastrar={aoCadastrar}
            />
            <TimesEstilizado>
                <h1>Minha organização</h1>
                {times.map((time, indice) =>
                    <Time
                        mudarCor={mudarCor}
                        key={indice} time={time}
                        colaboradores={colaboradores.filter(
                            colaborador =>
                                colaborador.time === time.nome
                        )}
                        aoDeletar={deletarColaborador}
                        aoFavoritar={resolverFavorito} />)}
            </TimesEstilizado>
        </HomeEstilizado>
    )
}

export default Home