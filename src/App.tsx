import {NavBar} from './components/NavBar/NavBar'  
import {Description} from './components/Description';
import {Experience} from './components/Experience';
import {Education} from './components/Education/Education';
import {Contact} from './components/Contact/Contact';
import portfolioData from './data/portfolio.json';
import {portfolioSchema} from './data/portfolioSchema';
import './App.css'

const result = portfolioSchema.safeParse(portfolioData);

if(!result.success){ 
  console.error("Error en la estructura del portfolio.json:", result.error.format());
  throw new Error("Error en la estructura del portfolio.json. Revisa la consola para más detalles.");
}

const portfolio = result.data;

function App() {
  return(
    <>
      <NavBar nav={portfolio.nav}/>
      <Description />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
export default App
