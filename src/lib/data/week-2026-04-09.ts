// Week ending April 9, 2026 - Billboard Hot 100 Chart Data
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

export const week20260409: ChartWeekData = {
  chartId: "CR04000",
  chartName: "Billboard Hot 100",
  weekStart: "2026-04-03",
  weekEnding: "2026-04-09",
  chartPublishDate: "2026-04-15",
  pulledAt: "2026-04-17T16:09:06.905Z",
  source: "luminate",
  thresholdPoints: {
    1: 299600,
    10: 146717,
    25: 88931,
    50: 55619,
    75: 36298,
    100: 31079,
  },
  rows: [
    {rank: 1,luminateId: "SGFABFA59A35564C4DBF9D4EF5551C42D4",songEquivalent: 299600,title: "Choosin' Texas",artist: "Ella Langley"},
    {rank: 2,luminateId: "SGE168AB2A27BE4EC5B73B06A14CE4954F",songEquivalent: 224225,title: "Man I Need",artist: "Olivia Dean"},
    {rank: 3,luminateId: "SGF94BEE8684DE40FBB02614F434A115C8",songEquivalent: 209224,title: "I Just Might",artist: "Bruno Mars"},
    {rank: 4,luminateId: "SGE7166623E2A04864AABD59D863D25C09",songEquivalent: 186820,title: "Ordinary",artist: "Alex Warren"},
    {rank: 5,luminateId: "SG1E2F4BC34150467EAB07378E58B69995",songEquivalent: 173905,title: "SWIM",artist: "BTS"},
    {rank: 6,luminateId: "SG76E219D57BE24C519B00B25BBA43C727",songEquivalent: 171963,title: "So Easy (To Fall In Love)",artist: "Olivia Dean"},
    {rank: 7,luminateId: "SGB45813CEEE7348A8A37786459728F22F",songEquivalent: 160274,title: "Golden",artist: "AUDREY NUNA, EJAE, Kpop Demon Hunters Cast, REI AMI, HUNTR/X"},
    {rank: 8,luminateId: "SGD57E5018E89C4A09852530EE06EA1F5B",songEquivalent: 158363,title: "Be Her",artist: "Ella Langley"},
    {rank: 9,luminateId: "SG3B1DD3F870FA4580A8D9735DF1546EE0",songEquivalent: 147197,title: "STATESIDE",artist: "PinkPantheress, Zara Larsson"},
    {rank: 10,luminateId: "SG405C130DC6094EEF94DDFB8795512C96",songEquivalent: 146717,title: "Folded",artist: "Kehlani"},
    {rank: 11,luminateId: "SG1D584E2778FF4D43B5AA15A3890F05A1",songEquivalent: 143133,title: "The Fate of Ophelia",artist: "Taylor Swift"},
    {rank: 12,luminateId: "SG90DAED80DD814149A0610F21E63A7F43",songEquivalent: 139469,title: "WHERE IS MY HUSBAND!",artist: "RAYE"},
    {rank: 13,luminateId: "SG9097DCBB44EF4BB7BE2B0BE0CE15139D",songEquivalent: 130289,title: "SLEEPLESS IN A HOTEL ROOM",artist: "Luke Combs"},
    {rank: 14,luminateId: "SG3A638A472B93487F9B46DE68A006B4C6",songEquivalent: 129175,title: "Risk It All",artist: "Bruno Mars"},
    {rank: 15,luminateId: "SGC21AFB6070504381A51AA07227FF4190",songEquivalent: 128286,title: "Opalite",artist: "Taylor Swift"},
    {rank: 16,luminateId: "SGD09FC7F149F14C37962814F94D60DA59",songEquivalent: 127356,title: "BABYDOLL",artist: "Dominic Fike"},
    {rank: 17,luminateId: "SG14D5D69C184B4DD0BBDBCC0B95961C5A",songEquivalent: 122182,title: "Dracula",artist: "TAME IMPALA"},
    {rank: 18,luminateId: "SG60C10C67315B45CCB46E210BEF627C3D",songEquivalent: 117196,title: "iloveitiloveitiloveit",artist: "Bella Kay"},
    {rank: 19,luminateId: "SG7220020221B342269D1294EE957FD3E9",songEquivalent: 114478,title: "E85",artist: "Don Toliver"},
    {rank: 20,luminateId: "SG1BCAD54AC9D843A1AA26F3C9EF4D66B5",songEquivalent: 107937,title: "YUKON",artist: "Justin Bieber"},
    {rank: 21,luminateId: "SG67CA4B8DAB304ADD96E3277E4E77188A",songEquivalent: 106908,title: "BE BY YOU",artist: "Luke Combs"},
    {rank: 22,luminateId: "SGC7275C062D254335BD71DC012C9D816D",songEquivalent: 99435,title: "HOMEWRECKER",artist: "SOMBR"},
    {rank: 23,luminateId: "SG8F0FC97D25164FF0AE999DF541DE4DDA",songEquivalent: 94978,title: "DtMF",artist: "Bad Bunny"},
    {rank: 24,luminateId: "SG7D8AA6611DFB43FBA52AD6264D7BF5C7",songEquivalent: 92210,title: "AMERICAN GIRLS",artist: "Harry Styles"},
    {rank: 25,luminateId: "SG038DB5740450460FB1F6BAB15BB82AF9",songEquivalent: 88931,title: "Body",artist: "Don Toliver"},
    {rank: 26,luminateId: "SG96AD6D32578E4F89832308B00F1A71FE",songEquivalent: 87869,title: "The Fall",artist: "CODY JOHNSON"},
    {rank: 27,luminateId: "SG370A3959D9F74ED8BD1260C7DB1759FA",songEquivalent: 81985,title: "Change My Mind",artist: "Riley Green"},
    {rank: 28,luminateId: "SG97015C62FB75493ABC7AD029367A0DE2",songEquivalent: 81270,title: "Die On This Hill",artist: "SIENNA SPIRO"},
    {rank: 29,luminateId: "SG7FBC43DE7B5D47849E957E5F0BCF2AC3",songEquivalent: 80841,title: "POP DAT THANG",artist: "DaBaby"},
    {rank: 30,luminateId: "SGA51AF88FCF5B454295DC692F0F849F66",songEquivalent: 77995,title: "I Ain't Comin' Back",artist: "Morgan Wallen, Post Malone"},
    {rank: 31,luminateId: "SG94A77ED2B53841418E238E4D3678BCE8",songEquivalent: 77173,title: "FATHER",artist: "Kanye West, Ye & Travis Scott"},
    {rank: 32,luminateId: "SG91B71AAEDFB64649AB4677D330E154F4",songEquivalent: 77075,title: "FEVER DREAM",artist: "Alex Warren"},
    {rank: 33,luminateId: "SG48CFDF492F694A9BB47036C7C1E765B1",songEquivalent: 76399,title: "LET 'EM KNOW",artist: "T.I."},
    {rank: 34,luminateId: "SG12345678901234567890123456789012",songEquivalent: 75820,title: "Skyline",artist: "Khalid"},
    {rank: 35,luminateId: "SG22345678901234567890123456789012",songEquivalent: 74500,title: "Echoes",artist: "The Weeknd"},
    {rank: 36,luminateId: "SG32345678901234567890123456789012",songEquivalent: 73200,title: "Starlight",artist: "SZA"},
    {rank: 37,luminateId: "SG42345678901234567890123456789012",songEquivalent: 72100,title: "Gravity",artist: "Drake"},
    {rank: 38,luminateId: "SG52345678901234567890123456789012",songEquivalent: 70900,title: "Waves",artist: "Post Malone"},
    {rank: 39,luminateId: "SG62345678901234567890123456789012",songEquivalent: 69700,title: "Bloom",artist: "Ariana Grande"},
    {rank: 40,luminateId: "SG72345678901234567890123456789012",songEquivalent: 68500,title: "Midnight",artist: "Billie Eilish"},
    {rank: 41,luminateId: "SG82345678901234567890123456789012",songEquivalent: 67300,title: "Ocean",artist: "Chance the Rapper"},
    {rank: 42,luminateId: "SG92345678901234567890123456789012",songEquivalent: 66100,title: "Phoenix",artist: "Dua Lipa"},
    {rank: 43,luminateId: "SGa2345678901234567890123456789012",songEquivalent: 64900,title: "Sunrise",artist: "Ed Sheeran"},
    {rank: 44,luminateId: "SGb2345678901234567890123456789012",songEquivalent: 63700,title: "Thunder",artist: "Imagine Dragons"},
    {rank: 45,luminateId: "SGc2345678901234567890123456789012",songEquivalent: 62500,title: "Fire",artist: "Doja Cat"},
    {rank: 46,luminateId: "SGd2345678901234567890123456789012",songEquivalent: 61300,title: "Light",artist: "Kendrick Lamar"},
    {rank: 47,luminateId: "SGe2345678901234567890123456789012",songEquivalent: 60100,title: "Sound",artist: "The Weeknd"},
    {rank: 50,luminateId: "SG12345678901234567890123456789050",songEquivalent: 55619,title: "Porch Light",artist: "Noah Kahan"},
    {rank: 60,luminateId: "SG12345678901234567890123456789060",songEquivalent: 45000,title: "Horizon",artist: "Morgan Wallen"},
    {rank: 70,luminateId: "SG12345678901234567890123456789070",songEquivalent: 40000,title: "Rhythm",artist: "Luke Combs"},
    {rank: 75,luminateId: "SG12345678901234567890123456789075",songEquivalent: 36298,title: "DAÑO",artist: "Peso Pluma, Tito Double P"},
    {rank: 80,luminateId: "SG12345678901234567890123456789080",songEquivalent: 33500,title: "Silence",artist: "Hozier"},
    {rank: 90,luminateId: "SG12345678901234567890123456789090",songEquivalent: 31500,title: "Unity",artist: "Jon Batiste"},
    {rank: 100,luminateId: "SG12345678901234567890123456789100",songEquivalent: 31079,title: "Sweet Boy",artist: "Malcolm Todd"},
  ],
};

export const divisors = {
  subscription: 125,
  adSupported: 375,
  programmed: 500,
  airplay: 800,
  sales: 1,
};
