import { UploadCloud } from 'lucide-react';
import React, { useRef, useState } from 'react';

interface FileDropzoneProps {
    onFileSelect: (file: File) => void;
}

export default function FileDropzone({ onFileSelect }: FileDropzoneProps) {
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            onFileSelect(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            onFileSelect(e.target.files[0]);
        }
    };

    return (
        <div
            onClick={() => inputRef.current?.click()}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`
        border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300 group
        ${isDragging
                    ? 'border-[#d59d63] bg-[#d59d63]/5 scale-[0.99]'
                    : 'border-gray-200 hover:border-[#d59d63]/50 hover:bg-gray-50'}
      `}
        >
            <input
                type="file"
                ref={inputRef}
                onChange={handleChange}
                className="hidden"
                accept=".fasta,.fa,.txt"
            />
            <div className="flex flex-col items-center justify-center space-y-3">
                <div className={`p-4 rounded-full transition-colors duration-300 ${isDragging ? 'bg-[#d59d63]/20' : 'bg-[#2b6765]/5 group-hover:bg-[#2b6765]/10'}`}>
                    <UploadCloud className={`w-8 h-8 transition-colors duration-300 ${isDragging ? 'text-[#d59d63]' : 'text-[#2b6765]'}`} />
                </div>
                <div>
                    <p className="text-base font-medium text-gray-700">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-400 mt-1">FASTA or TXT files (max 10MB)</p>
                </div>
            </div>
        </div>
    );
}
