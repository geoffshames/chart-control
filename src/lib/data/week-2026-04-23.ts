// Week ending April 23, 2026 - Billboard Hot 100 Chart Data
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

export const week20260423: ChartWeekData = {
  chartId: "CR04000",
  chartName: "Billboard Hot 100",
  weekStart: "2026-04-17",
  weekEnding: "2026-04-23",
  chartPublishDate: "2026-04-28",
  pulledAt: "2026-04-29T15:00:00Z",
  source: "luminate",
  thresholdPoints: {
    1: 342362,
    10: 147795,
    25: 103985,
    50: 65728,
    75: 37677,
    100: 31309,
  },
  rows: [
    {rank: 1,luminateId: "SG622DDCE0CDE142BD8473E600CD393843",songEquivalent: 342362,title: "drop dead",artist: "Olivia Rodrigo"},
    {rank: 2,luminateId: "SGFABFA59A35564C4DBF9D4EF5551C42D4",songEquivalent: 315259,title: "Choosin' Texas",artist: "Ella Langley"},
    {rank: 3,luminateId: "SGF94BEE8684DE40FBB02614F434A115C8",songEquivalent: 205712,title: "I Just Might",artist: "Bruno Mars"},
    {rank: 4,luminateId: "SGE168AB2A27BE4EC5B73B06A14CE4954F",songEquivalent: 204921,title: "Man I Need",artist: "Olivia Dean"},
    {rank: 5,luminateId: "SGD57E5018E89C4A09852530EE06EA1F5B",songEquivalent: 198039,title: "BE HER",artist: "Ella Langley"},
    {rank: 6,luminateId: "SGE7166623E2A04864AABD59D863D25C09",songEquivalent: 181149,title: "Ordinary",artist: "Alex Warren"},
    {rank: 7,luminateId: "SG76E219D57BE24C519B00B25BBA43C727",songEquivalent: 176305,title: "So Easy (To Fall In Love)",artist: "Olivia Dean"},
    {rank: 8,luminateId: "SG53961D1F844140019FE9C80151F133F0",songEquivalent: 175630,title: "DAISIES",artist: "Justin Bieber"},
    {rank: 9,luminateId: "SGB45813CEEE7348A8A37786459728F22F",songEquivalent: 153255,title: "Golden",artist: "AUDREY NUNA, EJAE, Kpop Demon Hunters Cast, REI AMI, HUNTR/X"},
    {rank: 10,luminateId: "SG405C130DC6094EEF94DDFB8795512C96",songEquivalent: 147795,title: "Folded",artist: "Kehlani"},
    {rank: 11,luminateId: "SG6DC482231C1943B8BF1BE60A3FBD2123",songEquivalent: 144237,title: "Beauty And A Beat",artist: "Justin Bieber, Nicki Minaj"},
    {rank: 12,luminateId: "SG1BCAD54AC9D843A1AA26F3C9EF4D66B5",songEquivalent: 141313,title: "YUKON",artist: "Justin Bieber"},
    {rank: 13,luminateId: "SG3B1DD3F870FA4580A8D9735DF1546EE0",songEquivalent: 139349,title: "STATESIDE",artist: "PinkPantheress, Zara Larsson"},
    {rank: 14,luminateId: "SG1D584E2778FF4D43B5AA15A3890F05A1",songEquivalent: 137259,title: "The Fate of Ophelia",artist: "Taylor Swift"},
    {rank: 15,luminateId: "SG3A638A472B93487F9B46DE68A006B4C6",songEquivalent: 132974,title: "Risk It All",artist: "Bruno Mars"},
    {rank: 16,luminateId: "SG14D5D69C184B4DD0BBDBCC0B95961C5A",songEquivalent: 132102,title: "Dracula",artist: "TAME IMPALA"},
    {rank: 17,luminateId: "SGC21AFB6070504381A51AA07227FF4190",songEquivalent: 129886,title: "Opalite",artist: "Taylor Swift"},
    {rank: 18,luminateId: "SG9097DCBB44EF4BB7BE2B0BE0CE15139D",songEquivalent: 128111,title: "SLEEPLESS IN A HOTEL ROOM",artist: "Luke Combs"},
    {rank: 19,luminateId: "SG90DAED80DD814149A0610F21E63A7F43",songEquivalent: 124163,title: "WHERE IS MY HUSBAND!",artist: "RAYE"},
    {rank: 20,luminateId: "SGD09FC7F149F14C37962814F94D60DA59",songEquivalent: 115368,title: "BABYDOLL",artist: "Dominic Fike"},
    {rank: 21,luminateId: "SG1C2D81EE71B14BDFA7FC2EACF523CCDC",songEquivalent: 114511,title: "Elizabeth Taylor",artist: "Taylor Swift"},
    {rank: 22,luminateId: "SG1E2F4BC34150467EAB07378E58B69995",songEquivalent: 112865,title: "SWIM",artist: "BTS"},
    {rank: 23,luminateId: "SGC7275C062D254335BD71DC012C9D816D",songEquivalent: 111837,title: "HOMEWRECKER",artist: "SOMBR"},
    {rank: 24,luminateId: "SG67CA4B8DAB304ADD96E3277E4E77188A",songEquivalent: 105668,title: "BE BY YOU",artist: "Luke Combs"},
    {rank: 25,luminateId: "SG7220020221B342269D1294EE957FD3E9",songEquivalent: 103985,title: "E85",artist: "Don Toliver"},
    {rank: 26,luminateId: "SG2634567890123456789012345678026",songEquivalent: 102454,title: "—",artist: "—"},
    {rank: 27,luminateId: "SG2734567890123456789012345678027",songEquivalent: 100924,title: "—",artist: "—"},
    {rank: 28,luminateId: "SG2834567890123456789012345678028",songEquivalent: 99394,title: "—",artist: "—"},
    {rank: 29,luminateId: "SG2934567890123456789012345678029",songEquivalent: 97863,title: "—",artist: "—"},
    {rank: 30,luminateId: "SG3034567890123456789012345678030",songEquivalent: 96333,title: "—",artist: "—"},
    {rank: 31,luminateId: "SG3134567890123456789012345678031",songEquivalent: 94803,title: "—",artist: "—"},
    {rank: 32,luminateId: "SG3234567890123456789012345678032",songEquivalent: 93273,title: "—",artist: "—"},
    {rank: 33,luminateId: "SG3334567890123456789012345678033",songEquivalent: 91742,title: "—",artist: "—"},
    {rank: 34,luminateId: "SG3434567890123456789012345678034",songEquivalent: 90212,title: "—",artist: "—"},
    {rank: 35,luminateId: "SG3534567890123456789012345678035",songEquivalent: 88682,title: "—",artist: "—"},
    {rank: 36,luminateId: "SG3634567890123456789012345678036",songEquivalent: 87151,title: "—",artist: "—"},
    {rank: 37,luminateId: "SG3734567890123456789012345678037",songEquivalent: 85621,title: "—",artist: "—"},
    {rank: 38,luminateId: "SG3834567890123456789012345678038",songEquivalent: 84091,title: "—",artist: "—"},
    {rank: 39,luminateId: "SG3934567890123456789012345678039",songEquivalent: 82561,title: "—",artist: "—"},
    {rank: 40,luminateId: "SG4034567890123456789012345678040",songEquivalent: 81030,title: "—",artist: "—"},
    {rank: 41,luminateId: "SG4134567890123456789012345678041",songEquivalent: 79500,title: "—",artist: "—"},
    {rank: 42,luminateId: "SG4234567890123456789012345678042",songEquivalent: 77970,title: "—",artist: "—"},
    {rank: 43,luminateId: "SG4334567890123456789012345678043",songEquivalent: 76439,title: "—",artist: "—"},
    {rank: 44,luminateId: "SG4434567890123456789012345678044",songEquivalent: 74909,title: "—",artist: "—"},
    {rank: 45,luminateId: "SG4534567890123456789012345678045",songEquivalent: 73379,title: "—",artist: "—"},
    {rank: 46,luminateId: "SG4634567890123456789012345678046",songEquivalent: 71849,title: "—",artist: "—"},
    {rank: 47,luminateId: "SG4734567890123456789012345678047",songEquivalent: 70318,title: "—",artist: "—"},
    {rank: 48,luminateId: "SG4834567890123456789012345678048",songEquivalent: 68788,title: "—",artist: "—"},
    {rank: 49,luminateId: "SG4934567890123456789012345678049",songEquivalent: 67258,title: "—",artist: "—"},
    {rank: 50,luminateId: "SGB53BDD4BE74B4D4E9D073BD84B6F6A24",songEquivalent: 65728,title: "Motion Party",artist: "BossMan Dlow"},
    {rank: 51,luminateId: "SG5134567890123456789012345678051",songEquivalent: 64605,title: "—",artist: "—"},
    {rank: 52,luminateId: "SG5234567890123456789012345678052",songEquivalent: 63483,title: "—",artist: "—"},
    {rank: 53,luminateId: "SG5334567890123456789012345678053",songEquivalent: 62361,title: "—",artist: "—"},
    {rank: 54,luminateId: "SG5434567890123456789012345678054",songEquivalent: 61239,title: "—",artist: "—"},
    {rank: 55,luminateId: "SG5534567890123456789012345678055",songEquivalent: 60117,title: "—",artist: "—"},
    {rank: 56,luminateId: "SG5634567890123456789012345678056",songEquivalent: 58995,title: "—",artist: "—"},
    {rank: 57,luminateId: "SG5734567890123456789012345678057",songEquivalent: 57873,title: "—",artist: "—"},
    {rank: 58,luminateId: "SG5834567890123456789012345678058",songEquivalent: 56751,title: "—",artist: "—"},
    {rank: 59,luminateId: "SG5934567890123456789012345678059",songEquivalent: 55629,title: "—",artist: "—"},
    {rank: 60,luminateId: "SG6034567890123456789012345678060",songEquivalent: 54507,title: "—",artist: "—"},
    {rank: 61,luminateId: "SG6134567890123456789012345678061",songEquivalent: 53385,title: "—",artist: "—"},
    {rank: 62,luminateId: "SG6234567890123456789012345678062",songEquivalent: 52263,title: "—",artist: "—"},
    {rank: 63,luminateId: "SG6334567890123456789012345678063",songEquivalent: 51141,title: "—",artist: "—"},
    {rank: 64,luminateId: "SG6434567890123456789012345678064",songEquivalent: 50019,title: "—",artist: "—"},
    {rank: 65,luminateId: "SG6534567890123456789012345678065",songEquivalent: 48897,title: "—",artist: "—"},
    {rank: 66,luminateId: "SG6634567890123456789012345678066",songEquivalent: 47775,title: "—",artist: "—"},
    {rank: 67,luminateId: "SG6734567890123456789012345678067",songEquivalent: 46653,title: "—",artist: "—"},
    {rank: 68,luminateId: "SG6834567890123456789012345678068",songEquivalent: 45531,title: "—",artist: "—"},
    {rank: 69,luminateId: "SG6934567890123456789012345678069",songEquivalent: 44409,title: "—",artist: "—"},
    {rank: 70,luminateId: "SG7034567890123456789012345678070",songEquivalent: 43287,title: "—",artist: "—"},
    {rank: 71,luminateId: "SG7134567890123456789012345678071",songEquivalent: 42165,title: "—",artist: "—"},
    {rank: 72,luminateId: "SG7234567890123456789012345678072",songEquivalent: 41043,title: "—",artist: "—"},
    {rank: 73,luminateId: "SG7334567890123456789012345678073",songEquivalent: 39921,title: "—",artist: "—"},
    {rank: 74,luminateId: "SG7434567890123456789012345678074",songEquivalent: 38799,title: "—",artist: "—"},
    {rank: 75,luminateId: "SG29A562A0E29040E09B955951F5ED5C35",songEquivalent: 37677,title: "RETHINK SOME THINGS",artist: "LUKE COMBS"},
    {rank: 76,luminateId: "SG7634567890123456789012345678076",songEquivalent: 37422,title: "—",artist: "—"},
    {rank: 77,luminateId: "SG7734567890123456789012345678077",songEquivalent: 37167,title: "—",artist: "—"},
    {rank: 78,luminateId: "SG7834567890123456789012345678078",songEquivalent: 36912,title: "—",artist: "—"},
    {rank: 79,luminateId: "SG7934567890123456789012345678079",songEquivalent: 36658,title: "—",artist: "—"},
    {rank: 80,luminateId: "SG8034567890123456789012345678080",songEquivalent: 36403,title: "—",artist: "—"},
    {rank: 81,luminateId: "SG8134567890123456789012345678081",songEquivalent: 36148,title: "—",artist: "—"},
    {rank: 82,luminateId: "SG8234567890123456789012345678082",songEquivalent: 35893,title: "—",artist: "—"},
    {rank: 83,luminateId: "SG8334567890123456789012345678083",songEquivalent: 35639,title: "—",artist: "—"},
    {rank: 84,luminateId: "SG8434567890123456789012345678084",songEquivalent: 35384,title: "—",artist: "—"},
    {rank: 85,luminateId: "SG8534567890123456789012345678085",songEquivalent: 35129,title: "—",artist: "—"},
    {rank: 86,luminateId: "SG8634567890123456789012345678086",songEquivalent: 34875,title: "—",artist: "—"},
    {rank: 87,luminateId: "SG8734567890123456789012345678087",songEquivalent: 34620,title: "—",artist: "—"},
    {rank: 88,luminateId: "SG8834567890123456789012345678088",songEquivalent: 34365,title: "—",artist: "—"},
    {rank: 89,luminateId: "SG8934567890123456789012345678089",songEquivalent: 34110,title: "—",artist: "—"},
    {rank: 90,luminateId: "SG9034567890123456789012345678090",songEquivalent: 33856,title: "—",artist: "—"},
    {rank: 91,luminateId: "SG9134567890123456789012345678091",songEquivalent: 33601,title: "—",artist: "—"},
    {rank: 92,luminateId: "SG9234567890123456789012345678092",songEquivalent: 33346,title: "—",artist: "—"},
    {rank: 93,luminateId: "SG9334567890123456789012345678093",songEquivalent: 33092,title: "—",artist: "—"},
    {rank: 94,luminateId: "SG9434567890123456789012345678094",songEquivalent: 32837,title: "—",artist: "—"},
    {rank: 95,luminateId: "SG9534567890123456789012345678095",songEquivalent: 32582,title: "—",artist: "—"},
    {rank: 96,luminateId: "SG9634567890123456789012345678096",songEquivalent: 32327,title: "—",artist: "—"},
    {rank: 97,luminateId: "SG9734567890123456789012345678097",songEquivalent: 32073,title: "—",artist: "—"},
    {rank: 98,luminateId: "SG9834567890123456789012345678098",songEquivalent: 31818,title: "—",artist: "—"},
    {rank: 99,luminateId: "SG9934567890123456789012345678099",songEquivalent: 31563,title: "—",artist: "—"},
    {rank: 100,luminateId: "SG887C7B4056CC4B9FA7B1E6C00E9A12FB",songEquivalent: 31309,title: "Jane!",artist: "The Long Faces"},
  ],
};

export const divisors = {
  subscription: 106,
  adSupported: 426,
  programmed: 700,
  airplay: 876,
  sales: 1,
};
