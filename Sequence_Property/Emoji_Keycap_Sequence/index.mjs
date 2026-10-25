import { brotliDecompressSync } from 'node:zlib';

export default JSON.parse(brotliDecompressSync(Buffer.from('H3gA+J0JvAnrEdBgv7g79dbg47sWGcUVXyxdnjBsQZPYfj/QgCIHDQU+8LqBxEIqbazrFw==', 'base64')));
