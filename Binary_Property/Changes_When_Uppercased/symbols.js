module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,93,217,201,146,134,184,17,4,224,119,153,179,15,141,86,56,34,144,94,194,246,193,251,190,123,188,61,189,113,12,223,239,168,57,208,145,138,70,169,76,84,202,46,232,31,126,243,147,111,126,240,205,79,159,235,103,207,245,243,231,250,197,115,253,242,185,126,245,92,191,126,174,223,60,215,111,159,235,119,207,245,251,231,250,195,115,253,241,185,254,244,92,127,126,174,191,60,215,95,159,235,111,207,245,247,231,250,246,185,254,241,92,255,124,174,127,61,215,191,159,235,63,207,245,163,111,191,190,70,125,193,189,94,48,191,128,13,72,64,6,10,96,250,108,64,7,118,224,0,78,96,0,23,112,3,19,160,103,209,179,232,89,244,44,122,22,61,139,158,69,207,34,99,145,177,200,88,100,44,50,22,25,139,140,245,202,216,190,54,32,3,21,232,192,1,12,224,6,240,108,120,54,60,27,158,13,207,134,103,195,179,225,217,240,36,60,9,79,194,147,240,36,60,9,79,194,147,240,100,60,25,79,198,147,241,228,19,184,128,247,249,108,229,11,72,64,1,26,176,3,244,20,122,10,61,133,158,74,79,165,167,210,83,233,169,120,42,158,138,167,226,105,120,26,158,134,167,225,105,120,26,158,134,167,225,233,120,58,158,142,167,227,233,158,79,247,124,186,231,211,241,236,30,212,142,103,199,179,123,62,187,233,135,135,121,184,231,32,245,176,214,97,137,147,194,19,243,105,214,137,249,228,107,144,49,108,211,176,77,195,18,227,115,51,241,23,194,203,205,23,230,203,172,203,51,188,184,184,40,188,45,122,243,117,91,253,70,120,35,188,25,188,241,220,244,200,168,77,52,109,18,105,19,68,155,252,217,196,206,38,109,54,33,179,201,150,77,182,108,34,101,19,41,155,36,217,228,198,38,46,54,41,177,9,135,36,28,146,112,72,194,33,9,135,36,28,146,112,72,194,33,9,135,36,28,146,112,72,194,33,9,135,36,28,146,112,72,194,33,9,135,36,19,146,76,72,50,33,201,132,36,19,146,76,72,50,33,201,132,36,19,146,131,159,178,123,28,252,228,224,167,98,9,199,60,57,230,201,49,79,142,121,170,166,59,239,169,226,113,240,83,45,64,3,44,33,1,146,4,72,149,194,134,89,2,36,9,144,36,64,106,8,219,14,32,108,39,128,185,125,152,137,151,9,169,211,44,19,82,231,212,121,79,187,123,28,252,180,115,225,224,167,221,234,187,213,119,171,203,132,36,19,210,97,9,9,144,203,187,122,38,44,11,171,44,163,114,31,192,5,188,60,249,120,165,230,211,175,196,69,62,45,113,190,222,179,0,201,195,90,35,1,22,149,45,89,119,145,133,76,30,244,140,29,56,128,19,32,117,208,35,145,242,160,71,52,229,139,158,139,158,139,158,139,158,139,30,57,150,229,88,190,232,17,104,89,160,229,139,30,201,150,37,91,190,232,17,113,89,196,229,155,140,219,90,34,46,223,214,186,45,113,99,22,113,89,196,101,17,151,69,92,22,113,89,196,101,17,151,69,92,22,113,89,196,101,17,151,181,79,89,214,101,89,151,101,93,214,44,101,89,87,242,23,176,1,9,200,64,1,42,208,128,14,236,192,1,156,192,103,173,11,184,129,9,188,118,138,216,41,133,30,249,83,10,61,58,144,226,92,20,173,72,145,81,69,79,82,132,85,41,244,72,173,82,232,17,95,165,208,35,199,138,28,43,114,172,200,177,34,199,138,28,43,58,153,34,208,138,64,43,149,30,201,86,42,61,34,174,136,184,162,219,41,149,30,109,79,17,122,69,232,21,161,87,180,61,69,214,21,17,87,180,61,69,196,21,73,82,36,73,17,113,69,164,148,142,71,182,20,145,82,180,61,101,199,35,208,202,238,158,221,61,135,123,14,107,105,123,202,97,45,253,79,57,240,136,193,114,224,209,8,21,141,80,209,8,149,19,207,137,231,196,35,235,138,136,43,146,173,8,180,34,199,138,248,42,82,171,8,171,34,163,138,104,42,130,168,200,159,34,118,138,180,41,66,166,200,150,34,82,202,133,71,164,148,155,30,217,82,68,74,17,41,69,164,20,145,82,68,74,17,41,69,164,20,145,82,68,74,17,41,69,164,20,145,82,68,74,145,36,69,128,20,1,82,22,30,93,83,249,36,137,174,169,232,154,170,174,169,234,154,170,174,169,234,154,170,174,169,234,154,170,174,169,234,154,170,174,169,234,154,170,174,169,234,154,170,174,169,234,154,170,174,169,234,154,170,87,170,170,125,170,218,167,170,125,170,218,167,170,125,170,218,167,170,125,170,206,96,109,9,64,216,10,128,89,43,82,29,207,170,39,169,206,105,213,147,84,7,182,234,73,170,147,91,219,4,200,232,95,0,61,218,149,234,80,215,78,143,211,93,59,61,142,121,237,244,56,239,213,251,78,117,240,171,166,162,74,128,234,13,168,138,130,170,35,170,50,161,106,141,170,214,168,238,244,120,57,170,59,61,111,215,244,188,82,127,1,27,144,128,12,20,160,2,13,248,240,236,192,1,156,192,0,46,224,6,38,176,94,48,233,153,244,76,122,38,61,147,158,73,207,164,103,210,51,233,153,244,76,122,38,61,147,158,73,207,164,103,210,179,232,89,244,44,122,22,61,139,158,69,207,162,103,209,179,232,89,244,44,122,150,213,151,213,223,67,189,105,33,30,112,0,39,48,128,11,120,121,174,183,54,30,176,1,9,200,64,1,42,208,128,14,188,171,223,111,173,62,224,93,226,222,95,169,243,141,157,7,100,160,2,29,56,128,1,220,192,235,116,110,120,54,60,27,158,13,207,134,103,195,179,225,217,240,36,60,9,79,194,147,240,36,60,9,79,194,147,240,100,60,25,79,198,147,241,100,60,25,79,198,147,241,20,60,5,79,193,83,240,20,60,5,79,193,83,240,84,60,21,79,197,83,241,84,60,21,79,197,83,241,52,60,13,79,195,211,240,52,60,13,79,195,211,240,116,60,29,79,199,211,241,40,155,217,241,168,159,217,241,40,209,169,50,167,130,156,234,112,238,120,118,60,59,158,29,207,129,231,192,115,224,57,26,128,240,216,1,204,239,135,160,7,88,226,68,120,34,60,17,158,120,78,211,207,207,44,194,78,194,6,158,129,103,224,25,120,6,158,129,103,224,25,120,46,60,23,158,11,207,133,231,194,115,225,185,240,92,120,228,252,20,239,83,170,79,97,62,101,248,20,221,83,98,79,65,61,229,243,20,203,83,26,79,33,60,101,239,20,185,83,210,78,1,59,229,234,20,167,83,138,78,225,57,165,223,20,122,83,214,77,81,185,190,190,128,13,72,64,6,10,80,129,6,188,107,173,13,143,68,90,27,30,209,180,54,60,50,106,37,179,228,207,74,102,9,162,149,204,74,159,89,86,23,77,43,227,145,63,43,227,17,68,43,227,145,72,43,227,17,77,171,224,145,63,171,224,17,68,171,224,145,72,171,154,37,109,86,53,75,236,172,106,86,253,204,178,186,32,90,13,143,180,89,13,143,216,89,13,143,252,89,13,143,32,90,29,143,180,89,29,143,216,89,29,143,252,89,29,79,255,240,236,192,1,156,192,0,46,224,45,173,229,207,232,146,81,203,159,209,37,172,150,63,163,75,106,45,127,70,151,248,90,254,140,46,57,182,118,171,11,180,181,91,125,255,172,62,1,21,126,208,35,235,214,65,143,208,91,7,61,210,111,73,191,37,253,150,244,91,210,111,73,191,37,253,214,65,207,65,207,65,207,65,207,73,143,168,92,39,61,50,115,157,244,8,207,117,210,35,69,215,73,143,56,93,39,61,114,117,157,244,8,216,117,210,35,105,215,160,71,228,174,65,143,236,93,131,158,65,134,16,94,195,18,3,243,101,186,200,93,151,233,151,233,178,119,93,166,235,168,151,164,93,58,234,37,114,151,254,121,137,220,165,239,93,114,117,233,123,151,128,93,250,222,37,105,151,190,119,137,220,165,59,93,226,116,233,78,151,166,116,173,207,205,223,105,78,219,251,41,38,109,239,137,75,254,83,243,128,4,100,160,0,21,104,64,7,118,224,0,78,96,0,86,127,79,92,242,143,158,228,31,61,105,123,207,87,42,239,83,77,222,223,31,144,128,12,124,110,174,64,3,58,176,3,7,112,2,3,184,128,27,152,192,43,172,76,122,38,61,147,158,73,207,164,103,210,51,233,153,244,76,122,222,191,149,233,122,255,4,60,96,3,18,144,129,2,84,160,1,29,216,129,15,243,9,12,224,2,110,96,2,175,211,171,208,83,232,41,244,20,122,10,61,133,158,66,79,161,167,208,83,232,41,244,20,122,10,61,133,30,149,121,21,122,42,61,149,158,74,79,165,167,210,83,233,169,244,84,122,42,61,149,158,74,79,165,167,210,83,233,169,244,52,171,55,75,52,75,52,204,13,97,195,227,16,93,142,140,119,180,228,213,44,121,35,75,94,196,30,64,225,78,216,78,207,238,177,28,120,14,60,7,158,3,207,129,231,192,115,224,57,240,156,120,78,60,39,158,19,207,137,231,196,115,226,57,241,12,60,3,207,192,51,240,12,60,3,207,192,51,240,92,120,46,60,23,158,11,207,133,231,194,115,225,185,240,200,141,75,92,92,82,226,18,14,151,76,184,68,193,37,1,46,7,255,114,222,47,199,252,154,54,119,170,141,55,123,211,253,54,165,15,216,128,4,124,238,41,64,5,26,208,129,29,56,128,19,24,192,5,220,192,4,94,241,247,70,207,70,207,70,207,70,207,70,207,70,207,70,207,70,207,70,207,70,207,70,207,70,207,70,207,70,207,70,207,70,79,162,39,209,147,232,73,244,36,122,18,61,137,140,247,181,253,108,111,52,61,32,3,21,232,192,1,12,224,51,125,189,160,226,169,120,42,158,138,167,226,169,120,42,158,138,167,225,105,120,26,158,134,167,225,105,120,26,158,221,244,221,244,221,244,221,244,221,244,221,244,253,51,157,140,3,207,129,231,192,115,224,57,240,188,153,112,246,247,201,63,160,2,29,56,128,207,205,55,240,46,218,179,233,217,244,108,122,54,61,155,158,77,207,166,219,202,110,43,187,173,236,182,178,219,202,110,43,187,173,236,182,178,219,202,110,43,187,173,236,182,178,219,202,110,43,187,173,236,182,178,219,202,110,43,187,173,236,182,178,219,202,110,43,187,173,236,13,207,219,255,60,224,2,252,202,118,119,219,221,109,119,183,221,125,55,203,158,118,123,218,223,158,255,1,110,182,167,253,179,167,7,61,135,69,79,60,39,158,211,162,39,158,19,207,240,171,225,87,227,243,43,75,12,75,12,75,92,152,223,127,208,60,192,67,120,123,209,115,216,157,241,118,158,15,216,128,4,124,238,41,64,5,240,188,157,231,3,118,224,0,78,96,0,23,112,3,19,120,197,143,157,30,187,51,118,122,108,211,216,233,177,95,99,167,199,198,141,157,30,7,118,236,244,56,185,195,230,14,71,120,236,244,56,203,227,160,71,1,140,131,30,149,48,84,194,112,204,199,65,143,218,24,7,61,138,100,28,244,168,150,113,208,163,108,198,65,143,250,25,39,61,10,105,156,244,168,168,113,210,163,180,198,73,143,26,27,39,61,138,109,156,244,156,244,156,244,156,244,156,244,156,244,12,122,6,61,131,158,65,207,160,71,61,143,65,143,194,30,131,30,21,62,6,61,74,125,12,122,212,252,24,244,188,197,255,188,140,126,1,27,144,128,12,20,160,2,237,5,155,123,54,247,108,238,217,62,247,124,167,121,249,200,179,124,228,89,62,242,44,31,121,150,143,60,15,104,192,103,250,14,28,192,9,12,224,2,110,96,2,175,101,159,143,150,207,71,203,231,163,229,243,209,242,249,104,249,124,180,124,62,90,62,31,61,128,158,74,207,219,153,223,251,215,246,252,188,210,30,135,71,28,126,239,230,17,135,87,28,222,113,56,227,112,133,225,251,106,246,25,110,113,152,226,48,199,97,137,195,26,135,45,14,123,28,70,191,57,250,205,209,111,142,126,115,244,155,163,223,28,253,230,232,183,68,191,37,250,45,209,111,137,126,75,244,91,162,223,18,253,150,232,183,68,191,37,250,45,209,111,137,126,75,244,91,162,223,18,253,150,232,247,142,235,222,113,221,59,174,123,199,117,239,184,238,29,215,189,227,186,119,92,119,198,231,60,227,115,158,241,57,207,248,156,103,124,206,51,62,231,25,159,243,140,207,121,70,191,51,250,157,209,239,140,126,103,244,59,163,223,25,253,206,232,119,69,191,43,250,93,209,239,138,126,87,244,187,162,223,21,253,174,232,119,69,191,43,250,93,209,239,250,248,205,255,27,94,95,113,184,197,97,138,195,28,135,37,14,107,28,182,56,236,113,184,199,225,17,135,103,28,126,79,243,21,135,119,28,206,56,92,97,120,71,191,119,244,123,71,191,119,244,123,71,191,119,244,123,71,191,119,244,123,71,191,119,244,123,71,191,119,244,123,71,191,119,244,123,71,191,119,244,59,163,223,25,253,206,232,119,70,191,51,250,157,209,239,140,126,103,244,59,163,223,25,253,206,232,119,70,191,51,250,157,209,239,140,126,103,244,187,162,223,21,253,254,255,12,182,88,252,45,22,127,139,197,223,98,241,183,88,252,45,22,127,139,197,223,98,241,183,88,252,45,22,127,139,197,223,98,241,183,88,252,45,22,127,139,197,223,98,241,183,88,252,45,22,127,139,197,223,98,241,183,88,252,45,22,127,139,197,223,98,241,183,88,252,45,22,127,139,197,223,98,241,183,88,252,45,22,127,139,197,223,66,241,111,227,249,57,219,87,28,110,113,152,226,48,199,97,137,195,26,135,45,14,123,28,238,113,120,196,225,25,135,35,14,175,56,188,227,112,198,97,244,219,163,223,30,253,246,232,183,71,191,61,250,237,209,111,143,126,123,244,219,163,223,30,253,246,232,183,71,191,61,250,237,209,111,143,126,59,191,249,124,126,250,170,246,25,230,56,44,113,88,227,176,197,97,143,195,61,14,143,56,60,227,112,196,225,21,135,119,28,206,56,140,142,62,173,248,59,220,226,48,250,205,209,111,142,126,115,244,155,163,223,28,253,230,232,55,71,191,57,250,205,209,111,142,126,115,244,155,163,223,28,253,150,232,183,68,191,37,250,125,90,241,31,255,23,107,232,242,199,250,56,0,0])))