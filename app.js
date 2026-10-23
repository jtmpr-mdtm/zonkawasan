// =========================================================================
// DATA PENUH 24 ZON BESERTA LALUAN GAMBAR & KOORDINAT (KEMAS KINI 2026)
// =========================================================================
const zones = [
  // --- ZON A (12 ZON - TANJONG MALIM) ---
  {
    id: "A1",
    name: "Zon A1",
    pos: [3.6930, 101.5175],
    c: "#0ea5e9",
    officer: "YBhg. Clr. Lee Peoh Think",
    coordinator: "En Mohamed Syafiq bin Darumi",
    image: "images/A1.png",
    altImage: "images/1.png",
    kawasan: [
      { nama: "Rumah Awam 1 & 2" },
      { nama: "Taman Malim Indah" },
      { nama: "Taman Ketoyong Permai" },
      { nama: "Simpang ke Kg. Berop" },
      { nama: "Jalan Ketoyong (dari SKTM hingga Jalan Maktab)" },
      { nama: "Kawasan Perumahan Kampung Baru (Depan SRJK(T) Jalan Ketoyong)" },
      { nama: "Kawasan Elite Futsal" },
      { nama: "Area SRJK(C) dan Pejabat Pos" },
      { nama: "Perumahan Kg. Baru sebelah Pusat jagaan kanak - kanak Jalan Ketoyong" }
    ]
  },
  {
    id: "A2",
    name: "Zon A2",
    pos: [3.6987, 101.5241],
    c: "#0ea5e9",
    officer: "YBhg. Encik Tan Yee Seng",
    coordinator: "En Hafizul bin Abu Bakar",
    image: "images/A2.png",
    altImage: "images/2.png",
    kawasan: [
      { nama: "Taman Ketoyong" },
      { nama: "Taman Jutajaya" },
      { nama: "Taman Hijau 1 & 2" },
      { nama: "Taman Tanjong Malim" },
      { nama: "Kg. Chabang Lima" },
      { nama: "Kg Lambak" },
      { nama: "Sekolah Kebangsaan Tanjong Malim (SKTM)" },
      { nama: "Taman Muhibbah" },
      { nama: "Perumahan Kg. Baru depan SKTM" }
    ]
  },
  {
    id: "A3",
    name: "Zon A3",
    pos: [3.7329, 101.5133],
    c: "#0ea5e9",
    officer: "Encik Zairul Faizol bin Zakaria",
    coordinator: "En Mohamed Noor Zharif bin Noor Azizuddin",
    image: "images/A3.png",
    altImage: "images/3.png",
    kawasan: [
      { nama: "Kampung Kelawar" },
      { nama: "KLK Tech Park" },
      { nama: "Jejambat Kelawar Link (hingga Bandar Proton)" },
      { nama: "Kawasan Perindustrian Bandar Proton" }
    ]
  },
  {
    id: "A4",
    name: "Zon A4",
    pos: [3.6970, 101.5046],
    c: "#0ea5e9",
    officer: "YBhg. Clr. Puan Lavenyia a/p Sivanesan",
    coordinator: "En Mohd Sariman bin Umar",
    image: "images/A4.png",
    altImage: "images/4.png",
    kawasan: [
      { nama: "Jalan Kg Lubuk Salak" },
      { nama: "Taman Cempaka Sari" },
      { nama: "Taman Indah Ketoyong 1 & 2" },
      { nama: "Taman Intan Setia 1 & 2" },
      { nama: "Taman Ketoyong Damai" },
      { nama: "Taman Pelangi 1 & 2" },
      { nama: "Jalan Ketoyong dari Kg Ketoyong hingga depan SKTM" },
      { nama: "Perumahan Kg. Baru sebelah Taman Intan Setia" },
      { nama: "Kampung Ketoyong" }
    ]
  },
  {
    id: "A5",
    name: "Zon A5",
    pos: [3.6925, 101.5210],
    c: "#0ea5e9",
    officer: "YBhg. Clr. Encik Subramaniam a/l M.Applanaidoo",
    coordinator: "Afiq Syahmi bin Mokhlis",
    image: "images/A5.png",
    altImage: "images/5.png",
    kawasan: [
      { nama: "Kampung Ketoyong Tambahan (Kg.Leonardo)" },
      { nama: "Taman Orkid" },
      { nama: "Taman Wangsa Jaya" },
      { nama: "Taman Wangsa Setia" },
      { nama: "Taman Wangsa (Garden Seafood)" },
      { nama: "Bukit Wangsa Setia" }
    ]
  },
  {
    id: "A6",
    name: "Zon A6",
    pos: [3.681222, 101.520917],
    c: "#0ea5e9",
    officer: "YBhg. Clr. Puan Chong Kam Lan",
    coordinator: "Puan Munirah binti Abd Rahman",
    image: "images/A6.png",
    altImage: "images/6.png",
    kawasan: [
      { nama: "Jalan Besar Tanjong Malim" },
      { nama: "Kg. Melaka" },
      { nama: "Kg. Loke Yew" },
      { nama: "Taman Bunga Raya" },
      { nama: "Kampung Kubu" },
      { nama: "Jalan Rumah Rehat" },
      { nama: "Taman Bandar 1 & 2" },
      { nama: "Bandar Tanjong Malim" },
      { nama: "Jalan Stesen" }
    ]
  },
  {
    id: "A7",
    name: "Zon A7",
    pos: [3.6895, 101.5235],
    c: "#0ea5e9",
    officer: "YBhg. Clr. Dato' Mohd Farid bin Mohamad Ali",
    coordinator: "Puan Suuzana binti Zainal Othman",
    image: "images/A7.png",
    altImage: "images/7.png",
    kawasan: [
      { nama: "Jalan Maktab" },
      { nama: "Kawasan Balai Polis & Sekolah Methodist" },
      { nama: "Taman Happy" },
      { nama: "Kampung Mogah" },
      { nama: "Taman Bina" },
      { nama: "Taman Anggerik" },
      { nama: "Jalan Dari Lampu Isyarat Hingga ke Depan Balai Bomba" }
    ]
  },
  {
    id: "A8",
    name: "Zon A8",
    pos: [3.6871, 101.5318],
    c: "#0ea5e9",
    officer: "YBhg. Clr. Tuan Haji Malek Farok bin Haji Zainal Abidin",
    coordinator: "Puan Ekmal Farhah binti Zairuslan",
    image: "images/A8.png",
    altImage: "images/8.png",
    kawasan: [
      { nama: "Kg Simpang 4 Luar" },
      { nama: "Taman Sri Indah 1" },
      { nama: "Taman Sri Indah 2" },
      { nama: "Jalan Codner" },
      { nama: "Taman Universiti" },
      { nama: "Taman Segar Fasa 1 & 2" },
      { nama: "Taman Pertama & Taman Sri Pertama" }
    ]
  },
  {
    id: "A9",
    name: "Zon A9",
    pos: [3.6940, 101.5295],
    c: "#0ea5e9",
    officer: "YBhg. Clr. Puan Leonie Jolene Bateman",
    coordinator: "Pn. Fatin Zahiraa binti Sayuti",
    image: "images/A9.png",
    altImage: "images/9.png",
    kawasan: [
      { nama: "Taman Sri Tanjong 1 & 2" },
      { nama: "Taman Berop Idaman" },
      { nama: "Kampung Berop" },
      { nama: "Dataran Berop" },
      { nama: "Kg Changkat Khir" },
      { nama: "Toyota Servis / Perodua Servis" },
      { nama: "Taman Slim" }
    ]
  },
  {
    id: "A10",
    name: "Zon A10",
    pos: [3.6958, 101.5302],
    c: "#0ea5e9",
    officer: "YBhg. Clr. Encik MohanaRavi a/l Ramasamy",
    coordinator: "Puan Syarifah Syahirah binti Syed Ismail",
    image: "images/A10.png",
    altImage: "images/10.png",
    kawasan: [
      { nama: "Taman Bernam" },
      { nama: "Taman Bernam Baru" },
      { nama: "Taman Bernam Perdana" },
      { nama: "Taman Malim" }
    ]
  },
  {
    id: "A11",
    name: "Zon A11",
    pos: [3.6910, 101.5140],
    c: "#0ea5e9",
    officer: "YBhg. Clr. Encik Roslee bin Mat Yusof",
    coordinator: "En. Hasan bin Arshad @ Ramli",
    image: "images/A11.png",
    altImage: "images/11.png",
    kawasan: [
      { nama: "Taman Pinggiran Bernam" },
      { nama: "Taman Sentosa" },
      { nama: "Rumah Awam 3" },
      { nama: "Kota Malim Prima" },
      { nama: "Taman Bernam Permai" }
    ]
  },
  {
    id: "A12",
    name: "Zon A12",
    pos: [3.7420, 101.5350],
    c: "#0ea5e9",
    officer: "YBhg. Clr. Encik Ahmad Lutpi bin Abdul Razak",
    coordinator: "En. Amir b. Ahmad",
    image: "images/A12.png",
    altImage: "images/12.png",
    kawasan: [
      { nama: "Perumahan Bandar Proton" },
      { nama: "UPSI Proton" }
    ]
  },

  // --- ZON B (9 ZON - SLIM RIVER) ---
  {
    id: "B1",
    name: "Zon B1",
    pos: [3.8609, 101.3856],
    c: "#ef4444",
    officer: "YBhg. Clr. Encik Sivakumar a/l Balakrishnan",
    coordinator: "En. Muhammad Shamsul Arif bin Ibrahim",
    image: "images/B1.png",
    altImage: "images/B1.png",
    kawasan: [
      { nama: "Trolak Pekan / Kg Baru" },
      { nama: "Jalan Slim Ke Trolak" },
      { nama: "Kampung Batu 4" },
      { nama: "Taman Bukit Slim" }
    ]
  },
  {
    id: "B2",
    name: "Zon B2",
    pos: [3.8380, 101.4020],
    c: "#ef4444",
    officer: "YBhg. Clr. Encik Mohamad Khairudin bin Mohamad Nor",
    coordinator: "En. Muhammad Firdaus bin Ramli",
    image: "images/B2.png",
    altImage: "images/B2.png",
    kawasan: [
      { nama: "Bandar Baru 1, 2, 3" },
      { nama: "Perumahan Awam 2" },
      { nama: "Taman Slim Indah 1 & 2" },
      { nama: "Kawasan Klinik Kesihatan" },
      { nama: "Taman Slim Makmur" }
    ]
  },
  {
    id: "B3",
    name: "Zon B3",
    pos: [3.8348, 101.4013],
    c: "#ef4444",
    officer: "YBhg. Clr. Encik Chew Chin Yap",
    coordinator: "En. Mohd. Radzi bin Mor Azman",
    image: "images/B3.png",
    altImage: "images/B3.png",
    kawasan: [
      { nama: "Taman Aman" },
      { nama: "Taman Bunga Raya" },
      { nama: "Rumah Awam 1" },
      { nama: "Taman Yang Ming I & II" },
      { nama: "Taman Wira Baru" },
      { nama: "Taman Slim Jaya I & II" },
      { nama: "Taman Slim Emas" },
      { nama: "Pusat Perniagaan Slim Perdana" }
    ]
  },
  {
    id: "B4",
    name: "Zon B4",
    pos: [3.8315, 101.4005],
    c: "#ef4444",
    officer: "YBhg. Clr. Puan Nadiatul Akma binti Mohd Noor",
    coordinator: "En. Muhammad Nizam bin Yahya",
    image: "images/B4.png",
    altImage: "images/B4.png",
    kawasan: [
      { nama: "Kg Baru Slim River" },
      { nama: "Taman Krishnan" },
      { nama: "Taman Slim River" },
      { nama: "Kawasan Sekolah Menengah Dato' Zulkifli" },
      { nama: "Kawasan Hospital" },
      { nama: "Kg Kurnia" },
      { nama: "Kawasan Rumah Kuarters Dan Jalan Kelab" }
    ]
  },
  {
    id: "B5",
    name: "Zon B5",
    pos: [3.8300, 101.4046],
    c: "#ef4444",
    officer: "YBhg. Clr. Encik Mohd Nazri bin Mohd Hashim",
    coordinator: "En. Hamirul Syawal bin Hamdan",
    image: "images/B5.png",
    altImage: "images/B5.png",
    kawasan: [
      { nama: "Pekan Slim River" },
      { nama: "Kawasan Pasar" },
      { nama: "Kawasan Stesen Bas" },
      { nama: "Kg Manggis" },
      { nama: "Kawasan Stesen KTMB" }
    ]
  },
  {
    id: "B6",
    name: "Zon B6",
    pos: [3.8250, 101.3980],
    c: "#ef4444",
    officer: "YBhg. Clr. Encik Luqman Nul Hakim bin Mohd Zaini",
    coordinator: "Pn. Nurul Noor Nadia binti Henree",
    image: "images/B6.png",
    altImage: "images/B6.png",
    kawasan: [
      { nama: "Taman Seroja" },
      { nama: "Rumah Awam 3" },
      { nama: "Taman Wira" },
      { nama: "Kg Perhentian" }
    ]
  },
  {
    id: "B7",
    name: "Zon B7",
    pos: [3.8180, 101.4150],
    c: "#ef4444",
    officer: "YBhg. Clr. Puan Janaidah binti Hashim",
    coordinator: "Pn. Raja Jasmin Suhana binti Raja Zainal Abidin",
    image: "images/B7.png",
    altImage: "images/B7.png",
    kawasan: [
      { nama: "Kg Klan 1 & 2" },
      { nama: "Taman Slim Permata" },
      { nama: "Taman Slim Permai" },
      { nama: "Jalan Rumah Rehat" },
      { nama: "Jalan Slim ke Behrang" },
      { nama: "Simpang Felda Sg. Behrang" }
    ]
  },
  {
    id: "B8",
    name: "Zon B8",
    pos: [3.8344, 101.4857],
    c: "#ef4444",
    officer: "YBhg. Clr. Encik Mathavan a/l Kuppusamy",
    coordinator: "Pn. Aida binti Adnan",
    image: "images/B8.png",
    altImage: "images/B8.png",
    kawasan: [
      { nama: "Pekan Slim Village" },
      { nama: "Kg Baru Slim Village" },
      { nama: "Kg Sungai Gesa" },
      { nama: "Jalan Slim Village ke Ulu Slim" },
      { nama: "Jalan Slim Village ke Sg. Bil" }
    ]
  },
  {
    id: "B9",
    name: "Zon B9",
    pos: [3.8481, 101.4404],
    c: "#ef4444",
    officer: "YBhg. Clr. Encik Abd Razak bin Ahamad",
    coordinator: "En. Saharizal bin Yahya",
    image: "images/B9.png",
    altImage: "images/B9.png",
    kawasan: [
      { nama: "Kg Sawa" },
      { nama: "Rumah Awam Slim Village" },
      { nama: "Taman Slim Jaya 1 & 2" },
      { nama: "Jalan Slim Village ke Slim River (hingga Simpang Pejabat Agama)" },
      { nama: "Taman Kampung Slim" },
      { nama: "Kawasan Pelupusan Sampah Panderas" }
    ]
  },

  // --- ZON C (3 ZON - BEHRANG) ---
  {
    id: "C1",
    name: "Zon C1",
    pos: [3.7450, 101.4550],
    c: "#f59e0b",
    officer: "YBhg. Clr. Encik Cures Rau a/l Ramnaidu, P.P.W.",
    coordinator: "En. Syed Mohammad Helmi Bin Syed Hassan",
    image: "images/C1.png",
    altImage: "images/C1.png",
    kawasan: [
      { nama: "Kg Padang" },
      { nama: "Kg Pauh" },
      { nama: "Bandar Sri Behrang" },
      { nama: "Rumah Awam Behrang" },
      { nama: "Kawasan Stesen KTMB" },
      { nama: "Jalan dari Sg. Bernam Ke Lampu Isyarat" },
      { nama: "Pekan Behrang Stesen" },
      { nama: "Kg Baru Behrang Stesen" },
      { nama: "Behrang Residen" },
      { nama: "Behrang Sentral" },
      { nama: "Behrang Bitara" },
      { nama: "Behrang Jati" }
    ]
  },
  {
    id: "C2",
    name: "Zon C2",
    pos: [3.7550, 101.5020],
    c: "#f59e0b",
    officer: "YBhg. Clr. Puan Mairoszalifah binti Ismail",
    coordinator: "Pn. Norul Azlina binti Tajie",
    image: "images/C2.png",
    altImage: "images/C2.png",
    kawasan: [
      { nama: "Kg Baru Behrang Ulu" },
      { nama: "Jalan Behrang Ulu hingga Slim Village" },
      { nama: "Kg. Batu 7 Behrang" },
      { nama: "Kg. Bt 8 / Simpang Sekolah" },
      { nama: "Kg Sungai Dara" },
      { nama: "Jalan Behrang Ulu (Hingga Lebuhraya Tg Malim hingga Behrang)" },
      { nama: "Diamond Creek" },
      { nama: "Taman Sekiah Makmur" },
      { nama: "INSTUN" },
      { nama: "Tanjong Malim Hi-Tech" }
    ]
  },
  {
    id: "C3",
    name: "Zon C3",
    pos: [3.7280, 101.4770],
    c: "#f59e0b",
    officer: "YBhg. Clr. Encik Kamarul Beharim bin Lasa",
    coordinator: "En. Shogigan a/l Munretnam",
    image: "images/C3.png",
    altImage: "images/C3.png",
    kawasan: [
      { nama: "Bandar Behrang 2020" },
      { nama: "Kawasan Industri & Sekolah" },
      { nama: "Taman Wangsa Behrang" },
      { nama: "Jalan Persekutuan Bandar Behrang 2020 hingga Tanjong Malim (Depan MDTM)" },
      { nama: "Jalan Persekutuan Bandar Behrang 2020 hingga Plaza Tol Behrang" }
    ]
  }
];

// Deklarasi Elemen DOM
const dashboardContainer = document.getElementById("dashboardContainer");
const panelMiddle = document.getElementById("panelMiddle");
const btnCloseMiddle = document.getElementById("btnCloseMiddle");
const zoneListContainer = document.getElementById("zoneListContainer");
const displayZoneBadge = document.getElementById("displayZoneBadge");
const displayZoneTitle = document.getElementById("displayZoneTitle");
const displayPoster = document.getElementById("displayPoster");
const emptyState = document.getElementById("emptyState");
const btnZoomPoster = document.getElementById("btnZoomPoster");
const posterArea = document.getElementById("posterArea");
const infoDetailsBox = document.getElementById("infoDetailsBox");
const displayOfficer = document.getElementById("displayOfficer");
const displayCoordinator = document.getElementById("displayCoordinator");
const kawasanContainer = document.getElementById("kawasanContainer");
const kawasanHeaderTitle = document.getElementById("kawasanHeaderTitle");

// Lightbox Modal
const imageModal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");
const modalClose = document.getElementById("modalClose");

// Pembolehubah Global
let currentFilter = 'A';
let currentSearchQuery = '';
let currentSelectedZone = null;

// =========================================================================
// PENUKAR KOORDINAT CASSINI-SOLDNER PERAK (METER) -> WGS84 (LAT/LNG)
// =========================================================================
function cassiniPerakToLatLng(x, y) {
  if (Math.abs(x) <= 180 && Math.abs(y) <= 90) {
    return L.latLng(y, x);
  }
  const a = 6378137.0;
  const f = 1.0 / 298.257223563;
  const e2 = 2 * f - f * f;
  const lat0 = (4.85906800 * Math.PI) / 180.0;
  const lon0 = (100.81540842 * Math.PI) / 180.0;
  const falseEasting = 0.0;
  const falseNorthing = 133454.0;

  function meridionalArc(phi) {
    const A0 = 1.0 - e2 / 4.0 - (3.0 * e2 * e2) / 64.0 - (5.0 * e2 * e2 * e2) / 256.0;
    const A2 = (3.0 / 8.0) * (e2 + (e2 * e2) / 4.0 + (15.0 * e2 * e2 * e2) / 128.0);
    const A4 = (15.0 / 256.0) * (e2 * e2 + (3.0 * e2 * e2 * e2) / 4.0);
    const A6 = (35.0 * e2 * e2 * e2) / 3072.0;
    return a * (A0 * phi - A2 * Math.sin(2 * phi) + A4 * Math.sin(4 * phi) - A6 * Math.sin(6 * phi));
  }
  const M0 = meridionalArc(lat0);
  const dx = x - falseEasting;
  const dy = y - falseNorthing;
  const M1 = M0 + dy;
  let phi1 = M1 / (a * (1.0 - e2 / 4.0));
  for (let i = 0; i < 6; i++) {
    const rho = (a * (1.0 - e2)) / Math.pow(1.0 - e2 * Math.pow(Math.sin(phi1), 2), 1.5);
    phi1 = phi1 - (meridionalArc(phi1) - M1) / rho;
  }
  const sinPhi1 = Math.sin(phi1);
  const cosPhi1 = Math.cos(phi1);
  const tanPhi1 = Math.tan(phi1);
  const nu1 = a / Math.sqrt(1.0 - e2 * sinPhi1 * sinPhi1);
  const rho1 = (a * (1.0 - e2)) / Math.pow(1.0 - e2 * sinPhi1 * sinPhi1, 1.5);
  const T1 = tanPhi1 * tanPhi1;
  const D = dx / nu1;
  const latRad = phi1 - ((nu1 * tanPhi1) / rho1) * ((D * D) / 2.0 - ((1.0 + 3.0 * T1) * Math.pow(D, 4)) / 24.0);
  const lonRad = lon0 + (D - (T1 * Math.pow(D, 3)) / 3.0 + ((1.0 + 3.0 * T1) * T1 * Math.pow(D, 5)) / 15.0) / cosPhi1;
  return L.latLng((latRad * 180.0) / Math.PI, (lonRad * 180.0) / Math.PI);
}

