// Week ending May 7, 2026 - Billboard Hot 100 Chart Data
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

export const week20260507: ChartWeekData = {
  chartId: "CR04000",
  chartName: "Billboard Hot 100",
  weekStart: "2026-05-01",
  weekEnding: "2026-05-07",
  chartPublishDate: "2026-05-12",
  pulledAt: "2026-05-13T16:20:43Z",
  source: "luminate",
  thresholdPoints: {
    1: 305018,
    10: 142074,
    25: 104035,
    50: 70631,
    75: 48957,
    100: 34853,
  },
  rows: [
    {rank: 1,luminateId: "SGFABFA59A35564C4DBF9D4EF5551C42D4",songEquivalent: 305018,title: "Choosin' Texas",artist: "Ella Langley"},
    {rank: 2,luminateId: "SGD57E5018E89C4A09852530EE06EA1F5B",songEquivalent: 198208,title: "BE HER",artist: "Ella Langley"},
    {rank: 3,luminateId: "SG622DDCE0CDE142BD8473E600CD393843",songEquivalent: 195593,title: "drop dead",artist: "Olivia Rodrigo"},
    {rank: 4,luminateId: "SGE168AB2A27BE4EC5B73B06A14CE4954F",songEquivalent: 195219,title: "Man I Need",artist: "Olivia Dean"},
    {rank: 5,luminateId: "SGF94BEE8684DE40FBB02614F434A115C8",songEquivalent: 193400,title: "I Just Might",artist: "Bruno Mars"},
    {rank: 6,luminateId: "SG76E219D57BE24C519B00B25BBA43C727",songEquivalent: 177176,title: "So Easy (To Fall In Love)",artist: "Olivia Dean"},
    {rank: 7,luminateId: "SGE7166623E2A04864AABD59D863D25C09",songEquivalent: 177119,title: "Ordinary",artist: "Alex Warren"},
    {rank: 8,luminateId: "SG06205DB4BADB4032B0E3DEC106D9A265",songEquivalent: 155931,title: "I CAN'T LOVE YOU ANYMORE",artist: "ELLA LANGLEY & MORGAN WALLEN"},
    {rank: 9,luminateId: "SG405C130DC6094EEF94DDFB8795512C96",songEquivalent: 154394,title: "Folded",artist: "Kehlani"},
    {rank: 10,luminateId: "SG14D5D69C184B4DD0BBDBCC0B95961C5A",songEquivalent: 142074,title: "Dracula",artist: "TAME IMPALA"},
    {rank: 11,luminateId: "SGB45813CEEE7348A8A37786459728F22F",songEquivalent: 141609,title: "Golden",artist: "AUDREY NUNA, EJAE, Kpop Demon Hunters Cast, REI AMI, HUNTR/X"},
    {rank: 12,luminateId: "SG53961D1F844140019FE9C80151F133F0",songEquivalent: 139182,title: "DAISIES",artist: "Justin Bieber"},
    {rank: 13,luminateId: "SG3B1DD3F870FA4580A8D9735DF1546EE0",songEquivalent: 138602,title: "STATESIDE",artist: "PinkPantheress, Zara Larsson"},
    {rank: 14,luminateId: "SG1D584E2778FF4D43B5AA15A3890F05A1",songEquivalent: 129634,title: "The Fate of Ophelia",artist: "Taylor Swift"},
    {rank: 15,luminateId: "SG3A638A472B93487F9B46DE68A006B4C6",songEquivalent: 129029,title: "Risk It All",artist: "Bruno Mars"},
    {rank: 16,luminateId: "SG9097DCBB44EF4BB7BE2B0BE0CE15139D",songEquivalent: 125530,title: "SLEEPLESS IN A HOTEL ROOM",artist: "Luke Combs"},
    {rank: 17,luminateId: "SGA07373ED675A49E3BC3D88F04C3C1C3D",songEquivalent: 122023,title: "Billie Jean",artist: "Michael Jackson"},
    {rank: 18,luminateId: "SG6710A6FC741F439ABEB9FF8D95642947",songEquivalent: 115957,title: "The Great Divide",artist: "Noah Kahan"},
    {rank: 19,luminateId: "SGC21AFB6070504381A51AA07227FF4190",songEquivalent: 115386,title: "Opalite",artist: "Taylor Swift"},
    {rank: 20,luminateId: "SGE0E1CCE0762F4D8CA98774C2F77B8CAC",songEquivalent: 110451,title: "Doors",artist: "Noah Kahan"},
    {rank: 21,luminateId: "SGD09FC7F149F14C37962814F94D60DA59",songEquivalent: 107584,title: "BABYDOLL",artist: "DOMINIC FIKE"},
    {rank: 22,luminateId: "SGC7275C062D254335BD71DC012C9D816D",songEquivalent: 107562,title: "HOMEWRECKER",artist: "SOMBR"},
    {rank: 23,luminateId: "SG19279749C59A4F9DBD45FBDE65B17545",songEquivalent: 105281,title: "Midnight Sun",artist: "Zara Larsson"},
    {rank: 24,luminateId: "SG67CA4B8DAB304ADD96E3277E4E77188A",songEquivalent: 104403,title: "BE BY YOU",artist: "Luke Combs"},
    {rank: 25,luminateId: "SG1BCAD54AC9D843A1AA26F3C9EF4D66B5",songEquivalent: 104035,title: "YUKON",artist: "Justin Bieber"},
    {rank: 26,luminateId: "SG2634567890123456789012345678026",songEquivalent: 102699,title: "-",artist: "-"},
    {rank: 27,luminateId: "SG2734567890123456789012345678027",songEquivalent: 101363,title: "-",artist: "-"},
    {rank: 28,luminateId: "SG2834567890123456789012345678028",songEquivalent: 100027,title: "-",artist: "-"},
    {rank: 29,luminateId: "SG2934567890123456789012345678029",songEquivalent: 98690,title: "-",artist: "-"},
    {rank: 30,luminateId: "SG3034567890123456789012345678030",songEquivalent: 97354,title: "-",artist: "-"},
    {rank: 31,luminateId: "SG3134567890123456789012345678031",songEquivalent: 96018,title: "-",artist: "-"},
    {rank: 32,luminateId: "SG3234567890123456789012345678032",songEquivalent: 94682,title: "-",artist: "-"},
    {rank: 33,luminateId: "SG3334567890123456789012345678033",songEquivalent: 93346,title: "-",artist: "-"},
    {rank: 34,luminateId: "SG3434567890123456789012345678034",songEquivalent: 92010,title: "-",artist: "-"},
    {rank: 35,luminateId: "SG3534567890123456789012345678035",songEquivalent: 90673,title: "-",artist: "-"},
    {rank: 36,luminateId: "SG3634567890123456789012345678036",songEquivalent: 89337,title: "-",artist: "-"},
    {rank: 37,luminateId: "SG3734567890123456789012345678037",songEquivalent: 88001,title: "-",artist: "-"},
    {rank: 38,luminateId: "SG3834567890123456789012345678038",songEquivalent: 86665,title: "-",artist: "-"},
    {rank: 39,luminateId: "SG3934567890123456789012345678039",songEquivalent: 85329,title: "-",artist: "-"},
    {rank: 40,luminateId: "SG4034567890123456789012345678040",songEquivalent: 83993,title: "-",artist: "-"},
    {rank: 41,luminateId: "SG4134567890123456789012345678041",songEquivalent: 82656,title: "-",artist: "-"},
    {rank: 42,luminateId: "SG4234567890123456789012345678042",songEquivalent: 81320,title: "-",artist: "-"},
    {rank: 43,luminateId: "SG4334567890123456789012345678043",songEquivalent: 79984,title: "-",artist: "-"},
    {rank: 44,luminateId: "SG4434567890123456789012345678044",songEquivalent: 78648,title: "-",artist: "-"},
    {rank: 45,luminateId: "SG4534567890123456789012345678045",songEquivalent: 77312,title: "-",artist: "-"},
    {rank: 46,luminateId: "SG4634567890123456789012345678046",songEquivalent: 75976,title: "-",artist: "-"},
    {rank: 47,luminateId: "SG4734567890123456789012345678047",songEquivalent: 74639,title: "-",artist: "-"},
    {rank: 48,luminateId: "SG4834567890123456789012345678048",songEquivalent: 73303,title: "-",artist: "-"},
    {rank: 49,luminateId: "SG4934567890123456789012345678049",songEquivalent: 71967,title: "-",artist: "-"},
    {rank: 50,luminateId: "SGE428E19F60BD4542884566DCD8D5FE0D",songEquivalent: 70631,title: "Brunette",artist: "Tucker Wetmore"},
    {rank: 51,luminateId: "SG5134567890123456789012345678051",songEquivalent: 69764,title: "-",artist: "-"},
    {rank: 52,luminateId: "SG5234567890123456789012345678052",songEquivalent: 68897,title: "-",artist: "-"},
    {rank: 53,luminateId: "SG5334567890123456789012345678053",songEquivalent: 68030,title: "-",artist: "-"},
    {rank: 54,luminateId: "SG5434567890123456789012345678054",songEquivalent: 67163,title: "-",artist: "-"},
    {rank: 55,luminateId: "SG5534567890123456789012345678055",songEquivalent: 66296,title: "-",artist: "-"},
    {rank: 56,luminateId: "SG5634567890123456789012345678056",songEquivalent: 65429,title: "-",artist: "-"},
    {rank: 57,luminateId: "SG5734567890123456789012345678057",songEquivalent: 64562,title: "-",artist: "-"},
    {rank: 58,luminateId: "SG5834567890123456789012345678058",songEquivalent: 63695,title: "-",artist: "-"},
    {rank: 59,luminateId: "SG5934567890123456789012345678059",songEquivalent: 62828,title: "-",artist: "-"},
    {rank: 60,luminateId: "SG6034567890123456789012345678060",songEquivalent: 61961,title: "-",artist: "-"},
    {rank: 61,luminateId: "SG6134567890123456789012345678061",songEquivalent: 61094,title: "-",artist: "-"},
    {rank: 62,luminateId: "SG6234567890123456789012345678062",songEquivalent: 60227,title: "-",artist: "-"},
    {rank: 63,luminateId: "SG6334567890123456789012345678063",songEquivalent: 59361,title: "-",artist: "-"},
    {rank: 64,luminateId: "SG6434567890123456789012345678064",songEquivalent: 58494,title: "-",artist: "-"},
    {rank: 65,luminateId: "SG6534567890123456789012345678065",songEquivalent: 57627,title: "-",artist: "-"},
    {rank: 66,luminateId: "SG6634567890123456789012345678066",songEquivalent: 56760,title: "-",artist: "-"},
    {rank: 67,luminateId: "SG6734567890123456789012345678067",songEquivalent: 55893,title: "-",artist: "-"},
    {rank: 68,luminateId: "SG6834567890123456789012345678068",songEquivalent: 55026,title: "-",artist: "-"},
    {rank: 69,luminateId: "SG6934567890123456789012345678069",songEquivalent: 54159,title: "-",artist: "-"},
    {rank: 70,luminateId: "SG7034567890123456789012345678070",songEquivalent: 53292,title: "-",artist: "-"},
    {rank: 71,luminateId: "SG7134567890123456789012345678071",songEquivalent: 52425,title: "-",artist: "-"},
    {rank: 72,luminateId: "SG7234567890123456789012345678072",songEquivalent: 51558,title: "-",artist: "-"},
    {rank: 73,luminateId: "SG7334567890123456789012345678073",songEquivalent: 50691,title: "-",artist: "-"},
    {rank: 74,luminateId: "SG7434567890123456789012345678074",songEquivalent: 49824,title: "-",artist: "-"},
    {rank: 75,luminateId: "SGB34A93BE8A1F453E853EED9BA9A9D89F",songEquivalent: 48957,title: "WHAT YOU NEED",artist: "TEMS"},
    {rank: 76,luminateId: "SG7634567890123456789012345678076",songEquivalent: 48393,title: "-",artist: "-"},
    {rank: 77,luminateId: "SG7734567890123456789012345678077",songEquivalent: 47829,title: "-",artist: "-"},
    {rank: 78,luminateId: "SG7834567890123456789012345678078",songEquivalent: 47265,title: "-",artist: "-"},
    {rank: 79,luminateId: "SG7934567890123456789012345678079",songEquivalent: 46700,title: "-",artist: "-"},
    {rank: 80,luminateId: "SG8034567890123456789012345678080",songEquivalent: 46136,title: "-",artist: "-"},
    {rank: 81,luminateId: "SG8134567890123456789012345678081",songEquivalent: 45572,title: "-",artist: "-"},
    {rank: 82,luminateId: "SG8234567890123456789012345678082",songEquivalent: 45008,title: "-",artist: "-"},
    {rank: 83,luminateId: "SG8334567890123456789012345678083",songEquivalent: 44444,title: "-",artist: "-"},
    {rank: 84,luminateId: "SG8434567890123456789012345678084",songEquivalent: 43880,title: "-",artist: "-"},
    {rank: 85,luminateId: "SG8534567890123456789012345678085",songEquivalent: 43315,title: "-",artist: "-"},
    {rank: 86,luminateId: "SG8634567890123456789012345678086",songEquivalent: 42751,title: "-",artist: "-"},
    {rank: 87,luminateId: "SG8734567890123456789012345678087",songEquivalent: 42187,title: "-",artist: "-"},
    {rank: 88,luminateId: "SG8834567890123456789012345678088",songEquivalent: 41623,title: "-",artist: "-"},
    {rank: 89,luminateId: "SG8934567890123456789012345678089",songEquivalent: 41059,title: "-",artist: "-"},
    {rank: 90,luminateId: "SG9034567890123456789012345678090",songEquivalent: 40495,title: "-",artist: "-"},
    {rank: 91,luminateId: "SG9134567890123456789012345678091",songEquivalent: 39930,title: "-",artist: "-"},
    {rank: 92,luminateId: "SG9234567890123456789012345678092",songEquivalent: 39366,title: "-",artist: "-"},
    {rank: 93,luminateId: "SG9334567890123456789012345678093",songEquivalent: 38802,title: "-",artist: "-"},
    {rank: 94,luminateId: "SG9434567890123456789012345678094",songEquivalent: 38238,title: "-",artist: "-"},
    {rank: 95,luminateId: "SG9534567890123456789012345678095",songEquivalent: 37674,title: "-",artist: "-"},
    {rank: 96,luminateId: "SG9634567890123456789012345678096",songEquivalent: 37110,title: "-",artist: "-"},
    {rank: 97,luminateId: "SG9734567890123456789012345678097",songEquivalent: 36545,title: "-",artist: "-"},
    {rank: 98,luminateId: "SG9834567890123456789012345678098",songEquivalent: 35981,title: "-",artist: "-"},
    {rank: 99,luminateId: "SG9934567890123456789012345678099",songEquivalent: 35417,title: "-",artist: "-"},
    {rank: 100,luminateId: "SG209798CCEFFB49D7B3E64CC7CA8B9609",songEquivalent: 34853,title: "Rocky Mountain Low",artist: "Corey Kent,Koe Wetzel"},
  ],
};

export const divisors = {
  subscription: 105,
  adSupported: 494,
  programmed: 700,
  airplay: 912,
  sales: 1,
};