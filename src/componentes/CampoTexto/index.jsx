import styles from "./styles.module.css"

const CampoTexto = () => {
    const placeholderModificada = `${props.placeholder}...` 
    return (
        <form className={styles.form}>
             <div>
                <label>{props.label}</label>
                <input placeholder={placeholderModificada}/>
            </div>
            
        </form>
    )
}

export default CampoTexto