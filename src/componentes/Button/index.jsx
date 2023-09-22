import styles from "./styles.module.css"

function Button (props) {
    return(
        <button className={styles.button}>{props.button}</button>
    
    )
}

export default Button