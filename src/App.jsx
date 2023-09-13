import './App.css'
import Countries from './components/Countries/Countries'
import './react.css'

function App() {
  

  return (
    
      <>
        <div style={{display:"flex"}}>
            <div className="container">
              <span className="react-logo">
                <span className="nucleo"></span>
              </span>
            </div>
            <div>
              <h1>React World Tour</h1>
              <Countries />
            </div>
        </div>
      </>
    );
        
  
}

export default App
