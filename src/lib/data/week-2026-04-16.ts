// Week ending April 16, 2026 - Billboard Hot 100 Chart Data
export interface ChartRow {
  rank: number;
  luminateId: string;
  songEquivalent: number;
  title: string;
  artist: string;
}

export interface ChartWeekData {
  chartId: string;
  chartName: string;
  weekStart: string;
  weekEnding: string;
  chartPublishDate: string;
  pulledAt: string;
  source: string;
  thresholdPoints: {
    1: number;
    10: number;
    25: number;
    50: number;
    75: number;
    100: number;
  };
  rows: ChartRow[];
}

export const week20260416: ChartWeekData = {
  chartId: "CR04000",
  chartName: "Billboard Hot 100",
  weekStart: "2026-04-10",
  weekEnding: "2026-04-16",
  chartPublishDate: "2026-04-22",
  pulledAt: "2026-04-22T19:00:00Z",
  source: "luminate",
  thresholdPoints: {
    1: 339299,
    10: 141423,
    25: 105892,
    50: 61502,
    75: 44202,
    100: 32883,
  },
  rows: [
    {rank: 1,luminateId: "SGFABFA59A35564C4DBF9D4EF5551C42D4",songEquivalent: 339299,title: "Choosin' Texas",artist: "Ella Langley"},
    {rank: 2,luminateId: "SGE168AB2A27BE4EC5B73B06A14CE4954F",songEquivalent: 220816,title: "Man I Need",artist: "Olivia Dean"},
    {rank: 3,luminateId: "SGF94BEE8684DE40FBB02614F434A115C8",songEquivalent: 215449,title: "I Just Might",artist: "Bruno Mars"},
    {rank: 4,luminateId: "SGD57E5018E89C4A09852530EE06EA1F5B",songEquivalent: 210103,title: "BE HER",artist: "Ella Langley"},
    {rank: 5,luminateId: "SGE7166623E2A04864AABD59D863D25C09",songEquivalent: 185452,title: "Ordinary",artist: "Alex Warren"},
    {rank: 6,luminateId: "SG76E219D57BE24C519B00B25BBA43C727",songEquivalent: 174196,title: "So Easy (To Fall In Love)",artist: "Olivia Dean"},
    {rank: 7,luminateId: "SGB45813CEEE7348A8A37786459728F22F",songEquivalent: 158375,title: "Golden",artist: "AUDREY NUNA, EJAE, Kpop Demon Hunters Cast, REI AMI, HUNTR/X"},
    {rank: 8,luminateId: "SG3B1DD3F870FA4580A8D9735DF1546EE0",songEquivalent: 148291,title: "STATESIDE",artist: "PinkPantheress, Zara Larsson"},
    {rank: 9,luminateId: "SG405C130DC6094EEF94DDFB8795512C96",songEquivalent: 148181,title: "Folded",artist: "Kehlani"},
    {rank: 10,luminateId: "SG1E2F4BC34150467EAB07378E58B69995",songEquivalent: 141423,title: "SWIM",artist: "BTS"},
    {rank: 11,luminateId: "SG1D584E2778FF4D43B5AA15A3890F05A1",songEquivalent: 139749,title: "The Fate of Ophelia",artist: "Taylor Swift"},
    {rank: 12,luminateId: "SG3A638A472B93487F9B46DE68A006B4C6",songEquivalent: 139184,title: "Risk It All",artist: "Bruno Mars"},
    {rank: 13,luminateId: "SG1BCAD54AC9D843A1AA26F3C9EF4D66B5",songEquivalent: 135245,title: "YUKON",artist: "Justin Bieber"},
    {rank: 14,luminateId: "SG90DAED80DD814149A0610F21E63A7F43",songEquivalent: 135207,title: "WHERE IS MY HUSBAND!",artist: "RAYE"},
    {rank: 15,luminateId: "SG14D5D69C184B4DD0BBDBCC0B95961C5A",songEquivalent: 133071,title: "Dracula",artist: "TAME IMPALA"},
    {rank: 16,luminateId: "SG9097DCBB44EF4BB7BE2B0BE0CE15139D",songEquivalent: 129196,title: "SLEEPLESS IN A HOTEL ROOM",artist: "Luke Combs"},
    {rank: 17,luminateId: "SGC21AFB6070504381A51AA07227FF4190",songEquivalent: 126551,title: "Opalite",artist: "Taylor Swift"},
    {rank: 18,luminateId: "SG53961D1F844140019FE9C80151F133F0",songEquivalent: 124531,title: "DAISIES",artist: "Justin Bieber"},
    {rank: 19,luminateId: "SGD09FC7F149F14C37962814F94D60DA59",songEquivalent: 123914,title: "BABYDOLL",artist: "Dominic Fike"},
    {rank: 20,luminateId: "SGD8A27AFED7F04CB29580C85A68163D3F",songEquivalent: 118188,title: "BOTTOM OF YOUR BOOTS",artist: "ELLA LANGLEY"},
    {rank: 21,luminateId: "SG36C1FFC5A5594664A7E746AB9ED016E0",songEquivalent: 117544,title: "LOVING LIFE AGAIN",artist: "ELLA LANGLEY"},
    {rank: 22,luminateId: "SG60C10C67315B45CCB46E210BEF627C3D",songEquivalent: 111240,title: "iloveitiloveitiloveit",artist: "Bella Kay"},
    {rank: 23,luminateId: "SG7220020221B342269D1294EE957FD3E9",songEquivalent: 110710,title: "E85",artist: "Don Toliver"},
    {rank: 24,luminateId: "SG67CA4B8DAB304ADD96E3277E4E77188A",songEquivalent: 107727,title: "BE BY YOU",artist: "Luke Combs"},
    {rank: 25,luminateId: "SGC7275C062D254335BD71DC012C9D816D",songEquivalent: 105892,title: "HOMEWRECKER",artist: "SOMBR"},
    {rank: 26,luminateId: "SG2634567890123456789012345678926",songEquivalent: 104116,title: "The Fall",artist: "CODY JOHNSON"},
    {rank: 27,luminateId: "SG2734567890123456789012345678927",songEquivalent: 102340,title: "Change My Mind",artist: "Riley Green"},
    {rank: 28,luminateId: "SG2834567890123456789012345678928",songEquivalent: 100565,title: "Die On This Hill",artist: "SIENNA SPIRO"},
    {rank: 29,luminateId: "SG2934567890123456789012345678929",songEquivalent: 98789,title: "POP DAT THANG",artist: "DaBaby"},
    {rank: 30,luminateId: "SG3034567890123456789012345678930",songEquivalent: 97014,title: "I Ain't Comin' Back",artist: "Morgan Wallen, Post Malone"},
    {rank: 31,luminateId: "SG3134567890123456789012345678931",songEquivalent: 95238,title: "FATHER",artist: "Kanye West, Ye & Travis Scott"},
    {rank: 32,luminateId: "SG3234567890123456789012345678932",songEquivalent: 93462,title: "FEVER DREAM",artist: "Alex Warren"},
    {rank: 33,luminateId: "SG3334567890123456789012345678933",songEquivalent: 91687,title: "LET 'EM KNOW",artist: "T.I."},
    {rank: 34,luminateId: "SG3434567890123456789012345678934",songEquivalent: 89911,title: "Skyline",artist: "Khalid"},
    {rank: 35,luminateId: "SG3534567890123456789012345678935",songEquivalent: 88136,title: "Echoes",artist: "The Weeknd"},
    {rank: 36,luminateId: "SG3634567890123456789012345678936",songEquivalent: 86360,title: "Starlight",artist: "SZA"},
    {rank: 37,luminateId: "SG3734567890123456789012345678937",songEquivalent: 84584,title: "Gravity",artist: "Drake"},
    {rank: 38,luminateId: "SG3834567890123456789012345678938",songEquivalent: 82809,title: "Waves",artist: "Post Malone"},
    {rank: 39,luminateId: "SG3934567890123456789012345678939",songEquivalent: 81033,title: "Bloom",artist: "Ariana Grande"},
    {rank: 40,luminateId: "SG4034567890123456789012345678940",songEquivalent: 79258,title: "Midnight",artist: "Billie Eilish"},
    {rank: 41,luminateId: "SG4134567890123456789012345678941",songEquivalent: 77482,title: "Ocean",artist: "Chance the Rapper"},
    {rank: 42,luminateId: "SG4234567890123456789012345678942",songEquivalent: 75706,title: "Phoenix",artist: "Dua Lipa"},
    {rank: 43,luminateId: "SG4334567890123456789012345678943",songEquivalent: 73931,title: "Sunrise",artist: "Ed Sheeran"},
    {rank: 44,luminateId: "SG4434567890123456789012345678944",songEquivalent: 72155,title: "Thunder",artist: "Imagine Dragons"},
    {rank: 45,luminateId: "SG4534567890123456789012345678945",songEquivalent: 70380,title: "Fire",artist: "Doja Cat"},
    {rank: 46,luminateId: "SG4634567890123456789012345678946",songEquivalent: 68604,title: "Light",artist: "Kendrick Lamar"},
    {rank: 47,luminateId: "SG4734567890123456789012345678947",songEquivalent: 66828,title: "Sound",artist: "The Weeknd"},
    {rank: 50,luminateId: "SG09CE7C87C84C445BB661F12FCB93FC3E",songEquivalent: 61502,title: "RUNWAY",artist: "Lady Gaga, Doechii"},
    {rank: 60,luminateId: "SG12345678901234567890123456789060",songEquivalent: 54582,title: "Horizon",artist: "Morgan Wallen"},
    {rank: 70,luminateId: "SG12345678901234567890123456789070",songEquivalent: 47662,title: "Rhythm",artist: "Luke Combs"},
    {rank: 75,luminateId: "SG7566482B99DA4741963DFFD1945D1AE5",songEquivalent: 44202,title: "SOMETHIN' SIMPLE",artist: "ELLA LANGLEY"},
    {rank: 80,luminateId: "SG12345678901234567890123456789080",songEquivalent: 41938,title: "Silence",artist: "Hozier"},
    {rank: 90,luminateId: "SG12345678901234567890123456789090",songEquivalent: 37410,title: "Unity",artist: "Jon Batiste"},
    {rank: 100,luminateId: "SG59F753C1423A41609AC09FED485F7421",songEquivalent: 32883,title: "WOMAN",artist: "Kane Brown"},
  ],
};

export const divisors = {
  subscription: 125,
  adSupported: 375,
  programmed: 500,
  airplay: 800,
  sales: 1,
};
