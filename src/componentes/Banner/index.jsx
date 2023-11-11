import styles from "./styles.module.css"

function Banner({enderecoImagem, textoAlternativo}) {
    return( 
        <header className={styles.banner}>
            <img src={enderecoImagem} alt={textoAlternativo}/>
        </header>
    
    )
}

export default Banner