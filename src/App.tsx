import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ConsultaGet from './consulta';

function App() {
  return (
    <Router>
      <div className="bg-background text-primary-foreground min-h-screen flex flex-col items-center justify-center">
        <div className="d-flex justify-content-center mb-4">
          <Link to="/consulta" className="btn btn-primary me-2">Iniciar Consulta</Link>
        </div>
        <Routes>
          <Route path="/consulta" element={<ConsultaGet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

