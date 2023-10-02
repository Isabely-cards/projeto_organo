import { useState } from "react"
import styles from "./styles.module.css"

const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }

    return (

        <div className={styles.form}>
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto