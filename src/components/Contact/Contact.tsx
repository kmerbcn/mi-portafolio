import portfolio from '../../data/portfolio.json';
import './Contact.css';

export function Contact() {
    return(
        <section id="contact" className="contact-section">
            <h2>Contact</h2>    
            <a href={`mailto:${portfolio.profile.contact}`} className="contact-link">
                {portfolio.profile.contact}  
            </a>
        </section>
    );
}