// =========================================================================
// INTEGRASI PETA LEAFLET, MARKER 24 ZON & SEMPADAN MDTM
// =========================================================================
let map = null;
let boundaryLayer = null;
const zonePolygons = {};
const zoneMarkers = {};
let markerGroup = null; // group marker (kosong pada mulanya, marker muncul bila zon dipilih)

// Warna polygon diambil terus dari properties.fill dalam semp_mdtm.json
function getFeatureColor(feature) {
  const p = (feature && feature.properties) ? feature.properties : {};
  if (p.fill) return p.fill;
  const zoneId = (p.Zon || p.id || "").toUpperCase();
  const matchedZone = zones.find(z => z.id.toUpperCase() === zoneId);
  return p.color || (matchedZone ? matchedZone.c : "#0ea5e9");
}

function getZoneDefaultStyle(feature) {
  const baseColor = getFeatureColor(feature);
  return { color: baseColor, weight: 2.2, opacity: 0.9, dashArray: null, fillColor: baseColor, fillOpacity: 0.7 };
}

function initLeafletMap() {
  const mapContainer = document.getElementById("mapView");
  if (!mapContainer || typeof L === 'undefined') return;

  map = L.map("mapView", { center: [3.79, 101.46], zoom: 11, zoomControl: true });

  const streetLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "© OpenStreetMap contributors | MDTM" }).addTo(map);
  const satelliteLayer = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", { attribution: "Tiles © Esri" });
  
  const sempadanGroup = L.layerGroup().addTo(map);
  markerGroup = L.layerGroup().addTo(map);

  L.control.layers({ "Peta Jalan (OSM)": streetLayer, "Satelit (Esri)": satelliteLayer }, { "Sempadan 24 Zon MDTM": sempadanGroup, "Marker 24 Zon MDTM": markerGroup }, { position: 'topright' }).addTo(map);
  
  createZoneMarkers(markerGroup);
  loadMdtmBoundary(sempadanGroup);
}

