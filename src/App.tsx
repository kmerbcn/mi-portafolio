import {NavBar} from './components/NavBar/NavBar'  
import {Description} from './components/Description';
import {Experience} from './components/Experience';
import {Education} from './components/Education/Education';
import {Contact} from './components/Contact/Contact';
import portfolio from './data/portfolio.json'
import './App.css'


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
