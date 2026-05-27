// Week ending May 21, 2026 - Billboard Hot 100 Chart Data
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

export const week20260521: ChartWeekData = {
  chartId: "CR04000",
  chartName: "Billboard Hot 100",
  weekStart: "2026-05-15",
  weekEnding: "2026-05-21",
  chartPublishDate: "2026-05-26",
  pulledAt: "2026-05-27T16:22:37.812251Z",
  source: "luminate",
  thresholdPoints: {
    1: 403328,
    10: 248677,
    25: 148295,
    50: 93060,
    75: 65320,
    100: 49806,
  },
  rows: [
    {rank: 1,luminateId: "SGE93E9440988D4341975E27621D828835",songEquivalent: 403328,title: "Janice STFU",artist: "Drake"},
    {rank: 2,luminateId: "SG9D6207F2794542519021687145DF9D29",songEquivalent: 374536,title: "Ran To Atlanta",artist: "Drake,Future,Molly Santana"},
    {rank: 3,luminateId: "SG9F05CF9D0DEA4BDDA88249F8DEF43886",songEquivalent: 336569,title: "Whisper My Name",artist: "Drake"},
    {rank: 4,luminateId: "SG131540E599404A6DA40D613E519BFCB5",songEquivalent: 323181,title: "Shabang",artist: "Drake"},
    {rank: 5,luminateId: "SGFABFA59A35564C4DBF9D4EF5551C42D4",songEquivalent: 317518,title: "Choosin' Texas",artist: "Ella Langley"},
    {rank: 6,luminateId: "SG5886A1B9B36642218B8F26B1D5B5FD7E",songEquivalent: 307747,title: "National Treasures",artist: "Drake"},
    {rank: 7,luminateId: "SG487304603A9041ACA6FBB9B2ACB2FD92",songEquivalent: 291681,title: "Make Them Cry ***",artist: "Drake"},
    {rank: 8,luminateId: "SGAD524ADB362446529721A1893486E6CD",songEquivalent: 282208,title: "Dust",artist: "Drake"},
    {rank: 9,luminateId: "SGF454E9B9BA6B46E2AC10D3F17054F4BE",songEquivalent: 270096,title: "2 Hard 4 The Radio",artist: "Drake"},
    {rank: 10,luminateId: "SG3DC75973972D4CD79DADE8BA8F6CD220",songEquivalent: 248677,title: "... Make Them Pay ...",artist: "Drake"},
    {rank: 11,luminateId: "SGCDA93968CDE34906A326672AAA127E82",songEquivalent: 236872,title: "Plot Twist",artist: "Drake"},
    {rank: 12,luminateId: "SG860844AB7EFE4A32BE416A8483D3CC52",songEquivalent: 223436,title: "B\u2019s On The Table",artist: "Drake Feat. 21 Savage"},
    {rank: 13,luminateId: "SG7C213E63D05F4A86B76E80A1DDE291B0",songEquivalent: 217240,title: "Burning Bridges",artist: "Drake"},
    {rank: 14,luminateId: "SGD57E5018E89C4A09852530EE06EA1F5B",songEquivalent: 208801,title: "BE HER",artist: "Ella Langley"},
    {rank: 15,luminateId: "SG7278A493B5BD4C968F5E606C755840F5",songEquivalent: 193888,title: "What Did I Miss?",artist: "Drake"},
    {rank: 16,luminateId: "SGF94BEE8684DE40FBB02614F434A115C8",songEquivalent: 182315,title: "I Just Might",artist: "Bruno Mars"},
    {rank: 17,luminateId: "SGE168AB2A27BE4EC5B73B06A14CE4954F",songEquivalent: 180509,title: "Man I Need",artist: "Olivia Dean"},
    {rank: 18,luminateId: "SG80774979F05C4365A458F417FE372631",songEquivalent: 179981,title: "Little Birdie",artist: "Drake"},
    {rank: 19,luminateId: "SG284B9CDB931F41839E2E4597006A1E83",songEquivalent: 176554,title: "Make Them Remember",artist: "Drake"},
    {rank: 20,luminateId: "SG76E219D57BE24C519B00B25BBA43C727",songEquivalent: 171811,title: "So Easy (To Fall In Love)",artist: "Olivia Dean"},
    {rank: 21,luminateId: "SG5B10BF0FA5F54D1DB9D20421DC032A81",songEquivalent: 158633,title: "Make Them Know",artist: "Drake"},
    {rank: 22,luminateId: "SG318ED98DC2C249BAB9EBDB84062BF6A4",songEquivalent: 155783,title: "Hoe Phase",artist: "Drake"},
    {rank: 23,luminateId: "SG4673E851B6884364A8EF1D00506C4671",songEquivalent: 155048,title: "Don\u2019t Worry",artist: "Drake"},
    {rank: 24,luminateId: "SG06205DB4BADB4032B0E3DEC106D9A265",songEquivalent: 155015,title: "I CAN'T LOVE YOU ANYMORE",artist: "ELLA LANGLEY & MORGAN WALLEN"},
    {rank: 25,luminateId: "SG14D5D69C184B4DD0BBDBCC0B95961C5A",songEquivalent: 148295,title: "DRACULA",artist: "TAME IMPALA, JENNIE & BOYS NOIZE"},
    {rank: 26,luminateId: "SG3A638A472B93487F9B46DE68A006B4C6",songEquivalent: 142634,title: "Risk It All",artist: "Bruno Mars"},
    {rank: 27,luminateId: "SG3B1DD3F870FA4580A8D9735DF1546EE0",songEquivalent: 141497,title: "STATESIDE",artist: "PinkPantheress, Zara Larsson"},
    {rank: 28,luminateId: "SG748DE3CF014E45FBB14BFFAC31BE9D25",songEquivalent: 141358,title: "WNBA",artist: "Drake"},
    {rank: 29,luminateId: "SG405C130DC6094EEF94DDFB8795512C96",songEquivalent: 141215,title: "Folded",artist: "Kehlani"},
    {rank: 30,luminateId: "SG622DDCE0CDE142BD8473E600CD393843",songEquivalent: 139475,title: "drop dead",artist: "Olivia Rodrigo"},
    {rank: 31,luminateId: "SGF2D0A266D85049858D2A76AD848F2F40",songEquivalent: 138318,title: "Firm Friends",artist: "Drake"},
    {rank: 32,luminateId: "SGA07373ED675A49E3BC3D88F04C3C1C3D",songEquivalent: 131956,title: "Billie Jean",artist: "Michael Jackson"},
    {rank: 33,luminateId: "SGFB9F17BBD21C443F823F358E6A34942C",songEquivalent: 126191,title: "Boston",artist: "STELLA LEFTY"},
    {rank: 34,luminateId: "SG16A9220972D34BDAAD84CF855125EEAC",songEquivalent: 121179,title: "I\u2019m Spent",artist: "Drake,Loe Shimmy"},
    {rank: 35,luminateId: "SGDA28554CBB644954A4F1C79EF9988BF3",songEquivalent: 117648,title: "Classic",artist: "Drake"},
    {rank: 36,luminateId: "SG56D4128D4A2B45C8B89EA2DC22BC323E",songEquivalent: 112850,title: "Fortworth",artist: "Drake Feat. PARTYNEXTDOOR"},
    {rank: 37,luminateId: "SG9097DCBB44EF4BB7BE2B0BE0CE15139D",songEquivalent: 111833,title: "SLEEPLESS IN A HOTEL ROOM",artist: "Luke Combs"},
    {rank: 38,luminateId: "SG19279749C59A4F9DBD45FBDE65B17545",songEquivalent: 108431,title: "Midnight Sun",artist: "Zara Larsson"},
    {rank: 39,luminateId: "SG176D0F99A5174BA58CFB7254AE025B7C",songEquivalent: 108428,title: "Slap The City",artist: "Drake"},
    {rank: 40,luminateId: "SGC7275C062D254335BD71DC012C9D816D",songEquivalent: 108149,title: "HOMEWRECKER",artist: "SOMBR"},
    {rank: 41,luminateId: "SG6B72A0C023B8468C8BF04DC3B6DFD52B",songEquivalent: 107292,title: "Cheetah Print",artist: "Drake,Sexyy Red"},
    {rank: 42,luminateId: "SGBC301C53BA6A4ED8A41D9FAA526BADEF",songEquivalent: 107274,title: "Road Trips",artist: "Drake"},
    {rank: 43,luminateId: "SG96961E2BD3614DC7B81B5D892109DD25",songEquivalent: 105119,title: "High Fives",artist: "Drake"},
    {rank: 44,luminateId: "SGA541A0EDE8A543838F78C3C85595FB25",songEquivalent: 101731,title: "Human Nature",artist: "Michael Jackson"},
    {rank: 45,luminateId: "SGDB8E3F74C04447DCBEB42CD011EFB5F6",songEquivalent: 100881,title: "EARRINGS",artist: "MALCOLM TODD"},
    {rank: 46,luminateId: "SGD09FC7F149F14C37962814F94D60DA59",songEquivalent: 100612,title: "BABYDOLL",artist: "DOMINIC FIKE"},
    {rank: 47,luminateId: "SGF0C01B69E29843D19B87A93856B49C3F",songEquivalent: 99935,title: "Beat It",artist: "Michael Jackson"},
    {rank: 48,luminateId: "SGB9349857870E4F5AAB6E4D94DB31DF80",songEquivalent: 98669,title: "Hit the Wall",artist: "Gracie Abrams"},
    {rank: 49,luminateId: "SG370A3959D9F74ED8BD1260C7DB1759FA",songEquivalent: 93358,title: "Change My Mind",artist: "Riley Green"},
    {rank: 50,luminateId: "SG7220020221B342269D1294EE957FD3E9",songEquivalent: 93060,title: "E85",artist: "Don Toliver"},
    {rank: 51,luminateId: "SG7FBC43DE7B5D47849E957E5F0BCF2AC3",songEquivalent: 92005,title: "POP DAT THANG",artist: "DaBaby"},
    {rank: 52,luminateId: "SG6710A6FC741F439ABEB9FF8D95642947",songEquivalent: 90655,title: "The Great Divide",artist: "Noah Kahan"},
    {rank: 53,luminateId: "SG36C1FFC5A5594664A7E746AB9ED016E0",songEquivalent: 89522,title: "LOVING LIFE AGAIN",artist: "ELLA LANGLEY"},
    {rank: 54,luminateId: "SG67CA4B8DAB304ADD96E3277E4E77188A",songEquivalent: 88423,title: "BE BY YOU",artist: "Luke Combs"},
    {rank: 55,luminateId: "SG1E2F4BC34150467EAB07378E58B69995",songEquivalent: 85260,title: "SWIM",artist: "BTS"},
    {rank: 56,luminateId: "SGC0F29DD83C88496299B2CA747B0C9FAD",songEquivalent: 83973,title: "Gen 5",artist: "Drake"},
    {rank: 57,luminateId: "SG896B44AB4D3242318A3AE505ECD68E52",songEquivalent: 83807,title: "White Bone",artist: "Drake"},
    {rank: 58,luminateId: "SGE0E1CCE0762F4D8CA98774C2F77B8CAC",songEquivalent: 82085,title: "Doors",artist: "Noah Kahan"},
    {rank: 59,luminateId: "SGE428E19F60BD4542884566DCD8D5FE0D",songEquivalent: 81479,title: "Brunette",artist: "Tucker Wetmore"},
    {rank: 60,luminateId: "SGF05FADEA341442F6899B74592813A1C3",songEquivalent: 81405,title: "Freakin\u2019 Out",artist: "Dexter and The Moonrocks"},
    {rank: 61,luminateId: "SG6403A2E662CC400898EFCEF3B37CFD1A",songEquivalent: 81087,title: "Hurrr Nor Thurrr",artist: "Drake, Sexyy Red"},
    {rank: 62,luminateId: "SG7D8AA6611DFB43FBA52AD6264D7BF5C7",songEquivalent: 79948,title: "AMERICAN GIRLS",artist: "Harry Styles"},
    {rank: 63,luminateId: "SG688F2A621DAD4047B198CC233968D08B",songEquivalent: 77794,title: "Which One",artist: "Drake, Central Cee"},
    {rank: 64,luminateId: "SG60C10C67315B45CCB46E210BEF627C3D",songEquivalent: 75410,title: "Replay",artist: "Bella Kay"},
    {rank: 65,luminateId: "SG69F5556605F84525B62E3524F6E4DEAD",songEquivalent: 71317,title: "Outside Tweaking",artist: "Drake,Stunna Sandy"},
    {rank: 66,luminateId: "SG91B71AAEDFB64649AB4677D330E154F4",songEquivalent: 70421,title: "FEVER DREAM",artist: "Alex Warren"},
    {rank: 67,luminateId: "SG694495E563E14F0BB206B582CF699F17",songEquivalent: 70301,title: "True Bestie",artist: "Drake,Iconic Savvy"},
    {rank: 68,luminateId: "SG038DB5740450460FB1F6BAB15BB82AF9",songEquivalent: 70228,title: "Body",artist: "Don Toliver"},
    {rank: 69,luminateId: "SG87542FD441884453A5501E541FDB20E5",songEquivalent: 70076,title: "Don't We",artist: "Morgan Wallen"},
    {rank: 70,luminateId: "SG97015C62FB75493ABC7AD029367A0DE2",songEquivalent: 69460,title: "Die On This Hill",artist: "SIENNA SPIRO"},
    {rank: 71,luminateId: "SG825073B2FC49452FB2CF666A68AC064C",songEquivalent: 68420,title: "Rusty Intro",artist: "Drake"},
    {rank: 72,luminateId: "SG4E4479EAE20E4428B051FDE3D9CC485E",songEquivalent: 67961,title: "New Bestie",artist: "Drake"},
    {rank: 73,luminateId: "SGC5AB0FAE17E0415FA3106EBC370EBE38",songEquivalent: 66740,title: "Dandelion",artist: "ELLA LANGLEY"},
    {rank: 74,luminateId: "SG3E3AB660433B4FD7BBB2FA3405DFC82F",songEquivalent: 66712,title: "BBW",artist: "Drake"},
    {rank: 75,luminateId: "SGC59CFBEFD537408DBAC608430EC9DBE5",songEquivalent: 65320,title: "Lush Life",artist: "Zara Larsson"},
    {rank: 76,luminateId: "SG3A57DA6877CA4D1F9BFC88BC86A979DA",songEquivalent: 65145,title: "Amazing Shape",artist: "Drake,Popcaan"},
    {rank: 77,luminateId: "SGB53BDD4BE74B4D4E9D073BD84B6F6A24",songEquivalent: 64755,title: "Motion Party",artist: "BossMan Dlow"},
    {rank: 78,luminateId: "SGD8A27AFED7F04CB29580C85A68163D3F",songEquivalent: 64270,title: "BOTTOM OF YOUR BOOTS",artist: "ELLA LANGLEY"},
    {rank: 79,luminateId: "SG48CFDF492F694A9BB47036C7C1E765B1",songEquivalent: 63231,title: "LET 'EM KNOW",artist: "T.I."},
    {rank: 80,luminateId: "SG6ED10ADF3EFD44EDB0087EF025F592E8",songEquivalent: 63129,title: "Cinderella",artist: "Mac Miller"},
    {rank: 81,luminateId: "SG1C2D81EE71B14BDFA7FC2EACF523CCDC",songEquivalent: 62856,title: "Elizabeth Taylor",artist: "Taylor Swift"},
    {rank: 82,luminateId: "SG82155C36C66B4A0B8B18B892A85E477F",songEquivalent: 62226,title: "Prioritizing",artist: "Drake"},
    {rank: 83,luminateId: "SG47494B5FEF0B4B50BE2666C74730FA41",songEquivalent: 59365,title: "Orbiter",artist: "Noah Kahan"},
    {rank: 84,luminateId: "SG7AF2035A66BE46D983B4A55DDE5B00B5",songEquivalent: 58601,title: "Turn This Truck Around",artist: "Jordan Davis"},
    {rank: 85,luminateId: "SG6E735FACFA11448F83D1455114C44B7E",songEquivalent: 56799,title: "Q&A",artist: "Drake"},
    {rank: 86,luminateId: "SG58611869FD42432994AC7D5D925AC33D",songEquivalent: 55629,title: "Willing and Able",artist: "Noah Kahan"},
    {rank: 87,luminateId: "SG89C2776FB61548F58558A391E7A860EE",songEquivalent: 55184,title: "White Keys",artist: "Dominic Fike"},
    {rank: 88,luminateId: "SG40744E87EDC044D0A10827F17F1178EA",songEquivalent: 54603,title: "Goose and The Juice",artist: "Drake"},
    {rank: 89,luminateId: "SGE1B184D700F34ED7BC388AFA11B07532",songEquivalent: 53200,title: "DON'T TELL ON ME",artist: "Jason Aldean"},
    {rank: 90,luminateId: "SGD7249D38C1DF4BA298FFACFC966B035D",songEquivalent: 53075,title: "Porch Light",artist: "Noah Kahan"},
    {rank: 91,luminateId: "SGBDF1BF0F368C410681FE1D9C7F755F0D",songEquivalent: 52693,title: "Hate How You Look",artist: "Josh Ross"},
    {rank: 92,luminateId: "SG0EB78EE4724B42F6BD7C49C4BEA78DE5",songEquivalent: 52386,title: "Princess",artist: "Drake"},
    {rank: 93,luminateId: "SG370E4878B4B74BDCA7892FBB17D739A0",songEquivalent: 52270,title: "Stuck",artist: "Drake"},
    {rank: 94,luminateId: "SG62AEA942404841C3BA39743E84FDFDAD",songEquivalent: 52225,title: "End of August",artist: "Noah Kahan"},
    {rank: 95,luminateId: "SGAF5EC7409687415BA8BA67F6D97715FD",songEquivalent: 51686,title: "BEAUTIFUL THINGS",artist: "Megan Moroney"},
    {rank: 96,luminateId: "SG8CE4A99B886A4DCFB7095CA540BD75F2",songEquivalent: 51515,title: "Raindance",artist: "Tems, Dave"},
    {rank: 97,luminateId: "SG61AA3491FFE34BBF96C15ED3682F2FD1",songEquivalent: 51400,title: "McArthur",artist: "HARDY,Eric Church,Morgan Wallen,Tim McGraw"},
    {rank: 98,luminateId: "SG171283AA61A843708DDDE1C2F4291ED1",songEquivalent: 50960,title: "Dry Spell",artist: "Kacey Musgraves"},
    {rank: 99,luminateId: "SG194AF411D8E542F7BEE98895B77063D5",songEquivalent: 50530,title: "American Cars",artist: "Noah Kahan"},
    {rank: 100,luminateId: "SGBC180CB177344CCD9ECD8A7EC1EF74D8",songEquivalent: 49806,title: "Dashboard",artist: "Noah Kahan"},
  ],
};
