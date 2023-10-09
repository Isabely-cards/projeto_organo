import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import styles from "./styles.module.css"

function Colaborador({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) {
    function favoritar() {
        aoFavoritar(colaborador.id)
    }
    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className={styles.colaborador}>

            <AiFillCloseCircle 
                size={25} 
                className={styles.deletar} 
                onClick={() => aoDeletar(colaborador.id)} 
            />
            <div className={styles.cabecalho} style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className={styles.rodape}>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className={styles.favoritar}>
                    {colaborador.favorito 
                    ? <AiFillHeart {...propsFavorito} color="red"/> 
                    : <AiOutlineHeart {...propsFavorito}/>}

                </div>
            </div>
        </div>
    )
}

export default Colaborador