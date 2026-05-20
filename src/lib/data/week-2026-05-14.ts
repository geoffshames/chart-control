// Week ending May 14, 2026 - Billboard Hot 100 Chart Data
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

export const week20260514: ChartWeekData = {
  chartId: "CR04000",
  chartName: "Billboard Hot 100",
  weekStart: "2026-05-08",
  weekEnding: "2026-05-14",
  chartPublishDate: "2026-05-19",
  pulledAt: "2026-05-20T16:19:32Z",
  source: "luminate",
  thresholdPoints: {
    1: 314297,
    10: 144765,
    25: 102347,
    50: 66246,
    75: 46112,
    100: 32203,
  },
  rows: [
    {rank: 1,luminateId: "SGFABFA59A35564C4DBF9D4EF5551C42D4",songEquivalent: 314297,title: "Choosin' Texas",artist: "Ella Langley"},
    {rank: 2,luminateId: "SGD57E5018E89C4A09852530EE06EA1F5B",songEquivalent: 202136,title: "BE HER",artist: "Ella Langley"},
    {rank: 3,luminateId: "SGE168AB2A27BE4EC5B73B06A14CE4954F",songEquivalent: 187286,title: "Man I Need",artist: "Olivia Dean"},
    {rank: 4,luminateId: "SGF94BEE8684DE40FBB02614F434A115C8",songEquivalent: 184991,title: "I Just Might",artist: "Bruno Mars"},
    {rank: 5,luminateId: "SG76E219D57BE24C519B00B25BBA43C727",songEquivalent: 175913,title: "So Easy (To Fall In Love)",artist: "Olivia Dean"},
    {rank: 6,luminateId: "SGE7166623E2A04864AABD59D863D25C09",songEquivalent: 175466,title: "Ordinary",artist: "Alex Warren"},
    {rank: 7,luminateId: "SG622DDCE0CDE142BD8473E600CD393843",songEquivalent: 158007,title: "drop dead",artist: "Olivia Rodrigo"},
    {rank: 8,luminateId: "SG3A638A472B93487F9B46DE68A006B4C6",songEquivalent: 150157,title: "Risk It All",artist: "Bruno Mars"},
    {rank: 9,luminateId: "SG405C130DC6094EEF94DDFB8795512C96",songEquivalent: 147549,title: "Folded",artist: "Kehlani"},
    {rank: 10,luminateId: "SG90A0A237C9F34B4592DED17B31925F45",songEquivalent: 144765,title: "DRACULA",artist: "TAME IMPALA, JENNIE & BOYS NOIZE"},
    {rank: 11,luminateId: "SG06205DB4BADB4032B0E3DEC106D9A265",songEquivalent: 142903,title: "I CAN'T LOVE YOU ANYMORE",artist: "ELLA LANGLEY & MORGAN WALLEN"},
    {rank: 12,luminateId: "SG3B1DD3F870FA4580A8D9735DF1546EE0",songEquivalent: 142510,title: "STATESIDE",artist: "PinkPantheress, Zara Larsson"},
    {rank: 13,luminateId: "SGB45813CEEE7348A8A37786459728F22F",songEquivalent: 138200,title: "Golden",artist: "AUDREY NUNA, EJAE, Kpop Demon Hunters Cast, REI AMI, HUNTR/X"},
    {rank: 14,luminateId: "SG1D584E2778FF4D43B5AA15A3890F05A1",songEquivalent: 130318,title: "The Fate of Ophelia",artist: "Taylor Swift"},
    {rank: 15,luminateId: "SGA07373ED675A49E3BC3D88F04C3C1C3D",songEquivalent: 128978,title: "Billie Jean",artist: "Michael Jackson"},
    {rank: 16,luminateId: "SG53961D1F844140019FE9C80151F133F0",songEquivalent: 122231,title: "DAISIES",artist: "Justin Bieber"},
    {rank: 17,luminateId: "SG9097DCBB44EF4BB7BE2B0BE0CE15139D",songEquivalent: 114393,title: "SLEEPLESS IN A HOTEL ROOM",artist: "Luke Combs"},
    {rank: 18,luminateId: "SGC21AFB6070504381A51AA07227FF4190",songEquivalent: 110199,title: "Opalite",artist: "Taylor Swift"},
    {rank: 19,luminateId: "SGC7275C062D254335BD71DC012C9D816D",songEquivalent: 108211,title: "HOMEWRECKER",artist: "SOMBR"},
    {rank: 20,luminateId: "SGFB9F17BBD21C443F823F358E6A34942C",songEquivalent: 106638,title: "Boston",artist: "STELLA LEFTY"},
    {rank: 21,luminateId: "SGA541A0EDE8A543838F78C3C85595FB25",songEquivalent: 104844,title: "Human Nature",artist: "MICHAEL JACKSON"},
    {rank: 22,luminateId: "SG67CA4B8DAB304ADD96E3277E4E77188A",songEquivalent: 103887,title: "BE BY YOU",artist: "Luke Combs"},
    {rank: 23,luminateId: "SG6710A6FC741F439ABEB9FF8D95642947",songEquivalent: 103826,title: "The Great Divide",artist: "Noah Kahan"},
    {rank: 24,luminateId: "SGD09FC7F149F14C37962814F94D60DA59",songEquivalent: 102530,title: "BABYDOLL",artist: "DOMINIC FIKE"},
    {rank: 25,luminateId: "SG19279749C59A4F9DBD45FBDE65B17545",songEquivalent: 102347,title: "Midnight Sun",artist: "Zara Larsson"},
    {rank: 26,luminateId: "SGDB8E3F74C04447DCBEB42CD011EFB5F6",songEquivalent: 100161,title: "EARRINGS",artist: "MALCOLM TODD"},
    {rank: 27,luminateId: "SG7FBC43DE7B5D47849E957E5F0BCF2AC3",songEquivalent: 99743,title: "POP DAT THANG",artist: "DaBaby"},
    {rank: 28,luminateId: "SG96AD6D32578E4F89832308B00F1A71FE",songEquivalent: 99461,title: "The Fall",artist: "CODY JOHNSON"},
    {rank: 29,luminateId: "SGF0C01B69E29843D19B87A93856B49C3F",songEquivalent: 96276,title: "Beat It",artist: "Michael Jackson"},
    {rank: 30,luminateId: "SGE0E1CCE0762F4D8CA98774C2F77B8CAC",songEquivalent: 94642,title: "Doors",artist: "Noah Kahan"},
    {rank: 31,luminateId: "SG370A3959D9F74ED8BD1260C7DB1759FA",songEquivalent: 92525,title: "Change My Mind",artist: "Riley Green"},
    {rank: 32,luminateId: "SG7220020221B342269D1294EE957FD3E9",songEquivalent: 91385,title: "E85",artist: "Don Toliver"},
    {rank: 33,luminateId: "SG36C1FFC5A5594664A7E746AB9ED016E0",songEquivalent: 90442,title: "LOVING LIFE AGAIN",artist: "ELLA LANGLEY"},
    {rank: 34,luminateId: "SG1E2F4BC34150467EAB07378E58B69995",songEquivalent: 88154,title: "SWIM",artist: "BTS"},
    {rank: 35,luminateId: "SGF05FADEA341442F6899B74592813A1C3",songEquivalent: 86548,title: "Freakin' Out",artist: "Dexter and The Moonrocks"},
    {rank: 36,luminateId: "SGA098FE68EB1045BDB2F16494B61F71DE",songEquivalent: 86435,title: "Don't Stop Til You Get Enough",artist: "Michael Jackson"},
    {rank: 37,luminateId: "SG7D8AA6611DFB43FBA52AD6264D7BF5C7",songEquivalent: 81984,title: "AMERICAN GIRLS",artist: "Harry Styles"},
    {rank: 38,luminateId: "SG60C10C67315B45CCB46E210BEF627C3D",songEquivalent: 81104,title: "ILOVEITILOVEITILOVEIT",artist: "Bella Kay"},
    {rank: 39,luminateId: "SGE428E19F60BD4542884566DCD8D5FE0D",songEquivalent: 74366,title: "Brunette",artist: "Tucker Wetmore"},
    {rank: 40,luminateId: "SG038DB5740450460FB1F6BAB15BB82AF9",songEquivalent: 74248,title: "Body",artist: "Don Toliver"},
    {rank: 41,luminateId: "SG97015C62FB75493ABC7AD029367A0DE2",songEquivalent: 73045,title: "Die On This Hill",artist: "SIENNA SPIRO"},
    {rank: 42,luminateId: "SGC59CFBEFD537408DBAC608430EC9DBE5",songEquivalent: 72002,title: "Lush Life",artist: "Zara Larsson"},
    {rank: 43,luminateId: "SG91B71AAEDFB64649AB4677D330E154F4",songEquivalent: 71578,title: "FEVER DREAM",artist: "Alex Warren"},
    {rank: 44,luminateId: "SGE6A1A2CA15744DBC87923E7DDB00D81F",songEquivalent: 69521,title: "Dirty Diana",artist: "Michael Jackson"},
    {rank: 45,luminateId: "SGC5AB0FAE17E0415FA3106EBC370EBE38",songEquivalent: 68017,title: "Dandelion",artist: "ELLA LANGLEY"},
    {rank: 46,luminateId: "SG58611869FD42432994AC7D5D925AC33D",songEquivalent: 67951,title: "Willing and Able",artist: "Noah Kahan"},
    {rank: 47,luminateId: "SG57A0C101864F4C1A891CBB0A0660BB44",songEquivalent: 67605,title: "Rock With You",artist: "Michael Jackson"},
    {rank: 48,luminateId: "SG48CFDF492F694A9BB47036C7C1E765B1",songEquivalent: 67552,title: "LET 'EM KNOW",artist: "T.I."},
    {rank: 49,luminateId: "SG62AEA942404841C3BA39743E84FDFDAD",songEquivalent: 67258,title: "End of August",artist: "Noah Kahan"},
    {rank: 50,luminateId: "SG1C2D81EE71B14BDFA7FC2EACF523CCDC",songEquivalent: 66246,title: "Elizabeth Taylor",artist: "Taylor Swift"},
    {rank: 51,luminateId: "SGD8A27AFED7F04CB29580C85A68163D3F",songEquivalent: 66058,title: "BOTTOM OF YOUR BOOTS",artist: "ELLA LANGLEY"},
    {rank: 52,luminateId: "SG87542FD441884453A5501E541FDB20E5",songEquivalent: 65296,title: "Don't We",artist: "Morgan Wallen"},
    {rank: 53,luminateId: "SGD7249D38C1DF4BA298FFACFC966B035D",songEquivalent: 64496,title: "Porch Light",artist: "Noah Kahan"},
    {rank: 54,luminateId: "SGA51AF88FCF5B454295DC692F0F849F66",songEquivalent: 64308,title: "I Ain't Comin' Back",artist: "Morgan Wallen, Post Malone"},
    {rank: 55,luminateId: "SGB53BDD4BE74B4D4E9D073BD84B6F6A24",songEquivalent: 64087,title: "Motion Party",artist: "BossMan Dlow"},
    {rank: 56,luminateId: "SG47494B5FEF0B4B50BE2666C74730FA41",songEquivalent: 63900,title: "Orbiter",artist: "Noah Kahan"},
    {rank: 57,luminateId: "SG194AF411D8E542F7BEE98895B77063D5",songEquivalent: 63677,title: "American Cars",artist: "Noah Kahan"},
    {rank: 58,luminateId: "SGBC180CB177344CCD9ECD8A7EC1EF74D8",songEquivalent: 63147,title: "Dashboard",artist: "Noah Kahan"},
    {rank: 59,luminateId: "SG89C2776FB61548F58558A391E7A860EE",songEquivalent: 62491,title: "White Keys",artist: "Dominic Fike"},
    {rank: 60,luminateId: "SG6ED10ADF3EFD44EDB0087EF025F592E8",songEquivalent: 59665,title: "Cinderella",artist: "Mac Miller"},
    {rank: 61,luminateId: "SG74C7CFBB98E24903BEBCAC63BE831645",songEquivalent: 56745,title: "Staying Still",artist: "Noah Kahan"},
    {rank: 62,luminateId: "SGAD57C3695C404046A88D12E8065147A0",songEquivalent: 56554,title: "Downfall",artist: "Noah Kahan"},
    {rank: 63,luminateId: "SG3C75635FD045437C8EFDA2803972C1E5",songEquivalent: 55780,title: "OBVIOUS",artist: "CHRIS BROWN"},
    {rank: 64,luminateId: "SG8CE4A99B886A4DCFB7095CA540BD75F2",songEquivalent: 55393,title: "Raindance",artist: "Tems, Dave"},
    {rank: 65,luminateId: "SG7AF2035A66BE46D983B4A55DDE5B00B5",songEquivalent: 53981,title: "Turn This Truck Around",artist: "Jordan Davis"},
    {rank: 66,luminateId: "SG171283AA61A843708DDDE1C2F4291ED1",songEquivalent: 53673,title: "Dry Spell",artist: "Kacey Musgraves"},
    {rank: 67,luminateId: "SG15B63176917147D19F03E5BB1740EE87",songEquivalent: 53169,title: "Haircut",artist: "Noah Kahan"},
    {rank: 68,luminateId: "SG61AA3491FFE34BBF96C15ED3682F2FD1",songEquivalent: 52884,title: "McArthur",artist: "HARDY,Eric Church,Morgan Wallen,Tim McGraw"},
    {rank: 69,luminateId: "SGAF5EC7409687415BA8BA67F6D97715FD",songEquivalent: 51991,title: "BEAUTIFUL THINGS",artist: "Megan Moroney"},
    {rank: 70,luminateId: "SGB34A93BE8A1F453E853EED9BA9A9D89F",songEquivalent: 49939,title: "What You Need",artist: "Tems"},
    {rank: 71,luminateId: "SGBDF1BF0F368C410681FE1D9C7F755F0D",songEquivalent: 47660,title: "Hate How You Look",artist: "Josh Ross"},
    {rank: 72,luminateId: "SGE1B184D700F34ED7BC388AFA11B07532",songEquivalent: 47305,title: "DON'T TELL ON ME",artist: "Jason Aldean"},
    {rank: 73,luminateId: "SG0FC312BCD0F541E794D2E2E3C955EAE3",songEquivalent: 47277,title: "Self Aware",artist: "Temper City"},
    {rank: 74,luminateId: "SG8DC8479DBC6C44F98AC3950DCD983D8D",songEquivalent: 46794,title: "What You Saying",artist: "Lil Uzi Vert"},
    {rank: 75,luminateId: "SG1F7C2AD7942941019B850542017541EA",songEquivalent: 46112,title: "Deny Deny Deny",artist: "Noah Kahan"},
    {rank: 76,luminateId: "SG467D72E276194EC0946EFAD57833E99D",songEquivalent: 45750,title: "PINKY UP",artist: "KATSEYE"},
    {rank: 77,luminateId: "SGA517289C84BA4BB5A6A66A6771E9AB03",songEquivalent: 45732,title: "Rein Me In",artist: "Sam Fender, Olivia Dean"},
    {rank: 78,luminateId: "SG29A562A0E29040E09B955951F5ED5C35",songEquivalent: 44703,title: "RETHINK SOME THINGS",artist: "LUKE COMBS"},
    {rank: 79,luminateId: "SGB982A39854AD49E291951C7F24C9590B",songEquivalent: 43602,title: "Dan",artist: "Noah Kahan"},
    {rank: 80,luminateId: "SG5B8172878B31497BABFC163F259E0E18",songEquivalent: 43467,title: "FALLIN'",artist: "Chris Brown, Leon Thomas"},
    {rank: 81,luminateId: "SG3FF692FDB8AB4F8DA9315F59663998F2",songEquivalent: 43137,title: "Paid Time Off",artist: "Noah Kahan"},
    {rank: 82,luminateId: "SG101E198C60DB4AE4A5CAF697B5E345DD",songEquivalent: 41393,title: "IN MY ROOM",artist: "Julia Wolf"},
    {rank: 83,luminateId: "SG59F753C1423A41609AC09FED485F7421",songEquivalent: 41303,title: "WOMAN",artist: "Kane Brown"},
    {rank: 84,luminateId: "SG23A6F14033224C7B96EA1504ACD3A472",songEquivalent: 40774,title: "23",artist: "Noah Kahan"},
    {rank: 85,luminateId: "SG1B96C00A8D7D4626915B89D4555E709C",songEquivalent: 38936,title: "For The Moment",artist: "Chris Brown"},
    {rank: 86,luminateId: "SG4FBA9007B72E48F1BC79A3AF57C1DA57",songEquivalent: 38438,title: "ROCK MUSIC",artist: "Charli xcx"},
    {rank: 87,luminateId: "SG5AF2AB6A3D0F4665B1227F72E6BB5D21",songEquivalent: 37853,title: "All Them Horses",artist: "Noah Kahan"},
    {rank: 88,luminateId: "SG769A8B492EE84744AA46BC9CA335A9F7",songEquivalent: 37518,title: "Mr. Know It All",artist: "TEDDY SWIMS"},
    {rank: 89,luminateId: "SG4DC7E4348B354DDAAA4EF6743AA2D047",songEquivalent: 36491,title: "Damned If I Do",artist: "Vincent Mason"},
    {rank: 90,luminateId: "SGA31EC412945F4F7C99C99B60ABCD1C48",songEquivalent: 36250,title: "NOBLE",artist: "F3miii"},
    {rank: 91,luminateId: "SG209798CCEFFB49D7B3E64CC7CA8B9609",songEquivalent: 35787,title: "Rocky Mountain Low",artist: "Corey Kent,Koe Wetzel"},
    {rank: 92,luminateId: "SG0323CDE7AB6B49FDBB5EDE6F09F72C87",songEquivalent: 34835,title: "Honey Pack",artist: "CHRIS BROWN"},
    {rank: 93,luminateId: "SG08AE31397CAA4408BB5DB35FAD94CDFF",songEquivalent: 34290,title: "Sunburn",artist: "Tucker Wetmore"},
    {rank: 94,luminateId: "SG94A77ED2B53841418E238E4D3678BCE8",songEquivalent: 34284,title: "FATHER",artist: "Kanye West, Ye & Travis Scott"},
    {rank: 95,luminateId: "SG3B5E00A4DC6D4D968163FAE79B5796A8",songEquivalent: 34103,title: "Ever Since U Left Me",artist: "Max B, French Montana"},
    {rank: 96,luminateId: "SG6CEB6C4A92E8478EA8805475BB5A5D4D",songEquivalent: 33882,title: "Lighthouse",artist: "Noah Kahan"},
    {rank: 97,luminateId: "SG63B3106414A2401FB3AB3EAE479CA1EF",songEquivalent: 33537,title: "We Go Way Back",artist: "Noah Kahan"},
    {rank: 98,luminateId: "SG09CE7C87C84C445BB661F12FCB93FC3E",songEquivalent: 32746,title: "RUNWAY",artist: "Lady Gaga, Doechii"},
    {rank: 99,luminateId: "SG887C7B4056CC4B9FA7B1E6C00E9A12FB",songEquivalent: 32260,title: "Jane!",artist: "The Long Faces"},
    {rank: 100,luminateId: "SG3C7CDA9AF7B545B3B7F120DAB1D6F95E",songEquivalent: 32203,title: "Go Away",artist: "Weezer"},
  ],
};

export const divisors = {
  subscription: 105,
  adSupported: 494,
  programmed: 700,
  airplay: 921,
  sales: 1,
};