// FUNGSI MEMBINA MARKER (DISIMPAN DAHULU, DIPAPAR BILA ZON DIPILIH)
function createZoneMarkers(targetGroup) {
  zones.forEach(zone => {
    if (!zone.pos || zone.pos.length !== 2) return;

    const customIcon = L.divIcon({
      className: "custom-zone-marker",
      html: `<div style="background-color:${zone.c};width:28px;height:28px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:2.5px solid #ffffff;box-shadow:0 3px 8px rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;"><span style="transform:rotate(45deg);color:#ffffff;font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:10px;letter-spacing:-0.3px;">${zone.id}</span></div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 28],
      popupAnchor: [0, -28]
    });

    const marker = L.marker(zone.pos, { icon: customIcon });

    // Tooltip akan muncul apabila tetikus berada di atas marker (on hover)
    marker.bindTooltip(`<div style="font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:11px;color:#0f172a;padding:1px 5px;text-align:center;">${zone.name}</div>`, { sticky: true });

    // Pop-up nama zon yang lebih besar hanya akan muncul apabila marker diklik
    marker.bindPopup(`<div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:800;color:${zone.c};text-align:center;padding:2px 6px;">${zone.name}</div>`);

    marker.on("click", () => selectZone(zone.id));

    // Marker disimpan sahaja; TIDAK ditambah ke peta sehingga zon dipilih
    zoneMarkers[zone.id] = marker;
  });
}

// =========================================================================
// TITIK TENGAH DALAM POLYGON (supaya marker tak jatuh di luar zon bentuk L/C/berbilang bahagian)
// =========================================================================
function ringArea(ring) { // shoelace, ring = [[x,y],...]
  let a = 0;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) a += (ring[j][0] * ring[i][1]) - (ring[i][0] * ring[j][1]);
  return Math.abs(a) / 2;
}

// Normalkan getLatLngs() Leaflet kepada senarai polygon: [ [outer, hole...], ... ] dengan titik [x=lng, y=lat]
function layerToPolygons(layer) {
  const out = [];
  (function walk(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return;
    if (arr[0] && typeof arr[0].lat === 'number') return; // ring ditangani oleh pemanggil
    if (Array.isArray(arr[0]) && arr[0][0] && typeof arr[0][0].lat === 'number') {
      out.push(arr.map(r => r.map(p => [p.lng, p.lat]))); // [outer, holes...]
    } else arr.forEach(walk);
  })(layer.getLatLngs ? layer.getLatLngs() : []);
  return out;
}

function pointToPolyDist(x, y, polygon) { // positif = dalam, negatif = luar; nilai = jarak ke tepi terdekat
  let inside = false, minD = Infinity;
  polygon.forEach(ring => {
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const ax = ring[i][0], ay = ring[i][1], bx = ring[j][0], by = ring[j][1];
      if (((ay > y) !== (by > y)) && (x < (bx - ax) * (y - ay) / (by - ay) + ax)) inside = !inside;
      let dx = bx - ax, dy = by - ay, t = 0;
      const len2 = dx * dx + dy * dy;
      if (len2 > 0) { t = Math.max(0, Math.min(1, ((x - ax) * dx + (y - ay) * dy) / len2)); }
      const px = ax + t * dx - x, py = ay + t * dy - y;
      minD = Math.min(minD, Math.sqrt(px * px + py * py));
    }
  });
  return inside ? minD : -minD;
}

function polygonLabelPoint(polygon) { // versi ringkas algoritma polylabel
  const outer = polygon[0];
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  outer.forEach(p => { minX = Math.min(minX, p[0]); maxX = Math.max(maxX, p[0]); minY = Math.min(minY, p[1]); maxY = Math.max(maxY, p[1]); });
  const w = maxX - minX, h = maxY - minY, size = Math.min(w, h);
  if (size === 0) return [minX, minY];
  const mk = (x, y, half) => { const d = pointToPolyDist(x, y, polygon); return { x, y, half, d, max: d + half * Math.SQRT2 }; };
  let queue = [];
  const half0 = size / 2;
  for (let x = minX; x < maxX; x += size) for (let y = minY; y < maxY; y += size) queue.push(mk(x + half0, y + half0, half0));
  let best = mk(minX + w / 2, minY + h / 2, 0);
  const precision = size / 200;
  let guard = 0;
  while (queue.length && guard++ < 5000) {
    queue.sort((a, b) => b.max - a.max);
    const c = queue.shift();
    if (c.d > best.d) best = c;
    if (c.max - best.d <= precision) continue;
    const h2 = c.half / 2;
    queue.push(mk(c.x - h2, c.y - h2, h2), mk(c.x + h2, c.y - h2, h2), mk(c.x - h2, c.y + h2, h2), mk(c.x + h2, c.y + h2, h2));
  }
  return [best.x, best.y];
}

