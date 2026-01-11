import { useState } from 'react';
import FileDropzone from './FileDropzone';
import ManualInput from './ManualInput';
import { FileText, Keyboard } from 'lucide-react';

interface InputModuleProps {
    onFileSelected: (file: File) => void;
    onTextSubmitted: (text: string) => void;
}

export default function InputModule({ onFileSelected, onTextSubmitted }: InputModuleProps) {
    const [activeTab, setActiveTab] = useState<'upload' | 'manual'>('upload');

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Tabs Header */}
            <div className="flex bg-gray-50/50 p-1 gap-1">
                <button
                    onClick={() => setActiveTab('upload')}
                    className={`flex-1 py-3 text-sm font-medium flex items-center justify-center space-x-2 rounded-xl transition-all duration-200
                        ${activeTab === 'upload'
                            ? 'bg-[#2b6765] text-white shadow-md shadow-[#2b6765]/20 ring-1 ring-black/5'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-white/60'}
                    `}
                >
                    <FileText size={18} />
                    <span>Upload File</span>
                </button>
                <button
                    onClick={() => setActiveTab('manual')}
                    className={`flex-1 py-3 text-sm font-medium flex items-center justify-center space-x-2 rounded-xl transition-all duration-200
                        ${activeTab === 'manual'
                            ? 'bg-[#2b6765] text-white shadow-md shadow-[#2b6765]/20 ring-1 ring-black/5'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-white/60'}
                    `}
                >
                    <Keyboard size={18} />
                    <span>Manual Input</span>
                </button>
            </div>

            {/* Content Area */}
            <div className="p-6">
                {activeTab === 'upload' ? (
                    <FileDropzone onFileSelect={onFileSelected} />
                ) : (
                    <ManualInput onSubmit={onTextSubmitted} />
                )}
            </div>
        </div>
    );
}
