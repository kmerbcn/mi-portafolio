import portfolio from "../../data/portfolio.json";
import "./Education.css";

export function Education() {
    return(
        <section id="education" className="education-section">
            <h2>Education</h2>
            <p>{portfolio.profile.education}</p>
        </section>
    );
}