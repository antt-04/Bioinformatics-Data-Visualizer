interface SequenceViewerProps {
    sequence: string;
    label?: string;
}

export default function SequenceViewer({ sequence, label = 'Raw Sequence' }: SequenceViewerProps) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-100">
                <h3 className="font-medium text-gray-700">{label}</h3>
            </div>
            <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-sm text-gray-600 break-all whitespace-pre-wrap max-h-96 overflow-y-auto">
                    {sequence}
                </pre>
            </div>
        </div>
    );
}
