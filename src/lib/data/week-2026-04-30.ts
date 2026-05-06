// Week ending April 30, 2026 - Billboard Hot 100 Chart Data
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

export const week20260430: ChartWeekData = {
  chartId: "CR04000",
  chartName: "Billboard Hot 100",
  weekStart: "2026-04-24",
  weekEnding: "2026-04-30",
  chartPublishDate: "2026-05-05",
  pulledAt: "2026-05-06T16:23:34Z",
  source: "luminate",
  thresholdPoints: {
    1: 299949,
    10: 170348,
    25: 117108,
    50: 79052,
    75: 50423,
    100: 34515,
  },
  rows: [
    {rank: 1,luminateId: "SGFABFA59A35564C4DBF9D4EF5551C42D4",songEquivalent: 299949,title: "Choosin' Texas",artist: "Ella Langley"},
    {rank: 2,luminateId: "SG00000000000000000000000000000002",songEquivalent: 201463,title: "I Just Might",artist: "Bruno Mars"},
    {rank: 3,luminateId: "SG00000000000000000000000000000003",songEquivalent: 194775,title: "Man I Need",artist: "Olivia Dean"},
    {rank: 4,luminateId: "SG00000000000000000000000000000004",songEquivalent: 194621,title: "drop dead",artist: "Olivia Rodrigo"},
    {rank: 5,luminateId: "SG00000000000000000000000000000005",songEquivalent: 194360,title: "BE HER",artist: "Ella Langley"},
    {rank: 6,luminateId: "SG00000000000000000000000000000006",songEquivalent: 182896,title: "So Easy (To Fall In Love)",artist: "Olivia Dean"},
    {rank: 7,luminateId: "SG00000000000000000000000000000007",songEquivalent: 178960,title: "I CAN'T LOVE YOU ANYMORE",artist: "ELLA LANGLEY & MORGAN WALLEN"},
    {rank: 8,luminateId: "SG00000000000000000000000000000008",songEquivalent: 178244,title: "Ordinary",artist: "Alex Warren"},
    {rank: 9,luminateId: "SG00000000000000000000000000000009",songEquivalent: 174978,title: "Doors",artist: "Noah Kahan"},
    {rank: 10,luminateId: "SG405C130DC6094EEF94DDFB8795512C96",songEquivalent: 170348,title: "Folded",artist: "Kehlani"},
    {rank: 11,luminateId: "SG00000000000000000000000000000011",songEquivalent: 161448,title: "The Great Divide",artist: "Noah Kahan"},
    {rank: 12,luminateId: "SG00000000000000000000000000000012",songEquivalent: 153747,title: "DAISIES",artist: "Justin Bieber"},
    {rank: 13,luminateId: "SG00000000000000000000000000000013",songEquivalent: 146164,title: "Golden",artist: "AUDREY NUNA, EJAE, Kpop Demon Hunters Cast, REI AMI, HUNTR/X"},
    {rank: 14,luminateId: "SG00000000000000000000000000000014",songEquivalent: 144951,title: "End of August",artist: "Noah Kahan"},
    {rank: 15,luminateId: "SG00000000000000000000000000000015",songEquivalent: 136710,title: "STATESIDE",artist: "PinkPantheress, Zara Larsson"},
    {rank: 16,luminateId: "SG00000000000000000000000000000016",songEquivalent: 135369,title: "American Cars",artist: "Noah Kahan"},
    {rank: 17,luminateId: "SG00000000000000000000000000000017",songEquivalent: 133142,title: "The Fate of Ophelia",artist: "Taylor Swift"},
    {rank: 18,luminateId: "SG00000000000000000000000000000018",songEquivalent: 132289,title: "Dracula",artist: "TAME IMPALA"},
    {rank: 19,luminateId: "SG00000000000000000000000000000019",songEquivalent: 131337,title: "Dashboard",artist: "Noah Kahan"},
    {rank: 20,luminateId: "SG00000000000000000000000000000020",songEquivalent: 130733,title: "Risk It All",artist: "Bruno Mars"},
    {rank: 21,luminateId: "SG00000000000000000000000000000021",songEquivalent: 130311,title: "Porch Light",artist: "Noah Kahan"},
    {rank: 22,luminateId: "SG00000000000000000000000000000022",songEquivalent: 127860,title: "SLEEPLESS IN A HOTEL ROOM",artist: "Luke Combs"},
    {rank: 23,luminateId: "SG00000000000000000000000000000023",songEquivalent: 123346,title: "Downfall",artist: "Noah Kahan"},
    {rank: 24,luminateId: "SG00000000000000000000000000000024",songEquivalent: 119008,title: "YUKON",artist: "Justin Bieber"},
    {rank: 25,luminateId: "SGC21AFB6070504381A51AA07227FF4190",songEquivalent: 117108,title: "Opalite",artist: "Taylor Swift"},
    {rank: 26,luminateId: "SG2634567890123456789012345678026",songEquivalent: 115585,title: "-",artist: "-"},
    {rank: 27,luminateId: "SG2734567890123456789012345678027",songEquivalent: 114063,title: "-",artist: "-"},
    {rank: 28,luminateId: "SG2834567890123456789012345678028",songEquivalent: 112541,title: "-",artist: "-"},
    {rank: 29,luminateId: "SG2934567890123456789012345678029",songEquivalent: 111019,title: "-",artist: "-"},
    {rank: 30,luminateId: "SG3034567890123456789012345678030",songEquivalent: 109496,title: "-",artist: "-"},
    {rank: 31,luminateId: "SG3134567890123456789012345678031",songEquivalent: 107974,title: "-",artist: "-"},
    {rank: 32,luminateId: "SG3234567890123456789012345678032",songEquivalent: 106452,title: "-",artist: "-"},
    {rank: 33,luminateId: "SG3334567890123456789012345678033",songEquivalent: 104930,title: "-",artist: "-"},
    {rank: 34,luminateId: "SG3434567890123456789012345678034",songEquivalent: 103407,title: "-",artist: "-"},
    {rank: 35,luminateId: "SG3534567890123456789012345678035",songEquivalent: 101885,title: "-",artist: "-"},
    {rank: 36,luminateId: "SG3634567890123456789012345678036",songEquivalent: 100363,title: "-",artist: "-"},
    {rank: 37,luminateId: "SG3734567890123456789012345678037",songEquivalent: 98841,title: "-",artist: "-"},
    {rank: 38,luminateId: "SG3834567890123456789012345678038",songEquivalent: 97318,title: "-",artist: "-"},
    {rank: 39,luminateId: "SG3934567890123456789012345678039",songEquivalent: 95796,title: "-",artist: "-"},
    {rank: 40,luminateId: "SG4034567890123456789012345678040",songEquivalent: 94274,title: "-",artist: "-"},
    {rank: 41,luminateId: "SG4134567890123456789012345678041",songEquivalent: 92752,title: "-",artist: "-"},
    {rank: 42,luminateId: "SG4234567890123456789012345678042",songEquivalent: 91229,title: "-",artist: "-"},
    {rank: 43,luminateId: "SG4334567890123456789012345678043",songEquivalent: 89707,title: "-",artist: "-"},
    {rank: 44,luminateId: "SG4434567890123456789012345678044",songEquivalent: 88185,title: "-",artist: "-"},
    {rank: 45,luminateId: "SG4534567890123456789012345678045",songEquivalent: 86663,title: "-",artist: "-"},
    {rank: 46,luminateId: "SG4634567890123456789012345678046",songEquivalent: 85140,title: "-",artist: "-"},
    {rank: 47,luminateId: "SG4734567890123456789012345678047",songEquivalent: 83618,title: "-",artist: "-"},
    {rank: 48,luminateId: "SG4834567890123456789012345678048",songEquivalent: 82096,title: "-",artist: "-"},
    {rank: 49,luminateId: "SG4934567890123456789012345678049",songEquivalent: 80574,title: "-",artist: "-"},
    {rank: 50,luminateId: "SGB982A39854AD49E291951C7F24C9590B",songEquivalent: 79052,title: "Dan",artist: "Noah Kahan"},
    {rank: 51,luminateId: "SG5134567890123456789012345678051",songEquivalent: 77906,title: "-",artist: "-"},
    {rank: 52,luminateId: "SG5234567890123456789012345678052",songEquivalent: 76761,title: "-",artist: "-"},
    {rank: 53,luminateId: "SG5334567890123456789012345678053",songEquivalent: 75616,title: "-",artist: "-"},
    {rank: 54,luminateId: "SG5434567890123456789012345678054",songEquivalent: 74471,title: "-",artist: "-"},
    {rank: 55,luminateId: "SG5534567890123456789012345678055",songEquivalent: 73326,title: "-",artist: "-"},
    {rank: 56,luminateId: "SG5634567890123456789012345678056",songEquivalent: 72181,title: "-",artist: "-"},
    {rank: 57,luminateId: "SG5734567890123456789012345678057",songEquivalent: 71035,title: "-",artist: "-"},
    {rank: 58,luminateId: "SG5834567890123456789012345678058",songEquivalent: 69890,title: "-",artist: "-"},
    {rank: 59,luminateId: "SG5934567890123456789012345678059",songEquivalent: 68745,title: "-",artist: "-"},
    {rank: 60,luminateId: "SG6034567890123456789012345678060",songEquivalent: 67600,title: "-",artist: "-"},
    {rank: 61,luminateId: "SG6134567890123456789012345678061",songEquivalent: 66455,title: "-",artist: "-"},
    {rank: 62,luminateId: "SG6234567890123456789012345678062",songEquivalent: 65310,title: "-",artist: "-"},
    {rank: 63,luminateId: "SG6334567890123456789012345678063",songEquivalent: 64164,title: "-",artist: "-"},
    {rank: 64,luminateId: "SG6434567890123456789012345678064",songEquivalent: 63019,title: "-",artist: "-"},
    {rank: 65,luminateId: "SG6534567890123456789012345678065",songEquivalent: 61874,title: "-",artist: "-"},
    {rank: 66,luminateId: "SG6634567890123456789012345678066",songEquivalent: 60729,title: "-",artist: "-"},
    {rank: 67,luminateId: "SG6734567890123456789012345678067",songEquivalent: 59584,title: "-",artist: "-"},
    {rank: 68,luminateId: "SG6834567890123456789012345678068",songEquivalent: 58439,title: "-",artist: "-"},
    {rank: 69,luminateId: "SG6934567890123456789012345678069",songEquivalent: 57293,title: "-",artist: "-"},
    {rank: 70,luminateId: "SG7034567890123456789012345678070",songEquivalent: 56148,title: "-",artist: "-"},
    {rank: 71,luminateId: "SG7134567890123456789012345678071",songEquivalent: 55003,title: "-",artist: "-"},
    {rank: 72,luminateId: "SG7234567890123456789012345678072",songEquivalent: 53858,title: "-",artist: "-"},
    {rank: 73,luminateId: "SG7334567890123456789012345678073",songEquivalent: 52713,title: "-",artist: "-"},
    {rank: 74,luminateId: "SG7434567890123456789012345678074",songEquivalent: 51568,title: "-",artist: "-"},
    {rank: 75,luminateId: "SG02EE7E78F863461DB503CC529511125D",songEquivalent: 50423,title: "I SAW YOUR FACE",artist: "Malcolm Todd"},
    {rank: 76,luminateId: "SG7634567890123456789012345678076",songEquivalent: 49786,title: "-",artist: "-"},
    {rank: 77,luminateId: "SG7734567890123456789012345678077",songEquivalent: 49150,title: "-",artist: "-"},
    {rank: 78,luminateId: "SG7834567890123456789012345678078",songEquivalent: 48514,title: "-",artist: "-"},
    {rank: 79,luminateId: "SG7934567890123456789012345678079",songEquivalent: 47877,title: "-",artist: "-"},
    {rank: 80,luminateId: "SG8034567890123456789012345678080",songEquivalent: 47241,title: "-",artist: "-"},
    {rank: 81,luminateId: "SG8134567890123456789012345678081",songEquivalent: 46605,title: "-",artist: "-"},
    {rank: 82,luminateId: "SG8234567890123456789012345678082",songEquivalent: 45968,title: "-",artist: "-"},
    {rank: 83,luminateId: "SG8334567890123456789012345678083",songEquivalent: 45332,title: "-",artist: "-"},
    {rank: 84,luminateId: "SG8434567890123456789012345678084",songEquivalent: 44696,title: "-",artist: "-"},
    {rank: 85,luminateId: "SG8534567890123456789012345678085",songEquivalent: 44059,title: "-",artist: "-"},
    {rank: 86,luminateId: "SG8634567890123456789012345678086",songEquivalent: 43423,title: "-",artist: "-"},
    {rank: 87,luminateId: "SG8734567890123456789012345678087",songEquivalent: 42787,title: "-",artist: "-"},
    {rank: 88,luminateId: "SG8834567890123456789012345678088",songEquivalent: 42150,title: "-",artist: "-"},
    {rank: 89,luminateId: "SG8934567890123456789012345678089",songEquivalent: 41514,title: "-",artist: "-"},
    {rank: 90,luminateId: "SG9034567890123456789012345678090",songEquivalent: 40878,title: "-",artist: "-"},
    {rank: 91,luminateId: "SG9134567890123456789012345678091",songEquivalent: 40241,title: "-",artist: "-"},
    {rank: 92,luminateId: "SG9234567890123456789012345678092",songEquivalent: 39605,title: "-",artist: "-"},
    {rank: 93,luminateId: "SG9334567890123456789012345678093",songEquivalent: 38969,title: "-",artist: "-"},
    {rank: 94,luminateId: "SG9434567890123456789012345678094",songEquivalent: 38332,title: "-",artist: "-"},
    {rank: 95,luminateId: "SG9534567890123456789012345678095",songEquivalent: 37696,title: "-",artist: "-"},
    {rank: 96,luminateId: "SG9634567890123456789012345678096",songEquivalent: 37060,title: "-",artist: "-"},
    {rank: 97,luminateId: "SG9734567890123456789012345678097",songEquivalent: 36423,title: "-",artist: "-"},
    {rank: 98,luminateId: "SG9834567890123456789012345678098",songEquivalent: 35787,title: "-",artist: "-"},
    {rank: 99,luminateId: "SG9934567890123456789012345678099",songEquivalent: 35151,title: "-",artist: "-"},
    {rank: 100,luminateId: "SG8BB084B86F384281B9F5C6399715354B",songEquivalent: 34515,title: "silent treatment",artist: "Freya Skye"},
  ],
};

export const divisors = {
  subscription: 107,
  adSupported: 396,
  programmed: 700,
  airplay: 864,
  sales: 1,
};
