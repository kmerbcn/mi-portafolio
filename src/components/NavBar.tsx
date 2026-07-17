import styles from './NavBar.module.css';   // Importamos el CSS como un objeto

export function NavBar() {
    return(
        <nav className={styles.navContainer}>
            <a href="#seccion-abajo" className={styles.navLink}>Ir abajo</a>
            <a href="#seccion-contacto" className={styles.navLink}>Contacto</a>
            <a href="https://github.com" target="_blank" className={styles.navLink}>GitHub</a>
        </nav>
    )
}