import styles from './styles.module.css'

function Time (props) {
    return(
        <section className={styles.time}>
            <h3>{props.name}</h3>

        </section>
    )
}

export default Time