const languagePrompts = [
  {
    id: 1,
    image: "images/modern/item1.png",
    question: "ΤΙ ΚΑΝΕΙ ΤΟ ΚΟΡΙΤΣΙ;",
    infoRules: [
      {
        label: "Αρκουδάκι",
        twoPoint: ["αρκουδάκι", "αρκούδος", "αρκούδι"],
        zeroPoint: ["αρκούδα"],
      },
    ],
    grammarRules: [],
  },
  {
    id: 2,
    image: "images/modern/item2.png",
    question: "ΤΙ ΘΑ ΚΑΝΕΙ Η ΜΑΜΑ;",
    infoRules: [
      {
        label: "Μπότες",
        twoPoint: ["μπότες", "μπότα", "γαλότσα"],
        onePoint: ["παπούτσια"],
        zeroPoint: ["παντοφλάκια", "πατίνια", "πόδι"],
      },
      {
        label: "Κορίτσι",
        twoPoint: ["κοριτσάκι", "κόρη", "κορίτσι"],
        onePoint: ["κοπέλα", "παιδί"],
        zeroPoint: ["της", "του", "το"],
      },
    ],
    grammarRules: [],
  },
  {
    id: 3,
    image: "images/modern/item3.png",
    question: "ΤΙ ΕΠΑΘΕ Ο ΣΚΥΛΟΣ;",
    infoRules: [
      {
        label: "Ξύλο/πάσσαλος",
        twoPoint: ["ξύλο", "πάσσαλος", "κολόνα", "κορμό"],
        onePoint: ["δέντρο", "κλαδί"],
        zeroPoint: ["κάγκελο"],
      },
    ],
    grammarRules: [
      {
        label: "Πρόθεση (με ένα / σε ένα / από το)",
        twoPoint: ["με ένα", "σε ένα", "από το"],
      },
    ],
  },
  {
    id: 4,
    image: "images/modern/item4.png",
    question: "ΠΕΣ ΜΑΣ ΟΛΑ ΟΣΑ ΚΑΝΕΙ ΑΥΤΟΣ Ο ΑΝΤΡΑΣ",
    infoRules: [
      {
        label: "Φράκτη/εμπόδιο",
        twoPoint: ["φράκτη", "εμπόδιο"],
        onePoint: ["ξύλινη πόρτα", "πόρτα"],
        zeroPoint: ["ξύλο", "γέφυρα"],
      },
    ],
    grammarRules: [],
  },
  {
    id: 5,
    image: "images/modern/item5.png",
    question: "ΤΙ ΕΚΑΝΕ ΜΟΛΙΣ ΤΩΡΑ Η ΓΑΤΑ;",
    infoRules: [
      {
        label: "Πράξη (έπιασε)",
        twoPoint: ["έπιασε", "άρπαξε", "τσάκωσε", "έχει πιάσει"],
        onePoint: ["κρατάει", "πιάνει"],
        zeroPoint: [
          "έφαγε",
          "τρώει",
          "πήρε",
          "πάει να φάει",
          "όρμησε",
          "πατάει",
          "κυνηγάει",
          "σκότωσε",
          "θέλει να φάει",
          "θέλει να πιάσει",
        ],
      },
      { label: "Δύο", twoPoint: ["δύο"] },
      {
        label: "Ποντίκια",
        twoPoint: ["ποντίκια"],
        onePoint: ["τροφή", "ποντίκι"],
      },
    ],
    grammarRules: [
      {
        label: "Συμφωνία ρήματος-υποκειμένου (η γάτα έπιασε)",
        twoPointCombos: [
          {
            all: [
              { any: ["γάτα"] },
              { any: ["έπιασε"] },
            ],
          },
        ],
      },
      {
        label: "Πληθυντικός αριθμός (ποντίκια)",
        twoPoint: ["ποντίκια"],
      },
    ],
  },
  {
    id: 6,
    image: "images/modern/item6.png",
    question: "ΤΙ ΕΠΑΘΕ ΤΟ ΚΟΡΙΤΣΙ;",
    infoRules: [
      { label: "Έσπασε", twoPoint: ["έσπασε", "έσπασαν"], zeroPoint: ["χάλασε"] },
      { label: "Γυαλιά", twoPoint: ["γυαλιά"] },
    ],
    grammarRules: [
      {
        label: "Παρελθοντικός χρόνος ρήμα 1",
        twoPoint: ["έπεσε"],
      },
      {
        label: "Παρελθοντικός χρόνος ρήμα 2",
        twoPoint: ["έσπασε", "έσπασαν"],
      },
      {
        label: "Συμφωνία ρήματος-υποκειμένου I (το κορίτσι έπεσε)",
        twoPointCombos: [
          {
            all: [
              { any: ["κορίτσι"] },
              { any: ["έπεσε"] },
            ],
          },
        ],
      },
      {
        label: "Συμφωνία πληθυντικού (τα γυαλιά έσπασαν)",
        twoPointCombos: [
          {
            all: [
              { any: ["γυαλιά"] },
              { any: ["έσπασαν"] },
            ],
          },
        ],
      },
      { label: "Οριστικό άρθρο (τα γυαλιά)", twoPoint: ["τα γυαλιά"] },
    ],
  },
  {
    id: 7,
    image: "images/modern/item7.png",
    question: "ΤΙ ΕΧΕΙ ΚΑΝΕΙ ΤΟ ΜΕΓΑΛΟ ΚΟΡΙΤΣΙ;",
    infoRules: [
      {
        label: "Ρήμα",
        twoPoint: [
          "σηκώνει",
          "παίρνει",
          "πιάνει",
          "έχει αγκαλιά",
          "βοηθάει",
          "ανέβασε",
          "κρατάει",
        ],
        onePoint: ["βάζει", "αγκαλιάζει"],
      },
      {
        label: "Μικρό αγόρι",
        twoPoint: ["μικρό αγόρι", "αγοράκι", "μωρό", "αδελφό", "παιδάκι", "το μικρό"],
        onePoint: ["άνθρωπος", "το"],
      },
      { label: "Γράμμα", twoPoint: ["γράμμα", "φάκελο"] },
    ],
    grammarRules: [
      { label: "Οριστικό άρθρο (το παιδί)", twoPoint: ["το παιδί"] },
      {
        label: "Αόριστο ή οριστικό άρθρο (το/ένα φάκελο)",
        twoPoint: ["το φάκελο", "ένα φάκελο"],
      },
      { label: "Δευτερεύουσα τελική πρόταση (για...)", twoPoint: ["για"] },
      {
        label: "Υποτακτική (να βάλει...)",
        twoPoint: ["να βάλει"],
      },
      { label: "Προθετική φράση (μέσα στο)", twoPoint: ["μέσα στο"] },
    ],
  },
  {
    id: 8,
    image: "images/modern/item8.png",
    question: "ΠΕΣ ΜΑΣ ΤΙ ΚΑΝΕΙ Ο ΑΝΤΡΑΣ",
    infoRules: [
      {
        label: "Σκεπή",
        twoPoint: ["σκεπή", "κεραμίδια", "στέγη"],
        zeroPoint: ["καμινάδα", "ταράτσα"],
      },
      {
        label: "Ρήμα",
        twoPoint: ["πιάσει", "διώξει", "κατεβάσει", "φτάσει", "πάρει", "σώσει"],
        onePoint: ["βοηθάει", "κυνηγάει"],
        zeroPoint: ["σκοτώσει", "βάλει", "κοιτάζει"],
      },
      { label: "Γάτα", twoPoint: ["γάτα", "γατάκι", "ψιψίνα"] },
    ],
    grammarRules: [
      {
        label: "Προθετική φράση (στη σκεπή/από τη σκεπή)",
        twoPoint: ["στη σκεπή", "από τη σκεπή"],
      },
      {
        label: "Τελική πρόταση (για... με σκοπό να...)",
        twoPoint: ["για", "με σκοπό να"],
      },
      {
        label: "Υποτακτική (να πάρει...)",
        twoPoint: ["να πάρει"],
      },
    ],
  },
  {
    id: 9,
    image: "images/modern/item9.png",
    question: "ΤΙ ΕΠΑΘΕ ΤΟ ΑΓΟΡΙ;",
    infoRules: [
      {
        label: "Πήρε/έκλεψε",
        twoPoint: ["πήρε", "έκλεψε"],
        onePoint: ["έβγαλε", "δεν του δίνει", "έφαγε", "τρώει", "άρπαξε", "έπιασε"],
        zeroPoint: ["δάγκωσε"],
      },
      { label: "Σκύλος", twoPoint: ["σκύλος", "σκυλάκι"] },
      { label: "Απ' αυτόν/του πήρε", twoPoint: ["απ' αυτόν", "του πήρε"] },
      {
        label: "Παντόφλα",
        twoPoint: ["παντόφλα"],
        onePoint: ["παπούτσι"],
        zeroPoint: ["ψωμί", "φαγητό", "μπριζόλα", "γοβάκι"],
      },
    ],
    grammarRules: [
      { label: "Ενεστώτας (κλαίει)", twoPoint: ["κλαίει"] },
      { label: "Παρελθοντικός χρόνος (πήρε)", twoPoint: ["πήρε"] },
      {
        label: "Συμφωνία ρήματος-υποκειμένου I (κλαίει το αγόρι)",
        twoPointCombos: [
          {
            all: [
              { any: ["αγόρι"] },
              { any: ["κλαίει"] },
            ],
          },
        ],
      },
      {
        label: "Συμφωνία ρήματος-υποκειμένου II (πήρε ο σκύλος)",
        twoPointCombos: [
          {
            all: [
              { any: ["σκύλος"] },
              { any: ["πήρε"] },
            ],
          },
        ],
      },
      { label: "Οριστικό άρθρο I (ο σκύλος)", twoPoint: ["ο σκύλος"] },
      {
        label: "Οριστικό άρθρο II (την παντόφλα / το παπούτσι)",
        twoPoint: ["την παντόφλα", "το παπούτσι"],
      },
      {
        label: "Αιτιολογικός σύνδεσμος (γιατί/επειδή/για αυτό)",
        twoPoint: ["γιατί", "επειδή", "για αυτό"],
        onePoint: ["και"],
      },
    ],
  },
  {
    id: 10,
    image: "images/modern/item10.png",
    question: "ΚΟΙΤΑ ΑΥΤΗΝ ΤΗΝ ΕΙΚΟΝΑ. ΤΙ ΓΙΝΕΤΑΙ ΕΔΩ; (μη βιάζεσαι με την ησυχία σου)",
    infoRules: [
      {
        label: "Σκίστηκε/τρύπησε",
        twoPoint: [
          "σκίστηκε",
          "έχει σκιστεί",
          "τρύπησε",
          "είναι τρύπια",
          "σκισμένη",
          "τρυπημένη",
        ],
        onePoint: ["έχει μια τρύπα", "άνοιξε", "κόπηκε"],
      },
      { label: "Σακούλα", twoPoint: ["σακούλα", "τσάντα"], onePoint: ["σάκος"] },
      {
        label: "Κυρία",
        twoPoint: ["κυρία", "γυναίκα"],
        zeroPoint: ["κοριτσάκι", "μαμά"],
      },
      {
        label: "Μαζεύει",
        twoPoint: ["μαζεύει", "παίρνει", "σηκώνει"],
        onePoint: ["πιάνει"],
        zeroPoint: ["κλέβει"],
      },
      {
        label: "Αγοράκι",
        twoPoint: ["αγοράκι", "παιδί", "παιδάκι"],
        onePoint: ["άντρας"],
        zeroPoint: ["αυτός", "εκείνος", "άνθρωπος"],
      },
    ],
    grammarRules: [
      { label: "Παρελθοντικός χρόνος I (σκίστηκε)", twoPoint: ["σκίστηκε"] },
      { label: "Παρελθοντικός χρόνος II (έπεσαν)", twoPoint: ["έπεσαν"] },
      { label: "Ενεστώτας (μαζεύει)", twoPoint: ["μαζεύει"] },
      {
        label: "Συμφωνία ρήματος-υποκειμένου I (σκίστηκε η σακούλα)",
        twoPointCombos: [
          {
            all: [
              { any: ["σακούλα"] },
              { any: ["σκίστηκε"] },
            ],
          },
        ],
      },
      {
        label: "Συμφωνία ρήματος-υποκειμένου II (έπεσαν τα μήλα)",
        twoPointCombos: [
          {
            all: [
              { any: ["μήλα"] },
              { any: ["έπεσαν"] },
            ],
          },
        ],
      },
      {
        label: "Συμφωνία ρήματος-υποκειμένου III (μαζεύει το παιδί)",
        twoPointCombos: [
          {
            all: [
              { any: ["παιδί"] },
              { any: ["μαζεύει"] },
            ],
          },
        ],
      },
      {
        label: "Γενική κτητική (της κυρίας)",
        twoPoint: ["της κυρίας"],
        onePoint: ["από τη σακούλα"],
      },
      { label: "Οριστικό άρθρο I (η σακούλα)", twoPoint: ["η σακούλα"] },
      {
        label: "Οριστικό άρθρο II (το παιδί/ο κύριος)",
        twoPoint: ["το παιδί", "ο κύριος"],
      },
      { label: "Αντωνυμία (τα μαζεύει)", twoPoint: ["τα μαζεύει"] },
    ],
  },
];

const ageBands = [
  { key: "4:0-4:5", minMonths: 48, maxMonths: 53 },
  { key: "4:6-5:0", minMonths: 54, maxMonths: 60 },
  { key: "5:1-6:0", minMonths: 61, maxMonths: 72 },
  { key: "6:1-7:0", minMonths: 73, maxMonths: 84 },
];

const percentileTable = {
  total: {
    "4:0-4:5": { 10: 23, 20: 33, 30: 38, 40: 43, 50: 46, 60: 49, 70: 55, 80: 59, 90: 69 },
    "4:6-5:0": { 10: 29, 20: 37, 30: 43, 40: 48, 50: 52, 60: 56, 70: 62, 80: 70, 90: 77 },
    "5:1-6:0": { 10: 31, 20: 42, 30: 49, 40: 56, 50: 64, 60: 70, 70: 76, 80: 82, 90: 88 },
    "6:1-7:0": { 10: 46, 20: 55, 30: 64, 40: 69, 50: 74, 60: 80, 70: 85, 80: 90, 90: 97 },
  },
  info: {
    "4:0-4:5": { 10: 7, 20: 10, 30: 14, 40: 16, 50: 18, 60: 20, 70: 23, 80: 25, 90: 28 },
    "4:6-5:0": { 10: 9, 20: 13, 30: 16, 40: 19, 50: 20, 60: 23, 70: 25, 80: 28, 90: 32 },
    "5:1-6:0": { 10: 11, 20: 16, 30: 18, 40: 22, 50: 25, 60: 27, 70: 30, 80: 33, 90: 37 },
    "6:1-7:0": { 10: 18, 20: 23, 30: 26, 40: 28, 50: 31, 60: 34, 70: 35, 80: 37, 90: 40 },
  },
  grammar: {
    "4:0-4:5": { 10: 14, 20: 20, 30: 24, 40: 24, 50: 26, 60: 28, 70: 30, 80: 33, 90: 38 },
    "4:6-5:0": { 10: 18, 20: 23, 30: 26, 40: 28, 50: 28, 60: 32, 70: 35, 80: 40, 90: 44 },
    "5:1-6:0": { 10: 18, 20: 26, 30: 28, 40: 32, 50: 36, 60: 40, 70: 42, 80: 46, 90: 50 },
    "6:1-7:0": { 10: 26, 20: 32, 30: 34, 40: 37, 50: 40, 60: 42, 70: 47, 80: 50, 90: 53 },
  },
};

const errorTypes = ["Αντικατάσταση", "Παράλειψη", "Αλλοίωση", "Προσθήκη", "Σύμπλεγμα"];
const articulationData = window.ARTICULATION_DATA || { cards: [], pages: [] };
const articulationTargets = {
  1: "χελώνα",
  2: "βελόνα",
  3: "ψαλίδι",
  4: "μπαλκόνι",
  5: "κύκνος",
  6: "καρφιά",
  7: "αεροπλάνο",
  8: "ποδήλατο",
  9: "λάμπα",
  10: "ρολόι",
  11: "βροχή",
  12: "παπούτσι",
  13: "φεγγάρι",
  14: "αυτοκίνητο",
  15: "μαχαίρι",
  16: "καλάθι",
  17: "ανάποδα",
  18: "καραμέλα",
  19: "λουλούδι",
  20: "θερμόμετρο",
  21: "πασχαλίτσα",
  22: "δράκος",
  23: "συρτάρι",
  24: "σφυρίχτρα",
  25: "τηλέφωνο",
  26: "λιοντάρι",
  27: "χοντρή",
  28: "γράμμα",
  29: "αρκούδα",
  30: "κάστρο",
  31: "ντουλάπα",
  32: "παλτό",
  33: "μαϊμού",
  34: "φώκια",
  35: "βάζο",
  36: "τζάκι",
  37: "κλειδί",
  38: "ποτιστήρι",
  39: "πολυθρόνα",
  40: "αγελάδα",
  41: "κερί",
  42: "φιόγκος",
  43: "δέντρο",
  44: "βρύση",
  45: "κουρτίνα",
  46: "ρόδα",
  47: "ζώνη",
  48: "πολυκατοικία",
  49: "κεφάλι",
  50: "τρομπέτα",
  51: "φόρεμα",
  52: "τραπέζι",
  53: "σκαμπό",
  54: "δάχτυλο",
  55: "παιχνίδια",
  56: "σπίτι",
  57: "στρατιώτης",
  58: "ξύλο",
  59: "χείλη",
};

articulationData.cards.forEach((card) => {
  card.target = card.target || articulationTargets[card.id] || "";
});

const transcriptionReviewUnits = ["ψ", "ξ", "τσ", "τζ", "χ", "θ", "δ", "γ", "ρ"];
const productionSuggestionRules = [
  { from: "ψ", to: ["τσ", "σ", "πσ"] },
  { from: "ξ", to: ["τσ", "κσ", "σ"] },
  { from: "τσ", to: ["ψ", "σ"] },
  { from: "τζ", to: ["ζ", "δ"] },
  { from: "χ", to: ["σ", "κ", "φ"] },
  { from: "θ", to: ["φ", "τ", "σ"] },
  { from: "δ", to: ["ζ", "ντ", "β"] },
  { from: "γ", to: ["δ", "γκ", "ζ"] },
  { from: "ρ", to: ["λ", "γ"] },
  { from: "φ", to: ["θ", "β"] },
  { from: "β", to: ["δ", "φ"] },
];

const phonemeAcquisitionBands = [
  { label: "2,6-3,0", minMonths: 30, maxMonths: 36, sounds: ["μ", "π", "μπ", "τ", "κ", "γκ"] },
  { label: "3,0-3,6", minMonths: 36, maxMonths: 42, sounds: ["ν", "ντ", "β", "χ", "γ"] },
  { label: "3,6-4,0", minMonths: 42, maxMonths: 48, sounds: ["φ", "σ", "ζ", "λ"], clusters: ["σπ", "πλ", "κλ", "βλ", "κν", "πν"] },
  { label: "4,0-4,6", minMonths: 48, maxMonths: 54, sounds: ["θ", "δ", "ξ", "ψ"], clusters: ["τρ", "κρ", "στ", "σκ"] },
  { label: "4,6-5,0", minMonths: 54, maxMonths: 60, sounds: ["τσ", "τζ"], clusterLabel: "σύνθετα συμπλέγματα" },
  { label: "5,0-5,6", minMonths: 60, maxMonths: 66, sounds: ["ρ"], clusterLabel: "τριπλά συμπλέγματα" },
  { label: "5,6-6,0", minMonths: 66, maxMonths: 72, sounds: ["ρ"], clusterLabel: "όλα τα συμπλέγματα" },
];

const phonemeAcquisitionMap = phonemeAcquisitionBands.reduce((map, band) => {
  (band.sounds || []).forEach((sound) => {
    const existing = map[sound];
    map[sound] = existing
      ? { ...existing, maxMonths: Math.max(existing.maxMonths, band.maxMonths), label: `${existing.label} / ${band.label}` }
      : { minMonths: band.minMonths, maxMonths: band.maxMonths, label: band.label };
  });
  (band.clusters || []).forEach((cluster) => {
    map[cluster] = { minMonths: band.minMonths, maxMonths: band.maxMonths, label: band.label, isCluster: true };
  });
  return map;
}, {});

const greekVowels = new Set(["α", "ε", "η", "ι", "ο", "υ", "ω", "ου", "αι", "ει", "οι", "υι", "αυ", "ευ"]);

const totalGameMissions = languagePrompts.length;
const storageKey = "autoTherapistFinalState.v1";
const SpeechRecognitionApi = window.SpeechRecognition || window.webkitSpeechRecognition;
const defaultAsrConfig = {
  mode: "browser",
  endpointUrl: "",
  serverLabel: "Server ASR",
  language: "el-GR",
  audioFieldName: "audio",
  timeoutMs: 60000,
  headers: {},
  responseTextPaths: ["text", "transcript", "transcription", "result.text", "results.0.text"],
  responseAlternativesPaths: ["alternatives", "results", "segments"],
  responseConfidencePaths: ["confidence", "result.confidence", "results.0.confidence"],
  responseEnginePaths: ["engine", "provider", "model", "result.model"],
};
let recognition = null;
let mediaRecorder = null;
let mediaStream = null;
let activeAsrKey = "";
let pendingServerAsrKey = "";
let asrError = "";
let asrHealth = { status: "checking", engine: "" };
let captureStarting = false;
let captureFinalizing = false;
let liveAsrNote = "";
let cancelMicrophoneRequest = null;
let microphoneRequestId = 0;
let recordingTimer = null;
let recordingAudioContext = null;
let recordingAnalyser = null;
let recordingTelemetry = { startedAt: 0, bytes: 0, level: 0, heardSound: false };
const audioRetryOptions = new Map();
const audioClips = new Map();

const defaultState = {
  liveTranscriptionEnabled: true,
  activeTest: "language",
  childName: "",
  clinician: "",
  birthDate: "",
  sessionDate: new Date().toISOString().slice(0, 10),
  age: "",
  languageIndex: 0,
  languageAnswers: Object.fromEntries(languagePrompts.map((prompt) => [prompt.id, ""])),
  languageAsr: {},
  phonologyRecords: {},
  languageResultsOpen: {},
  articulationIndex: 0,
  articulationPageIndex: 0,
  articulationView: "cards",
  articulationRecords: {},
  rotations: {},
  reportVisible: false,
};

let state = loadState();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
    if (!saved) return structuredClone(defaultState);
    return {
      ...structuredClone(defaultState),
      ...saved,
      activeTest: "language",
      languageAnswers: {
        ...defaultState.languageAnswers,
        ...(saved.languageAnswers || {}),
      },
      languageAsr: saved.languageAsr || {},
      phonologyRecords: saved.phonologyRecords || {},
      languageResultsOpen: saved.languageResultsOpen || {},
      articulationRecords: saved.articulationRecords || {},
      rotations: saved.rotations || {},
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function getAsrConfig() {
  const custom = window.AUTO_THERAPIST_ASR || {};
  return {
    ...defaultAsrConfig,
    ...custom,
    headers: {
      ...defaultAsrConfig.headers,
      ...(custom.headers || {}),
    },
    responseTextPaths: custom.responseTextPaths || defaultAsrConfig.responseTextPaths,
    responseAlternativesPaths: custom.responseAlternativesPaths || defaultAsrConfig.responseAlternativesPaths,
    responseConfidencePaths: custom.responseConfidencePaths || defaultAsrConfig.responseConfidencePaths,
    responseEnginePaths: custom.responseEnginePaths || defaultAsrConfig.responseEnginePaths,
  };
}

function getAsrMode(config = getAsrConfig()) {
  const mode = String(config.mode || "browser").toLowerCase();
  return ["browser", "server", "hybrid"].includes(mode) ? mode : "browser";
}

function hasServerAsr(config = getAsrConfig()) {
  return Boolean(config.endpointUrl && getAsrMode(config) !== "browser");
}

function canUseBrowserAsr() {
  return Boolean(SpeechRecognitionApi);
}

function canRecordAudio() {
  return Boolean(typeof navigator !== "undefined" && navigator.mediaDevices?.getUserMedia && window.MediaRecorder);
}

function shouldUseBrowserRecognition(config = getAsrConfig()) {
  return getAsrMode(config) !== "server" && state.liveTranscriptionEnabled !== false && canUseBrowserAsr();
}

function shouldUseServerAsr(config = getAsrConfig()) {
  return hasServerAsr(config) && getAsrMode(config) !== "browser";
}

function canStartAsr() {
  if (captureStarting || captureFinalizing || isAsrActive()) return false;
  const config = getAsrConfig();
  return shouldUseBrowserRecognition(config) || (shouldUseServerAsr(config) && canRecordAudio());
}

function isAsrActive() {
  return Boolean(recognition || mediaRecorder || pendingServerAsrKey);
}

function canStopAsr() {
  return Boolean(captureStarting || recognition || mediaRecorder);
}

function asrProviderLabel() {
  const config = getAsrConfig();
  const mode = getAsrMode(config);
  const serverLabel = config.serverLabel || "Server ASR";
  if (mode === "server") return hasServerAsr(config) ? serverLabel : "Server ASR μη ρυθμισμένο";
  if (mode === "hybrid") return hasServerAsr(config) ? `Browser + ${serverLabel}` : "Browser ASR";
  return canUseBrowserAsr() ? "Browser el-GR" : "Χειροκίνητη καταγραφή";
}

function getAsrKey(scope, id) {
  return `${scope}-${id}`;
}

function getLanguageAsrRecord(promptId) {
  if (!state.languageAsr[promptId]) {
    state.languageAsr[promptId] = {
      speechSource: "",
      speechAlternatives: [],
      speechConfidence: null,
      speechEngine: "",
      asrProcessedAt: "",
      audioCaptured: false,
      audioSize: 0,
      audioType: "",
      audioCapturedAt: "",
    };
  }
  const record = state.languageAsr[promptId];
  record.speechSource ||= "";
  record.speechAlternatives ||= [];
  record.speechConfidence ??= null;
  record.speechEngine ||= "";
  record.asrProcessedAt ||= "";
  record.audioCaptured ||= false;
  record.audioSize ||= 0;
  record.audioType ||= "";
  record.audioCapturedAt ||= "";
  return record;
}

function setAudioMetadata(target, clip) {
  target.audioCaptured = Boolean(clip);
  target.audioSize = clip?.size || 0;
  target.audioType = clip?.mimeType || "";
  target.audioCapturedAt = clip?.createdAt || "";
}

function formatBytes(value) {
  const bytes = Number(value) || 0;
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function normalizeText(value) {
  return String(value || "")
    .toLocaleLowerCase("el-GR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ς/g, "σ")
    .replace(/[’']/g, "")
    .replace(/[.,;:!?()[\]{}"«»]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getComparableWord(value) {
  const words = normalizeText(value).match(/[α-ω]+/g) || [];
  const contentWords = words.filter((word) => !["ο", "η", "το", "οι", "τα", "τον", "την", "τη"].includes(word));
  return (contentWords.length ? contentWords : words).sort((a, b) => b.length - a.length)[0] || "";
}

function tokenizeGreekWord(word) {
  const digraphs = ["μπ", "ντ", "γκ", "γγ", "τσ", "τζ", "ου", "αι", "ει", "οι", "υι", "αυ", "ευ"];
  const tokens = [];
  for (let index = 0; index < word.length; ) {
    const pair = word.slice(index, index + 2);
    if (digraphs.includes(pair)) {
      tokens.push(pair);
      index += 2;
    } else {
      tokens.push(word[index]);
      index += 1;
    }
  }
  return tokens;
}

function alignTokens(targetTokens, productionTokens) {
  const rows = targetTokens.length + 1;
  const cols = productionTokens.length + 1;
  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));
  const back = Array.from({ length: rows }, () => Array(cols).fill(null));

  for (let i = 1; i < rows; i += 1) {
    dp[i][0] = i;
    back[i][0] = "deletion";
  }
  for (let j = 1; j < cols; j += 1) {
    dp[0][j] = j;
    back[0][j] = "insertion";
  }

  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < cols; j += 1) {
      const same = targetTokens[i - 1] === productionTokens[j - 1];
      const candidates = [
        { type: same ? "match" : "substitution", cost: dp[i - 1][j - 1] + (same ? 0 : 1) },
        { type: "deletion", cost: dp[i - 1][j] + 1 },
        { type: "insertion", cost: dp[i][j - 1] + 1 },
      ];
      candidates.sort((a, b) => a.cost - b.cost);
      dp[i][j] = candidates[0].cost;
      back[i][j] = candidates[0].type;
    }
  }

  const operations = [];
  let i = targetTokens.length;
  let j = productionTokens.length;
  while (i > 0 || j > 0) {
    const type = back[i][j];
    if (type === "match" || type === "substitution") {
      operations.unshift({
        type,
        target: targetTokens[i - 1],
        production: productionTokens[j - 1],
        index: i - 1,
      });
      i -= 1;
      j -= 1;
    } else if (type === "deletion") {
      operations.unshift({ type, target: targetTokens[i - 1], production: "", index: i - 1 });
      i -= 1;
    } else {
      operations.unshift({ type, target: "", production: productionTokens[j - 1], index: i });
      j -= 1;
    }
  }
  return operations;
}

function uniqueValues(values) {
  return [...new Set(values.filter(Boolean))];
}

function hasTranscriptionReviewRisk(word) {
  return transcriptionReviewUnits.some((unit) => word.includes(unit));
}

function isAutomaticAsrSource(source) {
  return ["recognition", "server"].includes(source);
}

function shouldReviewRecognizedMatch(targetWord, options = {}) {
  if (options.skipReview || !isAutomaticAsrSource(options.source)) return false;
  const confidence = Number(options.confidence);
  const lowConfidence = Number.isFinite(confidence) && confidence > 0 && confidence < 0.9;
  return lowConfidence || hasTranscriptionReviewRisk(targetWord);
}

function analyzeArticulationProduction(target, production, options = {}) {
  const targetWord = getComparableWord(target);
  const productionWord = getComparableWord(production);
  if (!targetWord && !productionWord) {
    return {
      ready: false,
      status: "untested",
      title: "Αυτόματο αποτέλεσμα",
      processText: "",
      summary: "Περιμένει λέξη στόχο και παραγωγή παιδιού.",
      details: [],
      errorTypes: [],
    };
  }
  if (!targetWord) {
    return {
      ready: false,
      status: "untested",
      title: "Αυτόματο αποτέλεσμα",
      processText: "",
      summary: "Γράψε πρώτα τη λέξη στόχο για να γίνει αυτόματη σύγκριση.",
      details: [],
      errorTypes: [],
    };
  }
  if (!productionWord) {
    return {
      ready: false,
      status: "untested",
      title: "Αυτόματο αποτέλεσμα",
      processText: "",
      summary: "Περιμένει την παραγωγή του παιδιού.",
      details: [],
      errorTypes: [],
    };
  }
  if (targetWord === productionWord) {
    if (shouldReviewRecognizedMatch(targetWord, options)) {
      return {
        ready: true,
        status: "review",
        title: "Αυτόματο αποτέλεσμα: έλεγχος μεταγραφής",
        processText: "Έλεγχος μεταγραφής",
        summary: `${targetWord}: η υπαγόρευση το έγραψε σωστό, αλλά χρειάζεται επιβεβαίωση ήχου.`,
        details: ["Πιθανή διόρθωση της υπαγόρευσης από τον browser."],
        errorTypes: [],
      };
    }
    return {
      ready: true,
      status: "correct",
      title: "Αυτόματο αποτέλεσμα: σωστό",
      processText: "Σωστή παραγωγή",
      summary: `${targetWord}: σωστή παραγωγή.`,
      details: ["Σωστή παραγωγή"],
      errorTypes: [],
    };
  }

  const targetTokens = tokenizeGreekWord(targetWord);
  const productionTokens = tokenizeGreekWord(productionWord);
  const operations = alignTokens(targetTokens, productionTokens);
  const details = operations
    .filter((operation) => operation.type !== "match")
    .map((operation) => {
      if (operation.type === "substitution") {
        return {
          label: `Αντικατάσταση ${operation.target} με ${operation.production}`,
          error: "Αντικατάσταση",
        };
      }
      if (operation.type === "deletion") {
        return {
          label: `Παράλειψη ${operation.target}`,
          error: "Παράλειψη",
        };
      }
      return {
        label: `Προσθήκη ${operation.production}`,
        error: "Προσθήκη",
      };
    });
  const processText = uniqueValues(details.map((detail) => detail.label)).join(", ");
  const errorList = uniqueValues(details.map((detail) => detail.error));
  return {
    ready: true,
    status: "incorrect",
    title: "Αυτόματο αποτέλεσμα: λάθος",
    processText,
    summary: `${targetWord} - ${productionWord}: ${processText}`,
    details: uniqueValues(details.map((detail) => detail.label)),
    errorTypes: errorList,
  };
}

function getPhonologyRecord(promptId) {
  if (!state.phonologyRecords[promptId]) {
    state.phonologyRecords[promptId] = {
      targets: "",
      productions: "",
      notes: "",
    };
  }
  const record = state.phonologyRecords[promptId];
  record.targets ||= "";
  record.productions ||= "";
  record.notes ||= "";
  return record;
}

function isGreekConsonant(token) {
  return Boolean(token && !greekVowels.has(token));
}

function getConsonantTokens(word) {
  return tokenizeGreekWord(getComparableWord(word)).filter(isGreekConsonant);
}

function getClusterTokens(tokens) {
  const clusters = [];
  for (let index = 0; index < tokens.length - 1; index += 1) {
    if (isGreekConsonant(tokens[index]) && isGreekConsonant(tokens[index + 1])) {
      clusters.push(`${tokens[index]}${tokens[index + 1]}`);
    }
  }
  return clusters;
}

function splitPhonologyItems(value) {
  const text = String(value || "").trim();
  if (!text) return [];
  const hasExplicitSeparators = /[,;\n]/.test(text);
  const parts = hasExplicitSeparators ? text.split(/[,;\n]+/) : text.split(/\s+/);
  return parts.map((part) => part.trim()).filter(Boolean);
}

function getSoundAcquisitionEntry(sound) {
  if (phonemeAcquisitionMap[sound]) return phonemeAcquisitionMap[sound];
  const tokens = tokenizeGreekWord(sound);
  if (tokens.length >= 3 && tokens.every(isGreekConsonant)) {
    return { minMonths: 60, maxMonths: 72, label: "5,0-6,0", isCluster: true };
  }
  if (tokens.length >= 2 && tokens.every(isGreekConsonant)) {
    return { minMonths: 54, maxMonths: 72, label: "4,6-6,0", isCluster: true };
  }
  return null;
}

function ageStatusForSound(sound, months, hasError = true) {
  const entry = getSoundAcquisitionEntry(sound);
  if (!entry) {
    return {
      className: "unknown",
      label: "Δεν υπάρχει στον πίνακα ηλικιακής κατάκτησης.",
      band: "-",
    };
  }
  if (months === null || months === undefined) {
    return {
      className: "unknown",
      label: `Συμπλήρωσε ημερομηνία γέννησης. Πίνακας: ${entry.label}.`,
      band: entry.label,
    };
  }
  if (!hasError) {
    return {
      className: "ok",
      label: `Παρόν στην παραγωγή. Πίνακας: ${entry.label}.`,
      band: entry.label,
    };
  }
  if (months < entry.minMonths) {
    return {
      className: "ok",
      label: `Αναπτυξιακά αναμενόμενο πριν την ηλικία κατάκτησης (${entry.label}).`,
      band: entry.label,
    };
  }
  if (months <= entry.maxMonths) {
    return {
      className: "watch",
      label: `Σε φάση κατάκτησης για την ηλικία (${entry.label}).`,
      band: entry.label,
    };
  }
  return {
    className: "alert",
    label: `Με βάση την ηλικία, χρειάζεται κλινικός έλεγχος (${entry.label}).`,
    band: entry.label,
  };
}

function classifyPhonologicalProcess(operation, targetTokens = [], productionTokens = []) {
  const target = operation.target || "";
  const production = operation.production || "";
  const targetClusters = getClusterTokens(targetTokens);
  const deletedFromCluster = operation.type === "deletion" && targetClusters.some((cluster) => cluster.includes(target));

  if (operation.type === "deletion") {
    return deletedFromCluster ? "Απλοποίηση συμπλέγματος" : "Παράλειψη φωνήματος";
  }
  if (operation.type === "insertion") return "Προσθήκη φωνήματος";
  if (operation.type !== "substitution") return "Αλλοίωση";

  const fricatives = ["φ", "θ", "δ", "χ", "γ", "σ", "ζ"];
  const stops = ["π", "τ", "κ", "μπ", "ντ", "γκ"];
  if (fricatives.includes(target) && stops.includes(production)) return "Στιγμικοποίηση τριβόμενου";
  if (["τσ", "τζ", "ξ", "ψ"].includes(target) && ["σ", "ζ", "τ", "ντ", "κ", "π"].includes(production)) {
    return "Απλοποίηση σύνθετου φωνήματος";
  }
  if (target === "ρ") return "Απλοποίηση /ρ/";
  if (["ρ", "λ"].includes(target)) return "Απλοποίηση υγρού";
  if (["κ", "γκ", "γ", "χ"].includes(target) && ["τ", "ντ", "δ", "θ", "σ"].includes(production)) {
    return "Πρόσθια μετατόπιση";
  }
  if (["τ", "ντ", "δ", "θ", "σ", "ζ"].includes(target) && ["κ", "γκ", "γ", "χ"].includes(production)) {
    return "Οπίσθια μετατόπιση";
  }
  return "Αντικατάσταση φωνήματος";
}

function analyzePhonologyPair(targetWord, productionWord, months) {
  const targetComparable = getComparableWord(targetWord);
  const productionComparable = getComparableWord(productionWord);
  if (!targetComparable && !productionComparable) return null;
  if (!targetComparable || !productionComparable) {
    return {
      target: targetWord,
      production: productionWord,
      status: "incomplete",
      summary: "Συμπλήρωσε στόχο και ακριβή παραγωγή παιδιού.",
      issues: [],
    };
  }

  const targetTokens = tokenizeGreekWord(targetComparable);
  const productionTokens = tokenizeGreekWord(productionComparable);
  const operations = alignTokens(targetTokens, productionTokens);
  const issues = operations
    .filter((operation) => operation.type !== "match")
    .map((operation) => {
      const sound = operation.target || operation.production;
      return {
        process: classifyPhonologicalProcess(operation, targetTokens, productionTokens),
        sound,
        target: operation.target || "-",
        production: operation.production || "-",
        status: ageStatusForSound(sound, months, true),
      };
    });

  const targetClusters = getClusterTokens(targetTokens);
  const productionClusters = getClusterTokens(productionTokens);
  targetClusters.forEach((cluster) => {
    if (productionClusters.includes(cluster) || issues.some((issue) => issue.sound === cluster)) return;
    issues.push({
      process: "Έλεγχος συμπλέγματος",
      sound: cluster,
      target: cluster,
      production: productionClusters.join(", ") || "-",
      status: ageStatusForSound(cluster, months, targetComparable !== productionComparable),
    });
  });

  return {
    target: targetWord,
    production: productionWord,
    status: issues.length ? "review" : "ok",
    summary: issues.length ? `${issues.length} φωνολογική παρατήρηση` : "Χωρίς φωνολογική διεργασία στη σύγκριση.",
    issues,
  };
}

function analyzePhonologyRecord(record) {
  const months = getAgeMonthsForScoring();
  const targets = splitPhonologyItems(record.targets);
  const productions = splitPhonologyItems(record.productions);
  const count = Math.max(targets.length, productions.length);
  const rows = Array.from({ length: count }, (_, index) => analyzePhonologyPair(targets[index] || "", productions[index] || "", months)).filter(Boolean);
  const issues = rows.flatMap((row) => row.issues.map((issue) => ({ ...issue, wordTarget: row.target, wordProduction: row.production })));
  const needsReview = issues.filter((issue) => issue.status.className === "alert").length;
  const watch = issues.filter((issue) => issue.status.className === "watch").length;
  const age = getChronologicalAge();
  return {
    age,
    rows,
    issues,
    needsReview,
    watch,
    ready: Boolean(targets.length && productions.length),
  };
}

function syncAutomaticArticulationAnalysis(record) {
  const analysis = analyzeArticulationProduction(record.target, record.production, {
    source: record.speechSource,
    confidence: record.speechConfidence,
  });
  record.autoAnalysis = analysis.summary;
  if (analysis.ready) {
    if (!record.manualStatus) record.status = analysis.status;
    record.phonologicalProcess = analysis.processText;
    record.errors = analysis.errorTypes;
  } else {
    record.phonologicalProcess = "";
    if (!record.target && !record.production) {
      record.status = "untested";
      record.errors = [];
    }
  }
  return analysis;
}

function getTextTokens(value) {
  return normalizeText(value).match(/[a-z0-9α-ω]+/g) || [];
}

function tokenSequenceIncludes(haystack, needle) {
  if (!needle.length || haystack.length < needle.length) return false;
  return haystack.some((_, start) => needle.every((token, offset) => haystack[start + offset] === token));
}

function includesTerm(answer, term) {
  const termTokens = getTextTokens(term);
  if (!termTokens.length) return false;
  return tokenSequenceIncludes(getTextTokens(answer), termTokens);
}

function matchesCondition(answer, condition) {
  if (!condition) return false;
  if (typeof condition === "string" || typeof condition === "number") return includesTerm(answer, condition);
  if (Array.isArray(condition)) return condition.every((part) => matchesCondition(answer, part));

  const allPass = condition.all ? condition.all.every((part) => matchesCondition(answer, part)) : true;
  const anyPass = condition.any ? condition.any.some((part) => matchesCondition(answer, part)) : true;
  const notConditions = Array.isArray(condition.not) ? condition.not : condition.not ? [condition.not] : [];
  const notPass = notConditions.length ? !notConditions.some((part) => matchesCondition(answer, part)) : true;
  return allPass && anyPass && notPass;
}

function matchesConditions(answer, conditions) {
  return Array.isArray(conditions) && conditions.some((condition) => matchesCondition(answer, condition));
}

function matchesTerms(answer, terms) {
  return Array.isArray(terms) && terms.some((term) => includesTerm(answer, term));
}

function scoreRule(answer, rule) {
  if (matchesConditions(answer, rule.twoPointCombos) || matchesTerms(answer, rule.twoPoint)) return 2;
  if (matchesConditions(answer, rule.onePointCombos) || matchesTerms(answer, rule.onePoint)) return 1;
  return 0;
}

function scoreRules(answer, rules) {
  const details = rules.map((rule) => ({
    label: rule.label,
    points: scoreRule(answer, rule),
    maxPoints: 2,
  }));
  return {
    score: details.reduce((sum, rule) => sum + rule.points, 0),
    max: details.reduce((sum, rule) => sum + rule.maxPoints, 0),
    details,
  };
}

function parseAgeMonths(value) {
  const match = String(value || "").trim().match(/^(\d+)\s*[:.]\s*(\d{1,2})$/);
  if (!match) return null;
  const years = Number(match[1]);
  const months = Number(match[2]);
  if (Number.isNaN(years) || Number.isNaN(months) || months < 0 || months > 11) return null;
  return years * 12 + months;
}

function parseDateParts(value) {
  const match = String(value || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return null;
  return { year, month, day, date };
}

function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function calculateChronologicalAge(birthValue, assessmentValue) {
  const birth = parseDateParts(birthValue);
  const assessment = parseDateParts(assessmentValue);
  if (!birth || !assessment || assessment.date < birth.date) return null;

  let years = assessment.year - birth.year;
  let months = assessment.month - birth.month;
  let days = assessment.day - birth.day;

  if (days < 0) {
    months -= 1;
    days += daysInMonth(assessment.year, assessment.month - 1 || 12);
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return {
    years,
    months,
    days,
    totalMonths: years * 12 + months,
    short: `${years}:${months}`,
    label: `${years} έτη, ${months} μήνες, ${days} ημέρες`,
  };
}

function getChronologicalAge() {
  return calculateChronologicalAge(state.birthDate, state.sessionDate);
}

function getAgeMonthsForScoring() {
  return getChronologicalAge()?.totalMonths ?? parseAgeMonths(state.age);
}

function findAgeBand(months) {
  if (months === null) return null;
  return ageBands.find((band) => months >= band.minMonths && months <= band.maxMonths) || null;
}

function percentileFor(score, table) {
  const percentiles = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  let result = 0;
  for (const percentile of percentiles) {
    if (score >= table[percentile]) result = percentile;
  }
  return result === 0 ? "<10" : String(result);
}

function percentileDisplay(value) {
  return value === "<10" ? "<10ο" : `${value}ο`;
}

function percentileInterpretation(value) {
  if (value === "<10") {
    return { label: "Κάτω από το αναμενόμενο", className: "low" };
  }
  const percentile = Number(value);
  if (percentile < 25) return { label: "Χαμηλή ζώνη", className: "watch" };
  if (percentile >= 75) return { label: "Υψηλή ζώνη", className: "strong" };
  return { label: "Αναμενόμενη ζώνη", className: "typical" };
}

function getLanguageScore() {
  const scoredPrompts = languagePrompts.map((prompt) => {
    const answer = state.languageAnswers[prompt.id] || "";
    const info = scoreRules(answer, prompt.infoRules);
    const grammar = scoreRules(answer, prompt.grammarRules);
    return {
      prompt,
      answer,
      info,
      grammar,
      total: info.score + grammar.score,
      totalMax: info.max + grammar.max,
    };
  });
  const grandTotal = scoredPrompts.reduce((sum, row) => sum + row.total, 0);
  const infoTotal = scoredPrompts.reduce((sum, row) => sum + row.info.score, 0);
  const grammarTotal = scoredPrompts.reduce((sum, row) => sum + row.grammar.score, 0);
  const infoMax = scoredPrompts.reduce((sum, row) => sum + row.info.max, 0);
  const grammarMax = scoredPrompts.reduce((sum, row) => sum + row.grammar.max, 0);
  const grandMax = scoredPrompts.reduce((sum, row) => sum + row.totalMax, 0);
  const percentage = grandMax > 0 ? Math.round((grandTotal / grandMax) * 100) : 0;
  const chronologicalAge = getChronologicalAge();
  if (chronologicalAge) state.age = chronologicalAge.short;
  const ageBand = findAgeBand(getAgeMonthsForScoring());
  const answeredCount = scoredPrompts.filter((row) => row.answer.trim()).length;
  let percentileSummary = null;
  if (ageBand) {
    percentileSummary = {
      ageKey: ageBand.key,
      total: percentileFor(grandTotal, percentileTable.total[ageBand.key]),
      info: percentileFor(infoTotal, percentileTable.info[ageBand.key]),
      grammar: percentileFor(grammarTotal, percentileTable.grammar[ageBand.key]),
    };
  }
  return {
    scoredPrompts,
    grandTotal,
    infoTotal,
    grammarTotal,
    infoMax,
    grammarMax,
    grandMax,
    percentage,
    chronologicalAge,
    ageBand,
    answeredCount,
    isComplete: answeredCount === languagePrompts.length,
    percentileSummary,
  };
}

function getArticulationTarget(cardId) {
  return articulationData.cards.find((card) => card.id === Number(cardId))?.target || "";
}

function getArticulationRecord(cardId) {
  const defaultTarget = getArticulationTarget(cardId);
  if (!state.articulationRecords[cardId]) {
    state.articulationRecords[cardId] = {
      target: defaultTarget,
      phonologicalProcess: "",
      production: "",
      status: "untested",
      errors: [],
      notes: "",
      manualStatus: false,
      speechSource: "",
      speechAlternatives: [],
      speechConfidence: null,
      speechEngine: "",
      asrProcessedAt: "",
      audioCaptured: false,
      audioSize: 0,
      audioType: "",
      audioCapturedAt: "",
    };
  }
  const record = state.articulationRecords[cardId];
  if (!String(record.target || "").trim()) record.target = defaultTarget;
  record.phonologicalProcess ||= "";
  record.production ||= "";
  record.status ||= "untested";
  record.errors ||= [];
  record.notes ||= "";
  record.autoAnalysis ||= "";
  record.manualStatus ||= false;
  record.speechSource ||= "";
  record.speechAlternatives ||= [];
  record.speechConfidence ??= null;
  record.speechEngine ||= "";
  record.asrProcessedAt ||= "";
  record.audioCaptured ||= false;
  record.audioSize ||= 0;
  record.audioType ||= "";
  record.audioCapturedAt ||= "";
  if (record.target && record.production) {
    syncAutomaticArticulationAnalysis(record);
  }
  return record;
}

function getArticulationSummary() {
  const records = articulationData.cards.map((card) => ({
    card,
    record: getArticulationRecord(card.id),
  }));
  const tested = records.filter(({ record }) => record.status !== "untested").length;
  const correct = records.filter(({ record }) => record.status === "correct").length;
  const incorrect = records.filter(({ record }) => record.status === "incorrect").length;
  const review = records.filter(({ record }) => record.status === "review").length;
  const skipped = records.filter(({ record }) => record.status === "skipped").length;
  const percentage = tested > 0 ? Math.round((correct / tested) * 100) : 0;
  return { records, tested, correct, incorrect, review, skipped, percentage };
}

function getArticulationIssueRow(card, record) {
  const analysis = record.target && record.production ? analyzeArticulationProduction(record.target, record.production, { skipReview: true }) : null;
  return {
    cardId: card.id,
    page: card.page,
    position: card.position,
    target: record.target || getArticulationTarget(card.id),
    production: record.production,
    phonologicalProcess:
      record.status === "review"
        ? "Έλεγχος μεταγραφής"
        : record.phonologicalProcess || analysis?.processText || record.errors.join(", ") || statusLabel(record.status),
    automaticAnalysis: record.autoAnalysis || analysis?.summary || "",
    status: record.status,
    errors: record.errors,
    speechSource: record.speechSource || "",
    speechAlternatives: record.speechAlternatives || [],
    speechConfidence: record.speechConfidence,
    speechEngine: record.speechEngine || "",
    asrProcessedAt: record.asrProcessedAt || "",
    audioCaptured: record.audioCaptured || audioClips.has(getAsrKey("articulation", card.id)),
    audioSize: record.audioSize || audioClips.get(getAsrKey("articulation", card.id))?.size || 0,
    audioType: record.audioType || audioClips.get(getAsrKey("articulation", card.id))?.mimeType || "",
    audioCapturedAt: record.audioCapturedAt || "",
    notes: record.notes,
  };
}

function getArticulationErrors(records) {
  return records
    .filter(({ record }) => record.status === "incorrect")
    .map(({ card, record }) => getArticulationIssueRow(card, record));
}

function getArticulationReviewRows(records) {
  return records
    .filter(({ record }) => record.status === "review")
    .map(({ card, record }) => getArticulationIssueRow(card, record));
}

function getArticulationIssueRows(records) {
  return records
    .filter(({ record }) => ["incorrect", "review"].includes(record.status))
    .map(({ card, record }) => getArticulationIssueRow(card, record));
}

function getArticulationErrorStats(errors) {
  const stats = errorTypes
    .map((type) => ({
      type,
      count: errors.filter((error) => error.errors.includes(type)).length,
    }))
    .filter((row) => row.count > 0);
  const uncategorized = errors.filter((error) => !error.errors.length).length;
  if (uncategorized) stats.push({ type: "Λάθος χωρίς κατηγορία", count: uncategorized });
  return stats;
}

function renderArticulationProgressItems(summary) {
  return `
    <li><span>Χορηγήθηκαν</span><strong>${summary.tested}/${articulationData.cards.length}</strong></li>
    <li><span>Σωστές</span><strong>${summary.correct}</strong></li>
    <li><span>Λάθος</span><strong>${summary.incorrect}</strong></li>
    <li><span>Έλεγχος</span><strong>${summary.review}</strong></li>
    <li><span>Ποσοστό</span><strong>${summary.percentage}%</strong></li>
  `;
}

function renderArticulationErrorStats(records) {
  const stats = getArticulationErrorStats(getArticulationErrors(records));
  const reviewCount = getArticulationReviewRows(records).length;
  if (reviewCount) stats.unshift({ type: "Έλεγχος μεταγραφής", count: reviewCount });
  if (!stats.length) {
    return `<div class="error-stats" id="articulationErrorStats"><span>Καμία φωνολογική διεργασία ακόμη.</span></div>`;
  }
  return `
    <div class="error-stats" id="articulationErrorStats">
      ${stats.map((stat) => `<span>${escapeHtml(stat.type)} <strong>${stat.count}</strong></span>`).join("")}
    </div>
  `;
}

function renderArticulationErrorTable(records) {
  const issues = getArticulationIssueRows(records);
  if (!issues.length) {
    return `
      <div class="error-table-shell" id="articulationErrorTable">
        <p class="empty-errors">Δεν έχουν καταγραφεί λάθη ή έλεγχοι μεταγραφής.</p>
      </div>
    `;
  }
  return `
    <div class="error-table-shell" id="articulationErrorTable">
      <table class="error-table">
        <thead>
          <tr>
            <th>Κάρτα</th>
            <th>Κατάσταση</th>
            <th>Στόχος</th>
            <th>Παραγωγή</th>
            <th>Αποτέλεσμα</th>
          </tr>
        </thead>
        <tbody>
          ${issues
            .map(
              (issue) => `
                <tr class="${issue.status === "review" ? "review-row" : ""}">
                  <td>${issue.cardId}</td>
                  <td>${escapeHtml(statusLabel(issue.status))}</td>
                  <td>${escapeHtml(issue.target || "-")}</td>
                  <td>${escapeHtml(issue.production || "-")}</td>
                  <td>${escapeHtml(issue.phonologicalProcess || "-")}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function clampIndex(index, length) {
  if (length <= 0) return 0;
  return Math.min(Math.max(index, 0), length - 1);
}

function setState(next) {
  state = { ...state, ...next };
  state.languageIndex = clampIndex(state.languageIndex, languagePrompts.length);
  state.articulationIndex = clampIndex(state.articulationIndex, articulationData.cards.length);
  state.articulationPageIndex = clampIndex(state.articulationPageIndex, articulationData.pages.length);
  saveState();
  render();
}

function progressPercent(index, total) {
  if (!total) return 0;
  return Math.round(((index + 1) / total) * 100);
}

function buttonIcon(label) {
  return `<span aria-hidden="true">${label}</span>`;
}

function getLanguageAnsweredCount() {
  return languagePrompts.filter((prompt) => (state.languageAnswers[prompt.id] || "").trim()).length;
}

const storyHeroStages = [
  { title: "Σπίθα", line: "Ξεκινάμε την ιστορία." },
  { title: "Βήμα", line: "Ο ήρωας παίρνει φόρα." },
  { title: "Άλμα", line: "Η διαδρομή ανοίγει." },
  { title: "Πτήση", line: "Η ιστορία δυναμώνει." },
  { title: "Θρίαμβος", line: "Ο ήρωας έφτασε ψηλά." },
];

function getLanguageHeroState(prompt, missionDone, activeAsr) {
  const answered = getLanguageAnsweredCount();
  const total = languagePrompts.length;
  const progress = total ? Math.round((answered / total) * 100) : 0;
  const stageIndex = Math.min(
    storyHeroStages.length - 1,
    Math.floor((answered / Math.max(total, 1)) * storyHeroStages.length),
  );
  const stage = storyHeroStages[stageIndex];
  const line = activeAsr
    ? "Σε ακούω. Απάντησε στην ερώτηση αυτής της κάρτας."
    : missionDone
      ? "Η απάντησή σου μου έδωσε νέο βήμα."
      : "Πες την ιστορία για αυτή την εικόνα.";
  return {
    answered,
    total,
    progress,
    stage,
    stageIndex,
    line,
  };
}

function renderLanguageHeroPanel(prompt, missionDone, activeAsr) {
  const hero = getLanguageHeroState(prompt, missionDone, activeAsr);
  return `
    <section class="language-hero ${activeAsr ? "listening" : missionDone ? "complete" : ""}" id="languageHeroPanel" style="--hero-progress:${hero.progress}%;">
      <div class="hero-avatar-wrap">
        <img class="story-hero-avatar" src="./assets/story-hero.svg" alt="Ήρωας των λέξεων" />
        <span class="hero-level">Επίπεδο ${hero.stageIndex + 1}</span>
      </div>
      <div class="hero-story">
        <div class="hero-speech">
          <span>${escapeHtml(hero.stage.title)}</span>
          <strong>${escapeHtml(hero.line)}</strong>
          <small>${escapeHtml(hero.stage.line)}</small>
        </div>
        <div class="hero-path" aria-label="Πρόοδος τεστ έκφρασης">
          <span class="hero-path-fill"></span>
          <span class="hero-runner"><img src="./assets/story-hero.svg" alt="" /></span>
        </div>
        <div class="hero-stats">
          <span><strong>${hero.answered}/${hero.total}</strong> εικόνες</span>
          <span><strong>${hero.progress}%</strong> ταξίδι</span>
        </div>
      </div>
    </section>
  `;
}

function renderLanguageAutoResult(scored, promptId, activeAsr = false) {
  const answered = isLanguageMissionDone(promptId);
  const revealed = answered || Boolean(state.languageResultsOpen[promptId]);
  const totalPercent = scored.totalMax ? Math.round((scored.total / scored.totalMax) * 100) : 0;
  const infoPercent = scored.info.max ? Math.round((scored.info.score / scored.info.max) * 100) : 0;
  const grammarPercent = scored.grammar.max ? Math.round((scored.grammar.score / scored.grammar.max) * 100) : 0;
  const message = activeAsr
    ? "Ακούω την απάντηση και ετοιμάζω το αποτέλεσμα."
    : revealed
      ? "Η αποστολή υπολογίστηκε αυτόματα."
      : "Πάτα ASR και πες την ιστορία για να εμφανιστεί αποτέλεσμα.";
  return `
    <section class="mission-result ${revealed ? "ready" : "locked"} ${activeAsr ? "listening" : ""}" id="languageAutoResult">
      <div>
        <span>Αυτόματο αποτέλεσμα αποστολής</span>
        <strong>${escapeHtml(message)}</strong>
      </div>
      ${
        revealed || activeAsr
          ? `<ul>
              <li style="--score:${totalPercent}%"><span>Σύνολο</span><strong>${scored.total}/${scored.totalMax}</strong></li>
              <li style="--score:${infoPercent}%"><span>Πληροφορία</span><strong>${scored.info.score}/${scored.info.max}</strong></li>
              <li style="--score:${grammarPercent}%"><span>Γραμματική</span><strong>${scored.grammar.score}/${scored.grammar.max}</strong></li>
            </ul>`
          : `<p class="mission-result-locked">Το αποτέλεσμα εμφανίζεται αυτόματα μόλις ολοκληρωθεί η φωνητική προσπάθεια.</p>`
      }
    </section>
  `;
}

function refreshLanguageHeroPanel(promptId) {
  const panel = document.getElementById("languageHeroPanel");
  const prompt = languagePrompts.find((item) => item.id === promptId);
  if (!panel || !prompt) return;
  panel.outerHTML = renderLanguageHeroPanel(prompt, isLanguageMissionDone(prompt.id), isAsrActive());
}

function refreshLanguageAutoResult(promptId) {
  const panel = document.getElementById("languageAutoResult");
  const index = languagePrompts.findIndex((item) => item.id === promptId);
  if (!panel || index < 0) return;
  const scored = getLanguageScore().scoredPrompts[index];
  panel.outerHTML = renderLanguageAutoResult(scored, promptId, isAsrActive());
}

function renderLanguageScoreSummary(scored) {
  return `
    <ul class="summary-list" id="languagePromptScore">
      <li><span>Σύνολο</span><strong>${scored.total}/${scored.totalMax}</strong></li>
      <li><span>Πληροφοριακή επάρκεια</span><strong>${scored.info.score}/${scored.info.max}</strong></li>
      <li><span>Γραμματική επάρκεια</span><strong>${scored.grammar.score}/${scored.grammar.max}</strong></li>
    </ul>
  `;
}

function refreshLanguageScorePanels(promptId) {
  const languageScore = getLanguageScore();
  const index = languagePrompts.findIndex((item) => item.id === promptId);
  if (index < 0) return;
  const scored = languageScore.scoredPrompts[index];
  const scoreList = document.getElementById("languagePromptScore");
  if (scoreList) scoreList.outerHTML = renderLanguageScoreSummary(scored);
  const evaluation = document.getElementById("languageEvaluationResult");
  if (evaluation) evaluation.outerHTML = renderPercentiles(languageScore);
  const infoRules = document.getElementById("languageInfoRules");
  if (infoRules) infoRules.outerHTML = renderRuleDetails(scored.info.details, "languageInfoRules");
  const grammarRules = document.getElementById("languageGrammarRules");
  if (grammarRules) grammarRules.outerHTML = renderRuleDetails(scored.grammar.details, "languageGrammarRules");
  const missionMetric = document.getElementById("metricMissions");
  const gameMetric = document.getElementById("metricGame");
  const scoreMetric = document.getElementById("metricLanguageScore");
  const progress = getGameProgress();
  if (missionMetric) missionMetric.textContent = `${progress.done}/${totalGameMissions}`;
  if (gameMetric) gameMetric.textContent = `${progress.percent}%`;
  if (scoreMetric) scoreMetric.textContent = `${languageScore.grandTotal}/${languageScore.grandMax}`;
}

function refreshLanguagePanels(promptId) {
  refreshLanguageHeroPanel(promptId);
  refreshLanguageAutoResult(promptId);
  refreshLanguageScorePanels(promptId);
  refreshPhonologyPanel(promptId);
  const stopButton = document.getElementById("stopSpeech");
  if (stopButton) stopButton.disabled = !(canStopAsr() || isLanguageMissionDone(promptId));
}

function getGameProgress(summary) {
  const languageDone = getLanguageAnsweredCount();
  const articulationDone = 0;
  const done = languageDone;
  const percent = totalGameMissions ? Math.round((done / totalGameMissions) * 100) : 0;
  return { languageDone, articulationDone, done, percent };
}

function isLanguageMissionDone(promptId) {
  return Boolean((state.languageAnswers[promptId] || "").trim());
}

function isArticulationMissionDone(cardId) {
  return getArticulationRecord(cardId).status !== "untested";
}

function currentMissionNumber() {
  return state.languageIndex + 1;
}

function renderSparkles() {
  return `
    <div class="sparkle-field" aria-hidden="true">
      <span></span><span></span><span></span><span></span><span></span>
    </div>
  `;
}

function renderGameHeader(title, subtitle, summary) {
  const progress = getGameProgress(summary);
  return `
    <div class="game-banner">
      <div>
        <p class="mission-kicker">Αποστολή ${currentMissionNumber()} από ${totalGameMissions}</p>
        <h2>${escapeHtml(title)}</h2>
        <p>${escapeHtml(subtitle)}</p>
      </div>
      <div class="game-companion">
        <img src="./assets/rocket.svg" alt="" />
        <strong>${progress.percent}%</strong>
        <span>του ταξιδιού</span>
      </div>
      ${renderSparkles()}
    </div>
  `;
}

function renderQuestMap(items, activeIndex, donePredicate) {
  const windowSize = 9;
  const half = Math.floor(windowSize / 2);
  let start = Math.max(activeIndex - half, 0);
  let end = Math.min(start + windowSize, items.length);
  start = Math.max(end - windowSize, 0);
  const visible = items.slice(start, end);
  return `
    <div class="quest-map" aria-label="Χάρτης αποστολών">
      ${visible
        .map((item, offset) => {
          const index = start + offset;
          const stateClass = index === activeIndex ? "active" : donePredicate(item) ? "complete" : "locked";
          return `<button class="quest-node ${stateClass}" data-quest="${index}" aria-label="Αποστολή ${index + 1}">${index + 1}</button>`;
        })
        .join("")}
    </div>
  `;
}

function renderRewardStrip(unlocked, total) {
  const visibleTotal = Math.min(total, 12);
  return `
    <div class="reward-strip" aria-label="Αστέρια αποστολών">
      ${Array.from({ length: visibleTotal }, (_, index) => {
        const threshold = Math.ceil(((index + 1) / visibleTotal) * total);
        return `<span class="reward-star ${unlocked >= threshold ? "won" : ""}">★</span>`;
      }).join("")}
    </div>
  `;
}

function renderAutoAnalysisContent(analysis) {
  const details = analysis.details.length
    ? `<ul>${analysis.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}</ul>`
    : "";
  return `
    <strong>${escapeHtml(analysis.title)}</strong>
    <p>${escapeHtml(analysis.summary)}</p>
    ${details}
  `;
}

function renderAutoAnalysisBox(analysis) {
  const className = analysis.ready ? analysis.status : "waiting";
  return `<div class="auto-analysis ${className}" id="autoAnalysisResult">${renderAutoAnalysisContent(analysis)}</div>`;
}

function getDisplayWord(value) {
  const words = String(value || "").match(/[A-Za-zΑ-ΩΆ-ΏΪΫα-ωά-ώϊϋΐΰ]+/g) || [];
  const contentWords = words.filter((word) => !["ο", "η", "το", "οι", "τα", "τον", "την", "τη"].includes(normalizeText(word)));
  return (contentWords.length ? contentWords : words).sort((a, b) => b.length - a.length)[0] || "";
}

function generateProductionSuggestions(record) {
  const targetWord = getDisplayWord(record.target).toLocaleLowerCase("el-GR");
  const targetComparable = getComparableWord(record.target);
  const productionComparable = getComparableWord(record.production);
  const alternatives = Array.isArray(record.speechAlternatives) ? record.speechAlternatives : [];
  const suggestions = [];

  const pushSuggestion = (value, label) => {
    const comparable = getComparableWord(value);
    if (!comparable || comparable === targetComparable || comparable === productionComparable) return;
    if (suggestions.some((suggestion) => getComparableWord(suggestion.value) === comparable)) return;
    suggestions.push({ value, label });
  };

  alternatives.forEach((alternative) => pushSuggestion(alternative, "Εναλλακτική μεταγραφή"));

  if (targetWord && isAutomaticAsrSource(record.speechSource) && targetComparable === productionComparable) {
    productionSuggestionRules.forEach((rule) => {
      if (!targetWord.includes(rule.from)) return;
      rule.to.forEach((replacement) => {
        pushSuggestion(targetWord.split(rule.from).join(replacement), `${rule.from} → ${replacement}`);
      });
    });
  }

  return suggestions.slice(0, 8);
}

function renderTranscriptSupport(record) {
  const suggestions = generateProductionSuggestions(record);
  const confidence = Number(record.speechConfidence);
  const confidenceText = Number.isFinite(confidence) && confidence > 0 ? ` · ${Math.round(confidence * 100)}%` : "";
  if (!isAutomaticAsrSource(record.speechSource) && !suggestions.length) return "";
  return `
    <div class="transcript-helper" id="transcriptHelper">
      <strong>Έλεγχος μεταγραφής${confidenceText}</strong>
      ${
        suggestions.length
          ? `<div class="suggestion-grid">${suggestions
              .map(
                (suggestion) =>
                  `<button class="suggestion-button" data-production-suggestion="${escapeHtml(suggestion.value)}">
                    <span>${escapeHtml(suggestion.value)}</span>
                    <small>${escapeHtml(suggestion.label)}</small>
                  </button>`,
              )
              .join("")}</div>`
          : `<p>Χρειάζεται ακουστική επιβεβαίωση.</p>`
      }
    </div>
  `;
}

function applyProductionSuggestion(record, value) {
  record.production = value;
  record.manualStatus = false;
  record.speechSource = "suggestion";
  record.speechAlternatives = [];
  record.speechConfidence = null;
  record.speechEngine = "";
  record.asrProcessedAt = "";
  syncAutomaticArticulationAnalysis(record);
  saveState();
  render();
}

function bindProductionSuggestionButtons(record) {
  document.querySelectorAll("[data-production-suggestion]").forEach((button) => {
    button.addEventListener("click", () => applyProductionSuggestion(record, button.dataset.productionSuggestion));
  });
}

function refreshAutomaticArticulationPanel(record) {
  const analysis = syncAutomaticArticulationAnalysis(record);
  const summary = getArticulationSummary();
  const processField = document.getElementById("phonologicalProcess");
  if (processField) processField.value = record.phonologicalProcess || "";
  const resultBox = document.getElementById("autoAnalysisResult");
  if (resultBox) {
    resultBox.className = `auto-analysis ${analysis.ready ? analysis.status : "waiting"}`;
    resultBox.innerHTML = renderAutoAnalysisContent(analysis);
  }
  const transcriptHelper = document.getElementById("transcriptHelper");
  const helperHtml = renderTranscriptSupport(record);
  if (transcriptHelper) {
    transcriptHelper.outerHTML = helperHtml;
  } else if (resultBox && helperHtml) {
    resultBox.insertAdjacentHTML("afterend", helperHtml);
  }
  bindProductionSuggestionButtons(record);
  document.querySelectorAll("[data-status]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.status === record.status));
  });
  document.querySelectorAll("[data-error]").forEach((button) => {
    button.setAttribute("aria-pressed", String(record.errors.includes(button.dataset.error)));
  });
  const progressList = document.getElementById("articulationProgressList");
  if (progressList) progressList.innerHTML = renderArticulationProgressItems(summary);
  const errorTable = document.getElementById("articulationErrorTable");
  if (errorTable) errorTable.outerHTML = renderArticulationErrorTable(summary.records);
  const errorStats = document.getElementById("articulationErrorStats");
  if (errorStats) errorStats.outerHTML = renderArticulationErrorStats(summary.records);
  saveState();
}

function render() {
  const languageScore = getLanguageScore();
  state.activeTest = "language";
  document.getElementById("app").innerHTML = `
    <main class="app-shell">
      ${renderSidebar(languageScore)}
      <section class="workspace">
        ${renderWarning()}
        ${renderLanguage(languageScore)}
      </section>
    </main>
  `;
  bindEvents();
}

function renderWarning() {
  const messages = [];
  const config = getAsrConfig();
  const mode = getAsrMode(config);
  if (mode !== "browser" && !config.endpointUrl) {
    messages.push("Το server ASR δεν έχει endpoint στο asr-config.js. Η εφαρμογή γυρίζει σε browser ASR όπου είναι διαθέσιμο.");
  }
  if (!canUseBrowserAsr() && !shouldUseServerAsr(config)) {
    messages.push("Ο browser δεν υποστηρίζει ASR μεταγραφή. Η καταγραφή γίνεται χειροκίνητα.");
  }
  if (shouldUseServerAsr(config) && !canRecordAudio()) {
    messages.push("Το server ASR χρειάζεται ηχογράφηση από το μικρόφωνο, αλλά ο browser δεν τη διαθέτει.");
  }
  if (asrError) messages.push(asrError);
  if (!messages.length) return "";
  return `<div class="warning">${messages.map((message) => `<p>${escapeHtml(message)}</p>`).join("")}</div>`;
}

function renderChronologicalAgeSummary() {
  if (!state.birthDate || !state.sessionDate) {
    return `
      <div class="age-summary waiting" id="chronologicalAge">
        <span>Χρονολογική ηλικία</span>
        <strong>Συμπλήρωσε ημερομηνία γέννησης και αξιολόγησης.</strong>
      </div>
    `;
  }

  const age = getChronologicalAge();
  if (!age) {
    return `
      <div class="age-summary error" id="chronologicalAge">
        <span>Χρονολογική ηλικία</span>
        <strong>Έλεγξε τις ημερομηνίες.</strong>
      </div>
    `;
  }

  return `
    <div class="age-summary" id="chronologicalAge">
      <span>Χρονολογική ηλικία</span>
      <strong>${escapeHtml(age.short)}</strong>
      <small>${escapeHtml(age.label)}</small>
    </div>
  `;
}

function renderWhisperStatus() {
  if (!shouldUseServerAsr()) return "";
  const labels = {
    checking: "Έλεγχος σύνδεσης Whisper…",
    loading: "Το Whisper φορτώνει το μοντέλο…",
    ready: "Whisper συνδεδεμένο για μεταγραφή",
    error: "Το Whisper χρειάζεται έλεγχο",
    offline: "Το Whisper δεν είναι συνδεδεμένο",
  };
  return `<div class="whisper-status ${escapeHtml(asrHealth.status)}" role="status">
    <strong>${escapeHtml(labels[asrHealth.status] || labels.offline)}</strong>
    <button type="button" class="action-button secondary compact" data-check-asr>Έλεγχος σύνδεσης</button>
    ${asrHealth.status === "offline" ? '<small>Άνοιξε το «Εκκίνηση Whisper.command» από τον φάκελο της εφαρμογής.</small>' : ""}
    ${asrHealth.status === "loading" ? '<small>Στην πρώτη εκκίνηση γίνεται λήψη του μεγάλου μοντέλου. Πάτα έλεγχο σύνδεσης σε λίγο.</small>' : ""}
    ${asrHealth.error ? `<small>${escapeHtml(asrHealth.error)}</small>` : ""}
  </div>`;
}

async function checkAsrHealth() {
  if (!shouldUseServerAsr() || captureStarting || captureFinalizing || isAsrActive()) return;
  try {
    const config = getAsrConfig();
    const url = config.healthUrl || new URL("/health", config.endpointUrl).href;
    const response = await fetch(url, { signal: AbortSignal.timeout(5000), cache: "no-store" });
    if (!response.ok) throw new Error("Δεν απαντά ο server.");
    const health = await response.json();
    asrHealth = { ...health, status: health.status || (health.ok ? "ready" : "error") };
  } catch {
    asrHealth = { status: "offline", engine: "" };
  }
  if (!captureStarting && !isAsrActive()) render();
}

function renderRecordingFeedback() {
  const recording = mediaRecorder?.state === "recording";
  let message = "Μικρόφωνο: πάτησε ASR Μίλα για σύνδεση.";
  if (captureStarting) message = "Περιμένω άδεια μικροφώνου. Επίλεξε Να επιτρέπεται στο μήνυμα του browser.";
  else if (recording) message = "● Ηχογράφηση σε εξέλιξη — μίλησε και μετά πάτησε Τέλος ASR.";
  else if (captureFinalizing || pendingServerAsrKey) message = "Η ηχογράφηση τελείωσε. Το Whisper επεξεργάζεται τον ήχο· η μεταγραφή μπορεί να χρειαστεί λίγα λεπτά.";
  else if (asrError) message = asrError;
  return `<div class="recording-feedback ${recording ? "live" : ""} ${asrError ? "error" : ""}" role="status" aria-live="polite">
    <strong>${escapeHtml(message)}</strong>
    ${recording ? `<div class="recording-indicators">
      <span data-recording-time>00:00</span>
      <meter data-recording-level min="0" max="1" value="0" aria-label="Ένταση εισερχόμενου ήχου"></meter>
      <span data-recording-bytes>0 B ήχου</span>
      <small data-recording-signal>Έλεγχος σήματος μικροφώνου…</small>
    </div>` : ""}
    ${liveAsrNote ? `<small>${escapeHtml(liveAsrNote)}</small>` : ""}
    ${asrError ? '<small>Αν η άδεια δεν εμφανίζεται στην ενσωματωμένη καρτέλα, άνοιξε την ίδια διεύθυνση σε Safari ή Chrome και επίτρεψε το μικρόφωνο.</small>' : ""}
  </div>`;
}

function renderAsrPanel(scope, id, meta = {}) {
  const key = getAsrKey(scope, id);
  const clip = audioClips.get(key);
  const active = activeAsrKey === key && Boolean(recognition || mediaRecorder);
  const serverBusy = pendingServerAsrKey === key;
  const alternatives = Array.isArray(meta.speechAlternatives) ? meta.speechAlternatives.filter(Boolean).slice(0, 5) : [];
  const confidence = Number(meta.speechConfidence);
  const confidenceText = Number.isFinite(confidence) && confidence > 0 ? `${Math.round(confidence * 100)}%` : "-";
  const audioSupportText = canRecordAudio() ? "ηχογράφηση διαθέσιμη" : "χωρίς αποθήκευση ήχου";
  const sourceText = serverBusy
    ? "server ASR..."
    : meta.speechSource
      ? asrSourceLabel(meta.speechSource)
      : "χειροκίνητη";
  return `
    <div class="asr-panel ${active || serverBusy ? "recording" : ""}" data-asr-panel="${escapeHtml(key)}">
      <div class="asr-panel-head">
        <strong>ASR · Whisper</strong>
        <span>${escapeHtml(asrProviderLabel())}</span>
      </div>
      ${renderWhisperStatus()}
      ${getAsrMode() === "hybrid" && canUseBrowserAsr() ? `<label class="live-asr-choice"><input type="checkbox" data-enable-live-asr ${state.liveTranscriptionEnabled !== false ? "checked" : ""} ${captureStarting || isAsrActive() ? "disabled" : ""}> Ζωντανό κείμενο μέσω browser</label><p class="asr-note">Η ζωντανή αναγνώριση μπορεί να χρησιμοποιεί την υπηρεσία ομιλίας του browser. Απενεργοποίησέ τη για μεταγραφή μόνο με το τοπικό Whisper.</p>` : ""}
      <ul class="asr-meta">
        <li><span>Μεταγραφή</span><strong>${escapeHtml(sourceText)}</strong></li>
        <li><span>Βεβαιότητα μεταγραφής</span><strong>${escapeHtml(confidenceText)}</strong></li>
        <li><span>Ήχος</span><strong>${serverBusy ? "μεταγράφει..." : active ? "γράφει τώρα" : clip ? formatBytes(clip.size) : audioSupportText}</strong></li>
      </ul>
      ${meta.speechEngine ? `<p class="asr-note">Μηχανή: ${escapeHtml(meta.speechEngine)}</p>` : ""}
      ${
        clip
          ? `<div class="audio-review">
              <audio controls preload="metadata" src="${escapeHtml(clip.url)}"></audio>
              <label class="audio-speed">Ακρόαση
                <select data-audio-speed aria-label="Ταχύτητα ακρόασης">
                  <option value="1">1×</option><option value="0.75">0,75×</option><option value="0.5">0,5×</option>
                </select>
              </label>
              <button class="action-button secondary compact" data-download-audio="${escapeHtml(key)}">${buttonIcon("↓")}Ήχος</button>
              ${audioRetryOptions.has(key) ? `<button class="action-button secondary compact" data-retry-asr="${escapeHtml(key)}" ${canStartAsr() ? "" : "disabled"}>Ξανά με Whisper</button>` : ""}
            </div>`
          : `<p class="asr-note">${
              serverBusy
                ? "Γίνεται τελική μεταγραφή από το server ASR."
                : active
                  ? "Η εφαρμογή κρατάει ηχητικό δείγμα μέχρι να πατήσεις Τέλος."
                  : "Πάτα ASR για μεταγραφή και ηχητικό έλεγχο."
            }</p>`
      }
      <p class="asr-note">Η μεταγραφή χρειάζεται ακουστικό έλεγχο. Για τις φωνολογικές διεργασίες επιβεβαίωσε την πραγματική παραγωγή στο πεδίο του θεραπευτή.</p>
      ${
        alternatives.length
          ? `<div class="asr-alternatives">
              ${alternatives.map((alternative) => `<span>${escapeHtml(alternative)}</span>`).join("")}
            </div>`
          : ""
      }
    </div>
  `;
}

function refreshAsrPanel(scope, id, meta) {
  const key = getAsrKey(scope, id);
  const panel = document.querySelector(`[data-asr-panel="${key}"]`);
  if (!panel) return;
  panel.outerHTML = renderAsrPanel(scope, id, meta);
  bindAudioClipButtons();
}

function renderSidebar(languageScore) {
  const progress = getGameProgress();
  return `
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-mark">★</div>
        <h1>Το Ταξίδι των Λέξεων</h1>
        <p>Παιχνίδι αξιολόγησης με πίνακα θεραπευτή</p>
      </div>

      <div class="therapist-tag">Πίνακας θεραπευτή</div>

      <div class="field-stack">
        <label class="field">
          Παιδί
          <input id="childName" type="text" value="${escapeHtml(state.childName)}" autocomplete="off" />
        </label>
        <label class="field">
          Θεραπευτής
          <input id="clinician" type="text" value="${escapeHtml(state.clinician)}" autocomplete="off" />
        </label>
        <label class="field">
          Ημερομηνία γέννησης
          <input id="birthDate" type="date" value="${escapeHtml(state.birthDate || "")}" />
        </label>
        <label class="field">
          Ημερομηνία αξιολόγησης
          <input id="sessionDate" type="date" value="${escapeHtml(state.sessionDate)}" />
        </label>
        ${renderChronologicalAgeSummary()}
      </div>

      <nav class="tabs" aria-label="Δοκιμασίες">
        <button class="tab-button" data-tab="language" aria-selected="${state.activeTest === "language"}">
          <span>Τεστ έκφρασης</span>
          <span class="tab-count">${state.languageIndex + 1}/${languagePrompts.length}</span>
        </button>
      </nav>

      <div class="metric-grid">
        <div class="metric">
          <span>Αποστολές</span>
          <strong id="metricMissions">${progress.done}/${totalGameMissions}</strong>
        </div>
        <div class="metric">
          <span>Παιχνίδι</span>
          <strong id="metricGame">${progress.percent}%</strong>
        </div>
        <div class="metric">
          <span>Γλωσσικό σκορ</span>
          <strong id="metricLanguageScore">${languageScore.grandTotal}/${languageScore.grandMax}</strong>
        </div>
      </div>
      ${renderRewardStrip(progress.done, totalGameMissions)}

      <div class="sidebar-actions">
        <button class="action-button green" id="downloadTxt">${buttonIcon("↓")}Αναφορά HTML</button>
        <button class="action-button secondary" id="downloadJson">${buttonIcon("{}")}Δεδομένα JSON</button>
        <button class="action-button secondary" id="printReport">${buttonIcon("□")}Εκτύπωση</button>
        <button class="action-button red" id="resetSession">${buttonIcon("×")}Νέα συνεδρία</button>
      </div>
    </aside>
  `;
}

function renderLanguage(languageScore) {
  const prompt = languagePrompts[state.languageIndex];
  const scored = languageScore.scoredPrompts[state.languageIndex];
  const percent = progressPercent(state.languageIndex, languagePrompts.length);
  const missionDone = isLanguageMissionDone(prompt.id);
  const activeAsr = isAsrActive();
  const languageAsr = getLanguageAsrRecord(prompt.id);
  return `
    ${renderGameHeader("Το Ταξίδι των Λέξεων", "Κοίτα την εικόνα, πάτα το μικρόφωνο και πες την ιστορία.")}

    <div class="workspace-grid">
      <article class="card stimulus-stage game-stage">
        <div class="progress-row">
          <span>Κόσμος ιστοριών · εικόνα ${prompt.id} από ${languagePrompts.length}</span>
          <span>${percent}%</span>
        </div>
        <div class="progress-track" aria-hidden="true"><div class="progress-bar" style="width:${percent}%"></div></div>
        ${renderQuestMap(languagePrompts, state.languageIndex, (item) => isLanguageMissionDone(item.id))}
        <div class="mission-card ${missionDone ? "mission-complete" : ""}">
          <div class="mission-badge">${missionDone ? "★" : "?"}</div>
          <div>
            <p>Εντολή κάρτας · τρέχουσα εικόνα</p>
            <h3 class="prompt-title">${escapeHtml(prompt.question)}</h3>
          </div>
        </div>
        <div class="story-playfield">
          <div class="stimulus-visual">
            <div class="image-frame game-frame">
              <img class="stimulus-image" src="./${prompt.image}" alt="${escapeHtml(prompt.question)}" />
            </div>
            <div class="child-callout therapist-command-under-image ${activeAsr ? "listening" : ""}">
              <span class="callout-dot"></span>
              <div class="therapist-command-text">
                <span>Λεκτική εντολή θεραπευτή</span>
                <strong>${escapeHtml(prompt.question)}</strong>
              </div>
            </div>
          </div>
          ${renderLanguageHeroPanel(prompt, missionDone, activeAsr)}
        </div>
        <div class="control-row">
          <button class="action-button green play-button" id="recordLanguage" ${canStartAsr() ? "" : "disabled"}>${buttonIcon("●")}${captureStarting ? "Αναμονή μικροφώνου…" : "ASR Μίλα"}</button>
          <button class="action-button red" id="stopSpeech" ${canStopAsr() || missionDone ? "" : "disabled"}>${buttonIcon("■")}${captureStarting ? "Ακύρωση" : "Τέλος ASR"}</button>
          <button class="action-button secondary" id="prevLanguage" ${state.languageIndex === 0 ? "disabled" : ""}>Προηγούμενη</button>
          <button class="action-button secondary" id="nextLanguage" ${state.languageIndex === languagePrompts.length - 1 ? "disabled" : ""}>Επόμενη</button>
        </div>
        ${renderRecordingFeedback()}
        <p class="asr-note">${shouldUseBrowserRecognition() ? "Ζωντανή μεταγραφή όσο μιλάς. Μετά το «Τέλος ASR» ακολουθεί η τελική μεταγραφή Whisper." : "Η ζωντανή μεταγραφή είναι κλειστή ή δεν υποστηρίζεται εδώ. Το κείμενο Whisper εμφανίζεται μετά το «Τέλος ASR»."}</p>
        ${renderLanguageAutoResult(scored, prompt.id, activeAsr)}
      </article>

      <aside class="panel therapist-panel">
        <h3 class="section-title">Βαθμολόγηση εικόνας</h3>
        <div class="text-area">
          <label for="languageAnswer">Ακριβής απάντηση παιδιού</label>
          <textarea id="languageAnswer">${escapeHtml(state.languageAnswers[prompt.id] || "")}</textarea>
        </div>
        ${renderAsrPanel("language", prompt.id, languageAsr)}
        ${renderPhonologyPanel(prompt)}
        ${renderLanguageScoreSummary(scored)}
        ${renderPercentiles(languageScore)}
        <h4 class="mini-title">Κριτήρια πληροφορίας</h4>
        ${renderRuleDetails(scored.info.details, "languageInfoRules")}
        <h4 class="mini-title">Κριτήρια γραμματικής</h4>
        ${renderRuleDetails(scored.grammar.details, "languageGrammarRules")}
      </aside>
    </div>
  `;
}

function renderRuleDetails(details, id = "") {
  const idAttr = id ? ` id="${escapeHtml(id)}"` : "";
  if (!details.length) return `<p class="speech-status"${idAttr}>Δεν υπάρχουν κριτήρια για αυτή την εικόνα.</p>`;
  return `
    <ul class="score-list"${idAttr}>
      ${details
        .map(
          (detail) =>
            `<li><span>${escapeHtml(detail.label)}</span><strong>${detail.points}/${detail.maxPoints}</strong></li>`,
        )
        .join("")}
    </ul>
  `;
}

function renderPhonemeAgeTable() {
  return `
    <div class="phoneme-age-table">
      ${phonemeAcquisitionBands
        .map(
          (band) => `
            <div>
              <strong>${escapeHtml(band.label)}</strong>
              <span>${escapeHtml([...(band.sounds || []), ...(band.clusters || []), band.clusterLabel].filter(Boolean).join(", "))}</span>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderPhonologyAnalysis(analysis) {
  if (!analysis.ready) {
    return `
      <div class="phonology-result waiting">
        <strong>Περιμένει στόχο και ακριβή φωνολογική καταγραφή θεραπευτή.</strong>
        <p>Το ASR δεν χρησιμοποιείται εδώ για φωνολογικές διεργασίες, γιατί μπορεί να διορθώσει αυτόματα την παραγωγή του παιδιού. Γράψε τη σωστή/ενήλικη μορφή και την παραγωγή όπως την άκουσε/επιβεβαίωσε ο θεραπευτής.</p>
      </div>
    `;
  }
  if (!analysis.issues.length) {
    return `
      <div class="phonology-result ok">
        <strong>Δεν εντοπίστηκε φωνολογική διεργασία στη σύγκριση.</strong>
        <p>${analysis.age ? `Ηλικία: ${escapeHtml(analysis.age.short)}.` : "Συμπλήρωσε ηλικία για ηλικιακή ερμηνεία."}</p>
      </div>
    `;
  }
  const unknownAge = analysis.issues.filter((issue) => issue.status.className === "unknown").length;
  const ageSummary = unknownAge
    ? "Συμπλήρωσε ημερομηνία γέννησης για ηλικιακή ερμηνεία"
    : analysis.needsReview
    ? `${analysis.needsReview} ευρήματα χρειάζονται έλεγχο ηλικίας`
    : analysis.watch
      ? `${analysis.watch} ευρήματα σε φάση κατάκτησης`
      : "Τα ευρήματα είναι αναπτυξιακά αναμενόμενα για την ηλικία";
  return `
    <div class="phonology-result review">
      <strong>${escapeHtml(ageSummary)}</strong>
      <p>${analysis.age ? `Ηλικία: ${escapeHtml(analysis.age.short)}.` : "Συμπλήρωσε ηλικία για ηλικιακή ερμηνεία."} Η τελική κρίση γίνεται από τον θεραπευτή με ακουστικό έλεγχο.</p>
      <ul class="phonology-issues">
        ${analysis.issues
          .map(
            (issue) => `
              <li class="${escapeHtml(issue.status.className)}">
                <span>${escapeHtml(issue.wordTarget)} → ${escapeHtml(issue.wordProduction)}</span>
                <strong>${escapeHtml(issue.process)}</strong>
                <small>/${escapeHtml(issue.sound)}/: ${escapeHtml(issue.target)} → ${escapeHtml(issue.production)} · ${escapeHtml(issue.status.label)}</small>
              </li>
            `,
          )
          .join("")}
      </ul>
    </div>
  `;
}

function renderPhonologyPanel(prompt) {
  const record = getPhonologyRecord(prompt.id);
  const analysis = analyzePhonologyRecord(record);
  const productionValue = record.productions || "";
  return `
    <section class="phonology-card" id="phonologyPanel">
      <div class="phonology-head">
        <div>
          <span>Φωνολογική ανάλυση</span>
          <strong>Στόχος ↔ ακριβής παραγωγή παιδιού</strong>
        </div>
        <small>${analysis.age ? `Ηλικία ${escapeHtml(analysis.age.short)}` : "Χρειάζεται ημερομηνία γέννησης"}</small>
      </div>
      <div class="phonology-grid">
        <label class="field">
          Στόχος / σωστή μορφή
          <textarea id="phonologyTargets" rows="2" placeholder="μία λέξη ανά γραμμή ή χωρισμένες με κόμμα">${escapeHtml(record.targets)}</textarea>
        </label>
        <label class="field">
          Ακριβής φωνολογική καταγραφή θεραπευτή
          <textarea id="phonologyProductions" rows="2" placeholder="γράψε όπως ακούστηκε, π.χ. σάλα αντί σκάλα">${escapeHtml(productionValue)}</textarea>
        </label>
      </div>
      <div class="phonology-manual-note">
        <strong>Προσοχή:</strong>
        Το ASR είναι για γενική μεταγραφή και ηχητικό δείγμα. Η ανάλυση φωνολογικών διεργασιών γίνεται μόνο από την ακριβή παραγωγή που πληκτρολογεί ο θεραπευτής μετά από ακουστικό έλεγχο.
      </div>
      ${renderPhonologyAnalysis(analysis)}
      ${renderPhonemeAgeTable()}
    </section>
  `;
}

function refreshPhonologyPanel(promptId) {
  const panel = document.getElementById("phonologyPanel");
  const prompt = languagePrompts.find((item) => item.id === promptId);
  if (!panel || !prompt) return;
  panel.outerHTML = renderPhonologyPanel(prompt);
  bindPhonologyControls(prompt);
}

function renderPercentiles(languageScore) {
  const answeredText = `${languageScore.answeredCount}/${languagePrompts.length}`;
  if (!languageScore.chronologicalAge) {
    return `
      <section class="evaluation-card waiting" id="languageEvaluationResult">
        <div class="evaluation-head">
          <span>Αποτελέσματα αξιολόγησης</span>
          <strong>Συμπλήρωσε ημερομηνία γέννησης</strong>
          <small>Οι βαθμοί ενημερώνονται άμεσα, αλλά τα ηλικιακά αποτελέσματα χρειάζονται χρονολογική ηλικία.</small>
        </div>
        <ul class="evaluation-grid">
          <li><span>Απαντήσεις</span><strong>${answeredText}</strong><small>πρόοδος τεστ</small></li>
          <li><span>Σύνολο</span><strong>${languageScore.grandTotal}/${languageScore.grandMax}</strong><small>raw score</small></li>
        </ul>
      </section>
    `;
  }

  if (!languageScore.percentileSummary) {
    return `
      <section class="evaluation-card waiting" id="languageEvaluationResult">
        <div class="evaluation-head">
          <span>Αποτελέσματα αξιολόγησης</span>
          <strong>Ηλικία ${escapeHtml(languageScore.chronologicalAge.short)}</strong>
          <small>Η ηλικία είναι εκτός των διαθέσιμων πινάκων 4:0 έως 7:0.</small>
        </div>
        <ul class="evaluation-grid">
          <li><span>Απαντήσεις</span><strong>${answeredText}</strong><small>πρόοδος τεστ</small></li>
          <li><span>Σύνολο</span><strong>${languageScore.grandTotal}/${languageScore.grandMax}</strong><small>raw score</small></li>
        </ul>
      </section>
    `;
  }

  const p = languageScore.percentileSummary;
  const rows = [
    {
      label: "Σύνολο",
      score: `${languageScore.grandTotal}/${languageScore.grandMax}`,
      percentile: p.total,
    },
    {
      label: "Πληροφορία",
      score: `${languageScore.infoTotal}/${languageScore.infoMax}`,
      percentile: p.info,
    },
    {
      label: "Γραμματική",
      score: `${languageScore.grammarTotal}/${languageScore.grammarMax}`,
      percentile: p.grammar,
    },
  ];
  return `
    <section class="evaluation-card ${languageScore.isComplete ? "complete" : ""}" id="languageEvaluationResult">
      <div class="evaluation-head">
        <span>Αποτελέσματα αξιολόγησης</span>
        <strong>Ηλικία ${escapeHtml(languageScore.chronologicalAge.short)} · Πίνακας ${escapeHtml(p.ageKey)}</strong>
        <small>${languageScore.isComplete ? "Τελικό αποτέλεσμα" : `Ενδιάμεσο αποτέλεσμα · ${answeredText} εικόνες`} με βάση τη χρονολογική ηλικία.</small>
      </div>
      <ul class="evaluation-grid">
        ${rows
          .map((row) => {
            const interpretation = percentileInterpretation(row.percentile);
            return `
              <li class="${interpretation.className}">
                <span>${escapeHtml(row.label)}</span>
                <strong>${escapeHtml(row.score)}</strong>
                <small>${percentileDisplay(row.percentile)} εκατοστημόριο · ${escapeHtml(interpretation.label)}</small>
              </li>
            `;
          })
          .join("")}
      </ul>
    </section>
  `;
}

function renderArticulation(summary) {
  return state.articulationView === "pages" ? renderArticulationPages(summary) : renderArticulationCards(summary);
}

function renderArticulationHeader(summary) {
  return `
    ${renderGameHeader("Ο Κόσμος των Ήχων", "Δες την κάρτα, πες τη λέξη και μάζεψε το επόμενο αστέρι.", summary)}
    <div class="topbar compact-toolbar">
      <p>${summary.tested} χορηγημένες κάρτες, ${summary.correct} σωστές, ${summary.review} για έλεγχο</p>
      <div class="view-toggle" role="group" aria-label="Προβολή τεστ άρθρωσης">
        <button class="status-button" data-view="cards" aria-pressed="${state.articulationView === "cards"}">Κάρτες</button>
        <button class="status-button" data-view="pages" aria-pressed="${state.articulationView === "pages"}">Σελίδες PDF</button>
      </div>
    </div>
  `;
}

function renderArticulationCards(summary) {
  const card = articulationData.cards[state.articulationIndex];
  const record = getArticulationRecord(card.id);
  const analysis = syncAutomaticArticulationAnalysis(record);
  const rotation = state.rotations[`card-${card.id}`] || 0;
  const percent = progressPercent(state.articulationIndex, articulationData.cards.length);
  const missionDone = isArticulationMissionDone(card.id);
  const activeAsr = isAsrActive();
  return `
    ${renderArticulationHeader(summary)}
    <div class="workspace-grid">
      <article class="card stimulus-stage game-stage sound-world">
        <div class="progress-row">
          <span>Κόσμος ήχων · ${escapeHtml(card.label)} · σελίδα ${card.page}</span>
          <span>${state.articulationIndex + 1}/${articulationData.cards.length}</span>
        </div>
        <div class="progress-track" aria-hidden="true"><div class="progress-bar" style="width:${percent}%"></div></div>
        ${renderQuestMap(articulationData.cards, state.articulationIndex, (item) => isArticulationMissionDone(item.id))}
        <div class="mission-card ${missionDone ? "mission-complete" : ""}">
          <div class="mission-badge">${missionDone ? "★" : "♪"}</div>
          <div>
            <p>Αποστολή ήχου</p>
            <h3 class="prompt-title">Πες τι βλέπεις στην κάρτα</h3>
          </div>
        </div>
        <div class="image-frame game-frame">
          <img
            class="stimulus-image"
            src="./${card.src}"
            alt="${escapeHtml(card.label)} από το τεστ άρθρωσης"
            style="transform: rotate(${rotation}deg)"
          />
        </div>
        <div class="child-callout ${activeAsr ? "listening" : ""}">
          <span class="callout-dot"></span>
          <strong>${activeAsr ? "ASR ενεργό..." : missionDone ? "Η αποστολή καταγράφηκε." : "Πάτα ASR και πες τη λέξη."}</strong>
        </div>
        <div class="control-row">
          <button class="action-button secondary" id="rotateCard">${buttonIcon("↻")}Περιστροφή</button>
          <button class="action-button green play-button" id="recordArticulation" ${canStartAsr() ? "" : "disabled"}>${buttonIcon("●")}${captureStarting ? "Αναμονή μικροφώνου…" : "ASR Μίλα"}</button>
          <button class="action-button red" id="stopSpeech" ${canStopAsr() ? "" : "disabled"}>${buttonIcon("■")}${captureStarting ? "Ακύρωση" : "Τέλος ASR"}</button>
          <button class="action-button secondary" id="prevArticulation" ${state.articulationIndex === 0 ? "disabled" : ""}>Προηγούμενη</button>
          <button class="action-button secondary" id="nextArticulation" ${state.articulationIndex === articulationData.cards.length - 1 ? "disabled" : ""}>Επόμενη</button>
        </div>
        ${renderRecordingFeedback()}
        <p class="asr-note">${shouldUseBrowserRecognition() ? "Ζωντανή μεταγραφή όσο μιλάς. Μετά το «Τέλος ASR» ακολουθεί η τελική μεταγραφή Whisper." : "Η ζωντανή μεταγραφή είναι κλειστή ή δεν υποστηρίζεται εδώ. Το κείμενο Whisper εμφανίζεται μετά το «Τέλος ASR»."}</p>
      </article>

      <aside class="panel therapist-panel">
        <h3 class="section-title">Καταγραφή άρθρωσης</h3>
        <div class="field-stack">
          <label class="field">
            Λέξη στόχος
            <input id="targetWord" type="text" value="${escapeHtml(record.target)}" placeholder="πχ χελώνα" autocomplete="off" />
          </label>
          <label class="field">
            Παραγωγή παιδιού
            <textarea id="production" rows="3" placeholder="πχ σελώνα">${escapeHtml(record.production)}</textarea>
          </label>
          <label class="field">
            Φωνολογική διεργασία (αυτόματα)
            <textarea id="phonologicalProcess" rows="2" readonly>${escapeHtml(record.phonologicalProcess || "")}</textarea>
          </label>
          <label class="field">
            Σημειώσεις
            <textarea id="articulationNotes" rows="3">${escapeHtml(record.notes)}</textarea>
          </label>
        </div>
        ${renderAutoAnalysisBox(analysis)}
        ${renderTranscriptSupport(record)}
        ${renderAsrPanel("articulation", card.id, record)}
        <h4 class="mini-title">Αποτέλεσμα</h4>
        <div class="segmented" role="group" aria-label="Αποτέλεσμα παραγωγής">
          ${renderStatusButton("correct", "Σωστό", record.status)}
          ${renderStatusButton("incorrect", "Λάθος", record.status)}
          ${renderStatusButton("review", "Έλεγχος", record.status)}
          ${renderStatusButton("skipped", "Δεν χορηγήθηκε", record.status)}
          ${renderStatusButton("untested", "Κενό", record.status)}
        </div>

        <h4 class="mini-title">Είδος λάθους</h4>
        <div class="chip-grid">
          ${errorTypes
            .map(
              (type) =>
                `<button class="chip" data-error="${escapeHtml(type)}" aria-pressed="${record.errors.includes(type)}">${escapeHtml(type)}</button>`,
            )
            .join("")}
        </div>

        <h4 class="mini-title">Πρόοδος καρτών</h4>
        <ul class="summary-list" id="articulationProgressList">
          ${renderArticulationProgressItems(summary)}
        </ul>

        <h4 class="mini-title">Πίνακας λαθών / ελέγχων</h4>
        ${renderArticulationErrorStats(summary.records)}
        ${renderArticulationErrorTable(summary.records)}

        <h4 class="mini-title">Κάρτες</h4>
        <div class="thumbnail-grid">
          ${articulationData.cards.map((thumb) => renderCardThumb(thumb)).join("")}
        </div>
      </aside>
    </div>
  `;
}

function renderStatusButton(status, label, current) {
  return `<button class="status-button ${status}" data-status="${status}" aria-pressed="${current === status}">${label}</button>`;
}

function renderCardThumb(card) {
  const record = getArticulationRecord(card.id);
  const classNames = [
    "thumbnail-button",
    card.id === articulationData.cards[state.articulationIndex]?.id ? "current" : "",
    record.status === "correct" ? "done" : "",
    record.status === "incorrect" ? "issue" : "",
    record.status === "review" ? "review" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return `<button class="${classNames}" data-card="${card.id}" aria-label="Κάρτα ${card.id}">${card.id}</button>`;
}

function renderArticulationPages(summary) {
  const page = articulationData.pages[state.articulationPageIndex];
  const rotation = state.rotations[`page-${page.id}`] || 0;
  const percent = progressPercent(state.articulationPageIndex, articulationData.pages.length);
  return `
    ${renderArticulationHeader(summary)}
    <div class="workspace-grid">
      <article class="card stimulus-stage">
        <div class="progress-row">
          <span>${escapeHtml(page.label)}</span>
          <span>${state.articulationPageIndex + 1}/${articulationData.pages.length}</span>
        </div>
        <div class="progress-track" aria-hidden="true"><div class="progress-bar" style="width:${percent}%"></div></div>
        <div class="image-frame page-frame">
          <img
            class="stimulus-image"
            src="./${page.src}"
            alt="${escapeHtml(page.label)} του τεστ άρθρωσης"
            style="transform: rotate(${rotation}deg)"
          />
        </div>
        <div class="control-row">
          <button class="action-button secondary" id="rotatePage">${buttonIcon("↻")}Περιστροφή</button>
          <button class="action-button secondary" id="prevPage" ${state.articulationPageIndex === 0 ? "disabled" : ""}>Προηγούμενη</button>
          <button class="action-button secondary" id="nextPage" ${state.articulationPageIndex === articulationData.pages.length - 1 ? "disabled" : ""}>Επόμενη</button>
        </div>
      </article>
      <aside class="panel">
        <h3 class="section-title">Σελίδες PDF</h3>
        <ul class="summary-list">
          <li><span>Σελίδες</span><strong>${articulationData.pages.length}</strong></li>
          <li><span>Κάρτες</span><strong>${articulationData.cards.length}</strong></li>
          <li><span>Χορηγήθηκαν</span><strong>${summary.tested}</strong></li>
        </ul>
        <h4 class="mini-title">Πίνακας λαθών / ελέγχων</h4>
        ${renderArticulationErrorStats(summary.records)}
        ${renderArticulationErrorTable(summary.records)}
        <h4 class="mini-title">Γρήγορη μετάβαση</h4>
        <div class="thumbnail-grid">
          ${articulationData.pages
            .map(
              (thumb, index) =>
                `<button class="thumbnail-button ${index === state.articulationPageIndex ? "current" : ""}" data-page="${thumb.id}">${thumb.id}</button>`,
            )
            .join("")}
        </div>
      </aside>
    </div>
  `;
}

function bindPhonologyControls(prompt) {
  if (!prompt) return;
  const record = getPhonologyRecord(prompt.id);
  const targetField = document.getElementById("phonologyTargets");
  const productionField = document.getElementById("phonologyProductions");
  const refresh = () => refreshPhonologyPanel(prompt.id);

  targetField?.addEventListener("input", (event) => {
    record.targets = event.target.value;
    saveState();
  });
  productionField?.addEventListener("input", (event) => {
    record.productions = event.target.value;
    saveState();
  });
  targetField?.addEventListener("blur", refresh);
  productionField?.addEventListener("blur", refresh);
}

function bindEvents() {
  bindField("childName", (value) => (state.childName = value));
  bindField("clinician", (value) => (state.clinician = value));
  bindField("birthDate", (value) => (state.birthDate = value));
  bindField("sessionDate", (value) => (state.sessionDate = value));
  ["birthDate", "sessionDate"].forEach((id) => {
    document.getElementById(id)?.addEventListener("change", () => {
      state.age = getChronologicalAge()?.short || "";
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      stopRecognition();
      setState({ activeTest: button.dataset.tab });
    });
  });

  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => setState({ articulationView: button.dataset.view }));
  });

  document.querySelectorAll("[data-quest]").forEach((button) => {
    button.addEventListener("click", () => {
      stopRecognition();
      const index = Number(button.dataset.quest);
      if (state.activeTest === "language") {
        setState({ languageIndex: index });
      } else {
        setState({ articulationIndex: index });
      }
    });
  });

  document.getElementById("languageAnswer")?.addEventListener("input", (event) => {
    const prompt = languagePrompts[state.languageIndex];
    state.languageAnswers[prompt.id] = event.target.value;
    state.languageResultsOpen[prompt.id] = Boolean(event.target.value.trim());
    const languageAsr = getLanguageAsrRecord(prompt.id);
    languageAsr.speechSource = "manual";
    languageAsr.speechAlternatives = [];
    languageAsr.speechConfidence = null;
    languageAsr.speechEngine = "";
    languageAsr.asrProcessedAt = "";
    saveState();
    refreshLanguagePanels(prompt.id);
  });
  document.getElementById("languageAnswer")?.addEventListener("blur", render);
  bindPhonologyControls(languagePrompts[state.languageIndex]);

  document.getElementById("prevLanguage")?.addEventListener("click", () => {
    stopRecognition();
    setState({ languageIndex: state.languageIndex - 1 });
  });
  document.getElementById("nextLanguage")?.addEventListener("click", () => {
    stopRecognition();
    setState({ languageIndex: state.languageIndex + 1 });
  });
  document.getElementById("goArticulation")?.addEventListener("click", () => {
    stopRecognition();
    setState({ activeTest: "articulation" });
  });
  document.getElementById("recordLanguage")?.addEventListener("click", () => {
    const prompt = languagePrompts[state.languageIndex];
    const languageAsr = getLanguageAsrRecord(prompt.id);
    startRecognition(
      (text, speech = {}) => {
      state.languageAnswers[prompt.id] = text;
      state.languageResultsOpen[prompt.id] = Boolean(String(text || "").trim());
      languageAsr.speechSource = speech.source || "recognition";
      languageAsr.speechAlternatives = speech.alternatives || [];
      languageAsr.speechConfidence = speech.confidence ?? null;
      languageAsr.speechEngine = speech.engine || "";
      languageAsr.asrProcessedAt = speech.processedAt || "";
      saveState();
      const field = document.getElementById("languageAnswer");
      if (field) field.value = text;
      refreshAsrPanel("language", prompt.id, languageAsr);
      refreshLanguagePanels(prompt.id);
    },
      {
        audioKey: getAsrKey("language", prompt.id),
        scope: "language",
        id: prompt.id,
        target: prompt.question,
        onAudioCaptured: (clip) => setAudioMetadata(languageAsr, clip),
      },
    );
  });

  const card = articulationData.cards[state.articulationIndex];
  if (card) {
    const record = getArticulationRecord(card.id);
    bindField("targetWord", (value) => {
      record.target = value;
      record.manualStatus = false;
      record.speechSource = "manual";
      record.speechAlternatives = [];
      record.speechConfidence = null;
      record.speechEngine = "";
      record.asrProcessedAt = "";
      refreshAutomaticArticulationPanel(record);
    });
    bindField("production", (value) => {
      record.production = value;
      record.manualStatus = false;
      record.speechSource = "manual";
      record.speechAlternatives = [];
      record.speechConfidence = null;
      record.speechEngine = "";
      record.asrProcessedAt = "";
      refreshAutomaticArticulationPanel(record);
    });
    bindField("articulationNotes", (value) => (record.notes = value));
    document.querySelectorAll("[data-status]").forEach((button) => {
      button.addEventListener("click", () => {
        record.status = button.dataset.status;
        record.manualStatus = record.status !== "untested";
        if (record.status === "untested") {
          record.production = "";
          record.phonologicalProcess = "";
          record.autoAnalysis = "";
          record.errors = [];
          record.speechSource = "";
          record.speechAlternatives = [];
          record.speechConfidence = null;
          record.speechEngine = "";
          record.asrProcessedAt = "";
        }
        if (record.status === "correct") record.errors = [];
        saveState();
        render();
      });
    });
    document.querySelectorAll("[data-error]").forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.dataset.error;
        record.errors = record.errors.includes(value)
          ? record.errors.filter((item) => item !== value)
          : [...record.errors, value];
        if (record.status === "untested") record.status = "incorrect";
        record.manualStatus = true;
        saveState();
        render();
      });
    });
    bindProductionSuggestionButtons(record);
  }

  document.getElementById("recordArticulation")?.addEventListener("click", () => {
    const activeCard = articulationData.cards[state.articulationIndex];
    const activeRecord = getArticulationRecord(activeCard.id);
    startRecognition(
      (text, speech = {}) => {
        activeRecord.production = text;
        activeRecord.manualStatus = false;
        activeRecord.speechSource = speech.source || "recognition";
        activeRecord.speechAlternatives = speech.alternatives || [];
        activeRecord.speechConfidence = speech.confidence ?? null;
        activeRecord.speechEngine = speech.engine || "";
        activeRecord.asrProcessedAt = speech.processedAt || "";
        refreshAutomaticArticulationPanel(activeRecord);
        const field = document.getElementById("production");
        if (field) field.value = text;
        refreshAsrPanel("articulation", activeCard.id, activeRecord);
      },
      {
        audioKey: getAsrKey("articulation", activeCard.id),
        scope: "articulation",
        id: activeCard.id,
        target: activeRecord.target || activeCard.target || "",
        onAudioCaptured: (clip) => setAudioMetadata(activeRecord, clip),
      },
    );
  });
  document.getElementById("prevArticulation")?.addEventListener("click", () => {
    stopRecognition();
    setState({ articulationIndex: state.articulationIndex - 1 });
  });
  document.getElementById("nextArticulation")?.addEventListener("click", () => {
    stopRecognition();
    setState({ articulationIndex: state.articulationIndex + 1 });
  });
  document.getElementById("rotateCard")?.addEventListener("click", () => {
    const key = `card-${card.id}`;
    state.rotations[key] = ((state.rotations[key] || 0) + 90) % 360;
    saveState();
    render();
  });

  document.querySelectorAll("[data-card]").forEach((button) => {
    button.addEventListener("click", () => {
      stopRecognition();
      const id = Number(button.dataset.card);
      const index = articulationData.cards.findIndex((item) => item.id === id);
      setState({ articulationIndex: index });
    });
  });

  document.getElementById("prevPage")?.addEventListener("click", () => setState({ articulationPageIndex: state.articulationPageIndex - 1 }));
  document.getElementById("nextPage")?.addEventListener("click", () => setState({ articulationPageIndex: state.articulationPageIndex + 1 }));
  document.getElementById("rotatePage")?.addEventListener("click", () => {
    const page = articulationData.pages[state.articulationPageIndex];
    const key = `page-${page.id}`;
    state.rotations[key] = ((state.rotations[key] || 0) + 90) % 360;
    saveState();
    render();
  });
  document.querySelectorAll("[data-page]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.page);
      const index = articulationData.pages.findIndex((item) => item.id === id);
      setState({ articulationPageIndex: index });
    });
  });

  document.getElementById("stopSpeech")?.addEventListener("click", () => {
    const prompt = languagePrompts[state.languageIndex];
    stopRecognition();
    if (prompt) {
      state.languageResultsOpen[prompt.id] = true;
      saveState();
      window.setTimeout(() => {
        refreshLanguagePanels(prompt.id);
        render();
      }, 120);
    }
  });
  document.getElementById("downloadTxt")?.addEventListener("click", () => downloadFile("auto-therapist-clinical-report.html", createClinicalHtmlReport(), "text/html"));
  document
    .getElementById("downloadErrorsCsv")
    ?.addEventListener("click", () => downloadFile("articulation-errors-review.csv", createArticulationErrorsCsv(), "text/csv"));
  document.getElementById("downloadJson")?.addEventListener("click", () => downloadFile("auto-therapist-data.json", JSON.stringify(createReportData(), null, 2), "application/json"));
  document.getElementById("printReport")?.addEventListener("click", () => {
    state.reportVisible = true;
    saveState();
    window.print();
  });
  document.getElementById("resetSession")?.addEventListener("click", () => {
    if (!window.confirm("Να καθαριστεί η τρέχουσα συνεδρία;")) return;
    stopRecognition();
    audioClips.forEach((clip) => {
      if (clip.url) URL.revokeObjectURL(clip.url);
    });
    audioClips.clear();
    audioRetryOptions.clear();
    asrError = "";
    state = structuredClone(defaultState);
    saveState();
    render();
  });
  bindAudioClipButtons();
}