// Ambil titik tengah dalam polygon paling besar bagi sesuatu zon
function getZoneLabelPoint(layers) {
  let bestPoly = null, bestArea = -1;
  layers.forEach(l => layerToPolygons(l).forEach(poly => {
    const a = ringArea(poly[0]);
    if (a > bestArea) { bestArea = a; bestPoly = poly; }
  }));
  if (!bestPoly) return null;
  const pt = polygonLabelPoint(bestPoly);
  return L.latLng(pt[1], pt[0]);
}

// FUNGSI MEMUATKAN FAIL SEMPADAN & LARASKAN MARKER KE TITIK TENGAH
function loadMdtmBoundary(targetGroup) {
  fetch("semp_mdtm.json")
    .then(response => {
      if (!response.ok) throw new Error("Gagal memuatkan semp_mdtm.json");
      return response.json();
    })
    .then(geojsonData => {
      if (geojsonData && Array.isArray(geojsonData.features)) {
        if (geojsonData.features[18] && geojsonData.features[18].properties && geojsonData.features[18].properties.Zon === "A4") geojsonData.features[18].properties.Zon = "C2";
        if (geojsonData.features[24] && geojsonData.features[24].properties && geojsonData.features[24].properties.Zon === "A4") geojsonData.features[24].properties.Zon = "A3";
      }

      boundaryLayer = L.geoJSON(geojsonData, {
        coordsToLatLng: coords => cassiniPerakToLatLng(coords[0], coords[1]),
        style: feature => getZoneDefaultStyle(feature),
        onEachFeature: function (feature, layer) {
          const p = feature.properties || {};
          const zoneId = (p.Zon || p.id || "").toUpperCase();
          if (zoneId) {
            if (!zonePolygons[zoneId]) zonePolygons[zoneId] = [];
            zonePolygons[zoneId].push(layer);
          }
          const matchedZone = zones.find(z => z.id.toUpperCase() === zoneId);
          const titleText = matchedZone ? matchedZone.name : (zoneId ? `Zon ${zoneId}` : "Zon MDTM");
          layer.bindTooltip(`<div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:12px;font-weight:700;">${titleText}</div>`, { sticky: true });
          layer.on("mouseover", () => { if (!currentSelectedZone || currentSelectedZone.id !== zoneId) layer.setStyle({ weight: 3.5, fillOpacity: 0.85 }); });
          layer.on("mouseout", () => { if (!currentSelectedZone || currentSelectedZone.id !== zoneId) layer.setStyle(getZoneDefaultStyle(feature)); });
          layer.on("click", () => { if (zoneId) selectZone(zoneId); });
        }
      });
      boundaryLayer.addTo(targetGroup);

      // Laraskan marker ke titik DALAM polygon zon (pole of inaccessibility) supaya betul-betul di tengah kawasan
      Object.keys(zoneMarkers).forEach(zid => {
        const layers = zonePolygons[zid];
        if (!layers || layers.length === 0) return; // tiada polygon -> kekal guna `pos`
        const pt = getZoneLabelPoint(layers);
        if (pt) zoneMarkers[zid].setLatLng(pt);
      });

      if (!currentSelectedZone && boundaryLayer.getBounds().isValid()) map.fitBounds(boundaryLayer.getBounds(), { padding: [20, 20] });
    })
    .catch(err => console.warn("Sempadan GeoJSON tidak dapat dimuatkan:", err));
}

