import {useState} from 'react';
//import portfolio from '../../data/portfolio.json';
import './Contact.css';

/*export function Contact() {
    return(
        <section id="contact" className="contact-section">
            <h2>Contact</h2>    
            <a href={`mailto:${portfolio.profile.contact}`} className="contact-link">
                {portfolio.profile.contact}  
            </a>
        </section>
    );
}
    */


export function Contact(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();

        const recipient = "motorinduccion@gmail.com";
        const subject = `Mensaje de portfolio de ${name} (${email})`;
        const body = encodeURIComponent(message);

        window.location.href = `mailto:${recipient}?subject={}`
    };

    return (
        <section id="contact" className='contact-section'>
            <h2>Contact</h2>
            <p>¿Quieres ponerte en contacto conmigo? Escribeme un mensaje:</p>

            <form onSubmit={handleSubmit} className='contact-form'>
                <label htmlFor="name"> Tu nombre</label>
                <input 
                    type="text"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="email">Tu correo electronico</label>
                <input 
                    type="email"
                    placeholder="Tu correo electronico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="message">Tu mensaje</label>
                <textarea 
                    placeholder="Escribe tu mensaje aquí..." 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    rows={5}
                    required 
                />
                <button type="submit">Enviar mensaje</button>
            </form>
        </section>
    )
}