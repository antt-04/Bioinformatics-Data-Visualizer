import Layout from '../components/Layout';
import StatsCard from '../components/StatsCard';
import SequenceViewer from '../components/SequenceViewer';
import InputModule from '../components/input/InputModule';
import { Dna, Activity, Ruler } from 'lucide-react';

export default function Home() {
    const mockSequence = "ATGCGTAACCGGTTAACCGGTTAACCGGTTAACCGGTTAACCGGTTAACCGGTTAACCGGTTAACCGGTTAACCGGTTAACCGGTTAACCGGTTAACCGGTT";

    const handleFileSelected = (file: File) => {
        console.log("File selected:", file.name);
        // TODO: Process file
    };

    const handleTextSubmitted = (text: string) => {
        console.log("Text submitted:", text.substring(0, 20) + "...");
        // TODO: Process text
    };

    return (
        <Layout>
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
                        <p className="text-gray-600">Bioinformatics Analysis Platform</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Input (4 cols) */}
                    <div className="lg:col-span-5 xl:col-span-4 space-y-6 sticky top-8">
                        <InputModule
                            onFileSelected={handleFileSelected}
                            onTextSubmitted={handleTextSubmitted}
                        />

                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                            <h4 className="text-sm font-semibold text-blue-800 mb-2 flex items-center gap-2">
                                <Activity size={16} />
                                Quick Guide
                            </h4>
                            <ul className="text-xs text-blue-700 space-y-1 list-disc list-inside">
                                <li>Upload <strong>.fasta</strong> or <strong>.txt</strong> files</li>
                                <li>Ensure headers start with <strong>&gt;</strong></li>
                                <li>Max file size: 10MB</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Results (8 cols) */}
                    <div className="lg:col-span-7 xl:col-span-8 space-y-6">
                        <div className="flex items-center space-x-2 pb-2 border-b border-gray-100">
                            <Activity size={20} className="text-primary" />
                            <h3 className="text-lg font-semibold text-gray-800">Analysis Results</h3>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                            <StatsCard
                                title="Sequence Length"
                                value="1,200 bp"
                                icon={Ruler}
                            />
                            <StatsCard
                                title="GC Content"
                                value="45.2%"
                                icon={Dna}
                                description="High stability"
                            />
                            <StatsCard
                                title="Molecular Weight"
                                value="750 kDa"
                                icon={Activity}
                            />
                        </div>

                        {/* Sequence Viewer */}
                        <SequenceViewer sequence={mockSequence} label="Chromosome 1 Fragment" />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
