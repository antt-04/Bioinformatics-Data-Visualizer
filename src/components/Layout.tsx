import { FileText, BarChart, Cpu } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      {/* Sidebar */}
      <aside className="w-64 bg-white text-gray-800 flex flex-col border-r border-gray-200 h-screen sticky top-0">
        <div className="p-6 flex flex-col items-center border-b border-gray-100">
          <a href="/" className="hover:opacity-80 transition-opacity w-full">
            <img
              src="/logo.png"
              alt="BioData Visualizer"
              className="w-full h-auto object-contain"
            />
          </a>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <a
            href="/"
            className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-[#2b6765]/5 text-gray-600 hover:text-[#2b6765] transition-colors group"
          >
            <FileText size={20} className="text-gray-400 group-hover:text-[#2b6765] transition-colors" />
            <span className="font-medium">Secuencias</span>
          </a>
          <a
            href="/expression"
            className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-[#2b6765]/5 text-gray-600 hover:text-[#2b6765] transition-colors group"
          >
            <BarChart size={20} className="text-gray-400 group-hover:text-[#2b6765] transition-colors" />
            <span className="font-medium">Expresión</span>
          </a>
          <a
            href="/3d"
            className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-[#2b6765]/5 text-gray-600 hover:text-[#2b6765] transition-colors group"
          >
            <Cpu size={20} className="text-gray-400 group-hover:text-[#2b6765] transition-colors" />
            <span className="font-medium">Estructura 3D</span>
          </a>
        </nav>

        <div className="p-4 text-center text-xs text-gray-400 border-t border-gray-100">
          <p>Version 1.0</p>
          <p>2026</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}