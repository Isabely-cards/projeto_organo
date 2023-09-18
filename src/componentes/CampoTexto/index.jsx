import styles from "./styles.module.css"

const CampoTexto = (props) => {
    return (
        <form className={styles.form}>
             <div>
                <label>{props.label}</label>
                <input placeholder={props.placeholder}/>
            </div>
            
        </form>
    )
}

export default CampoTexto