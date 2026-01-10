export interface Metadata {
    id: string;
    description?: string;
    // Allow for flexible metadata properties that might be parsed from specific headers
    [key: string]: any;
}

export interface Sequence {
    raw: string;
    length: number;
    // Type can be inferred or explicitly set
    type?: 'DNA' | 'RNA' | 'PROTEIN';
}

export interface FastaRecord {
    metadata: Metadata;
    sequence: Sequence;
}
