import styles from "./styles.module.css"

function ListaSuspensa({label, itens,  valor, aoAlterado, obrigatorio = false}) {

    return (
        <div className={styles.lista_suspensa}>
            <label>{label}</label>
            <select required={obrigatorio} value={valor}
            onChange={evento => 
            aoAlterado(evento.target.value)}>
                <option />
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa