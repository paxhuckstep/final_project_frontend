const LOCAL_CONNECTI0N = false;

export const NUMBER_STRINGS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

export const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
export const ALPHABET_ARRAY = ALPHABET.split("");
export const INPUT_ATTEMPTS = [1, 2, 3, 4, 5, 6];

export const Base_Url = !LOCAL_CONNECTI0N
  ? "https://finalprojectbackend-production-b2d7.up.railway.app"
  : "http://localhost:4201";

  export const NFL_DATA = [
    // NFL Team Mascots
    "fortyniner", "bear", "bengal", "bill", "bronco", "brown", "buccaneer", "cardinal",
    "charger", "chief", "colt", "commander", "cowboy", "dolphin", "eagle",
    "falcon", "giant", "jaguar", "jet", "lion", "packer", "panther", "patriot",
    "raider", "ram", "raven", "saint", "seahawk", "steeler", "texan", "titan",
    "viking",
  
    // NFL Team Locations
    "sanfrancisco", "chicago", "cincinnati", "buffalo", "denver", "cleveland",
    "tampabay", "arizona", "losangeles", "kansascity", "indianapolis",
    "washington", "dallas", "miami", "philadelphia", "atlanta", "newyork",
    "jacksonville", "detroit", "greenbay", "carolina", "newengland", "lasvegas",
    "baltimore", "neworleans", "seattle", "pittsburgh", "houston", "tennessee",
    "minnesota",
  
    // NFL MVP / Superbowl MVP Winners' Last Names
    "aikman", "alexander", "allen", "anderson", "biletnikoff", "bradshaw", "brady", "branch", "brodie",
    "brown", "campbell", "csonka", "davis", "dawson", "dent", "edelman", "elway", "esiason", "favre",
    "foles", "gabriel", "gannon", "harris", "hornung", "howard", "howley", "hurts", "jackson", "jones",
    "kupp", "lewis", "mahomes", "manning", "marino", "martin", "mcnair", "montana", "morrall",
    "moseley", "namath", "newton", "page", "payton", "peterson", "plunkett", "rice", "riggins",
    "rodgers", "ryan", "rypien", "sanders", "scott", "simms", "simpson", "sipe", "smith", "stabler",
    "starr", "staubach", "swann", "tarkenton", "taylor", "theismann", "thomas", "tittle", "tomlinson",
    "unitas", "vanbrocklin", "ward", "warner", "williams", "young"
  ];


  export const NBA_DATA = [
    // NBA Team Mascots
    "hawk", "celtic", "net", "hornet", "bull", "cavalier", "maverick", "nugget",
    "piston", "warrior", "rocket", "pacer", "clipper", "laker", "grizzly", "heat",
    "buck", "timberwolf", "pelican", "knick", "thunder", "magic", "seventysixer",
    "sun", "blazer", "king", "spur", "raptor", "jazz", "wizard",
  
    // NBA Team Locations
    "atlanta", "boston", "brooklyn", "charlotte", "chicago", "cleveland", "dallas",
    "denver", "detroit", "goldenstate", "houston", "indiana", "losangeles",
    "memphis", "miami", "milwaukee", "minnesota", "neworleans", "newyork",
    "oklahomacity", "orlando", "philadelphia", "phoenix", "portland", "sacramento",
    "sanantonio", "toronto", "utah", "washington",
  
    // NBA MVP / finals mvp Winners' Last Names
    "antetokounmpo", "barry", "billups", "bird", "brown", "bryant", "chamberlain", "cowens", "curry",
    "dirk", "drexler", "dumars", "duncan", "durant", "embiid", "ervin", "garnett", "giannis", "harden",
    "havlicek", "iguodala", "james", "johnson", "jokic", "jordan", "lebron", "leonard", "magic",
    "malone", "nash", "nowitzki", "olajuwon", "pettit", "pierce", "reed", "robinson", "rose",
    "rusell", "thomas", "unseld", "wade", "walton", "west", "westbrook", "white", "worthy"
  ];

export const NHL_DATA = [
    // NHL Team Mascots
    "duck", "coyote", "bruin", "sabre", "flame", "hurricane", "blackhawk", "avalanche",
    "bluejacket", "star", "redwing", "oiler", "panther", "king", "wild", "canadien",
    "predator", "devil", "islander", "ranger", "senator", "flyer", "penguin", "shark",
    "kraken", "blue", "lightning", "mapleleaf", "canuck", "knight", "capital", "jet",
  
    // NHL Team Locations
    "anaheim", "arizona", "boston", "buffalo", "calgary", "carolina", "chicago", "colorado",
    "columbus", "dallas", "detroit", "edmonton", "florida", "losangeles", "minnesota",
    "montreal", "nashville", "newjersey", "newyork", "ottawa", "philadelphia", "pittsburgh",
    "sanjose", "seattle", "stlouis", "tampabay", "toronto", "vancouver", "vegas",
    "washington", "winnipeg",
  
    // NHL Hart Memorial Trophy Winners' Last Names / NHL Conn Smythe Trophy Winners' Last Names
    "beliveau", "blake", "bossy", "burch", "conacher", "crawford", "crosby", "draisaitl", "esposito",
    "federov", "forsberg", "gainey", "gardiner", "goring", "gretzky", "hall", "hedman", "howe", "hull",
    "jackson", "jagr", "kane", "keith", "kennedy", "keon", "kucherov", "lafleur", "leach", "leetch",
    "lemieux", "mackinnon", "makar", "malkin", "marchessault", "mcdavid", "messier", "morenz",
    "nighbor", "oreilly", "orr", "ovechkin", "parent", "potvin", "quick", "richard", "robinson",
    "roy", "sakic", "sedin", "smith", "stewart", "thomas", "thompson", "thornton", "trottier",
    "vasilevskiy", "vernon", "williams", "yzerman"
  ];

  export const MLB_DATA = [
    // MLB Team Mascots
    "angel", "astro", "athletic", "bluejay", "brave", "brewer", "cardinal", "cub",
    "diamondback", "dodger", "giant", "guardian", "mariner", "marlin", "met",
    "national", "oriole", "padre", "phillie", "pirate", "ranger", "ray", "red",
    "redsox", "rockie", "royal", "tiger", "twin", "white", "yankee",
  
    // MLB Team Locations
    "anaheim", "arizona", "atlanta", "baltimore", "boston", "chicago", "cincinnati",
    "cleveland", "colorado", "detroit", "houston", "kansas", "losangeles", "miami",
    "milwaukee", "minnesota", "newyork", "oakland", "philadelphia", "pittsburgh",
    "san", "seattle", "stlouis", "tampabay", "texas", "toronto", "washington",
  
    // MLB MVP Winners' / World Series MVP Last Names
    "abreu", "altuve", "bagwell", "banks", "barry", "bench", "bentley", "berra", "betts",
    "bonds", "bryant", "burdette", "cabrera", "carew", "carty", "cey", "clemente", "davis",
    "dawson", "donaldson", "eckersley", "fisk", "foxx", "freeman", "frisch", "garvey", 
    "gehrig", "gibson", "glaus", "glavine", "griffey", "guerrero", "hamels", "hamilton", 
    "hernandez", "herzog", "jackson", "jeter", "johnson", "jones", "judge", "killebrew", 
    "koufax", "larsen", "mantle", "martinez", "mauer", "molina", "molitor", "morgan", 
    "morris", "musial", "mussina", "ohtani", "ortiz", "pena", "pettitte", "pujols", 
    "ramirez", "ripken", "rivera", "roberts", "robinson", "rodriguez", "rose", "rosen", 
    "ryan", "sandberg", "sandoval", "schilling", "schmidt", "seager", "simmons", "smith", 
    "snyder", "soler", "sosa", "strasburg", "strawberry", "suzuki", "swisher", "terry", 
    "trout", "turner", "valenzuela", "verlander", "votto", "williams", "yastrzemski", 
    "yeager", "yount", "zobrist"
  ];

  export const GOLF_MASTERS_DATA = [
    "smith", "sarazen", "nelson", "picard", "wood", "byrd", "guldahl", "demaret",
    "middlecoff", "hogan", "snead", "burke", "venturi", "casper", "palmer",
    "player", "nicklaus", "goalby", "archer", "coody", "aaron", "weiskopf",
    "miller", "floyd", "watson", "zoeller", "ballesteros", "stadler", "mize",
    "langer", "lyle", "faldo", "couples", "woosnam", "crenshaw", "olazabal",
    "omeara", "woods", "singh", "weir", "mickelson", "johnson", "immelman",
    "cabrera", "schwartzel", "scott", "spieth", "willett", "garcia", "reed",
    "matsuyama", "rahm", "scheffler", "mcilroy"
  ];
  
// export const randomWords = [
//     "spine",
//     "hardship",
//     "slide",
//     "wife",
//     "quantity",
//     "champion",
//     "reign",
//     "provide",
//     "study",
//     "west",
//     "technique",
//   ];

//   export const originalPokemon = [
//     "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard",
//     "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree",
//     "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot",
//     "rattata", "raticate", "spearow", "fearow", "ekans", "arbok",
//     "pikachu", "raichu", "sandshrew", "sandslash", "nidoranf", "nidorina",
//     "nidoqueen", "nidoranm", "nidorino", "nidoking", "clefairy", "clefable",
//     "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat",
//     "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth",
//     "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck",
//     "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl",
//     "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp",
//     "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel",
//     "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro",
//     "magnemite", "magneton", "farfetchd", "doduo", "dodrio", "seel", "dewgong",
//     "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar",
//     "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode",
//     "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan",
//     "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey",
//     "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking",
//     "staryu", "starmie", "mrmime", "scyther", "jynx", "electabuzz",
//     "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras",
//     "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon",
//     "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax",
//     "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite",
//     "mewtwo", "mew"
//   ];

