module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,45,154,81,186,228,42,8,132,55,212,15,81,84,96,45,243,221,253,111,227,242,87,157,135,46,207,164,41,162,80,81,200,244,191,239,183,126,251,23,191,243,187,191,247,203,95,253,214,249,173,251,91,239,183,242,183,230,159,253,219,223,111,143,213,254,237,248,237,243,219,247,183,223,111,231,111,215,111,247,47,190,95,172,223,154,127,175,185,176,230,202,154,75,139,107,177,231,51,238,98,252,197,56,140,177,137,177,137,177,57,99,115,198,230,140,205,137,249,140,221,25,187,51,118,103,236,14,51,25,187,59,118,119,236,238,216,221,177,187,76,111,236,238,216,221,177,187,99,119,251,151,175,230,51,99,126,243,89,243,217,243,137,249,156,249,220,249,204,234,50,231,51,118,57,118,53,118,53,118,53,118,53,118,53,118,53,118,53,118,53,118,53,118,53,118,61,118,61,118,61,118,61,118,61,118,61,118,61,118,61,118,61,118,221,191,250,190,249,172,249,236,249,196,124,206,124,238,124,222,124,38,174,95,205,103,236,214,216,173,177,91,99,183,198,110,194,93,19,239,154,128,215,68,188,38,228,53,49,175,9,122,77,212,107,194,94,19,247,154,192,215,68,190,38,244,53,177,174,137,117,77,172,107,98,93,19,235,154,88,87,140,221,196,187,38,222,53,241,174,137,119,77,188,107,226,93,19,239,154,120,215,196,187,38,222,53,241,174,137,119,77,188,107,98,93,19,235,154,88,215,196,186,38,214,53,177,174,137,117,77,172,107,98,93,19,235,154,88,215,196,186,222,252,61,241,174,137,119,77,188,107,226,93,19,239,154,120,215,196,187,38,222,53,241,174,137,119,77,188,107,226,189,148,52,101,77,105,83,222,72,220,90,239,3,36,5,242,191,17,0,106,58,200,233,160,167,131,160,14,138,58,33,185,160,23,132,117,80,214,65,90,7,109,29,196,117,164,46,201,75,250,146,192,172,48,24,210,152,68,38,149,73,102,232,236,32,180,131,210,14,82,59,104,237,92,137,18,6,19,63,76,252,48,241,195,196,15,19,63,154,248,131,241,96,60,24,79,58,134,241,96,60,24,15,70,98,156,216,37,118,41,173,99,66,132,174,36,46,141,91,228,168,92,50,151,206,37,116,238,123,185,239,229,190,151,251,94,110,249,70,82,3,27,8,64,215,120,140,121,144,31,143,242,227,97,126,35,173,245,70,91,3,48,54,140,13,99,195,32,1,143,4,60,18,240,72,192,35,1,143,4,60,18,240,8,88,18,171,36,86,201,156,147,57,39,115,78,230,156,204,57,153,105,50,211,100,166,201,76,147,8,37,211,77,226,194,35,187,120,94,23,15,236,226,137,93,60,178,139,231,100,33,216,133,98,23,146,93,104,118,33,218,133,106,23,178,29,96,135,98,66,168,119,33,223,133,126,23,2,94,40,120,33,225,133,134,23,34,94,168,120,33,227,133,142,87,49,191,98,126,197,252,138,249,21,243,43,50,88,100,176,49,110,140,27,227,198,184,49,110,140,27,227,198,184,101,204,178,122,150,181,63,182,199,111,235,47,54,208,137,223,192,2,54,16,192,1,102,51,253,14,144,152,36,38,137,73,98,146,250,226,1,248,75,252,37,254,10,227,194,184,48,46,140,11,227,194,184,48,46,236,26,187,198,174,177,155,13,108,179,11,111,182,225,205,62,188,247,5,102,109,3,108,242,179,182,129,0,14,112,129,7,36,80,0,12,166,187,153,238,102,186,155,233,110,166,187,153,238,102,186,155,233,110,166,187,153,238,102,186,155,233,110,166,187,11,247,204,121,51,231,205,156,119,193,96,226,155,137,111,38,190,153,248,102,226,187,97,52,140,134,209,48,26,198,236,191,59,102,3,30,88,0,39,213,236,193,3,7,184,192,3,134,17,44,48,88,96,176,192,96,109,241,244,69,1,184,98,109,193,218,130,181,5,107,139,196,152,5,6,11,12,22,24,44,48,88,96,176,192,96,129,193,2,131,5,6,107,11,214,22,172,45,88,91,176,182,96,109,193,218,14,51,61,204,148,45,109,179,165,109,182,180,125,88,244,97,189,167,245,207,7,36,80,192,120,185,172,247,194,189,172,242,178,182,59,135,204,0,223,114,108,95,84,119,81,29,155,199,102,203,216,108,25,3,67,99,23,216,108,0,155,13,96,179,1,236,167,179,157,211,157,135,125,128,111,153,208,11,93,155,123,188,195,23,196,229,17,151,71,32,30,203,122,44,235,177,172,156,71,114,179,71,108,246,136,205,30,177,217,35,54,123,196,102,143,216,236,17,3,9,12,151,141,98,179,81,108,246,136,205,30,49,128,29,241,227,60,222,28,156,155,147,115,115,116,110,206,206,205,225,185,57,61,55,71,231,230,236,220,28,158,155,211,103,115,244,108,206,158,145,21,92,210,83,164,167,72,79,161,191,146,103,50,83,76,188,8,123,161,181,70,72,77,122,154,16,55,55,106,110,212,179,241,140,212,4,9,20,64,21,52,243,27,56,192,5,48,89,124,187,248,118,243,237,108,185,193,46,16,60,226,193,35,62,0,35,97,204,156,131,114,41,168,151,130,130,41,120,86,131,103,53,120,86,131,162,41,168,152,130,146,41,168,153,130,130,41,168,152,130,146,41,168,153,130,19,54,56,97,99,37,140,145,114,236,79,176,129,225,242,196,7,15,123,240,176,7,15,123,240,176,7,15,123,240,176,7,15,123,240,156,199,150,3,230,188,153,46,207,121,240,156,7,207,121,240,16,7,15,113,240,52,6,79,99,204,191,1,254,162,62,12,22,205,99,16,60,6,193,19,16,60,1,3,27,8,224,0,23,120,128,236,198,193,25,161,7,79,74,240,164,12,28,96,236,14,113,166,92,8,202,133,224,116,14,78,231,224,116,14,196,63,112,129,7,36,80,0,223,18,201,75,36,47,65,188,7,59,34,121,137,228,37,146,151,72,222,139,221,168,56,46,129,184,4,130,19,34,56,33,2,169,12,232,175,161,161,151,64,47,179,12,193,1,46,240,0,76,152,31,199,73,112,156,4,199,73,112,156,4,199,73,112,156,4,199,73,112,156,4,39,201,0,198,220,188,185,121,147,133,38,11,77,22,186,184,86,92,43,28,20,95,148,190,192,1,17,111,34,222,133,23,194,222,132,189,153,120,19,241,102,246,77,196,91,75,32,236,61,97,159,168,127,192,2,54,16,192,1,46,240,128,4,10,128,177,96,44,24,11,198,130,177,96,44,24,11,198,130,177,96,44,24,27,198,134,177,97,108,24,27,198,134,177,97,108,24,27,198,36,239,16,196,67,16,15,65,188,61,211,24,72,160,6,66,192,23,147,223,75,212,46,81,123,44,225,177,132,71,25,250,40,67,31,15,201,67,192,143,131,106,246,187,249,150,242,242,177,23,63,246,226,199,94,252,40,47,31,229,229,163,188,124,148,151,143,242,242,81,94,62,202,203,71,121,249,40,37,31,165,228,163,148,124,148,146,143,82,242,81,74,62,74,201,71,41,249,40,37,31,98,125,136,245,33,214,247,18,152,93,106,96,1,27,24,26,173,201,163,182,127,20,247,143,234,254,81,222,63,234,251,71,129,255,168,240,31,37,254,163,100,122,148,76,143,146,233,81,50,61,74,166,71,201,244,40,153,30,37,211,163,100,154,141,122,3,1,28,224,2,99,130,8,31,34,124,136,240,81,211,60,148,248,80,226,35,166,79,49,69,137,3,56,72,24,9,35,97,16,211,38,166,205,178,154,78,139,116,39,233,78,210,157,164,59,73,119,146,238,36,221,73,186,147,116,231,119,176,59,216,29,236,104,227,216,39,147,125,50,217,39,147,122,40,169,135,146,122,40,63,221,131,118,142,122,40,169,135,6,96,208,210,177,99,38,59,102,178,99,38,109,102,178,109,38,219,102,178,109,38,219,102,210,107,38,205,102,210,109,38,237,102,210,111,38,162,201,41,211,0,253,245,128,4,10,24,238,30,241,15,44,96,3,1,192,88,48,22,140,5,99,193,32,26,155,104,108,162,177,137,198,38,26,212,22,73,109,145,212,22,73,89,145,148,21,73,89,145,148,21,3,7,184,0,198,244,170,108,170,73,109,145,236,172,201,206,154,236,172,201,206,154,236,172,201,206,154,236,172,3,48,104,91,217,94,147,237,53,217,79,243,48,113,54,213,129,7,140,29,237,67,62,255,69,131,205,196,41,28,146,246,33,169,30,146,234,33,169,30,146,234,33,169,30,146,246,33,105,31,146,246,33,105,31,146,138,34,169,40,6,96,4,140,128,17,48,2,70,192,8,24,72,128,82,99,0,6,201,123,36,239,145,188,71,242,30,201,163,29,25,128,65,242,30,201,123,36,239,145,188,71,242,30,201,123,23,198,133,113,97,232,141,193,131,241,96,60,24,15,198,131,241,96,60,24,15,134,94,45,240,110,225,241,114,225,241,118,129,2,40,41,128,6,48,38,111,148,66,3,24,167,26,120,58,118,218,127,164,50,61,60,255,164,51,223,180,230,59,116,77,77,60,95,52,95,52,95,52,95,180,190,80,123,79,127,207,139,5,202,218,162,172,45,82,54,64,51,207,181,227,107,244,243,188,112,56,220,242,112,203,195,59,135,195,75,135,179,212,253,195,224,189,195,225,197,195,225,205,3,233,46,210,93,164,123,0,6,175,31,14,239,31,206,214,11,3,24,188,130,56,188,131,160,73,47,78,221,226,212,45,154,244,162,73,47,154,244,162,73,47,53,233,139,218,20,60,66,154,127,50,182,86,210,196,13,94,225,19,250,122,9,121,37,160,6,211,29,166,91,76,247,152,110,50,221,101,186,205,92,169,151,9,169,183,9,234,57,221,116,186,235,116,219,233,190,211,141,231,162,170,4,197,125,226,62,113,159,184,41,110,138,155,226,166,184,41,238,164,122,109,10,26,112,9,183,48,132,71,40,27,250,214,125,254,112,142,182,41,183,82,88,194,6,57,46,55,61,59,24,194,35,188,194,39,20,107,137,181,196,218,98,113,102,110,228,13,98,159,241,132,99,175,82,244,168,22,61,170,62,7,231,249,1,117,101,34,15,62,161,236,39,194,71,5,231,81,197,57,56,27,10,8,119,245,39,92,66,89,118,8,143,240,10,197,109,113,91,92,106,136,41,53,63,225,18,110,97,8,143,16,238,14,93,15,93,15,93,15,95,127,194,20,150,80,62,143,124,30,249,60,226,106,117,91,171,219,90,221,214,234,182,86,183,143,184,71,220,135,101,104,38,241,249,239,35,188,194,39,76,97,9,97,133,230,19,154,79,104,62,161,249,132,230,19,154,79,104,62,161,249,132,230,19,154,79,104,62,161,249,132,230,19,138,97,40,134,161,24,134,98,120,196,58,98,157,227,43,79,152,194,18,114,71,234,11,112,9,183,80,220,43,238,21,247,194,165,229,3,183,48,132,71,120,133,182,73,97,9,241,79,169,123,84,235,130,226,166,184,41,110,201,94,25,191,202,120,234,142,169,59,242,60,130,37,196,91,234,94,60,113,199,85,164,203,72,215,145,46,36,93,73,186,148,116,45,233,98,210,133,164,42,201,57,6,230,184,155,77,126,246,32,240,10,125,37,133,37,108,112,158,80,112,9,183,48,132,226,134,184,33,110,136,27,226,134,184,87,215,175,174,95,93,191,186,254,228,243,201,231,147,207,39,159,79,62,159,124,62,113,159,184,79,220,39,110,138,75,209,116,175,102,120,53,67,90,243,57,132,40,206,30,221,213,28,62,219,24,194,35,188,66,106,183,175,83,88,66,10,190,245,45,225,22,150,80,215,215,39,212,183,87,223,82,132,22,213,12,216,42,42,85,70,202,115,127,159,112,9,183,144,194,142,55,48,32,149,30,106,4,83,88,66,202,59,85,187,173,114,183,85,239,182,10,222,86,197,219,42,121,91,53,111,115,248,131,33,84,149,89,170,43,171,85,93,126,194,37,148,101,203,178,101,217,42,72,91,126,90,37,105,187,38,117,81,170,170,244,83,89,250,169,46,189,186,254,116,253,233,58,89,107,222,195,131,42,76,137,82,243,78,1,212,183,170,135,75,5,113,169,34,46,149,196,188,94,0,197,45,163,60,104,206,141,2,7,75,200,245,14,93,39,191,131,91,24,194,35,188,194,39,20,55,196,13,113,143,184,87,215,41,86,62,158,154,65,74,177,143,14,10,212,245,167,191,159,255,166,12,70,105,224,18,110,161,184,170,158,93,62,187,126,118,1,237,10,218,37,180,107,104,94,27,14,182,254,110,249,105,249,105,121,160,138,252,56,29,192,86,93,239,234,126,9,183,48,132,71,40,123,202,206,143,211,1,20,183,221,14,112,61,180,138,208,42,66,171,8,173,34,180,138,208,42,66,171,8,173,34,180,10,85,202,159,74,229,79,181,242,167,66,246,163,44,2,183,16,22,13,214,224,211,183,79,215,159,174,83,234,125,188,171,7,159,80,205,135,102,114,116,247,163,187,31,221,241,232,142,71,119,60,37,212,90,142,214,114,117,199,171,59,82,243,128,87,248,132,41,196,254,46,89,46,89,46,89,46,89,42,191,73,51,49,9,252,132,75,168,30,72,246,41,251,148,125,218,94,122,72,233,33,213,100,165,186,172,84,155,149,234,179,82,141,86,170,211,74,181,90,169,94,139,42,139,94,201,29,147,90,166,80,207,68,85,254,209,97,130,41,44,161,90,45,117,103,165,246,172,212,159,209,104,130,226,30,113,143,184,71,220,35,238,17,215,119,84,139,197,91,106,176,132,180,95,82,221,146,234,150,84,183,120,97,13,62,161,236,91,246,196,124,54,185,79,184,132,91,24,66,122,54,254,247,17,228,138,250,175,165,6,108,169,3,91,106,193,150,122,176,165,38,108,169,11,91,106,195,6,143,240,10,197,221,226,110,113,183,184,33,110,136,171,123,81,15,12,18,159,69,61,0,234,186,90,207,80,239,25,106,62,67,221,103,168,253,12,245,159,161,6,52,212,129,134,226,163,124,45,229,107,41,95,131,41,44,33,246,169,57,164,230,144,154,67,106,189,25,226,134,184,33,110,136,75,30,23,111,137,192,43,124,194,20,250,91,60,183,178,208,202,2,239,136,64,89,42,11,188,38,26,157,17,255,205,187,21,208,13,175,154,221,163,110,247,168,221,61,234,119,143,90,228,171,30,249,170,73,190,238,141,101,127,101,127,101,127,101,127,101,255,100,255,100,217,242,223,254,91,172,22,171,197,106,119,213,110,171,213,87,127,106,172,53,55,234,67,240,8,175,240,9,83,88,66,113,53,183,125,197,186,98,105,158,212,141,169,255,228,0,117,37,229,39,229,39,229,39,229,39,229,167,52,135,146,183,146,55,122,119,245,14,169,222,33,213,59,164,122,135,84,239,144,234,29,192,39,76,97,9,241,41,93,169,179,0,197,213,186,164,171,45,93,233,125,123,234,133,123,234,141,123,234,149,123,234,157,123,234,165,123,234,173,59,136,231,84,132,57,31,65,177,180,210,84,204,169,220,64,177,216,27,183,158,223,173,231,119,151,238,82,186,75,233,46,165,187,148,238,82,215,246,37,100,254,165,123,149,238,85,186,87,233,94,165,123,149,238,85,186,87,249,94,79,220,39,110,138,155,226,42,11,165,44,148,178,80,202,66,41,11,165,44,148,178,80,202,66,41,11,165,44,148,178,192,171,127,80,92,189,68,161,230,76,245,77,224,18,110,97,8,143,144,87,38,122,135,165,55,249,160,190,221,250,150,231,52,244,14,43,244,18,43,168,72,65,121,14,217,235,165,139,246,174,208,222,21,218,187,66,123,87,104,215,26,188,194,20,150,80,246,154,219,210,220,116,162,133,78,180,224,255,159,193,253,163,88,51,134,240,8,175,240,129,105,76,97,9,27,156,40,129,75,56,30,14,179,5,67,120,132,87,248,132,41,44,97,131,163,76,80,172,35,15,71,220,35,238,17,247,136,123,196,61,226,30,113,175,184,87,220,43,238,21,247,138,123,197,189,226,94,113,175,184,87,220,39,238,19,247,137,251,196,125,226,62,113,159,184,79,220,39,238,19,55,197,77,113,83,220,20,55,197,77,113,83,220,20,55,197,77,113,75,220,18,215,17,43,113,75,220,18,183,196,45,113,91,87,90,87,218,87,240,70,189,4,242,134,33,248,177,135,134,237,225,120,184,30,158,7,222,87,180,126,54,195,176,61,132,135,227,225,122,104,13,122,141,210,250,253,12,131,9,215,132,107,194,53,65,47,83,218,63,205,104,255,56,163,253,243,140,246,15,52,90,63,209,96,176,151,103,47,207,94,158,189,60,123,121,246,242,236,229,217,75,218,75,154,151,230,165,121,105,94,154,151,230,233,87,35,205,139,85,13,203,195,246,32,47,225,185,196,251,251,23,47,96,116,206,106,184,30,158,135,244,80,30,90,3,225,217,58,110,53,108,15,225,193,94,174,189,92,123,185,246,114,237,229,218,203,179,151,103,47,207,94,158,189,252,77,233,217,203,179,151,103,47,207,94,158,189,164,189,164,189,164,189,164,189,164,189,164,189,164,189,164,189,164,189,164,189,148,189,148,189,148,189,148,189,148,189,148,189,148,189,148,189,148,189,148,189,180,189,180,189,180,189,180,189,180,189,180,189,180,189,180,189,180,188,80,118,107,56,30,174,135,231,33,61,252,89,234,126,188,157,212,176,60,108,15,246,178,236,101,217,203,178,151,101,47,203,94,150,189,108,123,217,246,178,237,101,219,203,182,151,109,47,219,94,182,189,108,123,217,246,18,246,18,246,18,246,18,246,18,246,18,246,18,246,18,246,18,246,18,246,114,236,229,216,203,177,151,99,47,214,231,177,62,143,245,121,172,207,99,125,30,235,243,88,159,199,250,60,214,231,177,206,142,85,64,243,177,40,172,62,15,203,195,246,16,30,174,135,231,33,61,148,7,211,157,128,235,4,92,39,224,58,1,215,9,184,78,192,117,2,174,19,112,157,128,171,4,232,184,213,176,60,108,15,225,225,120,184,30,158,135,242,96,122,155,222,166,183,233,109,122,155,222,166,183,233,82,221,12,246,162,72,236,86,36,244,255,247,26,182,135,240,112,60,164,135,242,96,222,50,111,153,183,204,91,230,105,237,58,70,53,152,231,69,247,54,111,155,39,213,197,210,106,103,184,30,158,135,244,80,30,90,131,22,29,250,165,21,131,46,62,191,97,214,239,173,166,34,149,206,174,126,60,201,80,30,90,131,116,118,117,34,48,112,247,187,239,223,16,30,142,135,235,225,121,72,15,115,12,241,178,253,106,224,120,103,72,15,254,142,19,158,247,238,159,135,229,97,123,8,15,199,131,189,28,123,57,246,114,236,229,216,203,181,151,107,47,215,94,174,189,92,123,185,246,114,237,229,218,203,223,60,175,189,60,123,121,246,242,236,229,217,203,179,151,103,47,207,94,158,189,60,123,121,246,146,246,146,246,146,246,146,246,146,246,146,246,146,246,146,246,146,246,146,246,82,246,82,246,82,246,82,246,82,246,82,246,82,246,82,246,82,246,82,246,210,246,210,246,210,246,210,246,210,246,210,246,210,246,210,246,210,246,210,242,242,190,207,195,242,176,61,132,135,227,225,122,120,30,210,67,121,176,151,101,47,203,94,150,189,44,123,89,246,178,236,101,217,203,178,151,101,47,203,94,182,189,108,123,217,246,178,237,101,219,203,182,151,109,47,219,94,182,189,108,123,9,123,9,121,73,231,61,223,223,191,182,135,240,112,60,92,15,207,67,122,40,15,242,153,206,123,58,239,233,188,167,243,158,206,123,58,239,233,188,167,243,158,206,123,58,239,233,188,167,243,158,206,123,58,239,233,188,167,243,158,206,123,58,239,233,188,167,243,158,206,123,58,239,233,188,167,243,158,206,123,58,239,233,188,167,243,158,206,123,58,239,229,188,151,243,94,206,123,57,239,229,188,151,243,94,206,123,57,239,229,188,151,243,94,206,123,57,239,229,188,151,243,94,206,123,57,239,229,188,151,243,94,206,123,57,239,229,188,151,243,94,206,123,57,239,229,188,151,243,94,206,123,57,239,229,188,151,243,94,206,123,57,239,188,160,210,96,47,97,47,97,47,222,179,202,123,86,121,207,42,239,89,229,61,171,188,103,149,247,172,242,158,85,222,179,202,123,86,121,207,42,239,89,229,61,171,188,103,149,247,172,242,158,85,222,179,202,123,86,121,207,42,239,89,229,61,171,188,103,149,247,172,242,158,85,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,118,247,127,255,3,150,72,213,155,57,51,0,0])))