function bindField(id, onValue) {
  const field = document.getElementById(id);
  if (!field) return;
  field.addEventListener("input", (event) => {
    onValue(event.target.value);
    saveState();
  });
}

function stopMediaStream() {
  stopRecordingMonitor();
  if (!mediaStream) return;
  mediaStream.getTracks().forEach((track) => track.stop());
  mediaStream = null;
}

function stopAudioCapture() {
  if (!mediaRecorder) {
    stopMediaStream();
    activeAsrKey = "";
    return;
  }
  const activeRecorder = mediaRecorder;
  mediaRecorder = null;
  if (activeRecorder.state !== "inactive") {
    captureFinalizing = true;
    activeRecorder.stop();
  } else {
    stopMediaStream();
    activeAsrKey = "";
  }
}

function saveAudioClip(audioKey, blob, options = {}) {
  if (!audioKey || !blob?.size) return null;
  const previous = audioClips.get(audioKey);
  if (previous?.url) URL.revokeObjectURL(previous.url);
  const clip = {
    blob,
    url: URL.createObjectURL(blob),
    size: blob.size,
    mimeType: blob.type || "audio/webm",
    createdAt: new Date().toISOString(),
  };
  audioClips.set(audioKey, clip);
  options.onAudioCaptured?.(clip);
  return clip;
}

function audioExtension(mimeType) {
  const value = String(mimeType || "");
  if (value.includes("mp4")) return "m4a";
  if (value.includes("ogg")) return "ogg";
  if (value.includes("wav")) return "wav";
  return "webm";
}

function downloadAudioClip(audioKey) {
  const clip = audioClips.get(audioKey);
  if (!clip) return;
  const link = document.createElement("a");
  link.href = clip.url;
  link.download = `${audioKey}.${audioExtension(clip.mimeType)}`;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function bindAudioClipButtons() {
  document.querySelectorAll("[data-enable-live-asr]").forEach((input) => {
    input.onchange = () => { state.liveTranscriptionEnabled = input.checked; saveState(); render(); };
  });
  document.querySelectorAll("[data-download-audio]").forEach((button) => {
    button.onclick = () => downloadAudioClip(button.dataset.downloadAudio);
  });
  document.querySelectorAll("[data-check-asr]").forEach((button) => {
    button.onclick = checkAsrHealth;
  });
  document.querySelectorAll("[data-audio-speed]").forEach((select) => {
    select.onchange = () => {
      const audio = select.closest(".audio-review")?.querySelector("audio");
      if (audio) { audio.preservesPitch = true; audio.playbackRate = Number(select.value); }
    };
  });
  document.querySelectorAll("[data-retry-asr]").forEach((button) => {
    button.onclick = () => {
      if (!canStartAsr()) return;
      const key = button.dataset.retryAsr;
      requestServerTranscription(audioClips.get(key), audioRetryOptions.get(key));
    };
  });
}

function readResponsePath(payload, path) {
  if (!path) return undefined;
  return String(path)
    .split(".")
    .reduce((current, key) => {
      if (current === null || current === undefined) return undefined;
      if (Array.isArray(current) && /^\d+$/.test(key)) return current[Number(key)];
      return current[key];
    }, payload);
}

function firstResponseValue(payload, paths = []) {
  for (const path of paths) {
    const value = readResponsePath(payload, path);
    if (value !== undefined && value !== null && value !== "") return value;
  }
  return undefined;
}

function normalizeAsrAlternatives(value) {
  if (!Array.isArray(value)) return [];
  return uniqueValues(
    value
      .map((item) => {
        if (typeof item === "string") return item;
        return item?.text || item?.transcript || item?.transcription || item?.result?.text || "";
      })
      .map((item) => String(item || "").trim()),
  );
}

function parseServerAsrResponse(payload, config = getAsrConfig()) {
  if (typeof payload === "string") {
    return { text: payload.trim(), alternatives: [], confidence: null, engine: "" };
  }
  const text = String(firstResponseValue(payload, config.responseTextPaths) || "").trim();
  const alternatives = normalizeAsrAlternatives(firstResponseValue(payload, config.responseAlternativesPaths));
  const rawConfidence = firstResponseValue(payload, config.responseConfidencePaths);
  const confidenceValue = rawConfidence == null ? NaN : Number(rawConfidence);
  return {
    text,
    alternatives: uniqueValues([text, ...alternatives]).filter((item) => item && item !== text).slice(0, 5),
    confidence: Number.isFinite(confidenceValue) ? confidenceValue : null,
    engine: String(firstResponseValue(payload, config.responseEnginePaths) || "").trim(),
  };
}

async function requestServerTranscription(clip, options = {}) {
  const config = getAsrConfig();
  if (!clip?.blob || !shouldUseServerAsr(config) || pendingServerAsrKey) return null;
  audioRetryOptions.set(options.audioKey, options);

  pendingServerAsrKey = options.audioKey || "";
  render();

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), Number(config.timeoutMs) || 60000);
  try {
    const formData = new FormData();
    const filename = `${options.audioKey || "audio"}.${audioExtension(clip.mimeType)}`;
    formData.append(config.audioFieldName || "audio", clip.blob, filename);
    formData.append("language", config.language || "el-GR");
    if (options.scope) formData.append("scope", options.scope);
    if (options.id !== undefined && options.id !== null) formData.append("id", String(options.id));
    // Do not send the expected answer: it can bias recognition of child speech.

    const response = await fetch(config.endpointUrl, {
      method: "POST",
      headers: config.headers || {},
      body: formData,
      signal: controller.signal,
    });
    const raw = await response.text();
    if (!response.ok) {
      let message = `HTTP ${response.status}`;
      try { message = JSON.parse(raw).error || message; } catch { /* Keep status. */ }
      throw new Error(message);
    }

    let payload = raw;
    try {
      payload = raw ? JSON.parse(raw) : {};
    } catch {
      payload = raw;
    }

    // A response is only accepted if it corresponds to the exact recorded clip.
    if (audioClips.get(options.audioKey)?.blob !== clip.blob) {
      throw new Error("Η ηχογράφηση αντικαταστάθηκε πριν ολοκληρωθεί η μεταγραφή.");
    }
    const parsed = parseServerAsrResponse(payload, config);
    if (!parsed.text) throw new Error("Το server ASR δεν επέστρεψε μεταγραφή.");
    options.onTranscript?.(parsed.text, {
      source: "server",
      alternatives: parsed.alternatives,
      confidence: parsed.confidence,
      engine: parsed.engine || "Server ASR",
      processedAt: new Date().toISOString(),
    });
    asrError = "";
    return parsed;
  } catch (error) {
    const message = error?.name === "AbortError" ? "λήξη χρόνου" : error?.message || "άγνωστο σφάλμα";
    asrError = `Το Whisper δεν ολοκλήρωσε τη μεταγραφή: ${String(message).slice(0, 220)}. Το ηχητικό είναι διαθέσιμο για ακρόαση και επανάληψη.`;
    return null;
  } finally {
    window.clearTimeout(timeout);
    pendingServerAsrKey = "";
    saveState();
    render();
  }
}

function microphoneErrorMessage(error) {
  const messages = {
    NotAllowedError: "Δεν επιτράπηκε το μικρόφωνο. Επίτρεψε την πρόσβαση στον browser και στις Ρυθμίσεις συστήματος → Απόρρητο και ασφάλεια → Μικρόφωνο.",
    NotFoundError: "Δεν βρέθηκε διαθέσιμο μικρόφωνο. Σύνδεσε ή επίλεξε μικρόφωνο και δοκίμασε ξανά.",
    NotReadableError: "Ο browser δεν μπορεί να διαβάσει το μικρόφωνο. Έλεγξε αν χρησιμοποιείται ή έχει απενεργοποιηθεί.",
    MicrophoneTimeoutError: "Το μικρόφωνο δεν άνοιξε: δεν ολοκληρώθηκε η άδεια πρόσβασης. Η ηχογράφηση δεν ξεκίνησε.",
    NotSupportedError: "Ο browser δεν υποστηρίζει τη μορφή ηχογράφησης. Άνοιξε την εφαρμογή σε Safari ή Chrome.",
  };
  return messages[error?.name] || `Δεν ξεκίνησε η ηχογράφηση (${error?.name || "άγνωστο σφάλμα"}). Έλεγξε το μικρόφωνο και την άδεια πρόσβασης.`;
}

function acquireMicrophone(streamFactory, timeoutMs) {
  return new Promise((resolve, reject) => {
    let settled = false;
    const finish = (error, stream) => {
      if (settled) { stream?.getTracks().forEach((track) => track.stop()); return; }
      settled = true;
      window.clearTimeout(timer);
      cancelMicrophoneRequest = null;
      if (error) reject(error); else resolve(stream);
    };
    const timer = window.setTimeout(() => {
      const error = new Error("Microphone permission timed out");
      error.name = "MicrophoneTimeoutError";
      finish(error);
    }, timeoutMs);
    cancelMicrophoneRequest = () => {
      const error = new Error("Microphone request cancelled");
      error.name = "AbortError";
      finish(error);
    };
    Promise.resolve().then(streamFactory).then((stream) => finish(null, stream), (error) => finish(error));
  });
}

function stopRecordingMonitor() {
  if (recordingTimer) window.clearInterval(recordingTimer);
  recordingTimer = null;
  recordingAnalyser = null;
  if (recordingAudioContext) recordingAudioContext.close().catch(() => {});
  recordingAudioContext = null;
}

function startRecordingMonitor(stream) {
  stopRecordingMonitor();
  recordingTelemetry = { startedAt: Date.now(), bytes: 0, level: 0, heardSound: false };
  try {
    const AudioContextApi = window.AudioContext || window.webkitAudioContext;
    if (AudioContextApi) {
      recordingAudioContext = new AudioContextApi();
      recordingAudioContext.resume().catch(() => {});
      const source = recordingAudioContext.createMediaStreamSource(stream);
      recordingAnalyser = recordingAudioContext.createAnalyser();
      recordingAnalyser.fftSize = 512;
      source.connect(recordingAnalyser);
    }
  } catch { /* Recording works even if a level meter is unavailable. */ }
  recordingTimer = window.setInterval(() => {
    const elapsed = Math.floor((Date.now() - recordingTelemetry.startedAt) / 1000);
    const time = `${String(Math.floor(elapsed / 60)).padStart(2, "0")}:${String(elapsed % 60).padStart(2, "0")}`;
    let rms = 0;
    if (recordingAnalyser) {
      const samples = new Uint8Array(recordingAnalyser.fftSize);
      recordingAnalyser.getByteTimeDomainData(samples);
      rms = Math.sqrt(samples.reduce((sum, sample) => sum + ((sample - 128) / 128) ** 2, 0) / samples.length);
      if (rms > 0.005) recordingTelemetry.heardSound = true;
    }
    recordingTelemetry.level = Math.min(1, rms * 5);
    document.querySelectorAll("[data-recording-time]").forEach((node) => { node.textContent = time; });
    document.querySelectorAll("[data-recording-level]").forEach((node) => { node.value = recordingTelemetry.level; });
    document.querySelectorAll("[data-recording-bytes]").forEach((node) => { node.textContent = `${formatBytes(recordingTelemetry.bytes)} ήχου`; });
    document.querySelectorAll("[data-recording-signal]").forEach((node) => {
      node.textContent = !recordingAnalyser ? "Η μέτρηση έντασης δεν υποστηρίζεται σε αυτόν τον browser."
        : recordingTelemetry.heardSound ? "Λαμβάνεται σήμα ήχου."
        : elapsed >= 5 ? "Δεν ανιχνεύτηκε ακόμη ήχος. Έλεγξε το μικρόφωνο ή μίλησε πιο κοντά."
        : "Έλεγχος σήματος μικροφώνου…";
    });
  }, 200);
}

async function startAudioCapture(options = {}) {
  if (!options.audioKey || !canRecordAudio()) return false;
  const requestId = options.requestId ?? microphoneRequestId;
  try {
    const streamFactory = options.streamFactory || (() => navigator.mediaDevices.getUserMedia({ audio: true, video: false }));
    const stream = await acquireMicrophone(streamFactory, Number(getAsrConfig().microphoneTimeoutMs) || 20000);
    if (requestId !== microphoneRequestId) {
      stream.getTracks().forEach((track) => track.stop());
      return false;
    }
    mediaStream = stream;
    if (!stream.getAudioTracks().some((track) => track.readyState === "live")) {
      const error = new Error("No live audio track"); error.name = "NotFoundError"; throw error;
    }
    const chunks = [];
    const preferredType = ["audio/webm;codecs=opus", "audio/mp4", "audio/ogg;codecs=opus"]
      .find((type) => typeof MediaRecorder.isTypeSupported === "function" && MediaRecorder.isTypeSupported(type));
    let recorder;
    try { recorder = new MediaRecorder(stream, preferredType ? { mimeType: preferredType } : undefined); }
    catch { recorder = new MediaRecorder(stream); }
    mediaRecorder = recorder;
    recorder.ondataavailable = (event) => {
      if (event.data?.size) {
        chunks.push(event.data);
        recordingTelemetry.bytes += event.data.size;
      }
    };
    recorder.onerror = (event) => {
      asrError = `Η ηχογράφηση διακόπηκε (${event.error?.name || "σφάλμα ήχου"}). Δοκίμασε ξανά.`;
      if (recorder.state !== "inactive") recorder.stop();
      else { mediaRecorder = null; stopMediaStream(); render(); }
    };
    recorder.onstop = async () => {
      captureFinalizing = true;
      if (mediaRecorder === recorder) mediaRecorder = null;
      const mimeType = chunks.find((chunk) => chunk.type)?.type || recorder.mimeType || preferredType || "audio/mp4";
      const blob = new Blob(chunks, { type: mimeType });
      const clip = saveAudioClip(options.audioKey, blob, options);
      stopMediaStream();
      try {
        if (!clip) asrError = "Ο browser δεν έδωσε ηχητικά δεδομένα. Η προσπάθεια δεν μεταγράφηκε. Δοκίμασε ξανά σε Safari ή Chrome.";
        else if (options.useServerAsr) await requestServerTranscription(clip, options);
      } finally {
        captureFinalizing = false;
        activeAsrKey = "";
        saveState();
        render();
      }
    };
    recorder.start(1000);
    if (recorder.state !== "recording") throw new Error("MediaRecorder did not start");
    startRecordingMonitor(stream);
    return true;
  } catch (error) {
    if (requestId !== microphoneRequestId) return false;
    mediaRecorder = null;
    stopMediaStream();
    if (error?.name !== "AbortError") asrError = microphoneErrorMessage(error);
    return false;
  }
}

