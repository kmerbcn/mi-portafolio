import styles from './NavBar.module.css';   // Importamos el CSS como un objeto

interface NavBarProps {
    nav: {
        links: Array < { 
            label: string;
            href: string }>;
    };
}

export function NavBar({ nav } : NavBarProps) {
    return(
        <nav className={styles.navContainer}>  {/* Usamos la clase del CSS importado */}
            {nav.links.map((link, index) => (  
              <a key={index} 
                 href={link.href}
                className={styles.navlink}> 
                {link.label}
              </a>
            ))}
        </nav>
    )
}
