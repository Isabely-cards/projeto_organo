import styles from "./styles.module.css"

function ListaSuspensa (props) {
    console.log(props.itens)
    return(
    <div className={styles.lista_suspensa}>
        <label>{props.label}</label>
        <select>
            {props.itens.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>
    )
}

export default ListaSuspensa