async function startRecognition(onTranscript, options = {}) {
  if (!canStartAsr()) return;
  stopRecognition();
  captureStarting = true;
  const requestId = ++microphoneRequestId;
  asrError = "";
  liveAsrNote = "";
  const config = getAsrConfig();
  const useBrowser = shouldUseBrowserRecognition(config);
  const useServer = shouldUseServerAsr(config);
  activeAsrKey = options.audioKey || "";
  if (!useBrowser && !useServer) {
    asrError = "Δεν υπάρχει διαθέσιμο ASR. Ρύθμισε server endpoint ή χρησιμοποίησε browser με Speech Recognition.";
    activeAsrKey = "";
    captureStarting = false;
    render();
    return;
  }

  render();
  const audioStarted = await startAudioCapture({
    ...options,
    requestId,
    onTranscript,
    useServerAsr: useServer,
  });
  if (requestId !== microphoneRequestId) return;
  captureStarting = false;
  if (!useBrowser) {
    if (!audioStarted) activeAsrKey = "";
    render();
    return;
  }

  recognition = new SpeechRecognitionApi();
  recognition.lang = config.language || "el-GR";
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.maxAlternatives = 5;
  recognition.onresult = (event) => {
    let transcript = "";
    const alternatives = [];
    let confidence = null;
    for (let i = 0; i < event.results.length; i += 1) {
      const result = event.results[i];
      transcript += result[0].transcript;
      if (typeof result[0].confidence === "number") confidence = result[0].confidence;
      for (let option = 0; option < result.length; option += 1) {
        alternatives.push(result[option].transcript.trim());
      }
    }
    onTranscript(transcript.trim(), {
      source: "recognition",
      alternatives: uniqueValues(alternatives),
      confidence,
      engine: "Browser Web Speech",
      processedAt: new Date().toISOString(),
    });
  };
  recognition.onerror = (event) => {
    if (useServer && mediaRecorder?.state === "recording") {
      liveAsrNote = `Η ζωντανή μεταγραφή δεν είναι διαθέσιμη (${event?.error || "σφάλμα browser"}). Η ηχογράφηση συνεχίζεται. Πάτησε Τέλος ASR για Whisper.`;
      const failed = recognition;
      recognition = null;
      if (failed) { failed.onend = null; failed.onerror = null; try { failed.abort(); } catch {} }
      render();
      return;
    }
    asrError = event?.error ? `Η ζωντανή μεταγραφή σταμάτησε: ${event.error}.` : "Η ζωντανή μεταγραφή σταμάτησε.";
    stopRecognition();
  };
  recognition.onend = () => {
    recognition = null;
    if (useServer && mediaRecorder?.state === "recording") {
      liveAsrNote = "Η ζωντανή μεταγραφή ολοκληρώθηκε. Η ηχογράφηση συνεχίζεται μέχρι να πατήσεις Τέλος ASR.";
    } else {
      stopAudioCapture();
    }
    render();
  };
  try {
    recognition.start();
    render();
  } catch {
    recognition = null;
    if (useServer && audioStarted) {
      liveAsrNote = "Η ζωντανή μεταγραφή δεν ξεκίνησε. Η ηχογράφηση συνεχίζεται και θα σταλεί στο Whisper όταν πατήσεις Τέλος ASR.";
      render();
      return;
    }
    stopAudioCapture();
    activeAsrKey = "";
    asrError = "Δεν μπόρεσε να ξεκινήσει το ASR. Δοκίμασε ξανά ή έλεγξε την άδεια μικροφώνου.";
    render();
  }
}

function stopRecognition() {
  if (captureStarting) {
    ++microphoneRequestId;
    cancelMicrophoneRequest?.();
    captureStarting = false;
    activeAsrKey = "";
    asrError = "Η έναρξη μικροφώνου ακυρώθηκε.";
    render();
    return;
  }
  if (!recognition && !mediaRecorder) return;
  const active = recognition;
  recognition = null;
  if (active) {
    active.onend = null;
    active.onerror = null;
    active.stop();
  }
  stopAudioCapture();
  render();
}

function createReportData() {
  const languageScore = getLanguageScore();
  const chronologicalAge = getChronologicalAge();
  return {
    childName: state.childName,
    clinician: state.clinician,
    birthDate: state.birthDate,
    sessionDate: state.sessionDate,
    age: chronologicalAge?.short || state.age,
    chronologicalAge,
    language: {
      ...languageScore,
      asrRecords: languagePrompts.map((prompt) => {
        const asr = getLanguageAsrRecord(prompt.id);
        const clip = audioClips.get(getAsrKey("language", prompt.id));
        return {
          promptId: prompt.id,
          speechSource: asr.speechSource || "",
          speechAlternatives: asr.speechAlternatives || [],
          speechConfidence: asr.speechConfidence,
          speechEngine: asr.speechEngine || "",
          asrProcessedAt: asr.asrProcessedAt || "",
          audioCaptured: asr.audioCaptured || Boolean(clip),
          audioSize: asr.audioSize || clip?.size || 0,
          audioType: asr.audioType || clip?.mimeType || "",
          audioCapturedAt: asr.audioCapturedAt || "",
        };
      }),
      phonologyRecords: languagePrompts.map((prompt) => {
        const record = getPhonologyRecord(prompt.id);
        const analysis = analyzePhonologyRecord(record);
        return {
          promptId: prompt.id,
          targets: record.targets,
          productions: record.productions,
          notes: record.notes || "",
          source: "manual_clinician_transcription",
          asrUsedForPhonology: false,
          analysis,
        };
      }),
    },
  };
}

function asrSourceLabel(source) {
  return {
    recognition: "browser ASR",
    server: "server ASR",
    suggestion: "διορθωμένη από πρόταση",
    manual: "χειροκίνητη διόρθωση",
  }[source] || "χωρίς ASR";
}

function asrReportSummary(meta = {}) {
  const parts = [];
  if (meta.speechSource) parts.push(`πηγή: ${asrSourceLabel(meta.speechSource)}`);
  if (typeof meta.speechConfidence === "number" && meta.speechConfidence > 0) {
    parts.push(`σιγουριά: ${Math.round(meta.speechConfidence * 100)}%`);
  }
  if (meta.speechEngine) parts.push(`μηχανή: ${meta.speechEngine}`);
  if (meta.audioCaptured) parts.push(`ηχητικό: ναι (${formatBytes(meta.audioSize)})`);
  if (Array.isArray(meta.speechAlternatives) && meta.speechAlternatives.length) {
    parts.push(`εναλλακτικές: ${meta.speechAlternatives.slice(0, 5).join(", ")}`);
  }
  return parts.length ? parts.join("; ") : "-";
}

function ratioPercent(value, max) {
  return max > 0 ? Math.round((value / max) * 100) : 0;
}

function percentileRankNumber(value) {
  if (!value) return null;
  if (value === "<10") return 5;
  const number = Number(value);
  return Number.isNaN(number) ? null : number;
}

function performanceBandFromPercent(percent) {
  if (percent >= 80) return { label: "ισχυρή επίδοση", className: "strong" };
  if (percent >= 60) return { label: "λειτουργική επίδοση", className: "typical" };
  if (percent >= 40) return { label: "χρειάζεται στοχευμένη υποστήριξη", className: "watch" };
  return { label: "υψηλή θεραπευτική προτεραιότητα", className: "low" };
}

function performanceBandFromPercentile(value) {
  const rank = percentileRankNumber(value);
  if (rank === null) return { label: "χωρίς ηλικιακή ερμηνεία", className: "unknown" };
  if (rank < 10) return { label: "κάτω από το 10ο εκατοστημόριο", className: "low" };
  if (rank < 25) return { label: "χαμηλή ζώνη", className: "watch" };
  if (rank >= 75) return { label: "υψηλή ζώνη", className: "strong" };
  return { label: "αναμενόμενη ζώνη", className: "typical" };
}

function countBy(items, getter) {
  return items.reduce((map, item) => {
    const key = getter(item) || "-";
    map[key] = (map[key] || 0) + 1;
    return map;
  }, {});
}

function sortedEntries(countMap) {
  return Object.entries(countMap).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "el"));
}

function summarizeRuleDetails(scoredPrompts, field) {
  const rules = scoredPrompts.flatMap((row) =>
    row[field].details.map((detail) => ({
      promptId: row.prompt.id,
      promptQuestion: row.prompt.question,
      label: detail.label,
      points: detail.points,
      maxPoints: detail.maxPoints,
    })),
  );
  return {
    mastered: rules.filter((rule) => rule.points === rule.maxPoints),
    partial: rules.filter((rule) => rule.points > 0 && rule.points < rule.maxPoints),
    missing: rules.filter((rule) => rule.points === 0),
  };
}

function createClinicalReportAnalysis(data) {
  const language = data.language;
  const infoPercent = ratioPercent(language.infoTotal, language.infoMax);
  const grammarPercent = ratioPercent(language.grammarTotal, language.grammarMax);
  const totalPercent = ratioPercent(language.grandTotal, language.grandMax);
  const percentileSummary = language.percentileSummary || null;
  const percentileBands = percentileSummary
    ? {
        total: performanceBandFromPercentile(percentileSummary.total),
        info: performanceBandFromPercentile(percentileSummary.info),
        grammar: performanceBandFromPercentile(percentileSummary.grammar),
      }
    : null;
  const infoRules = summarizeRuleDetails(language.scoredPrompts, "info");
  const grammarRules = summarizeRuleDetails(language.scoredPrompts, "grammar");
  const phonologyIssues = language.phonologyRecords.flatMap((record) =>
    (record.analysis?.issues || []).map((issue) => ({
      ...issue,
      promptId: record.promptId,
      promptQuestion: language.scoredPrompts.find((row) => row.prompt.id === record.promptId)?.prompt.question || "",
    })),
  );
  const phonology = {
    readyRecords: language.phonologyRecords.filter((record) => record.analysis?.ready).length,
    totalIssues: phonologyIssues.length,
    issues: phonologyIssues,
    processCounts: sortedEntries(countBy(phonologyIssues, (issue) => issue.process)),
    soundCounts: sortedEntries(countBy(phonologyIssues, (issue) => issue.sound)).filter(([sound]) => sound !== "-"),
    alertCount: phonologyIssues.filter((issue) => issue.status?.className === "alert").length,
    watchCount: phonologyIssues.filter((issue) => issue.status?.className === "watch").length,
    okCount: phonologyIssues.filter((issue) => issue.status?.className === "ok").length,
    unknownCount: phonologyIssues.filter((issue) => issue.status?.className === "unknown").length,
  };
  return {
    totalPercent,
    infoPercent,
    grammarPercent,
    totalBand: performanceBandFromPercent(totalPercent),
    infoBand: performanceBandFromPercent(infoPercent),
    grammarBand: performanceBandFromPercent(grammarPercent),
    percentileBands,
    infoRules,
    grammarRules,
    phonology,
  };
}

function hasLowPercentile(summary, key) {
  if (!summary) return false;
  const rank = percentileRankNumber(summary[key]);
  return rank !== null && rank < 25;
}

function createInterventionRecommendations(data, analysis) {
  const recommendations = [];
  const percentileSummary = data.language.percentileSummary;
  const grammarLow = hasLowPercentile(percentileSummary, "grammar") || analysis.grammarPercent < 55;
  const infoLow = hasLowPercentile(percentileSummary, "info") || analysis.infoPercent < 55;
  const totalLow = hasLowPercentile(percentileSummary, "total") || analysis.totalPercent < 55;
  const phonology = analysis.phonology;
  const processNames = phonology.processCounts.map(([process]) => process);
  const manyToOne = sortedEntries(
    countBy(
      phonology.issues.filter((issue) => issue.production && issue.production !== "-"),
      (issue) => issue.production,
    ),
  ).some(([, count]) => count >= 2);
  const hasClusters = processNames.some((name) => name.includes("σύμπλεγμα")) || phonology.soundCounts.some(([sound]) => tokenizeGreekWord(sound).length > 1);
  const hasLateSounds = phonology.issues.some((issue) => ["ρ", "τσ", "τζ", "ξ", "ψ", "θ", "δ"].includes(issue.sound));

  if (!phonology.readyRecords) {
    recommendations.push({
      title: "Πρώτα επιβεβαίωση φωνολογικής παραγωγής",
      priority: "Υψηλή",
      rationale: "Δεν υπάρχει ακόμη χειροκίνητη φωνολογική καταγραφή. Το ASR δεν επαρκεί για φωνολογικές διεργασίες, επειδή μπορεί να διορθώσει την παιδική παραγωγή.",
      actions: [
        "Άκου το ηχητικό δείγμα και γράψε ξεχωριστά τη σωστή μορφή και την παραγωγή όπως ακούστηκε.",
        "Χρησιμοποίησε την ASR μεταγραφή μόνο ως βοηθητικό κείμενο για τη γενική απάντηση, όχι ως βάση φωνολογικής ανάλυσης.",
        "Μετά την καταγραφή, επανέλαβε τη λήψη της HTML αναφοράς για να εμφανιστούν φωνολογικά μοτίβα και στόχοι παρέμβασης.",
      ],
      evidence: ["Baker & McLeod, 2011b"],
    });
  }

  if (totalLow) {
    recommendations.push({
      title: "Ολοκληρωμένο πλάνο λόγου-ομιλίας",
      priority: "Υψηλή",
      rationale: "Το συνολικό αποτέλεσμα ή/και το ηλικιακό εκατοστημόριο δείχνει ότι χρειάζεται συνδυασμένη παρέμβαση και επανέλεγχος προόδου.",
      actions: [
        "Θέσε 2-3 μετρήσιμους στόχους ανά κύκλο θεραπείας και κατέγραψε baseline πριν την παρέμβαση.",
        "Συνδύασε δραστηριότητες αφήγησης με στόχους μορφοσύνταξης και φωνολογικής ακρίβειας, ώστε η εξάσκηση να γενικεύεται σε αυθόρμητο λόγο.",
        "Επανεκτίμηση μετά από 8-12 συνεδρίες με το ίδιο δείγμα εικόνων/κριτηρίων.",
      ],
      evidence: ["Baker & McLeod, 2011a", "Baker & McLeod, 2011b", "Law et al., 2003"],
    });
  }

  if (infoLow) {
    recommendations.push({
      title: "Πληροφοριακή επάρκεια και αφήγηση",
      priority: "Μεσαία-Υψηλή",
      rationale: "Η απάντηση φαίνεται να χρειάζεται περισσότερα βασικά σημασιολογικά στοιχεία: πρόσωπα, ενέργειες, αντικείμενα, αιτία/αποτέλεσμα.",
      actions: [
        "Δούλεψε με story grammar: ποιος, τι κάνει, τι έγινε, γιατί, αποτέλεσμα.",
        "Χρησιμοποίησε μοντελοποίηση, επέκταση απάντησης και επαναδιατύπωση χωρίς να διακόπτεται η ροή του παιδιού.",
        "Στόχευσε λεξιλόγιο υψηλής λειτουργικής αξίας μόνο από τα ερεθίσματα/στόχους της αξιολόγησης και από καθημερινές εμπειρίες.",
      ],
      evidence: ["Law et al., 2003", "Ebbels, 2014"],
    });
  }

  if (grammarLow) {
    recommendations.push({
      title: "Μορφοσύνταξη και γραμματική ακρίβεια",
      priority: "Υψηλή",
      rationale: "Τα γραμματικά κριτήρια δείχνουν ανάγκη για στοχευμένη δουλειά σε χρόνο, άρθρα, συμφωνία ρήματος-υποκειμένου και δομή πρότασης.",
      actions: [
        "Χρησιμοποίησε focused stimulation, recasts και sentence expansion πάνω στις απαντήσεις του παιδιού.",
        "Δούλεψε μικρές αντιθέσεις προτάσεων: λάθος/σωστό μοντέλο, με οπτική στήριξη για άρθρο, ρήμα, υποκείμενο.",
        "Για μεγαλύτερα παιδιά ή επίμονες δυσκολίες, πρόσθεσε ρητή διδασκαλία κανόνα με χρωματική/οπτική κωδικοποίηση.",
      ],
      evidence: ["Ebbels, 2014", "Leonard & Deevy, 2017", "Law et al., 2003"],
    });
  }

  if (phonology.totalIssues) {
    if (phonology.totalIssues >= 4 || phonology.processCounts.length >= 2) {
      recommendations.push({
        title: "Φωνολογική παρέμβαση με Cycles",
        priority: phonology.alertCount ? "Υψηλή" : "Μεσαία",
        rationale: "Υπάρχουν πολλαπλές φωνολογικές παρατηρήσεις ή περισσότερα από ένα μοτίβα. Η κυκλική στόχευση βοηθά όταν χρειάζεται δουλειά σε συστήματα ήχων και όχι σε ένα μεμονωμένο φώνημα.",
        actions: [
          "Οργάνωσε κύκλους 6-12 εβδομάδων με 1-2 διεργασίες ανά κύκλο.",
          "Επέλεξε στόχους που επηρεάζουν την καταληπτότητα και είναι κατάλληλοι για την ηλικία/πίνακα κατάκτησης.",
          "Συνδύασε ακουστική διάκριση, παραγωγή σε λέξη-φράση-πρόταση και σύντομη εξάσκηση στο σπίτι.",
        ],
        evidence: ["Rudolph & Wendt, 2014", "Baker & McLeod, 2011a"],
      });
    }

    if (manyToOne) {
      recommendations.push({
        title: "Multiple oppositions για κατάρρευση αντιθέσεων",
        priority: "Υψηλή",
        rationale: "Πολλά φωνήματα φαίνεται να καταλήγουν στην ίδια παραγωγή. Αυτό συχνά χρειάζεται θεραπεία που ανοίγει ξανά τις φωνολογικές αντιθέσεις.",
        actions: [
          "Διάλεξε 2-4 αντιθετικά ζεύγη/λέξεις όπου η ίδια παραγωγή του παιδιού αντιστοιχεί σε διαφορετικούς στόχους.",
          "Δούλεψε σημασιολογική σύγχυση: δείξε ότι η ίδια παραγωγή αλλάζει το νόημα.",
          "Κατέγραψε γενίκευση σε αδοκίμαστες λέξεις μετά από κάθε μικρό κύκλο.",
        ],
        evidence: ["Williams, 2000", "Baker & McLeod, 2011a"],
      });
    }

    if (hasClusters || hasLateSounds) {
      recommendations.push({
        title: "Στόχοι πολυπλοκότητας για συμπλέγματα/όψιμα φωνήματα",
        priority: phonology.alertCount ? "Μεσαία-Υψηλή" : "Μεσαία",
        rationale: "Τα ευρήματα περιλαμβάνουν συμπλέγματα ή όψιμα φωνήματα. Η βιβλιογραφία για complexity δείχνει ότι προσεκτικά επιλεγμένοι πιο σύνθετοι στόχοι μπορούν να δώσουν ευρύτερη γενίκευση.",
        actions: [
          "Ξεκίνα από στόχους που είναι κλινικά σημαντικοί, ακουστικά διακριτοί και εφικτοί με υποστήριξη.",
          "Δώσε προτεραιότητα σε συμπλέγματα/ήχους που είναι ήδη αναμενόμενα για τη χρονολογική ηλικία.",
          "Παρακολούθησε όχι μόνο τον στόχο αλλά και τη γενίκευση σε μη διδαγμένες λέξεις.",
        ],
        evidence: ["Gierut, 2001", "Baker & McLeod, 2011b"],
      });
    }
  }

  if (!recommendations.length) {
    recommendations.push({
      title: "Παρακολούθηση και εμπλουτισμός λόγου",
      priority: "Χαμηλή-Μεσαία",
      rationale: "Δεν αναδείχθηκε έντονη αυτόματη ένδειξη από τα συμπληρωμένα δεδομένα. Η κλινική ακρόαση και η λειτουργική εικόνα του παιδιού παραμένουν απαραίτητες.",
      actions: [
        "Κράτησε δείγμα αυθόρμητου λόγου και επανέλεγξε αν υπάρχουν ανησυχίες από γονείς/εκπαιδευτικούς.",
        "Χρησιμοποίησε εμπλουτισμένη ανάγνωση εικόνων, επαναδιατύπωση και επέκταση προτάσεων.",
        "Επανάλαβε την αξιολόγηση αν προστεθούν περισσότερες ακριβείς παραγωγές/φωνολογικοί στόχοι.",
      ],
      evidence: ["Law et al., 2003", "Baker & McLeod, 2011b"],
    });
  }

  return recommendations;
}

