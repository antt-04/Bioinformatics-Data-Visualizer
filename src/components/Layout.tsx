import { Menu, FileText, BarChart3, Cpu } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-800">🧬 BioData Visualizer</h1>
          <nav className="flex space-x-6">
            <a href="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <FileText size={20} />
              <span>Secuencias</span>
            </a>
            <a href="/expression" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <BarChart3 size={20} />
              <span>Expresión</span>
            </a>
            <a href="/3d" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <Cpu size={20} />
              <span>Estructura 3D</span>
            </a>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}