// FUNGSI FOKUS PETA & BUKA POP-UP PADA ZON TERPILIH
function focusZoneAndKawasanOnMap(zone) {
  if (!map) return;

  Object.keys(zonePolygons).forEach(zid => {
    zonePolygons[zid].forEach(polyLayer => {
      if (zid === zone.id) {
        polyLayer.setStyle({ color: "#0f172a", weight: 3.5, opacity: 1, fillColor: getFeatureColor(polyLayer.feature), fillOpacity: 0.7 });
        if (polyLayer.bringToFront) polyLayer.bringToFront();
      } else {
        polyLayer.setStyle(getZoneDefaultStyle(polyLayer.feature)); // zon lain kekal warna asal
      }
    });
  });

  // Apabila zon dipilih: buang marker lama, tunjuk marker zon ini sahaja & buka pop-up
  if (markerGroup) markerGroup.clearLayers();
  if (zoneMarkers[zone.id] && markerGroup) {
    zoneMarkers[zone.id].addTo(markerGroup);
    zoneMarkers[zone.id].openPopup();
  }

  setTimeout(() => {
    map.invalidateSize();
    const bounds = L.latLngBounds([]);
    if (zonePolygons[zone.id] && zonePolygons[zone.id].length > 0) {
      zonePolygons[zone.id].forEach(polyLayer => { if (polyLayer.getBounds && polyLayer.getBounds().isValid()) bounds.extend(polyLayer.getBounds()); });
    } else {
      if (zone.pos && zone.pos.length === 2) bounds.extend(zone.pos);
      zone.kawasan.forEach(k => { if (k.pos && k.pos.length === 2) bounds.extend(k.pos); });
    }
    if (bounds.isValid()) map.flyToBounds(bounds, { padding: [55, 55], maxZoom: 15, duration: 1.1 });
    else if (zone.pos) map.flyTo(zone.pos, 14, { animate: true, duration: 1.1 });
  }, 60);
}

// KLIK SENARAI KAWASAN -> ZUM KE LOKASI
window.zoomToKawasan = function(index) {
  if (!currentSelectedZone || !map) return;
  const target = currentSelectedZone.kawasan[index];
  if (target && target.pos) map.flyTo(target.pos, 17, { animate: true, duration: 0.9 });
};

// =========================================================================
// RENDER SENARAI ZON (PANEL KIRI)
// =========================================================================
function getMatchingZones() {
  const query = currentSearchQuery.toLowerCase().trim();
  return zones.filter(z => {
    // Jika ada carian, cari merentas semua zon (tak terhad kepada tab semasa)
    const matchesFilter = query !== '' || z.id.toUpperCase().startsWith(currentFilter);
    const matchesSearch = query === '' || z.name.toLowerCase().includes(query) || z.id.toLowerCase().includes(query) || (z.officer && z.officer.toLowerCase().includes(query)) || (z.coordinator && z.coordinator.toLowerCase().includes(query)) || z.kawasan.some(k => (typeof k === 'object' ? k.nama : k).toLowerCase().includes(query));
    return matchesFilter && matchesSearch;
  });
}

function renderZoneList() {
  if (!zoneListContainer) return;
  const filtered = getMatchingZones();

  if (filtered.length === 0) {
    zoneListContainer.innerHTML = `<div style="text-align:center;padding:20px;font-size:0.85rem;color:#94a3b8;">Tiada zon atau kawasan ditemui.</div>`;
    return;
  }
  zoneListContainer.innerHTML = filtered.map(z => `<div class="zone-card ${currentSelectedZone && currentSelectedZone.id === z.id ? 'active' : ''}" data-id="${z.id}" id="card-${z.id}"><span class="zone-dot" style="background-color:${z.c}"></span><div><div class="zone-title">${z.name} (${z.id})</div><div class="zone-sub">${z.kawasan.length} Kawasan Liputan</div></div></div>`).join('');
  filtered.forEach(z => {
    const card = document.getElementById(`card-${z.id}`);
    if (card) card.addEventListener("click", () => selectZone(z.id));
  });
}

