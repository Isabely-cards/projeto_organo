import Colaborador from '../Colaborador'
import styles from './styles.module.css'

function Time (props) {
    const corSegundaria = { backgroundColor: props.corSegundaria }
    const corPrimaria = { borderColor : props.corPrimaria }

    return(
            <section className={styles.time} style={corSegundaria}>
            <h3 style={corPrimaria} >{props.nome}</h3>
            {props.Colaboradores.map(Colaborador => <Colaborador/>)}
        </section>
    )
}

export default Time