// export const fiveLetters = [
//   'apple', 'bliss', 'crane', 'daisy', 'eagle', 'fable', 'glint', 'happy', 'ideal', 'joker',
//   'kudos', 'latch', 'match', 'noble', 'ocean', 'piano', 'quilt', 'raven', 'siren', 'table',
//   'smile', 'vigor', 'whale', 'mixed', 'yacht', 'zebra', 'amend', 'brisk', 'cider', 'drift',
//   'ember', 'flint', 'grasp', 'hover', 'inbox', 'jolly', 'kneel', 'lunar', 'mango', 'notch',
//   'orbit', 'plumb', 'quirk', 'rally', 'shiny', 'toast', 'under', 'vivid', 'wrist', 'extra',
//   'youth', 'zesty', 'align', 'bloom', 'clash', 'dwell', 'every', 'frown', 'green', 'hound',
//   'imply', 'judge', 'knock', 'lodge', 'mimic', 'nudge', 'paint', 'plume', 'quota', 'rouge',
//   'swoop', 'trend', 'unite', 'voice', 'woven', 'storm', 'yield', 'bread', 'adore', 'binge',
//   'charm', 'delve', 'elbow', 'fancy', 'paste', 'haste', 'index', 'juice', 'knife', 'light',
//   'motto', 'nerdy', 'onset', 'prone', 'quake', 'rumor', 'slope', 'tumor', 'urban', 'vowel'
// ];

// export const sixLetters = ['accept', 'beacon', 'cactus', 'dazzle', 'eclipse', 'famine', 'galaxy', 'hunger', 'injury', 'jungle',
//   'kidnap', 'lawful', 'mantle', 'napkin', 'object', 'packet', 'quiver', 'ransom', 'saddle', 'tackle',
//   'uphold', 'vacuum', 'wealth', 'export', 'yellow', 'bronze', 'admire', 'breeze', 'cobweb', 'danger',
//   'effort', 'fossil', 'gospel', 'rhythm', 'impact', 'jigsaw', 'kindle', 'launch', 'mellow', 'narrow',
//   'outlet', 'pebble', 'quench', 'retail', 'sizzle', 'temple', 'unfold', 'valley', 'wander', 'expert',
//   'ponder', 'double', 'abound', 'buckle', 'crunch', 'defend', 'esteem', 'fumble', 'gentle', 'helmet',
//   'inform', 'jingle', 'kitten', 'ladder', 'muffin', 'neatly', 'outcry', 'puddle', 'bridge', 'rescue',
//   'sprint', 'tundra', 'upbeat', 'vermin', 'whimsy', 'expand', 'zipper', 'zodiac', 'arcade', 'banish',
//   'coffee', 'divine', 'yearly', 'frugal', 'glitch', 'honest', 'invade', 'jumble', 'kettle', 'laptop',
//   'mentor', 'nugget', 'oxygen', 'plunge', 'riddle', 'socket', 'thrive', 'utmost', 'vortex', 'writer'];

// export const stateCapitals = [
//   "montgomery", "juneau", "phoenix", "littlerock", "sacramento",
//   "denver", "hartford", "dover", "tallahassee", "atlanta",
//   "honolulu", "boise", "springfield", "indianapolis", "desmoines",
//   "topeka", "frankfort", "batonrouge", "augusta", "annapolis",
//   "boston", "lansing", "stpaul", "jackson", "jeffersoncity",
//   "helena", "lincoln", "carsoncity", "concord", "trenton",
//   "santafe", "albany", "raleigh", "bismarck", "columbus",
//   "oklahomacity", "salem", "harrisburg", "providence", "columbia",
//   "pierre", "nashville", "austin", "saltlakecity", "montpelier",
//   "richmond", "olympia", "charleston", "madison", "cheyenne"
// ];

// export const usStates = [
//   "alabama", "alaska", "arizona", "arkansas", "california", "colorado",
//   "connecticut", "delaware", "florida", "georgia", "hawaii", "idaho",
//   "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana",
//   "maine", "maryland", "massachusetts", "michigan", "minnesota",
//   "mississippi", "missouri", "montana", "nebraska", "nevada",
//   "newhampshire", "newjersey", "newmexico", "newyork", "northcarolina",
//   "northdakota", "ohio", "oklahoma", "oregon", "pennsylvania", "rhodeisland",
//   "southcarolina", "southdakota", "tennessee", "texas", "utah", "vermont",
//   "virginia", "washington", "westvirginia", "wisconsin", "wyoming"
// ];

