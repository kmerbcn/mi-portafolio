import portfolio from "../../data/portfolio.json";
import "./Experience.css";

export function Experience() {
    return(
        <section id="experience" className="experience-section">
            <h2>Experience</h2>
            <p>{portfolio.profile.experience}</p>
        </section>
            );
}
