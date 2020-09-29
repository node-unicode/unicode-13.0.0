module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,45,153,73,150,228,56,12,67,47,148,11,107,226,112,150,122,125,255,107,52,63,16,139,128,42,109,18,166,69,72,34,93,255,50,234,47,163,255,50,191,249,173,249,237,249,157,249,221,249,189,249,197,252,114,126,99,151,99,87,99,87,99,87,99,87,99,87,99,87,99,87,99,87,99,87,99,87,99,215,99,215,99,215,99,215,99,215,99,215,99,215,99,215,99,215,99,215,253,87,223,55,191,53,191,61,191,51,191,59,191,55,191,152,95,206,175,230,55,118,107,236,214,216,173,177,91,99,183,198,110,141,221,26,187,53,118,107,236,214,216,237,177,219,99,183,199,110,143,221,30,187,61,118,123,236,246,216,237,177,219,99,119,198,238,140,221,25,187,51,118,103,236,206,216,157,177,59,99,119,198,238,140,221,29,187,59,118,119,236,238,216,221,177,187,99,119,199,238,142,221,29,187,59,118,111,236,222,216,189,177,123,99,247,198,238,141,221,27,187,55,118,111,236,222,216,197,216,197,216,197,216,197,216,197,216,197,216,197,216,197,216,77,62,106,242,81,147,143,154,124,212,228,163,38,31,53,249,168,201,71,77,62,106,242,81,147,143,154,124,172,53,15,25,8,32,129,2,184,49,79,26,88,127,235,206,251,15,4,144,64,1,99,114,103,18,6,48,153,105,24,56,192,5,240,56,120,28,60,14,30,7,143,139,199,197,227,226,113,241,184,120,92,60,46,30,23,143,139,199,197,227,225,241,240,120,120,60,60,30,30,4,126,9,252,18,248,37,240,75,224,151,192,175,2,15,60,2,143,192,35,240,8,60,2,143,192,35,240,72,140,19,187,196,46,49,73,76,152,161,199,115,31,207,125,60,247,241,220,199,115,31,207,125,60,247,241,220,199,115,31,207,125,60,55,70,109,3,250,215,1,46,240,128,0,18,40,96,124,99,100,55,128,199,198,99,227,177,241,96,238,131,185,15,230,62,152,251,96,238,131,185,15,230,62,152,171,100,154,146,105,74,194,77,194,77,194,77,194,77,194,77,130,76,130,76,130,76,130,76,38,39,153,156,100,74,88,205,139,165,188,88,203,139,197,188,88,205,139,37,180,208,242,66,204,11,53,47,228,188,208,243,66,208,11,69,47,36,189,208,244,66,212,11,85,47,100,189,208,245,66,216,11,101,47,164,189,208,246,66,220,11,117,47,228,189,208,247,66,224,11,133,47,36,190,208,248,66,228,11,149,175,198,184,49,110,140,27,227,198,184,49,110,140,27,227,150,49,175,213,243,90,251,155,249,27,208,191,122,96,230,111,96,1,27,56,192,5,222,192,5,18,147,196,36,49,73,76,82,55,2,128,47,225,75,248,10,227,194,184,48,46,140,11,227,194,184,48,46,236,26,187,198,174,177,155,189,109,175,89,36,3,5,140,201,126,192,188,219,192,2,54,112,128,11,60,32,128,4,10,192,131,112,55,225,110,194,221,132,187,9,119,19,238,38,220,77,184,155,112,55,225,110,194,221,132,187,9,119,23,244,196,188,137,121,19,243,46,60,8,124,19,248,38,240,77,224,155,192,119,227,209,120,52,30,141,71,227,49,91,243,62,179,55,15,44,96,3,7,184,192,3,198,227,240,110,135,215,58,188,194,225,21,14,175,112,120,133,195,43,156,228,46,239,113,120,143,67,204,135,32,79,233,207,4,10,128,128,32,15,65,94,30,121,121,36,219,210,190,196,124,9,247,18,228,37,200,75,144,143,32,223,199,191,22,128,44,30,178,96,97,111,150,243,102,57,111,86,232,102,53,110,86,227,102,229,13,112,3,189,196,209,181,97,142,203,13,162,15,162,15,166,61,8,45,8,45,103,105,108,22,231,102,113,110,22,231,102,113,14,36,48,118,172,208,1,110,240,130,28,138,155,211,107,115,124,109,206,175,205,1,182,57,193,54,71,216,230,252,218,108,236,155,93,125,179,173,79,218,48,38,181,69,106,139,212,22,41,107,242,209,76,78,51,57,13,75,195,210,179,126,39,99,130,26,152,205,232,176,62,14,226,63,72,254,172,89,31,3,15,224,207,217,5,6,14,192,141,171,107,9,20,208,3,143,63,31,127,78,106,7,134,111,127,192,188,229,65,212,7,41,31,180,123,208,233,65,167,7,17,30,68,120,80,211,65,77,103,254,6,248,215,76,201,33,231,135,116,15,28,224,2,15,24,183,59,10,59,119,1,155,63,103,237,31,142,137,67,126,7,30,80,192,240,189,203,53,94,230,205,86,117,98,244,114,72,232,33,161,3,5,140,93,96,71,126,7,198,56,38,121,3,216,193,28,188,101,60,236,120,183,8,236,70,57,135,221,246,176,199,30,178,58,16,64,2,5,140,7,91,238,97,203,61,108,185,135,162,232,80,21,29,36,112,144,192,161,48,58,84,70,135,237,240,176,29,30,18,58,160,127,141,73,143,174,6,46,240,128,0,116,163,128,241,101,199,60,236,152,135,29,243,176,99,30,118,204,195,142,121,216,49,15,155,229,0,198,68,213,68,213,68,213,137,93,98,87,92,43,174,21,4,132,219,165,27,16,16,110,19,110,19,110,147,163,110,60,8,183,73,84,19,115,147,168,86,224,36,185,39,201,247,155,213,56,176,128,13,28,224,2,15,8,32,129,2,240,88,120,44,60,22,30,11,143,133,199,194,99,225,177,240,88,120,44,60,54,30,27,143,141,199,198,99,227,177,241,216,120,108,60,54,30,147,253,187,38,231,23,181,95,212,126,81,251,69,237,23,181,95,212,126,81,251,232,237,3,48,126,216,61,236,30,38,15,147,226,207,153,166,187,26,187,198,110,182,165,187,121,143,205,123,108,222,99,243,30,155,48,102,27,29,56,220,24,37,78,25,54,164,36,244,146,208,75,66,95,207,148,12,36,80,3,71,192,141,17,235,35,131,143,12,6,211,25,76,103,124,147,223,129,30,208,141,228,70,114,99,242,27,156,111,193,98,15,206,183,224,240,10,206,173,224,220,10,206,173,224,220,10,206,173,1,60,26,143,198,174,241,104,232,39,151,177,62,96,148,24,148,151,193,68,4,171,59,56,133,102,255,28,2,202,198,96,127,14,202,198,160,68,12,74,196,160,234,11,22,108,80,215,5,117,93,68,2,115,110,13,140,71,78,62,6,46,240,128,0,18,40,96,140,41,138,130,122,40,216,109,131,61,118,128,187,240,177,209,6,139,51,40,133,130,82,40,88,166,193,66,12,22,98,80,251,4,173,76,208,203,4,205,76,208,205,4,237,76,208,207,4,13,77,208,201,4,173,64,208,11,4,205,64,208,13,4,237,64,208,15,4,13,65,208,17,4,101,84,80,70,5,101,84,80,70,5,101,84,80,70,5,101,84,80,70,5,101,84,244,136,97,224,0,23,24,19,22,108,176,96,131,5,27,148,56,193,170,13,86,109,144,243,96,193,14,76,143,132,228,19,201,39,146,79,36,159,72,62,145,124,34,249,68,242,137,228,243,187,216,93,236,232,223,16,67,34,134,68,12,73,137,147,148,56,73,117,51,128,9,189,27,75,35,89,21,3,250,115,30,201,50,24,224,198,200,54,17,245,128,254,117,129,7,4,144,64,1,227,182,137,111,19,31,167,253,64,2,115,247,240,112,14,255,129,13,96,66,4,212,2,73,45,144,156,11,201,185,144,212,2,201,225,144,212,2,3,120,208,65,114,66,36,39,196,0,198,116,145,179,243,252,229,108,38,192,220,189,68,122,9,237,18,26,213,122,134,255,69,171,75,144,212,2,73,181,158,84,235,73,181,158,84,235,73,125,144,212,7,73,181,158,84,235,73,181,158,84,235,73,205,144,212,12,201,17,51,128,199,193,227,224,113,240,56,120,28,60,72,5,135,77,114,216,12,224,193,20,7,83,28,23,143,139,199,197,131,25,143,135,7,211,30,76,123,48,237,241,240,120,120,60,60,30,30,15,143,135,71,224,17,120,4,30,129,71,224,17,120,4,30,129,135,154,124,186,252,160,205,15,250,124,74,156,164,196,25,192,152,108,81,236,12,96,156,106,165,233,117,105,208,47,29,58,21,89,81,145,13,232,6,93,48,109,250,165,79,191,52,234,151,78,253,46,181,204,120,208,172,95,186,245,75,187,206,121,94,100,166,200,204,0,30,244,236,151,166,253,110,117,217,120,208,183,95,26,119,58,215,162,2,40,42,128,162,115,45,58,215,162,115,45,58,215,82,231,58,27,247,17,94,33,29,49,147,187,22,251,11,248,132,33,244,245,18,210,39,171,245,114,239,229,230,203,221,151,219,47,247,95,110,192,86,170,195,78,181,216,234,198,220,142,185,31,115,67,230,142,204,45,217,162,94,0,229,27,242,13,249,134,124,83,190,41,223,148,111,202,55,229,59,89,89,251,208,37,14,46,225,22,30,225,21,98,163,118,124,211,143,207,76,113,184,14,150,144,211,39,116,46,133,206,36,26,89,240,10,159,48,132,242,90,242,90,242,218,242,226,144,221,104,16,196,62,79,8,199,254,232,228,62,58,171,143,14,230,67,215,5,6,56,51,57,185,225,236,31,228,250,62,186,50,241,131,186,126,124,61,132,41,44,33,108,83,253,11,151,80,190,87,190,87,190,122,214,214,179,246,149,239,149,239,149,111,96,73,219,2,250,223,87,248,132,33,76,97,9,241,58,138,231,40,158,163,120,142,226,57,138,231,40,158,163,120,142,226,57,138,231,40,158,163,120,216,169,174,42,218,171,146,118,142,69,217,92,197,121,21,231,85,156,87,113,94,205,18,31,69,6,229,69,199,2,110,161,175,92,225,19,134,16,223,151,159,80,54,41,155,130,255,53,54,161,168,194,255,238,18,226,149,84,104,131,71,136,77,42,143,73,233,50,168,235,47,132,176,161,222,235,242,205,85,155,74,180,217,211,168,44,30,135,16,248,132,190,146,194,18,54,56,26,6,151,112,11,143,80,190,71,190,71,190,71,190,71,190,71,190,79,215,159,174,63,93,127,186,30,226,12,113,134,56,67,156,33,206,16,103,200,55,228,27,242,13,249,166,124,41,18,222,213,179,84,183,4,234,157,125,148,147,55,216,135,192,35,188,194,39,228,116,87,161,84,170,148,74,165,210,244,119,75,184,133,37,212,245,245,9,117,247,233,238,59,194,43,108,149,29,42,52,196,220,223,39,92,194,45,164,118,160,111,7,169,10,208,18,152,194,18,82,55,168,230,106,62,181,129,178,228,89,205,215,54,240,9,85,112,48,255,83,113,168,228,160,56,108,154,91,112,9,183,80,54,173,82,165,85,171,180,124,91,213,74,187,92,113,189,162,130,133,152,7,85,183,60,93,15,93,39,71,77,239,11,110,225,17,94,97,10,97,171,50,226,91,138,167,209,210,96,9,185,222,71,215,209,210,224,17,94,225,19,134,80,94,71,94,71,94,42,139,168,158,7,169,7,62,90,138,193,212,117,142,195,143,58,26,148,141,138,39,87,79,46,159,92,63,125,42,200,40,167,7,91,190,45,223,150,47,181,201,183,116,101,233,202,226,195,247,96,8,93,204,185,154,227,202,225,104,254,142,158,126,244,244,163,167,31,61,253,232,233,42,162,62,85,81,159,202,168,79,133,206,199,129,60,72,17,240,241,189,20,220,66,124,47,133,212,55,203,79,120,132,87,248,132,33,180,13,156,111,201,114,201,114,201,114,201,82,115,149,186,155,186,155,186,155,186,155,191,187,41,44,33,241,164,74,212,84,141,154,42,82,83,5,42,231,44,149,231,22,62,97,8,85,155,82,57,125,20,216,20,166,178,188,178,188,178,188,178,185,178,49,143,234,83,190,203,13,146,139,165,92,44,229,98,209,222,204,142,198,92,45,214,38,232,43,20,185,139,24,6,185,162,170,117,109,42,194,193,37,220,66,221,37,254,193,39,12,161,236,143,44,197,195,233,48,72,169,183,142,138,232,163,42,250,80,227,13,166,176,132,178,84,228,172,205,212,151,240,212,167,240,212,23,240,212,39,240,212,55,240,212,71,240,212,7,240,212,23,240,212,39,240,212,55,240,212,71,240,153,253,109,44,33,190,73,173,58,184,132,91,120,132,87,248,132,242,98,206,23,237,255,32,234,93,244,244,32,229,188,214,203,166,59,6,91,69,255,39,92,66,183,1,238,3,116,189,101,223,186,222,186,222,106,16,90,29,66,187,69,80,143,64,94,54,223,145,64,53,12,148,199,155,147,29,124,194,16,166,16,223,173,231,238,39,123,245,36,91,49,112,214,167,62,151,130,186,146,98,72,49,164,24,82,12,37,134,18,3,13,136,234,171,84,125,149,170,175,82,245,85,170,190,74,213,87,96,8,83,88,66,222,130,122,0,148,239,149,175,226,87,246,119,42,206,84,156,169,56,243,249,122,8,83,8,91,106,246,216,39,65,121,233,141,168,33,83,95,18,65,236,165,252,45,229,239,18,127,137,191,196,95,226,47,241,215,179,125,9,137,182,244,148,210,83,74,79,41,61,165,244,148,210,83,248,60,15,202,55,228,27,242,77,249,166,124,53,195,165,25,46,205,112,105,134,75,51,204,183,203,193,146,189,230,185,52,207,85,178,87,151,199,103,159,84,245,8,46,225,22,30,225,21,210,216,169,237,213,151,76,80,119,183,238,178,30,143,218,222,163,190,247,80,111,128,98,38,155,71,43,125,240,9,185,190,244,44,173,175,195,250,226,80,221,194,35,188,194,39,12,48,141,41,44,97,131,37,223,209,18,56,12,151,39,14,142,230,193,16,166,112,188,166,205,161,206,63,252,175,164,6,42,253,230,147,148,134,227,225,122,120,26,212,144,244,122,54,121,118,120,182,124,182,12,255,21,191,191,236,167,70,99,134,244,80,30,90,67,154,51,237,151,246,75,251,165,253,210,126,105,63,253,231,98,243,89,75,195,242,176,61,136,229,168,225,153,225,247,23,45,137,118,64,13,207,67,120,72,15,229,161,53,240,154,91,219,161,134,237,225,120,48,203,51,203,51,203,51,203,51,203,51,75,152,37,204,18,102,9,179,252,66,10,179,132,89,194,44,97,150,48,75,154,37,205,146,102,73,179,164,89,210,44,105,150,52,75,154,37,205,82,102,41,179,148,89,202,44,101,150,50,75,153,165,204,82,102,41,179,180,89,218,44,109,150,54,75,155,165,205,210,102,105,179,180,88,232,208,53,92,15,207,67,120,72,15,63,75,61,143,126,93,195,242,176,61,152,101,153,101,153,101,153,101,153,101,153,101,153,101,155,101,155,101,155,101,155,101,155,101,155,101,155,101,155,101,155,101,155,229,152,229,152,229,152,229,152,229,152,229,152,229,152,229,152,229,152,229,152,229,154,229,154,229,154,229,154,197,250,188,214,231,181,62,175,245,121,173,207,107,125,94,235,243,90,159,215,250,188,214,217,181,10,248,31,168,197,177,248,121,88,30,182,135,227,225,121,8,15,233,161,60,216,221,9,120,78,192,115,2,158,19,240,156,128,231,4,60,39,224,57,1,207,9,120,74,128,54,93,13,203,195,246,112,60,92,15,207,67,120,40,15,118,111,187,183,221,219,238,109,247,182,123,219,189,237,46,213,205,96,22,205,196,110,205,132,254,147,74,195,246,112,60,92,15,233,161,60,216,111,217,111,217,111,217,111,217,79,239,174,77,89,131,253,252,210,189,237,183,237,39,213,157,165,183,61,75,111,59,67,120,72,15,229,161,53,232,165,143,254,87,158,65,23,195,223,92,244,127,243,83,115,72,103,111,73,103,111,73,103,111,73,103,147,155,207,131,45,165,179,183,223,111,56,30,174,135,231,33,60,164,135,57,30,248,216,20,30,210,195,239,98,107,152,39,104,88,30,182,135,227,225,122,120,30,204,114,205,114,205,114,205,242,204,242,204,242,204,242,204,242,204,242,204,242,204,242,204,242,11,240,153,37,204,18,102,9,179,132,89,194,44,97,150,48,75,152,37,204,18,102,73,179,164,89,210,44,105,150,52,75,154,37,205,146,102,73,179,164,89,202,44,101,150,50,75,153,165,204,82,102,41,179,148,89,202,44,101,150,54,75,155,165,205,210,102,105,179,180,89,218,44,109,150,54,75,139,37,190,207,195,242,176,61,28,15,215,195,243,16,30,210,67,121,48,203,50,203,50,203,50,203,50,203,50,203,50,203,50,203,50,203,50,203,50,203,54,203,54,203,54,203,54,203,54,203,54,203,54,203,54,203,54,203,54,203,49,203,17,75,58,239,25,191,191,182,135,227,225,122,120,30,194,67,122,40,15,226,76,231,61,157,247,116,222,211,121,79,231,61,157,247,116,222,211,121,79,231,61,157,247,116,222,211,121,79,231,61,157,247,116,222,211,121,79,231,61,157,247,116,222,211,121,79,231,61,157,247,116,222,211,121,79,231,61,157,247,116,222,211,121,79,231,61,157,247,114,222,203,121,47,231,189,156,247,114,222,203,121,47,231,189,156,247,114,222,203,121,47,231,189,156,247,114,222,203,121,47,231,189,156,247,114,222,203,121,47,231,189,156,247,114,222,203,121,47,231,189,156,247,114,222,203,121,47,231,189,156,247,114,222,203,121,47,231,189,156,119,58,117,13,102,57,102,57,102,241,158,85,222,179,202,123,86,121,207,42,239,89,229,61,171,188,103,149,247,172,242,158,85,222,179,202,123,86,121,207,42,239,89,229,61,171,188,103,149,247,172,242,158,85,222,179,202,123,86,121,207,42,239,89,229,61,171,188,103,149,247,172,178,118,203,218,45,107,183,172,221,178,118,203,218,45,107,183,172,221,178,118,203,218,45,107,183,172,221,178,118,203,218,45,107,183,172,221,178,118,203,218,45,107,183,172,221,178,118,203,218,45,107,183,172,221,178,118,203,218,45,107,183,172,221,178,118,203,218,45,107,183,172,221,178,118,203,218,45,107,183,172,221,178,118,203,218,45,107,183,172,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,187,255,251,31,42,171,73,84,177,44,0,0])))