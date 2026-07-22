import portfolio from "../../data/portfolio.json";
import "./Description.css";

export function Description() {
    return(
        <section id="description" className="description-section">
            <h2>Description</h2>
            <p>{portfolio.profile.description}</p>
        </section> 
    );
}