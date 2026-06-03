// Week ending May 28, 2026 - Billboard Hot 100 Chart Data
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

export const week20260528: ChartWeekData = {
  chartId: "CR04000",
  chartName: "Billboard Hot 100",
  weekStart: "2026-05-22",
  weekEnding: "2026-05-28",
  chartPublishDate: "2026-06-02",
  pulledAt: "2026-06-03T16:18:45.000000Z",
  source: "luminate",
  thresholdPoints: {
    1: 317956,
    10: 170119,
    25: 107021,
    50: 72404,
    75: 52046,
    100: 38227,
  },
  rows: [
    {rank: 1,luminateId: "SGE93E9440988D4341975E27621D828835",songEquivalent: 317956,title: "Janice STFU",artist: "Drake"},
    {rank: 2,luminateId: "SGFABFA59A35564C4DBF9D4EF5551C42D4",songEquivalent: 305953,title: "Choosin' Texas",artist: "Ella Langley"},
    {rank: 3,luminateId: "SGD57E5018E89C4A09852530EE06EA1F5B",songEquivalent: 209196,title: "BE HER",artist: "Ella Langley"},
    {rank: 4,luminateId: "SG131540E599404A6DA40D613E519BFCB5",songEquivalent: 196834,title: "Shabang",artist: "Drake"},
    {rank: 5,luminateId: "SG32E26F5ACD1742FBA9E8D21D0BECED6C",songEquivalent: 194925,title: "the cure",artist: "Olivia Rodrigo"},
    {rank: 6,luminateId: "SG9D6207F2794542519021687145DF9D29",songEquivalent: 185004,title: "Ran To Atlanta",artist: "Drake, Future, Molly Santana"},
    {rank: 7,luminateId: "SG76E219D57BE24C519B00B25BBA43C727",songEquivalent: 175003,title: "So Easy (To Fall In Love)",artist: "Olivia Dean"},
    {rank: 8,luminateId: "SGF94BEE8684DE40FBB02614F434A115C8",songEquivalent: 174257,title: "I Just Might",artist: "Bruno Mars"},
    {rank: 9,luminateId: "SG9F05CF9D0DEA4BDDA88249F8DEF43886",songEquivalent: 170783,title: "Whisper My Name",artist: "Drake"},
    {rank: 10,luminateId: "SGE168AB2A27BE4EC5B73B06A14CE4954F",songEquivalent: 170119,title: "Man I Need",artist: "Olivia Dean"},
    {rank: 11,luminateId: "SG5886A1B9B36642218B8F26B1D5B5FD7E",songEquivalent: 161957,title: "National Treasures",artist: "Drake"},
    {rank: 12,luminateId: "SG622DDCE0CDE142BD8473E600CD393843",songEquivalent: 157504,title: "drop dead",artist: "Olivia Rodrigo"},
    {rank: 13,luminateId: "SG06205DB4BADB4032B0E3DEC106D9A265",songEquivalent: 155020,title: "I CAN'T LOVE YOU ANYMORE",artist: "ELLA LANGLEY & MORGAN WALLEN"},
    {rank: 14,luminateId: "SG14D5D69C184B4DD0BBDBCC0B95961C5A",songEquivalent: 147758,title: "Dracula",artist: "Tame Impala"},
    {rank: 15,luminateId: "SGF454E9B9BA6B46E2AC10D3F17054F4BE",songEquivalent: 142602,title: "2 Hard 4 The Radio",artist: "Drake"},
    {rank: 16,luminateId: "SG3A638A472B93487F9B46DE68A006B4C6",songEquivalent: 136687,title: "Risk It All",artist: "Bruno Mars"},
    {rank: 17,luminateId: "SG3B1DD3F870FA4580A8D9735DF1546EE0",songEquivalent: 133527,title: "STATESIDE",artist: "PinkPantheress, Zara Larsson"},
    {rank: 18,luminateId: "SG405C130DC6094EEF94DDFB8795512C96",songEquivalent: 131339,title: "Folded",artist: "Kehlani"},
    {rank: 19,luminateId: "SGA07373ED675A49E3BC3D88F04C3C1C3D",songEquivalent: 130688,title: "Billie Jean",artist: "Michael Jackson"},
    {rank: 20,luminateId: "SGFB9F17BBD21C443F823F358E6A34942C",songEquivalent: 129183,title: "Boston",artist: "STELLA LEFTY"},
    {rank: 21,luminateId: "SGCDA93968CDE34906A326672AAA127E82",songEquivalent: 115528,title: "Plot Twist",artist: "Drake"},
    {rank: 22,luminateId: "SG3DC75973972D4CD79DADE8BA8F6CD220",songEquivalent: 109608,title: "... Make Them Pay ...",artist: "Drake"},
    {rank: 23,luminateId: "SGC7275C062D254335BD71DC012C9D816D",songEquivalent: 107609,title: "HOMEWRECKER",artist: "SOMBR"},
    {rank: 24,luminateId: "SGAD524ADB362446529721A1893486E6CD",songEquivalent: 107230,title: "Dust",artist: "Drake"},
    {rank: 25,luminateId: "SG19279749C59A4F9DBD45FBDE65B17545",songEquivalent: 107021,title: "Midnight Sun",artist: "Zara Larsson"},
    {rank: 26,luminateId: "SG9097DCBB44EF4BB7BE2B0BE0CE15139D",songEquivalent: 106485,title: "SLEEPLESS IN A HOTEL ROOM",artist: "Luke Combs"},
    {rank: 27,luminateId: "SG860844AB7EFE4A32BE416A8483D3CC52",songEquivalent: 104883,title: "B’s On The Table",artist: "Drake Feat. 21 Savage"},
    {rank: 28,luminateId: "SG7C213E63D05F4A86B76E80A1DDE291B0",songEquivalent: 104104,title: "Burning Bridges",artist: "Drake"},
    {rank: 29,luminateId: "SGDB8E3F74C04447DCBEB42CD011EFB5F6",songEquivalent: 100055,title: "EARRINGS",artist: "MALCOLM TODD"},
    {rank: 30,luminateId: "SG8D65F1DEF780418B9E18965AE0FFCFE7",songEquivalent: 97882,title: "Chicago",artist: "Michael Jackson"},
    {rank: 31,luminateId: "SGA541A0EDE8A543838F78C3C85595FB25",songEquivalent: 97669,title: "Human Nature",artist: "Michael Jackson"},
    {rank: 32,luminateId: "SG370A3959D9F74ED8BD1260C7DB1759FA",songEquivalent: 95086,title: "Change My Mind",artist: "Riley Green"},
    {rank: 33,luminateId: "SGD09FC7F149F14C37962814F94D60DA59",songEquivalent: 94653,title: "BABYDOLL",artist: "DOMINIC FIKE"},
    {rank: 34,luminateId: "SG7278A493B5BD4C968F5E606C755840F5",songEquivalent: 94129,title: "What Did I Miss?",artist: "Drake"},
    {rank: 35,luminateId: "SG487304603A9041ACA6FBB9B2ACB2FD92",songEquivalent: 91033,title: "Make Them Cry ***",artist: "Drake"},
    {rank: 36,luminateId: "SG67CA4B8DAB304ADD96E3277E4E77188A",songEquivalent: 89887,title: "BE BY YOU",artist: "Luke Combs"},
    {rank: 37,luminateId: "SG36C1FFC5A5594664A7E746AB9ED016E0",songEquivalent: 88505,title: "LOVING LIFE AGAIN",artist: "ELLA LANGLEY"},
    {rank: 38,luminateId: "SG7220020221B342269D1294EE957FD3E9",songEquivalent: 88100,title: "E85",artist: "Don Toliver"},
    {rank: 39,luminateId: "SG80774979F05C4365A458F417FE372631",songEquivalent: 86767,title: "Little Birdie",artist: "Drake"},
    {rank: 40,luminateId: "SG7FBC43DE7B5D47849E957E5F0BCF2AC3",songEquivalent: 85151,title: "POP DAT THANG",artist: "DaBaby"},
    {rank: 41,luminateId: "SG6710A6FC741F439ABEB9FF8D95642947",songEquivalent: 81921,title: "The Great Divide",artist: "Noah Kahan"},
    {rank: 42,luminateId: "SG16A9220972D34BDAAD84CF855125EEAC",songEquivalent: 80984,title: "I’m Spent",artist: "Drake,Loe Shimmy"},
    {rank: 43,luminateId: "SGA098FE68EB1045BDB2F16494B61F71DE",songEquivalent: 79129,title: "Don't Stop Til You Get Enough",artist: "Michael Jackson"},
    {rank: 44,luminateId: "SG1E2F4BC34150467EAB07378E58B69995",songEquivalent: 78237,title: "SWIM",artist: "BTS"},
    {rank: 45,luminateId: "SG4673E851B6884364A8EF1D00506C4671",songEquivalent: 78096,title: "Don’t Worry",artist: "Drake"},
    {rank: 46,luminateId: "SG7D8AA6611DFB43FBA52AD6264D7BF5C7",songEquivalent: 77858,title: "AMERICAN GIRLS",artist: "Harry Styles"},
    {rank: 47,luminateId: "SGF05FADEA341442F6899B74592813A1C3",songEquivalent: 74559,title: "Freakin’ Out",artist: "Dexter and The Moonrocks"},
    {rank: 48,luminateId: "SGB9349857870E4F5AAB6E4D94DB31DF80",songEquivalent: 74476,title: "Hit the Wall",artist: "Gracie Abrams"},
    {rank: 49,luminateId: "SGE428E19F60BD4542884566DCD8D5FE0D",songEquivalent: 74188,title: "Brunette",artist: "Tucker Wetmore"},
    {rank: 50,luminateId: "SG87542FD441884453A5501E541FDB20E5",songEquivalent: 72404,title: "Don't We",artist: "Morgan Wallen"},
    {rank: 51,luminateId: "SG284B9CDB931F41839E2E4597006A1E83",songEquivalent: 71023,title: "Make Them Remember",artist: "Drake"},
    {rank: 52,luminateId: "SG60C10C67315B45CCB46E210BEF627C3D",songEquivalent: 70125,title: "ILOVEITILOVEITILOVEIT",artist: "Bella Kay"},
    {rank: 53,luminateId: "SG5B10BF0FA5F54D1DB9D20421DC032A81",songEquivalent: 69538,title: "Make Them Know",artist: "Drake"},
    {rank: 54,luminateId: "SGE0E1CCE0762F4D8CA98774C2F77B8CAC",songEquivalent: 68842,title: "Doors",artist: "Noah Kahan"},
    {rank: 55,luminateId: "SG6ED10ADF3EFD44EDB0087EF025F592E8",songEquivalent: 68423,title: "Cinderella",artist: "Mac Miller"},
    {rank: 56,luminateId: "SG318ED98DC2C249BAB9EBDB84062BF6A4",songEquivalent: 67594,title: "Hoe Phase",artist: "Drake"},
    {rank: 57,luminateId: "SG748DE3CF014E45FBB14BFFAC31BE9D25",songEquivalent: 66990,title: "WNBA",artist: "Drake"},
    {rank: 58,luminateId: "SGDA28554CBB644954A4F1C79EF9988BF3",songEquivalent: 66933,title: "Classic",artist: "Drake"},
    {rank: 59,luminateId: "SGC59CFBEFD537408DBAC608430EC9DBE5",songEquivalent: 66926,title: "Lush Life",artist: "Zara Larsson"},
    {rank: 60,luminateId: "SG97015C62FB75493ABC7AD029367A0DE2",songEquivalent: 66538,title: "Die On This Hill",artist: "SIENNA SPIRO"},
    {rank: 61,luminateId: "SG038DB5740450460FB1F6BAB15BB82AF9",songEquivalent: 66503,title: "Body",artist: "Don Toliver"},
    {rank: 62,luminateId: "SG4DCB101AC60646C88C0C55DD8AF2F604",songEquivalent: 64568,title: "Motion Party",artist: "BossMan Dlow,Megan Thee Stallion"},
    {rank: 63,luminateId: "SG7AF2035A66BE46D983B4A55DDE5B00B5",songEquivalent: 63938,title: "Turn This Truck Around",artist: "Jordan Davis"},
    {rank: 64,luminateId: "SGC5AB0FAE17E0415FA3106EBC370EBE38",songEquivalent: 63018,title: "Dandelion",artist: "ELLA LANGLEY"},
    {rank: 65,luminateId: "SG91B71AAEDFB64649AB4677D330E154F4",songEquivalent: 62428,title: "FEVER DREAM",artist: "Alex Warren"},
    {rank: 66,luminateId: "SG410C381953A94FA49A5FA9100EAC4329",songEquivalent: 59625,title: "Spend Dat",artist: "Yung Miami"},
    {rank: 67,luminateId: "SG48CFDF492F694A9BB47036C7C1E765B1",songEquivalent: 59621,title: "LET 'EM KNOW",artist: "T.I."},
    {rank: 68,luminateId: "SGD8A27AFED7F04CB29580C85A68163D3F",songEquivalent: 58141,title: "BOTTOM OF YOUR BOOTS",artist: "ELLA LANGLEY"},
    {rank: 69,luminateId: "SGF2D0A266D85049858D2A76AD848F2F40",songEquivalent: 56659,title: "Firm Friends",artist: "Drake"},
    {rank: 70,luminateId: "SG56D4128D4A2B45C8B89EA2DC22BC323E",songEquivalent: 55964,title: "Fortworth",artist: "Drake Feat. PARTYNEXTDOOR"},
    {rank: 71,luminateId: "SG47494B5FEF0B4B50BE2666C74730FA41",songEquivalent: 55901,title: "Orbiter",artist: "Noah Kahan"},
    {rank: 72,luminateId: "SG89C2776FB61548F58558A391E7A860EE",songEquivalent: 53272,title: "White Keys",artist: "Dominic Fike"},
    {rank: 73,luminateId: "SGE1B184D700F34ED7BC388AFA11B07532",songEquivalent: 53119,title: "DON'T TELL ON ME",artist: "Jason Aldean"},
    {rank: 74,luminateId: "SGBDF1BF0F368C410681FE1D9C7F755F0D",songEquivalent: 52880,title: "Hate How You Look",artist: "Josh Ross"},
    {rank: 75,luminateId: "SG171283AA61A843708DDDE1C2F4291ED1",songEquivalent: 52046,title: "Dry Spell",artist: "Kacey Musgraves"},
    {rank: 76,luminateId: "SGAF5EC7409687415BA8BA67F6D97715FD",songEquivalent: 51139,title: "BEAUTIFUL THINGS",artist: "Megan Moroney"},
    {rank: 77,luminateId: "SG96961E2BD3614DC7B81B5D892109DD25",songEquivalent: 50429,title: "High Fives",artist: "Drake"},
    {rank: 78,luminateId: "SG8CE4A99B886A4DCFB7095CA540BD75F2",songEquivalent: 50370,title: "Raindance",artist: "Tems, Dave"},
    {rank: 79,luminateId: "SG176D0F99A5174BA58CFB7254AE025B7C",songEquivalent: 50169,title: "Slap The City",artist: "Drake"},
    {rank: 80,luminateId: "SG61AA3491FFE34BBF96C15ED3682F2FD1",songEquivalent: 49207,title: "McArthur",artist: "HARDY,Eric Church,Morgan Wallen,Tim McGraw"},
    {rank: 81,luminateId: "SGBC301C53BA6A4ED8A41D9FAA526BADEF",songEquivalent: 48597,title: "Road Trips",artist: "Drake"},
    {rank: 82,luminateId: "SG0FC312BCD0F541E794D2E2E3C955EAE3",songEquivalent: 48288,title: "Self Aware",artist: "Temper City"},
    {rank: 83,luminateId: "SG59F753C1423A41609AC09FED485F7421",songEquivalent: 47414,title: "WOMAN",artist: "KANE BROWN"},
    {rank: 84,luminateId: "SGD7249D38C1DF4BA298FFACFC966B035D",songEquivalent: 47297,title: "Porch Light",artist: "Noah Kahan"},
    {rank: 85,luminateId: "SG6B72A0C023B8468C8BF04DC3B6DFD52B",songEquivalent: 47185,title: "Cheetah Print",artist: "Drake,Sexyy Red"},
    {rank: 86,luminateId: "SG58611869FD42432994AC7D5D925AC33D",songEquivalent: 46777,title: "Willing and Able",artist: "Noah Kahan"},
    {rank: 87,luminateId: "SGB34A93BE8A1F453E853EED9BA9A9D89F",songEquivalent: 45875,title: "What You Need",artist: "Tems"},
    {rank: 88,luminateId: "SGA517289C84BA4BB5A6A66A6771E9AB03",songEquivalent: 44396,title: "Rein Me In",artist: "Sam Fender, Olivia Dean"},
    {rank: 89,luminateId: "SG29A562A0E29040E09B955951F5ED5C35",songEquivalent: 43932,title: "RETHINK SOME THINGS",artist: "LUKE COMBS"},
    {rank: 90,luminateId: "SG896B44AB4D3242318A3AE505ECD68E52",songEquivalent: 43731,title: "White Bone",artist: "Drake"},
    {rank: 91,luminateId: "SG62AEA942404841C3BA39743E84FDFDAD",songEquivalent: 43035,title: "End of August",artist: "Noah Kahan"},
    {rank: 92,luminateId: "SG467D72E276194EC0946EFAD57833E99D",songEquivalent: 41593,title: "PINKY UP",artist: "KATSEYE"},
    {rank: 93,luminateId: "SG194AF411D8E542F7BEE98895B77063D5",songEquivalent: 41426,title: "American Cars",artist: "Noah Kahan"},
    {rank: 94,luminateId: "SG7E2B8B459B5849E884087823FFF0A3D6",songEquivalent: 40688,title: "My Way",artist: "Riley Green"},
    {rank: 95,luminateId: "SGBC180CB177344CCD9ECD8A7EC1EF74D8",songEquivalent: 40676,title: "Dashboard",artist: "Noah Kahan"},
    {rank: 96,luminateId: "SGC0F29DD83C884996299B2CA747B0C9FAD",songEquivalent: 40633,title: "Gen 5",artist: "Drake"},
    {rank: 97,luminateId: "SGA31EC412945F4F7C99C99B60ABCD1C48",songEquivalent: 39875,title: "NOBLE",artist: "F3miii"},
    {rank: 98,luminateId: "SG4DC7E4348B354DDAAA4EF6743AA2D047",songEquivalent: 39197,title: "Damned If I Do",artist: "Vincent Mason"},
    {rank: 99,luminateId: "SG769A8B492EE84744AA46BC9CA335A9F7",songEquivalent: 38763,title: "MR. KNOW IT ALL",artist: "TEDDY SWIMS"},
    {rank: 100,luminateId: "SG74C7CFBB98E24903BEBCAC63BE831645",songEquivalent: 38227,title: "Staying Still",artist: "Noah Kahan"},
  ],
};