// Jika carian hanya padan dengan satu zon, terus tunjuk zon itu (walaupun di tab lain)
let searchSelectTimer = null;
function autoSelectFromSearch() {
  clearTimeout(searchSelectTimer);
  if (currentSearchQuery.trim() === '') return;
  searchSelectTimer = setTimeout(() => {
    const matches = getMatchingZones();
    if (matches.length === 1 && (!currentSelectedZone || currentSelectedZone.id !== matches[0].id)) {
      selectZone(matches[0].id);
    }
  }, 400);
}

// =========================================================================
// PILIH ZON (MUNCULKAN PANEL & KEMAS KINI PAPARAN)
// =========================================================================
function selectZone(zoneId) {
  const zone = zones.find(z => z.id === zoneId);
  if (!zone) return;

  currentSelectedZone = zone;
  if (dashboardContainer) dashboardContainer.classList.add("show-middle");
  if (panelMiddle) panelMiddle.style.display = "flex";

  const zonePrefix = zone.id.charAt(0).toUpperCase();
  if (currentFilter !== zonePrefix) {
    currentFilter = zonePrefix;
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.getAttribute("data-filter") === currentFilter));
    renderZoneList();
  }

  document.querySelectorAll(".zone-card").forEach(c => c.classList.remove("active"));
  const selectedCard = document.getElementById(`card-${zoneId}`);
  if (selectedCard) selectedCard.classList.add("active");

  if (displayZoneBadge) displayZoneBadge.innerText = `ZON ${zone.id}`;
  if (displayZoneTitle) displayZoneTitle.innerText = `${zone.name} • Kawasan Kawalan`;

  if (emptyState) emptyState.style.display = "none";
  if (posterArea) posterArea.style.display = "flex";
  if (displayPoster) displayPoster.style.display = "block";
  if (infoDetailsBox) infoDetailsBox.style.display = "flex";
  if (btnZoomPoster) btnZoomPoster.style.display = "inline-block";

  if (displayPoster) {
    displayPoster.src = zone.image;
    displayPoster.onerror = function() { this.src = (zone.altImage && this.src.indexOf(zone.altImage) === -1) ? zone.altImage : "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"; };
  }

  if (displayOfficer) displayOfficer.innerText = zone.officer || "Tiada maklumat pegawai";
  if (displayCoordinator) displayCoordinator.innerText = zone.coordinator || "Tiada maklumat penyelaras";
  if (kawasanHeaderTitle) kawasanHeaderTitle.innerText = `Kawasan Liputan (${zone.kawasan.length} lokasi)`;
  if (kawasanContainer) kawasanContainer.innerHTML = zone.kawasan.map((k, i) => `<div class="kawasan-item" style="cursor:pointer;" onclick="zoomToKawasan(${i})"><span class="kawasan-dot" style="background-color:${zone.c}"></span><span>${typeof k === 'object' ? k.nama : k}</span></div>`).join('');
  
  focusZoneAndKawasanOnMap(zone);
}

// =========================================================================
// FUNGSI TUTUP PANEL TENGAH
// =========================================================================
function closeMiddlePanel() {
  currentSelectedZone = null;
  if (dashboardContainer) dashboardContainer.classList.remove("show-middle");
  if (panelMiddle) panelMiddle.style.display = "none";
  document.querySelectorAll(".zone-card").forEach(c => c.classList.remove("active"));

  Object.values(zonePolygons).forEach(layerList => layerList.forEach(polyLayer => polyLayer.setStyle(getZoneDefaultStyle(polyLayer.feature))));
  
  if (markerGroup) markerGroup.clearLayers();

  if (map) {
    map.closePopup();
    setTimeout(() => map.invalidateSize(), 50);
  }
}

// =========================================================================
// MODAL LIGHTBOX
// =========================================================================
function openLightbox() {
  if (!displayPoster || !displayPoster.src || displayPoster.style.display === "none") return;
  if (modalImg) modalImg.src = displayPoster.src;
  if (modalCaption) modalCaption.innerText = displayZoneTitle ? displayZoneTitle.innerText : "";
  if (imageModal) imageModal.style.display = "flex";
}

function closeLightbox() {
  if (imageModal) imageModal.style.display = "none";
}

// =========================================================================
// INITIALIZE APPLICATION
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderZoneList();
  initLeafletMap();

  const searchInput = document.getElementById("zoneSearch");
  if (searchInput) searchInput.addEventListener("input", e => { currentSearchQuery = e.target.value; renderZoneList(); autoSelectFromSearch(); });

  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(btn => btn.addEventListener("click", e => {
    tabButtons.forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    currentFilter = e.target.getAttribute("data-filter");
    renderZoneList();
  }));

  if (btnCloseMiddle) btnCloseMiddle.addEventListener("click", closeMiddlePanel);
  if (displayPoster) displayPoster.addEventListener("click", openLightbox);
  if (btnZoomPoster) btnZoomPoster.addEventListener("click", openLightbox);
  if (modalClose) modalClose.addEventListener("click", closeLightbox);
  if (imageModal) imageModal.addEventListener("click", e => { if (e.target === imageModal) closeLightbox(); });
});