import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <Layout>
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Bienvenido a BioData Visualizer</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Plataforma interactiva para visualizar y analizar datos biológicos complejos.
          Selecciona una sección del menú para comenzar.
        </p>
      </div>
    </Layout>
  );
}

export default App;