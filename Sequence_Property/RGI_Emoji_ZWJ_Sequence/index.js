module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,173,157,193,118,226,74,18,68,255,165,215,179,176,49,109,195,210,168,224,39,94,207,103,244,255,79,63,123,218,70,100,69,220,72,196,198,167,143,251,18,46,101,69,136,170,148,4,255,252,248,245,123,28,94,198,159,159,203,235,225,215,239,221,211,211,159,127,239,222,94,247,191,126,95,206,79,151,191,191,249,102,126,252,167,249,146,195,41,22,249,250,205,43,2,253,151,188,33,112,135,102,255,175,220,113,176,15,57,252,59,10,242,144,18,61,164,104,199,254,223,157,188,228,17,34,119,12,245,142,162,37,34,117,36,127,254,189,252,249,121,185,92,39,238,252,231,231,120,30,179,121,249,226,151,199,73,141,199,73,157,31,39,117,209,82,75,83,234,244,56,41,83,171,174,148,169,85,87,202,212,106,60,174,86,93,41,99,209,174,148,169,85,87,202,212,234,252,184,90,117,165,76,173,186,82,198,162,93,41,83,171,203,227,106,213,149,50,181,234,74,153,90,117,165,110,44,250,245,118,144,47,204,146,151,28,219,47,225,181,220,125,34,106,36,234,29,243,142,55,119,124,43,191,227,141,251,142,183,233,250,146,59,14,246,33,135,127,71,65,30,82,162,251,138,118,247,91,255,242,56,169,241,56,169,26,240,187,165,46,219,164,174,249,141,181,186,230,55,214,234,154,223,88,171,107,222,212,106,227,58,112,139,148,169,213,198,117,224,22,169,141,181,90,77,211,227,164,54,214,42,244,85,87,202,212,106,60,206,87,93,41,19,231,174,148,169,85,87,106,99,173,66,95,117,165,54,214,42,244,85,87,202,212,106,227,254,98,139,148,169,213,198,253,197,22,169,141,181,10,125,213,149,218,88,171,240,212,215,149,50,181,218,184,23,219,34,101,106,181,113,47,182,69,202,196,57,145,10,125,213,149,218,88,171,208,87,93,169,175,90,125,192,227,217,190,252,255,76,121,201,119,185,174,224,143,223,28,246,25,44,255,214,108,46,182,75,45,143,147,26,143,147,170,115,113,183,212,69,75,45,157,57,242,203,170,214,28,117,165,204,28,117,165,204,28,117,165,204,28,117,165,204,28,141,206,28,249,37,74,107,142,186,82,102,142,186,82,102,142,186,82,102,142,186,82,102,142,206,157,57,242,111,247,173,57,234,74,153,57,234,74,153,57,234,74,153,57,234,74,153,57,186,116,230,200,191,117,182,230,168,43,101,230,168,43,101,230,168,43,101,230,168,43,85,47,37,124,194,187,215,227,207,207,158,179,6,94,61,240,246,116,176,192,223,49,188,212,171,72,107,224,237,133,128,122,233,97,13,28,73,225,125,79,128,185,209,226,3,56,215,43,41,55,64,189,168,177,94,254,157,140,194,39,96,14,243,223,159,99,7,151,212,199,14,20,206,135,39,0,142,59,13,124,184,235,221,76,247,7,224,142,226,19,72,46,124,27,127,78,97,229,213,9,172,125,91,97,227,97,13,79,252,108,224,240,142,2,229,115,13,79,60,111,224,234,127,13,79,178,96,224,240,62,7,149,17,3,135,165,83,217,49,112,67,121,150,41,13,79,242,53,133,85,214,52,156,86,3,51,184,116,50,184,116,50,184,116,50,88,182,75,46,131,5,118,25,172,176,41,93,129,93,6,11,236,50,88,97,147,193,2,187,12,86,56,188,127,6,51,88,225,176,116,152,193,10,55,148,109,6,11,236,50,88,246,146,46,131,5,78,171,129,25,28,157,12,142,78,6,71,39,131,163,147,193,2,187,12,86,56,188,109,9,51,88,96,151,193,10,155,12,22,216,101,176,194,201,116,39,25,172,112,88,58,204,96,133,27,202,54,131,5,118,25,28,157,12,22,56,173,6,102,240,220,201,224,185,147,193,115,39,131,165,221,225,50,88,96,151,193,10,135,183,195,97,6,11,236,50,88,97,147,193,2,187,12,86,56,188,73,15,51,88,225,176,116,152,193,10,55,148,109,6,11,236,50,88,122,65,46,131,5,78,171,129,25,188,116,50,120,233,100,240,210,201,96,105,103,185,12,22,216,101,176,194,225,109,150,152,193,2,187,12,86,216,100,176,192,46,131,21,14,111,254,196,12,86,56,44,29,102,176,194,13,101,155,193,2,187,12,150,94,159,203,96,129,211,106,76,51,120,164,220,29,41,107,71,202,215,145,50,85,128,219,28,85,160,94,234,245,121,41,192,109,70,42,160,110,226,85,89,168,128,42,181,242,124,5,204,97,78,189,93,1,80,40,30,46,192,173,111,143,228,213,2,184,163,80,158,252,50,48,246,9,21,172,188,58,129,181,111,43,108,60,172,225,137,159,13,28,222,113,170,124,174,225,137,231,13,92,253,175,225,73,22,12,28,222,7,171,50,98,224,176,116,42,59,6,110,40,207,50,165,225,73,190,166,176,202,154,134,211,106,96,6,151,78,6,151,78,6,151,78,6,151,78,6,11,236,50,88,97,83,186,2,187,12,22,216,101,176,194,38,131,5,118,25,172,112,120,207,48,102,176,194,97,233,48,131,21,110,40,219,12,22,216,101,112,233,100,176,192,105,53,48,131,163,147,193,209,201,224,232,100,112,116,50,88,96,151,193,10,135,183,31,99,6,11,236,50,88,97,147,193,2,187,12,86,56,153,238,36,131,21,14,75,135,25,172,112,67,217,102,176,192,46,131,163,147,193,2,167,213,192,12,98,159,80,193,152,65,236,19,170,27,155,49,131,216,39,244,112,120,171,54,102,16,251,132,30,54,25,196,62,161,135,195,27,200,49,131,216,39,116,176,205,32,246,9,29,108,51,136,125,66,123,59,189,203,32,246,9,61,156,220,125,157,100,16,251,132,115,56,200,32,246,9,45,236,50,136,125,66,11,187,12,98,159,208,195,38,131,216,39,244,112,120,179,61,102,16,251,132,14,182,25,196,62,161,131,109,6,177,79,104,31,61,112,25,196,62,161,135,235,93,142,42,119,21,120,245,64,201,215,13,80,51,37,128,239,28,41,160,222,246,169,242,34,128,247,122,59,171,202,133,0,206,245,46,86,229,255,10,220,120,94,1,230,48,111,188,173,0,80,184,242,176,0,190,125,91,129,27,175,10,192,29,133,242,228,151,129,77,159,208,195,202,171,19,88,251,182,194,198,195,26,158,248,217,192,225,35,54,202,231,26,158,120,222,192,213,255,26,158,100,193,192,225,131,63,42,35,6,14,75,167,178,99,224,134,242,44,83,26,158,228,107,10,171,172,105,56,173,6,102,112,233,100,112,233,100,112,233,100,112,233,100,176,192,46,131,21,14,31,161,194,12,22,216,101,176,194,38,131,5,118,25,172,112,248,96,23,102,176,194,97,233,48,131,21,110,40,219,12,22,216,101,112,233,100,176,192,105,53,48,131,163,147,193,209,201,224,232,100,112,116,50,88,96,151,193,10,135,143,200,97,6,11,236,50,88,97,147,193,2,187,12,86,56,124,112,15,51,88,225,176,116,152,193,10,55,148,109,6,11,236,50,56,58,25,44,112,90,13,204,160,233,19,122,24,51,104,250,132,6,78,50,104,250,132,9,28,62,2,137,25,52,125,194,4,54,25,52,125,194,4,14,31,204,196,12,86,56,44,29,102,176,194,13,101,155,193,2,187,12,158,59,25,44,112,90,13,204,160,233,19,122,24,51,104,250,132,6,78,50,104,250,132,9,28,62,226,138,25,52,125,194,4,54,25,52,125,194,4,14,31,188,197,12,154,62,33,195,54,131,166,79,200,176,205,160,233,19,122,24,51,104,250,132,9,252,57,41,187,215,139,184,17,107,255,116,149,17,131,237,52,182,100,106,75,166,54,50,181,145,169,157,51,181,115,166,118,201,212,46,86,237,250,243,69,167,58,55,192,110,125,18,251,248,19,203,139,80,152,2,74,1,253,128,48,42,43,111,32,140,202,202,39,8,163,178,242,12,194,168,172,230,29,225,169,242,158,212,246,129,66,238,1,5,163,50,122,64,193,168,140,30,80,48,42,163,7,20,140,202,232,1,5,79,149,223,73,237,61,80,200,61,160,96,84,70,15,40,24,149,209,3,10,70,101,244,128,130,81,25,61,160,224,169,242,169,51,131,10,70,101,156,65,5,163,50,206,160,130,81,25,103,80,193,168,140,51,168,96,165,108,86,5,6,155,170,45,29,63,40,24,149,209,15,10,70,101,244,131,130,81,25,253,160,96,84,198,185,83,176,82,78,252,80,177,27,181,143,221,211,171,57,234,10,40,133,196,81,30,70,101,227,40,15,163,178,113,148,135,81,57,169,109,226,168,10,155,217,247,240,84,25,213,72,225,237,9,20,86,128,82,136,93,36,97,84,38,23,73,24,149,201,69,18,70,101,114,145,132,81,153,230,93,194,83,229,103,82,123,14,20,114,15,40,24,149,209,3,10,70,101,244,128,130,81,25,61,160,96,84,70,15,40,120,170,108,58,15,21,80,10,185,7,194,206,67,133,209,3,97,231,161,194,232,129,176,243,80,97,244,64,216,121,168,48,122,32,236,60,124,194,111,164,246,22,40,228,30,80,48,42,163,7,20,140,202,232,1,5,163,50,122,64,193,168,140,30,80,240,76,249,64,239,5,7,122,47,56,116,222,11,36,140,202,228,1,9,163,50,121,64,194,168,76,30,144,48,42,147,7,36,60,85,222,145,218,46,80,200,61,160,96,84,70,15,40,24,149,209,3,10,70,101,244,128,130,81,25,61,160,224,169,242,43,169,189,6,10,185,7,20,140,202,232,1,5,163,50,122,64,193,168,140,30,80,48,42,163,7,20,60,85,166,245,192,129,214,3,135,206,122,64,194,168,140,30,232,172,7,14,157,245,128,132,81,25,61,208,89,15,28,58,235,1,9,79,148,199,219,207,124,6,53,140,202,48,131,26,70,101,152,65,13,163,50,204,160,134,81,25,102,80,195,74,217,119,29,21,54,81,59,239,127,122,157,53,160,20,82,71,105,24,149,193,81,26,70,101,112,148,134,81,25,28,165,97,84,134,217,215,240,84,25,214,6,107,64,41,228,30,104,172,13,214,48,122,160,177,54,88,195,232,129,198,218,96,13,163,7,26,107,131,53,140,30,104,172,13,206,123,88,27,172,1,165,144,123,160,177,54,88,195,232,129,198,218,96,13,163,7,26,107,131,53,140,30,104,172,13,214,48,122,160,177,54,56,239,113,214,112,166,194,107,220,30,70,101,244,64,120,141,187,194,232,129,240,26,119,133,209,3,225,53,238,10,163,7,194,107,220,159,48,86,0,143,122,116,60,160,96,84,70,15,40,24,149,147,10,228,30,184,134,209,3,10,70,101,244,128,130,167,202,56,78,28,91,227,74,180,134,81,25,61,208,184,18,189,134,209,3,141,43,209,107,56,169,109,238,129,198,149,104,13,207,148,223,225,250,209,26,80,10,177,7,36,140,202,228,1,9,163,50,121,64,194,168,76,30,144,48,42,147,7,36,60,83,62,153,59,87,43,160,20,98,15,72,24,149,201,3,18,70,101,242,128,132,81,153,60,32,97,84,38,15,72,120,170,76,253,129,19,245,7,78,157,254,128,132,81,25,61,208,233,15,156,58,253,1,9,163,50,122,160,211,31,56,117,250,3,18,158,42,83,127,224,68,253,129,83,167,63,32,97,84,70,15,116,250,3,167,78,127,64,194,168,140,30,232,244,7,78,157,254,128,132,111,148,63,30,80,218,25,15,84,64,41,36,30,240,48,42,27,15,120,24,149,141,7,60,140,202,198,3,30,70,101,227,1,15,207,148,95,204,123,65,5,148,66,236,1,9,163,50,121,64,194,168,76,30,144,48,42,147,7,36,140,202,228,1,9,79,149,77,159,176,2,74,33,247,64,216,39,172,48,122,32,236,19,86,24,61,16,246,9,43,140,30,8,251,132,21,70,15,132,125,194,79,248,64,106,135,64,33,247,128,130,81,25,61,160,96,84,70,15,40,24,149,209,3,10,70,101,244,128,130,167,202,71,82,59,6,10,185,7,146,231,157,167,48,122,32,121,246,121,10,163,7,146,231,160,167,48,122,32,121,38,122,10,163,7,146,231,163,191,96,172,45,214,19,107,136,117,27,29,23,41,24,149,241,72,21,140,202,73,5,114,23,93,195,232,34,5,163,50,186,72,193,83,101,28,39,142,45,236,54,123,24,149,209,3,97,183,185,194,232,129,176,219,92,225,164,182,185,7,194,110,179,135,103,202,39,90,81,156,104,69,113,234,172,40,36,140,202,228,1,9,163,50,121,64,194,168,76,30,144,48,42,147,7,36,60,85,166,21,197,137,86,20,167,206,138,66,194,168,140,30,232,172,40,78,157,21,133,132,81,25,61,208,89,81,156,58,43,10,9,207,148,23,170,192,66,71,189,116,214,3,18,70,101,242,128,132,81,57,169,64,236,129,21,76,30,144,48,42,147,7,36,60,85,198,113,226,216,58,235,1,9,163,50,122,160,179,30,88,193,232,129,206,122,96,5,39,181,205,61,208,89,15,72,120,170,140,106,137,66,238,1,5,163,50,122,64,193,168,140,30,80,48,42,163,7,20,140,202,201,172,197,30,24,116,197,97,208,21,135,209,185,226,32,97,84,38,15,72,24,149,201,3,18,70,101,242,128,132,81,153,60,32,225,169,50,117,155,7,117,155,71,167,219,44,97,84,70,15,116,186,205,163,211,109,150,48,42,163,7,58,221,230,209,233,54,75,120,170,76,123,195,65,123,195,209,217,27,74,24,149,209,3,157,189,225,232,236,13,37,140,202,232,129,206,222,112,116,246,134,18,158,42,211,222,112,208,222,112,116,246,134,18,70,101,244,64,103,111,56,58,123,67,9,163,50,122,160,179,55,28,157,189,161,132,167,202,230,51,244,42,160,20,114,15,132,159,161,87,97,244,64,248,25,122,21,70,15,132,159,161,87,97,244,64,248,25,122,21,70,15,132,159,161,247,9,227,172,225,76,133,79,40,120,24,149,209,3,225,19,10,21,70,15,132,79,40,84,24,61,16,62,161,80,97,244,64,248,132,194,39,140,181,197,122,46,29,15,40,24,149,147,113,230,30,184,134,209,3,10,70,101,244,128,130,81,25,61,160,224,169,50,86,0,143,122,116,60,160,96,84,70,15,40,24,149,147,10,228,30,184,134,209,3,10,70,101,244,128,130,167,202,56,78,28,27,142,7,63,175,239,107,235,241,247,37,167,39,2,158,9,216,17,240,82,128,106,78,51,30,3,215,177,25,184,142,211,192,102,204,75,103,204,21,54,99,174,176,25,115,133,205,152,71,103,204,21,54,99,174,176,25,115,133,205,152,207,157,49,87,216,140,185,194,102,204,21,54,99,174,95,148,96,198,92,97,51,230,10,155,49,87,184,126,65,176,31,103,5,158,9,168,223,96,139,99,200,207,3,30,174,99,203,207,3,30,54,99,198,243,128,135,205,152,241,60,224,97,51,102,60,15,120,216,140,25,207,3,30,14,191,68,30,199,140,231,1,15,119,190,9,221,141,25,207,3,30,54,99,198,243,128,135,205,23,31,223,140,83,1,207,4,208,55,2,79,198,144,156,7,18,184,142,45,57,15,36,112,248,37,158,56,102,115,30,72,224,206,55,81,186,49,155,243,64,2,155,49,155,243,64,2,135,95,18,135,99,54,231,129,4,238,124,211,153,27,179,57,15,36,176,25,179,57,15,36,240,215,152,63,129,151,207,205,194,247,246,225,253,109,189,125,152,98,127,127,255,116,88,99,87,143,217,238,38,79,114,45,79,223,87,64,78,207,167,213,127,61,255,44,67,125,95,1,47,223,251,217,183,253,126,34,190,127,46,131,252,247,231,56,103,223,62,127,216,255,248,239,255,0,8,227,156,250,11,200,0,0])))