import type { FastaRecord } from '../types/fasta';

export class FastaParseError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "FastaParseError";
    }
}

export function parseFasta(content: string): FastaRecord[] {
    const trimmedContent = content.trim();

    if (!trimmedContent) {
        return [];
    }

    if (!trimmedContent.startsWith('>')) {
        throw new FastaParseError('Invalid FASTA format: Content must start with ">"');
    }

    // Split by '>' but ignore the first empty string resulting from the split
    const rawRecords = trimmedContent.split('>').slice(1);
    const records: FastaRecord[] = [];

    for (const rawRecord of rawRecords) {
        if (!rawRecord.trim()) continue;

        const lines = rawRecord.split(/\r?\n/);
        const header = lines[0].trim();
        // Join all subsequent lines to form the sequence, removing whitespace
        const sequenceRaw = lines.slice(1).join('').replace(/\s+/g, '');

        if (!header) {
            throw new FastaParseError('Invalid FASTA record: Missing header');
        }

        // Basic heuristic to guess type (can be improved)
        // DNA: ATCGN, RNA: AUCGN, Protein: (everything else)
        const upperSeq = sequenceRaw.toUpperCase();
        let type: 'DNA' | 'RNA' | 'PROTEIN' = 'PROTEIN';

        const isNucleic = /^[ATCGNMUswkrybdhv\.-]+$/i.test(sequenceRaw);
        if (isNucleic) {
            type = upperSeq.includes('U') ? 'RNA' : 'DNA';
        }

        records.push({
            metadata: {
                id: header.split(' ')[0], // First word is ID
                description: header, // Full header as description
            },
            sequence: {
                raw: sequenceRaw,
                length: sequenceRaw.length,
                type: type,
            },
        });
    }

    return records;
}
