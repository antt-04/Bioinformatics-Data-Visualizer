import React, { useState } from 'react';

interface ManualInputProps {
    onSubmit: (text: string) => void;
}

export default function ManualInput({ onSubmit }: ManualInputProps) {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onSubmit(text);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder=">Sequence_ID\nATCGATCG..."
                className="w-full h-48 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2b6765]/20 focus:border-[#2b6765] transition-all font-mono text-sm resize-y"
            />
            <div className="flex justify-end">
                <button
                    type="submit"
                    disabled={!text.trim()}
                    className="px-6 py-2 bg-[#2b6765] text-white rounded-lg font-medium hover:bg-[#2b6765]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    Analyze Sequence
                </button>
            </div>
        </form>
    );
}
