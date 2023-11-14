import styles from './styles.module.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    
    function favoritar() {
        aoFavoritar(colaborador.id);
    }
    return (<div className={styles.colaborador}>
        <AiFillCloseCircle size={25} className={styles.deletar} onClick={() => aoDeletar(colaborador.id)} />
        <div className={styles.cabecalho} style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className={styles.rodape}>
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className={styles.favorito}>
                {colaborador.favorito ? 
                <AiFillHeart color="#ff0000" 
                size={25} onClick={favoritar} 
                /> : <AiOutlineHeart 
                size={25} onClick={favoritar} />}
            </div>
        </div>
    </div>)
}

export default Colaborador