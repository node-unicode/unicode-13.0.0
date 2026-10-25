import { brotliDecompressSync } from 'node:zlib';

export default JSON.parse(brotliDecompressSync(Buffer.from('H10A+C2Sx7WPdOJD51NtzevkyA+MtXZpydvCFB6BDfr4Cb9YupAhx1+sMUWAhQu38LXRorKJ9kCyWKejBQ==', 'base64')));
