import { parseFasta } from './fastaParser';

const sampleFasta = `>seq1
ATCGATCGATCG
>seq2
GCTAGCTAGCTA`;

const invalidFasta = `NOT A FASTA`;

console.log("--- Testing parseFasta ---");

try {
    console.log("Test 1: Valid FASTA");
    const result = parseFasta(sampleFasta);
    if (result.length === 2 && result[0].metadata.id === 'seq1' && result[1].metadata.id === 'seq2') {
        console.log("PASS: Valid FASTA parsed correctly.");
        console.log(JSON.stringify(result, null, 2));
    } else {
        console.error("FAIL: valid FASTA output incorrect.");
        console.error(result);
    }
} catch (e) {
    console.error("FAIL: Valid FASTA threw error: " + e);
}

console.log("\nTest 2: Invalid FASTA");
try {
    parseFasta(invalidFasta);
    console.error("FAIL: Invalid FASTA did not throw error.");
} catch (e) {
    console.log("PASS: Invalid FASTA threw error as expected: " + (e as Error).message);
}
