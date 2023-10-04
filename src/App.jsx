import { useState } from 'react'
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario'
import Time from './componentes/Time'


function App() {
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  
  const times = [
    {
      nome: 'Programação',
      corPrimaria:'#57c278',
      corSegundaria: '#D9F7E9'
    },
    {
      nome: 'Front-end',
      corPrimaria:'#82CFFA',
      corSegundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria:'#A6D157',
      corSegundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria:'#E06B69',
      corSegundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria:'#DB6EBF',
      corSegundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria:'#FFBA05',
      corSegundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria:'#FF8A29',
      corSegundaria: '#FFEEDF'
    }
  ]

  return (
    <div>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSegundaria={time.corSegundaria} 
        colaboradores={colaboradores}
      />)}

    </div>
  )
}

export default App
