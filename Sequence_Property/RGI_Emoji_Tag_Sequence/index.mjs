import { gunzipSync } from 'node:zlib';

export default JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE4tW+jC/f8vnBY3LPy9oXPR5QePSzwsa10H5+5V00KU3f17QuPjzgsYt2KW3f17QuAaqbL9SLACLZlYrXgAAAA==', 'base64')));