// export const randomWords = [
//   "banana", "grape", "orange", "peach", "chair", "sofa", "pencil", "paper",
//   "sad", "angry", "excited", "bored", "jump", "run", "walk", "swim", "climb",
//   "dog", "cat", "bird", "fish", "turtle", "house", "school", "park", "store", "library",
//   "river", "lake", "mountain", "sun", "moon", "star", "cloud", "rain",
//   "winter", "spring", "summer", "fall", "cold", "hot", "warm", "cool", "snow", "wind",
//   "car", "bus", "bike", "train", "plane", "door", "window", "floor", "roof", "wall",
//   "big", "small", "tall", "short", "long", "fast", "slow", "hard", "soft", "strong",
//   "dark", "bright", "dull", "thick", "thin", "heavy", "clean", "dirty",
//   "eat", "drink", "cook", "bake", "mix", "read", "write", "draw", "color",
//   "red", "blue", "purple", "pink", "black", "white", "gray", "brown",
//   "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
//   "mother", "father", "sister", "brother", "grandma", "grandpa", "aunt", "uncle", "cousin", "friend",
//   "morning", "noon", "evening", "night", "day", "week", "month", "year", "hour", "minute",
//   "fun", "play", "game", "toy", "ball", "doll", "puzzle", "blocks", "cards",
//   "inside", "outside", "up", "down", "left", "right", "front", "back", "near", "far",
//   "open", "close", "start", "stop", "go", "come", "leave", "stay", "sit", "stand",
//   "sing", "dance", "laugh", "cry", "yell", "whisper", "talk", "listen",
//   "over", "between", "beside", "next", "around", "through", "against", "above", "below",
//   "hand", "foot", "leg", "arm", "head", "eye", "ear", "nose", "mouth", "teeth",
//   "cook", "bake", "stir", "boil", "fry", "roast", "grill", "peel", "chop", "slice",
//   "music", "song", "dance", "movie", "story", "book", "poem", "picture", "photo", "painting",
//   "circle", "square", "triangle", "oval", "diamond", "heart", "star", "line", "dot",
//   "sock", "shoe", "shirt", "pants", "hat", "glove", "scarf", "coat", "dress", "shorts",
//   "milk", "water", "soda", "tea", "cereal", "butter",
//   "math", "science", "history", "art", "music", "reading", "writing", "spelling", "counting", "numbers",
//   "lunch", "dinner", "breakfast", "snack", "dessert", "cake", "cookie", "pie", "candy", "icecream",
//   "fire", "earth", "air", "water", "metal", "wood", "stone", "glass", "plastic", "paper",
//   "bunny", "bear", "lion", "tiger", "giraffe", "monkey", "frog", "snake",
//   "bee", "ant", "spider", "butterfly", "ladybug", "worm", "snail", "crab", "lobster",
//   "doctor", "nurse", "teacher", "police", "farmer", "chef", "pilot", "artist", "musician",
//   "sunny", "rainy", "cloudy", "stormy", "windy", "foggy", "snowy", "hot", "cold", "cool",
//   "chair", "bed", "couch", "lamp", "clock", "mirror", "shelf", "desk", "carpet",
//   "north", "south", "east", "west", "left", "right", "middle", "corner", "center", "edge",
//   "park", "beach", "zoo", "museum", "library", "farm", "garden", "city", "village",
//   "love", "kind", "brave", "strong", "smart", "funny", "friendly", "nice", "helpful",
//   "morning", "afternoon", "evening", "midnight", "sunrise", "sunset", "dawn", "dusk", "today", "tomorrow",
//   "puppy", "cloudy", "rainbow", "gold", "silver", "ribbon",
//   "trophy", "medal", "hero", "giant", "tiny", "fast", "slow", "jump", "hop", "skip",
//   "slide", "roller", "skate", "bounce", "clap", "snap", "wiggle", "stretch", "flute", "violin",
//   "drum", "guitar", "trumpet", "robot", "rocket", "planet", "comet",
//   "cave", "forest", "desert", "island", "volcano", "tornado",
//   "shark", "dolphin", "octopus", "penguin", "kangaroo", "camel", "parrot", "owl",
//   "wagon", "castle", "barn", "statue", "pyramid", "tent",
//   "pencil", "eraser", "marker", "crayon", "notebook", "backpack", "scissors", "glue", "ruler", "sticker",
//   "kite", "swing", "slide", "sandbox", "seesaw", "marbles", "jumprope", "hulahoop"
// ];

// const arrayDublicates = (arrayOne, arrayTwo) => {
//   arrayOne.filter((word) => {
//     arrayTwo.includes(word)
//   })}

// console.log(arrayDublicates(NFL_DATA, NBA_DATA))