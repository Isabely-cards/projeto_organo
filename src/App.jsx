import { useState } from 'react'
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario'
import Time from './componentes/Time'
import Rodape from './componentes/Rodape'
import { v4 as uuidv4 } from 'uuid';

function App() {
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

  return (
    <div>
      <Banner enderecoImagem='..//public/imagens/banner.png' textoAlternativo='O banner principal da página do Organo'
      />
      <Formulario
        aoCriarTime={cadastrarTime}
        times={times.map(time => time.nome)}
        aoCadastrar={colaborador =>
          setColaboradores([...colaboradores,
            colaborador])}
      />

      <section className="times">
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
      </section>
      <Rodape />
    </div>
  )
}

export default App
