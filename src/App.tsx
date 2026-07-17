import {NavBar} from './components/NavBar'
import './App.css'

function App() {
  return(
    <div>
      <NavBar/>
        <div style={{ paddingTop: '80px', padding: '20px'}}>
          <section id="Que hacemos" style={{ height: '100vh', background: 'lightgreen', paddingTop: '60px' }}>
            <h1> ¿Qué hago?</h1>
            <p>Me tiro pedos y tomo chela.</p>
          </section>
          <section id="seccion-contacto" style={{ height: '100vh', background: 'lightblue', paddingTop: '60px'}} >
            <h1> Esta es la seccion de contacto</h1>
            <p> Envío de email : </p>
           <a href="mailto:motorinduccion@gmail.com" style={{ fontSize: '1rem', color: '#0056b3' }}> motorinduccion@gmail.com </a>
          </section>
        </div>
      </div>
  );
}
export default App
