import { gunzipSync } from 'node:zlib';

export default JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE4tWUn6/o/9R82IlHSUtOMsAzjKEs4zgLGM4ywTOMoWzzOAsczjLAs6yhLJiAc+QLMN5AAAA', 'base64')));
