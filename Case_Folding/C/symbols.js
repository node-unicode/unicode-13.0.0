module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))