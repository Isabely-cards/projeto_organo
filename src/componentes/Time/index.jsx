import Colaborador from '../Colaborador'
import styles from './styles.module.css'

function Time (props) {
    const corSegundaria = { backgroundColor: props.corSegundaria }
    const corPrimaria = { borderColor : props.corPrimaria }

    return(
            (props.colaboradores.length > 0) ? <section className={styles.time} style={{backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: props.corSegundaria}}>
            <h3 style={ {borderColor : props.corPrimaria}} >{props.nome}</h3>
            <div className={styles.colaboradores}> 
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
        : ''
    )
}

export default Time