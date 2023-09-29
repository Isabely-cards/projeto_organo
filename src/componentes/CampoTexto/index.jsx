import styles from "./styles.module.css"

const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`

    let valor = "isa"
    const aoDigitado = (e) => {
        valor = e.target.value
        console.log(valor)
    }


    return (

        <div className={styles.form}>
            <label required={props.obrigatorio} >{props.label}</label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto