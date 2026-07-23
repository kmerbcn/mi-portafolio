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

        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
    };

    return (
        <section id="contact" className='contact-section'>
            <h2>Contact</h2>
            <p>¿Quieres ponerte en contacto conmigo? Escribeme un mensaje:</p>

            <form onSubmit={handleSubmit} className='contact-form'>
                <div className='form-grid'>
                    <label htmlFor='mame'> Tu nombre </label>
                    <input
                        id='name'
                        type='text'
                        placeholder='Escribe tu nombre...'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label htmlFor='email'> Tu correo electronico </label>
                    <input
                        id='email'
                        type='email'
                        placeholder="motorinduccion@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor='message'> Mensaje </label>
                    <textarea
                        id='message'
                        placeholder='Escribe tu mensaje aqui...'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        required
                    />
                </div>
                <button type="submit">Enviar mensaje</button>
            </form>
        </section>
    )
}