function reportMetricCard(label, value, max, percent, band) {
  return `
    <article class="metric-card ${escapeHtml(band.className)}">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}${max ? `/${escapeHtml(max)}` : ""}</strong>
      <div class="bar"><i style="width:${Math.max(0, Math.min(100, percent))}%"></i></div>
      <small>${percent}% · ${escapeHtml(band.label)}</small>
    </article>
  `;
}

function reportPercentileCard(label, value, band) {
  return `
    <article class="metric-card ${escapeHtml(band.className)}">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(percentileDisplay(value))}</strong>
      <div class="bar"><i style="width:${Math.max(5, Math.min(100, percentileRankNumber(value) || 5))}%"></i></div>
      <small>${escapeHtml(band.label)}</small>
    </article>
  `;
}

function reportChartRows(entries, emptyText) {
  if (!entries.length) return `<p class="empty">${escapeHtml(emptyText)}</p>`;
  const max = Math.max(...entries.map(([, count]) => count), 1);
  return entries
    .map(
      ([label, count]) => `
        <div class="chart-row">
          <span>${escapeHtml(label)}</span>
          <div class="chart-track"><i style="width:${Math.round((count / max) * 100)}%"></i></div>
          <strong>${count}</strong>
        </div>
      `,
    )
    .join("");
}

function limitedList(items, emptyText, limit = 8) {
  if (!items.length) return `<p class="empty">${escapeHtml(emptyText)}</p>`;
  return `
    <ul>
      ${items
        .slice(0, limit)
        .map((item) => `<li>${escapeHtml(item.label || item)}</li>`)
        .join("")}
    </ul>
  `;
}

function createClinicalHtmlReport() {
  const data = createReportData();
  const analysis = createClinicalReportAnalysis(data);
  const recommendations = createInterventionRecommendations(data, analysis);
  const percentileSummary = data.language.percentileSummary;
  const now = new Date().toLocaleDateString("el-GR");
  const escapedChild = escapeHtml(data.childName || "Χωρίς όνομα");
  const phonology = analysis.phonology;
  return `<!doctype html>
<html lang="el">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Αναφορά αξιολόγησης - ${escapedChild}</title>
  <style>
    :root { color-scheme: light; --ink:#182536; --muted:#607085; --line:#d8e4ed; --teal:#118c91; --blue:#4854c6; --green:#239b68; --amber:#f2a900; --red:#c94a4a; --soft:#f5fbff; }
    * { box-sizing: border-box; }
    body { margin:0; font-family: Inter, "Segoe UI", Arial, sans-serif; color:var(--ink); background:#eef7fb; line-height:1.45; }
    .page { max-width: 1120px; margin: 0 auto; padding: 28px; }
    .hero { color:white; border-radius:18px; padding:28px; background:linear-gradient(135deg,var(--teal),var(--blue)); box-shadow:0 18px 45px rgba(40,64,90,.18); }
    .hero h1 { margin:0 0 8px; font-size:32px; }
    .hero p { margin:0; opacity:.92; }
    .meta { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:10px; margin-top:20px; }
    .meta div, .card, .metric-card { background:white; border:1px solid var(--line); border-radius:14px; box-shadow:0 10px 24px rgba(35,51,70,.08); }
    .meta div { padding:12px; color:var(--ink); }
    .meta span, .metric-card span, .kicker { display:block; color:var(--muted); font-size:12px; font-weight:800; text-transform:uppercase; }
    .meta strong { display:block; margin-top:3px; font-size:15px; }
    h2 { margin:30px 0 12px; font-size:22px; }
    h3 { margin:0 0 8px; font-size:17px; }
    .grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:12px; }
    .grid.two { grid-template-columns:repeat(2,minmax(0,1fr)); }
    .card { padding:18px; }
    .metric-card { padding:16px; }
    .metric-card strong { display:block; margin:5px 0 8px; font-size:28px; }
    .metric-card small { color:var(--muted); font-weight:700; }
    .bar, .chart-track { height:10px; overflow:hidden; border-radius:999px; background:#e8eff5; }
    .bar i, .chart-track i { display:block; height:100%; border-radius:inherit; background:linear-gradient(90deg,var(--teal),#ffc94a,#ff7b61); }
    .metric-card.strong .bar i { background:var(--green); }
    .metric-card.typical .bar i { background:var(--teal); }
    .metric-card.watch .bar i { background:var(--amber); }
    .metric-card.low .bar i { background:var(--red); }
    .chart-row { display:grid; grid-template-columns:minmax(130px,1fr) 2fr 38px; gap:10px; align-items:center; margin:10px 0; }
    .chart-row span { font-weight:800; }
    .chart-row strong { text-align:right; }
    table { width:100%; border-collapse:collapse; background:white; border-radius:14px; overflow:hidden; box-shadow:0 10px 24px rgba(35,51,70,.08); }
    th, td { padding:10px 11px; border-bottom:1px solid #e5edf3; vertical-align:top; text-align:left; }
    th { background:#eaf7fb; color:#264253; font-size:12px; text-transform:uppercase; }
    tr:last-child td { border-bottom:0; }
    .badge { display:inline-flex; align-items:center; min-height:24px; border-radius:999px; padding:3px 9px; font-weight:900; font-size:12px; background:#e9f7f4; color:var(--teal); }
    .badge.alert, .badge.low { background:#fff0ee; color:var(--red); }
    .badge.watch { background:#fff7db; color:#8a6200; }
    .badge.ok, .badge.strong { background:#edf9f2; color:var(--green); }
    .recommendation { border-left:6px solid var(--teal); }
    .recommendation.high { border-left-color:var(--red); }
    .recommendation.medium { border-left-color:var(--amber); }
    ul { margin:8px 0 0; padding-left:20px; }
    li { margin:4px 0; }
    .empty { color:var(--muted); font-weight:700; margin:8px 0 0; }
    .note { background:#fff9e8; border:1px solid #f4d88a; border-radius:14px; padding:14px 16px; color:#4e3d12; font-weight:700; }
    .refs li { font-size:13px; }
    @media print { body { background:white; } .page { max-width:none; padding:0; } .card, .metric-card, table, .hero { box-shadow:none; } }
    @media (max-width: 780px) { .page { padding:14px; } .meta, .grid, .grid.two { grid-template-columns:1fr; } .chart-row { grid-template-columns:1fr; } }
  </style>
</head>
<body>
  <main class="page">
    <section class="hero">
      <span class="kicker">Auto Therapist · Αναφορά αξιολόγησης</span>
      <h1>${escapedChild}</h1>
      <p>Ποσοτική και ποιοτική ανάλυση τεστ έκφρασης, ASR καταγραφής και φωνολογικών διεργασιών από επιβεβαιωμένη καταγραφή θεραπευτή.</p>
      <div class="meta">
        <div><span>Θεραπευτής</span><strong>${escapeHtml(data.clinician || "-")}</strong></div>
        <div><span>Ημερομηνία αξιολόγησης</span><strong>${escapeHtml(data.sessionDate || "-")}</strong></div>
        <div><span>Ημερομηνία γέννησης</span><strong>${escapeHtml(data.birthDate || "-")}</strong></div>
        <div><span>Χρονολογική ηλικία</span><strong>${data.chronologicalAge ? `${escapeHtml(data.chronologicalAge.short)} · ${escapeHtml(data.chronologicalAge.label)}` : "-"}</strong></div>
      </div>
    </section>

    <h2>Ποσοτική Ανάλυση</h2>
    <section class="grid">
      ${reportMetricCard("Συνολικό σκορ", data.language.grandTotal, data.language.grandMax, analysis.totalPercent, analysis.totalBand)}
      ${reportMetricCard("Πληροφοριακή επάρκεια", data.language.infoTotal, data.language.infoMax, analysis.infoPercent, analysis.infoBand)}
      ${reportMetricCard("Γραμματική επάρκεια", data.language.grammarTotal, data.language.grammarMax, analysis.grammarPercent, analysis.grammarBand)}
    </section>
    <section class="grid" style="margin-top:12px">
      ${
        percentileSummary && analysis.percentileBands
          ? [
              reportPercentileCard("Εκατοστημόριο συνολικής δοκιμασίας", percentileSummary.total, analysis.percentileBands.total),
              reportPercentileCard("Εκατοστημόριο πληροφορίας", percentileSummary.info, analysis.percentileBands.info),
              reportPercentileCard("Εκατοστημόριο γραμματικής", percentileSummary.grammar, analysis.percentileBands.grammar),
            ].join("")
          : `<article class="card"><h3>Εκατοστημόρια</h3><p class="empty">Δεν υπολογίστηκαν επειδή λείπει ηλικία ή η ηλικία είναι εκτός 4:0 έως 7:0.</p></article>`
      }
    </section>

    <h2>Ποιοτική Ανάλυση Απαντήσεων</h2>
    <section class="grid two">
      <article class="card">
        <h3>Δυνατά στοιχεία πληροφορίας</h3>
        ${limitedList(analysis.infoRules.mastered, "Δεν υπάρχουν πλήρως κατακτημένα πληροφοριακά κριτήρια στα συμπληρωμένα δεδομένα.")}
      </article>
      <article class="card">
        <h3>Προτεραιότητες πληροφορίας</h3>
        ${limitedList(analysis.infoRules.missing, "Δεν εντοπίστηκαν μηδενισμένα πληροφοριακά κριτήρια.", 10)}
      </article>
      <article class="card">
        <h3>Δυνατά στοιχεία γραμματικής</h3>
        ${limitedList(analysis.grammarRules.mastered, "Δεν υπάρχουν πλήρως κατακτημένα γραμματικά κριτήρια στα συμπληρωμένα δεδομένα.")}
      </article>
      <article class="card">
        <h3>Προτεραιότητες γραμματικής</h3>
        ${limitedList(analysis.grammarRules.missing, "Δεν εντοπίστηκαν μηδενισμένα γραμματικά κριτήρια.", 10)}
      </article>
    </section>

    <h2>Ανάλυση Φωνολογικών Διεργασιών</h2>
    <p class="note">Σημαντικό: το ASR δεν χρησιμοποιείται για να εντοπίσει φωνολογικές διεργασίες, επειδή μπορεί να κανονικοποιήσει την παιδική παραγωγή. Τα παρακάτω ευρήματα βασίζονται μόνο στη χειροκίνητη φωνολογική καταγραφή του/της θεραπευτή/τριας.</p>
    <section class="grid two">
      <article class="card">
        <h3>Συχνότητα διεργασιών</h3>
        ${reportChartRows(phonology.processCounts, "Δεν υπάρχουν συμπληρωμένα φωνολογικά ευρήματα.")}
      </article>
      <article class="card">
        <h3>Ήχοι/συμπλέγματα με παρατηρήσεις</h3>
        ${reportChartRows(phonology.soundCounts.slice(0, 10), "Δεν υπάρχουν ήχοι προς ανάλυση.")}
      </article>
    </section>
    <section class="card" style="margin-top:12px">
      <h3>Ηλικιακή ερμηνεία φωνολογίας</h3>
      <p>
        <span class="badge alert">Χρειάζονται έλεγχο: ${phonology.alertCount}</span>
        <span class="badge watch">Σε φάση κατάκτησης: ${phonology.watchCount}</span>
        <span class="badge ok">Αναμενόμενα/παρόντα: ${phonology.okCount}</span>
        <span class="badge">Χωρίς ηλικία/πίνακα: ${phonology.unknownCount}</span>
      </p>
      ${
        phonology.issues.length
          ? `<table>
              <thead><tr><th>Εικόνα</th><th>Στόχος → παραγωγή</th><th>Διεργασία</th><th>Ήχος</th><th>Ηλικιακή ερμηνεία</th></tr></thead>
              <tbody>
                ${phonology.issues
                  .map(
                    (issue) => `
                      <tr>
                        <td>${escapeHtml(issue.promptId)}</td>
                        <td>${escapeHtml(issue.wordTarget)} → ${escapeHtml(issue.wordProduction)}</td>
                        <td>${escapeHtml(issue.process)}</td>
                        <td>/${escapeHtml(issue.sound)}/</td>
                        <td><span class="badge ${escapeHtml(issue.status?.className || "")}">${escapeHtml(issue.status?.label || "-")}</span></td>
                      </tr>
                    `,
                  )
                  .join("")}
              </tbody>
            </table>`
          : `<p class="empty">Συμπλήρωσε στόχο και ακριβή παραγωγή παιδιού στις κάρτες για να εμφανιστεί πλήρης φωνολογική ανάλυση.</p>`
      }
    </section>

    <h2>Αποτελέσματα Ανά Εικόνα</h2>
    <table>
      <thead>
        <tr><th>Εικόνα</th><th>Εντολή</th><th>Απάντηση παιδιού</th><th>Πληροφορία</th><th>Γραμματική</th><th>ASR</th></tr>
      </thead>
      <tbody>
        ${data.language.scoredPrompts
          .map((row) => {
            const asr = data.language.asrRecords.find((record) => record.promptId === row.prompt.id);
            return `
              <tr>
                <td>${row.prompt.id}</td>
                <td>${escapeHtml(row.prompt.question)}</td>
                <td>${escapeHtml(row.answer || "-")}</td>
                <td>${row.info.score}/${row.info.max}</td>
                <td>${row.grammar.score}/${row.grammar.max}</td>
                <td>${escapeHtml(asrReportSummary(asr))}</td>
              </tr>
            `;
          })
          .join("")}
      </tbody>
    </table>

    <h2>Προτεινόμενη Παρέμβαση</h2>
    <p class="note">Οι προτάσεις είναι βοήθημα κλινικής λήψης απόφασης. Δεν αντικαθιστούν την κρίση του/της λογοθεραπευτή/τριας, την ακουστική επιβεβαίωση, το ιστορικό, τον έλεγχο ακοής και τη λειτουργική εικόνα του παιδιού.</p>
    <section class="grid two" style="margin-top:12px">
      ${recommendations
        .map(
          (rec) => `
            <article class="card recommendation ${rec.priority.includes("Υψηλή") ? "high" : rec.priority.includes("Μεσαία") ? "medium" : ""}">
              <span class="kicker">Προτεραιότητα: ${escapeHtml(rec.priority)}</span>
              <h3>${escapeHtml(rec.title)}</h3>
              <p>${escapeHtml(rec.rationale)}</p>
              <ul>${rec.actions.map((action) => `<li>${escapeHtml(action)}</li>`).join("")}</ul>
              <p><strong>Βιβλιογραφική βάση:</strong> ${escapeHtml(rec.evidence.join(", "))}</p>
            </article>
          `,
        )
        .join("")}
    </section>

    <h2>Ενδεικτική Βιβλιογραφία</h2>
    <section class="card refs">
      <ul>
        <li>Baker, E., & McLeod, S. (2011a). Evidence-Based Practice for Children With Speech Sound Disorders: Part 1 Narrative Review. <em>Language, Speech, and Hearing Services in Schools, 42</em>(2), 102-139. https://doi.org/10.1044/0161-1461(2010/09-0075)</li>
        <li>Baker, E., & McLeod, S. (2011b). Evidence-Based Practice for Children With Speech Sound Disorders: Part 2 Application to Clinical Practice. <em>Language, Speech, and Hearing Services in Schools, 42</em>(2), 140-151. https://doi.org/10.1044/0161-1461(2010/10-0023)</li>
        <li>Gierut, J. A. (2001). Complexity in Phonological Treatment: Clinical Factors. <em>Language, Speech, and Hearing Services in Schools, 32</em>(4), 229-241. https://doi.org/10.1044/0161-1461(2001/021)</li>
        <li>Williams, A. L. (2000). Multiple Oppositions: Case Studies of Variables in Phonological Intervention. <em>American Journal of Speech-Language Pathology, 9</em>(4), 289-299. https://doi.org/10.1044/1058-0360.0904.289</li>
        <li>Rudolph, J. M., & Wendt, O. (2014). The efficacy of the cycles approach: A multiple baseline design. <em>Journal of Communication Disorders, 47</em>, 1-16. https://doi.org/10.1016/j.jcomdis.2013.12.003</li>
        <li>Law, J., Garrett, Z., & Nye, C. (2003). Speech and language therapy interventions for children with primary speech and language delay or disorder. <em>Cochrane Database of Systematic Reviews</em>, CD004110. https://doi.org/10.1002/14651858.CD004110</li>
        <li>Ebbels, S. (2014). Effectiveness of intervention for grammar in school-aged children with primary language impairments: A review of the evidence. <em>Child Language Teaching and Therapy, 30</em>(1), 7-40. https://doi.org/10.1177/0265659013512321</li>
        <li>Leonard, L. B., & Deevy, P. (2017). The Changing View of Input in the Treatment of Children With Grammatical Deficits. <em>American Journal of Speech-Language Pathology, 26</em>(3), 1030-1041. https://doi.org/10.1044/2017_AJSLP-16-0095</li>
      </ul>
      <p class="empty">Η αναφορά δημιουργήθηκε στις ${escapeHtml(now)}.</p>
    </section>
  </main>
</body>
</html>`;
}

function createReportText() {
  const data = createReportData();
  const lines = [
    "Auto Therapist - Αναφορά αξιολόγησης",
    "",
    `Παιδί: ${data.childName || "-"}`,
    `Θεραπευτής: ${data.clinician || "-"}`,
    `Ημερομηνία γέννησης: ${data.birthDate || "-"}`,
    `Ημερομηνία αξιολόγησης: ${data.sessionDate || "-"}`,
    `Χρονολογική ηλικία: ${data.chronologicalAge ? `${data.chronologicalAge.short} (${data.chronologicalAge.label})` : data.age || "-"}`,
    "",
    "Αξιολόγηση απαντήσεων",
    `Σύνολο: ${data.language.grandTotal}/${data.language.grandMax} (${data.language.percentage}%)`,
    `Πληροφοριακή επάρκεια: ${data.language.infoTotal}`,
    `Γραμματική επάρκεια: ${data.language.grammarTotal}`,
  ];
  if (data.language.percentileSummary) {
    lines.push(
      `Ηλικιακός πίνακας: ${data.language.percentileSummary.ageKey}`,
      `Εκατοστημόρια: σύνολο ${percentileDisplay(data.language.percentileSummary.total)}, πληροφορία ${percentileDisplay(data.language.percentileSummary.info)}, γραμματική ${percentileDisplay(data.language.percentileSummary.grammar)}`,
    );
  } else {
    lines.push("Εκατοστημόρια: δεν υπολογίστηκαν, επειδή λείπει ηλικία ή η ηλικία είναι εκτός 4:0 έως 7:0.");
  }
  lines.push("");
  data.language.scoredPrompts.forEach((row) => {
    const asr = data.language.asrRecords.find((record) => record.promptId === row.prompt.id);
    const phonology = data.language.phonologyRecords.find((record) => record.promptId === row.prompt.id);
    lines.push(`Εικόνα ${row.prompt.id}: ${row.prompt.question}`);
    lines.push(`Ακριβής απάντηση παιδιού: ${row.answer || "-"}`);
    lines.push(`ASR: ${asrReportSummary(asr)}`);
    if (phonology?.analysis?.ready) {
      const issueText = phonology.analysis.issues.length
        ? phonology.analysis.issues
            .map((issue) => `${issue.wordTarget}->${issue.wordProduction}: ${issue.process} /${issue.sound}/ (${issue.status.label})`)
            .join("; ")
        : "χωρίς φωνολογική διεργασία στη σύγκριση";
      lines.push(`Φωνολογική ανάλυση: ${issueText}`);
    } else {
      lines.push("Φωνολογική ανάλυση: δεν συμπληρώθηκε στόχος/παραγωγή.");
    }
    lines.push(`Σκορ: ${row.total}/${row.totalMax}`);
    lines.push("");
  });
  return lines.join("\n");
}

function statusLabel(status) {
  return {
    correct: "Σωστό",
    incorrect: "Λάθος",
    review: "Έλεγχος μεταγραφής",
    skipped: "Δεν χορηγήθηκε",
    untested: "Κενό",
  }[status] || status;
}

function csvCell(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function createArticulationErrorsCsv() {
  const data = createReportData();
  const rows = [
    [
      "Κάρτα",
      "Σελίδα",
      "Θέση",
      "Κατάσταση",
      "Λέξη στόχος",
      "Παραγωγή παιδιού",
      "Αυτόματο αποτέλεσμα",
      "Λάθη",
      "ASR",
      "Μηχανή ASR",
      "Ηχητικό",
      "Σημειώσεις",
    ],
    ...data.articulation.issueTable.map((issue) => [
      issue.cardId,
      issue.page,
      issue.position,
      statusLabel(issue.status),
      issue.target || "-",
      issue.production || "-",
      issue.phonologicalProcess || "-",
      issue.errors.length ? issue.errors.join(", ") : "-",
      asrSourceLabel(issue.speechSource),
      issue.speechEngine || "-",
      issue.audioCaptured ? `ναι (${formatBytes(issue.audioSize)})` : "-",
      issue.notes || "-",
    ]),
  ];
  return rows.map((row) => row.map(csvCell).join(",")).join("\n");
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type: `${type};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

render();
checkAsrHealth();
