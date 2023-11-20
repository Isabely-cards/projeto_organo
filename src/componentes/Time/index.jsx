import Colaborador from '../Colaborador'
import styles from './styles.module.css'
import hexToRgba from 'hex-to-rgba'

function Time({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar}) {

    return (
        colaboradores.length > 0 && <section className={styles.time} style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.3') }}>
            <input type="color" className={styles.input} value={time.cor} onChange={evento => {
                mudarCor(evento.target.value, time.id)}}
            />
            <h3 style={{ borderColor: time.cor }} >{time.nome}</h3>
            <div className={styles.colaboradores}>
            {colaboradores.map
                ((colaborador) => 
                <Colaborador 
                key={colaborador.id} 
                colaborador={colaborador} 
                corDeFundo={time.cor} 
                aoDeletar={aoDeletar} 
                aoFavoritar={aoFavoritar} 
                />)}
            </div>
        </section>
    )
}

export default Time