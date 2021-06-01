'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a82972ddc9c770d9b266cc192add1fdb",
".git/config": "6b31b211d187c20f89a6936e811576ce",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "00674c957e13ae06cce442e9068fc317",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b25ab33e501bb22f0ab1e4c61cf4bbaa",
".git/logs/refs/heads/main": "f298289009b9f66e27726ef543bb54b7",
".git/logs/refs/remotes/origin/main": "bcf3515c74884247876a94d284ed43b9",
".git/objects/02/97a5b1889b806ebfb264aeec468aee2598dcfa": "70b7de1cd314a54e67ab556e2702ce99",
".git/objects/02/ac724d2491d847a14b036d87286b9f8a466a21": "ddb1716b722102e72fe536917d3057fa",
".git/objects/07/869a5a09d3143f3930eb84c094f87fd3c1ce86": "b8da94295b2e700caca52491aa911dff",
".git/objects/0b/ddd09d6a8c6085dd68de9c837e3b5f40300c02": "0d5f274820c2db776e4b96bf021c6408",
".git/objects/0c/2c9ecf4140420a060c9d30467273f7cf470812": "36e1ce7d788ac0cb48bb2aebe5b99653",
".git/objects/18/1679ce42f0821e962b899ac08fd228e6701d46": "5d073d36b746ec299e2914bc9baf76a3",
".git/objects/18/b64b28138809d29ff19dabf8770b5184d52e80": "9e1d82a9d89eeec11df1d9dd4708bdb6",
".git/objects/1e/0ea2c169f1ca6926866870a03e9b3019803bba": "1aa8839fe386f0576edb813b29c93e77",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/cf3f638619a12603f3e57f23bf908d20b9f556": "74647e9cd91a759518ec4e2755a4f1d7",
".git/objects/22/740dbe8dce34641b684cb67b4f85e9470bdd7c": "6525bd905ffcb36e7dcea4d0d652625d",
".git/objects/2e/05210f94451b7bce17d440cab21ca2607a1101": "3b8f92b3eda5c6171ed31b968b2391b5",
".git/objects/2e/823569d5034ff266ea9408ce9ae3a878c984dc": "c23f3e3a3021718495973c5892d627af",
".git/objects/31/0cb2bfcb8e6d30759499b5306deb303560382b": "1fd6acada0f7d68cdcd397d513f75576",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/aecaf0a524e25ea6d8624688ad8993e69ac6fa": "70b9304310ecba2998794247877cb44a",
".git/objects/37/42457900d51ae5c34ed53657ed8a72f17f19c6": "14c972e5155e5aa3bf2db2ef8589e81a",
".git/objects/3d/6861b42396c609e26f38f129383c558e332281": "5094a76191110339c6815fd8ca04f5b7",
".git/objects/44/b3917b6adf73b086011d75b671956c4789b9fc": "183b8791bdbd2ad643bed28a4a16bcba",
".git/objects/4b/74b61123e20d60b051a8e40f387a8d4e352781": "f287c7c7b4f6ce208ec95a605000cfbe",
".git/objects/4b/a6dc0d36022a63a4d2b15280a12d300ec0f88a": "c153e633f7a152cb5f8192455a2efe82",
".git/objects/4c/7ca99b0c9734bc2e5ccfb5e1d8248713332455": "70884b118f4581cc8775cdb314b5607e",
".git/objects/4f/1eaa00c62e5877f2cce641755c051605c8ad64": "96c76a366fdf086f5619bb734816b365",
".git/objects/50/7305270833888c4d7b2aa7e3289770654a26ce": "78d84d4b9ca83bdac54aa0362b8b501d",
".git/objects/50/e579966c3fafb8b647d1b1642584917a162b66": "5d1aeaba6ec93815504c45151eb664fa",
".git/objects/51/db7b06704b69c7579220024a9e4472b0efa4d4": "50dbff61cdd2418887daef62d5ba9580",
".git/objects/54/e7059cf36359cb5a3860085714a95306af0dea": "84d83371b8598214017b309f9a987865",
".git/objects/57/71bbd66f639f3ffceb6c69430cf0694f991049": "19f1764fd1cac9cd3563487013ed6412",
".git/objects/58/460b15d8fe2dc2295ec597da154c228fb2e8ea": "fd1f5afc741616e8c0f11b9b5cc50dc1",
".git/objects/58/68cf225235e9a85d8af146da7c37471afae4a5": "ceab8b57b7a3357f5d46da364fefa846",
".git/objects/58/e4de8aa662fe67a8cb85135896b3b9359e7a7b": "f79b6d87bc9294adb99d23088a456368",
".git/objects/62/2feabbe65084ab822b6db784a11fa06e31ca19": "bd36d97293ddb1668ba3148801b41a56",
".git/objects/64/bd820fc9671f978c6967edbb4806e7335f6da7": "108b0fd8c14a364a3028c7d70f8d2b33",
".git/objects/65/f05cf0a39dad7d8e0212eccf20b2da0858a603": "0fa442b4a73050fb5d263f022ee0dfee",
".git/objects/67/a936aa04098e3141f2fd8c4ded7802aac66a98": "b693fc9056e39c7c97f077c096c1b825",
".git/objects/68/193aaad8efd818bd152d212c8e91ac748d9095": "8b13c555f229af89e87830a6ecc099a2",
".git/objects/70/41d774533ce3c531d8faa282fc5a41308da9ab": "142ebd486030197a7f7f8f025cc6703f",
".git/objects/71/d0db8944c172c87fbab9462c0b4ef53b9d6e50": "083d84230fdd9c2013e206245aed67df",
".git/objects/73/44cf51560f0a4d4af6f0c82e95f032c1ba03e6": "365ead5607ff209267bbe70ca23e9046",
".git/objects/75/dccf3156f77002f47e39d90de32d41645f7e32": "41c9684a59b97a88f8b4e45d6f24e6bf",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/d819fc8cd803b94a90788b56157274c68d21a4": "538e640f702305b3d17e2a6b7302d128",
".git/objects/7a/65bc18db2ed5b5d1afeba0d5f53a5737ffca4a": "55794dfbaa79f82c36795c728485cdd7",
".git/objects/7f/bd09494a8f93e0286390ad66d81def4892bed6": "542fcc4ad7c017118b3fac4ea8fceaa0",
".git/objects/83/bac3d351238d43521fa8b059ea963667e7a76e": "91a58fbfa66073f9dec68715f4220bee",
".git/objects/86/c38ef8ca4d7a5cf91f1d04b3413b8c2617ab92": "bd27f430e323329cabd8097f421de709",
".git/objects/86/e18ed020fb908be4f0d1fb928e3b96a0469da6": "ece053da1a83285bf82445c81e4ee3ee",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/1da0f4ad0730673a327a95e4dc07b5201bcb15": "438e0624cc9a08ad18bc3dcbf9cdd0b9",
".git/objects/8d/e71aaed6b2d8e30fa8733d3216e7d7baa64445": "707b5ac1b416299e75d4f59217fd8620",
".git/objects/8f/008c36844f28454149ce1a22effe513dc726e6": "0fa45b087e693064e5a2ce35615095ae",
".git/objects/8f/67b49198d198d46fac43b072e3a28fed39cb92": "e9590b7e9aad031fc1a96ffa9a90c1d8",
".git/objects/93/f782ce9fbaf2d86b170409750387ef4f8e2b79": "4ccdd9fc239e6f43f3955f1d0e253540",
".git/objects/94/5d69bd46d07f24a5abe1e5a3c1e84a11c36c8f": "37a2cd052b690f2ec7cac3f720d86343",
".git/objects/94/648a62620243020093ad36c5239de5418664a5": "be09a7b3ea3f9a597406a93044f6c6e8",
".git/objects/96/fcab79af9741219e793b8393b67c5251d5cc4f": "4da2e4550934d7a1ee9ca3587aa1a370",
".git/objects/9c/ad12fd2f99d54247e80b876fd4c7aaaf054898": "690cdcda3ded1f0080710185d90c6e91",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/2f209a08f8cbbc4a74cca53d61e2bc8091e26f": "d2db1f8a77f9c8f3275680b21c04145e",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/4c48c0ebae55c204f585bbf055c03053b05e6d": "cc681e127979511796566378e5f56df9",
".git/objects/b0/e4f2ff76b7079134ed031ddf45d4e19b626108": "54d2ba4b5872aa5986552a91dfe2707b",
".git/objects/b3/9fe20d993aa513f3baa1d57afe6b8cd0de09c0": "a92ba3ea0e597fe2e5ec5a480a2d0638",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/79d4efa493bd3efa435ea5f74b1bc01b5834ca": "29b4620d5f12570e75a40e1bfbd88dd0",
".git/objects/bb/48e095e56784645f3ead5d33d28abe8f6eaf4c": "8c1fd75f6852417c5cee4917e66c6e43",
".git/objects/bc/3d14ec6b80663488d329ff11f97525c5c2fd97": "7f79f22db437afa3e5afd5bbff958a07",
".git/objects/c0/8e91609e1ef1ba5a4805e757dde3552cac7386": "7eeb3f8cd35aa08437aff760ff90e57c",
".git/objects/c1/d7a668461dc625aeb24d994cfd0d64214ff3e8": "26186eabfb412ff57a7a853dcbea2154",
".git/objects/ce/567f574bc641fbe2c34b7bc3dd22a167ff5050": "6d0146af161f09f63ec4033b17466402",
".git/objects/d4/d593734211631ce8a9c5f15f40f296abfbefe6": "77cf0478d891d094264627520e566a51",
".git/objects/d7/5198b98fda66f1d5999ab249e2d33832c343fe": "0ac2469a5d2500f854d3611fc32b761e",
".git/objects/e2/d34f30e90c83c7bd9d5ab22834e54258035e29": "273325c7e7b79096b47c1b9eb7cf4b29",
".git/objects/e4/521ee0e270b75495ef9a52755061325df8b57f": "de5538052f5ead30c889e4bc5911d4e5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/1ef4cd102029ea8e9c718aa88315f309f00c3e": "2cfe90148b2a9db7c361cb71d13739bc",
".git/objects/e6/cb17a7a750e01ab7bb4196fccae1b67a290361": "4b972dc290c18e6dd99ccb20a80b724c",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/e9/32e356fb587432791192d03ea1be183c03ccb7": "73190852ae95fbda65bb4a4f53117ef2",
".git/objects/e9/a097186a0da91a945902192996af4a95c0a6ef": "160e9508bddf75fdf0a3b60e0ca8f834",
".git/objects/e9/db465bb2e9eff9ff98b48c675a50cd23fc05b0": "2a794bd3b16a60623cae1a40f127926b",
".git/objects/ea/a2e1302136ac5b939890a8c5fcf688349b6d5c": "af76143d09dfc66b45b67a392d21825f",
".git/objects/f4/44046272e96e74169076db7bc4ed1d9736bca2": "11b36fa12c06d22e6b01f96efb02ea1d",
".git/objects/f9/e382153b22a3273e1ec295c34064c9b33264c4": "a61e3dbbd72da7a550a1db43370d649f",
".git/objects/fb/9de714180160c64904ff1e8777219cc57de8ee": "41774c32f65ef0e4b86a4d94255cc9b8",
".git/objects/fe/1fc0c17b55f8eeb0462f0022803d03897159d2": "0af91c77b78c70e64f5b0fa721a0f7cf",
".git/refs/heads/main": "6a26c4b7994082b4801f966c9229ee5c",
".git/refs/remotes/origin/main": "6a26c4b7994082b4801f966c9229ee5c",
"assets/AssetManifest.json": "eb603cd0fbc2e2bcd1ee173abd456f1f",
"assets/assets/fonts/Nicla-DEMO.ttf": "612da5dae4a4068b856daa27a7004fdd",
"assets/assets/fonts/OpenSans-SemiBold.ttf": "ba5cde21eeea0d57ab7efefc99596cce",
"assets/assets/fonts/Padauk-Regular.ttf": "cf35fe732ea1be5d7a2631ed1754708e",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/assets/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/images/a.png": "5ec1b338cfa70c95d37e3a82bb5ff00e",
"assets/assets/images/avatar.png": "0befc7549f38cc34550b5caf9be8fbb0",
"assets/assets/images/b.png": "70c2161f49a8dba0883fa415b08e028b",
"assets/assets/images/c.png": "b419b26123ab05c131c8eeb87b61aa14",
"assets/assets/images/cadd.png": "7ae3dd244c6a9f39de4e1ac7671a8ba5",
"assets/assets/images/card.png": "68b7cacfc2d67551c6e80018d6664e03",
"assets/assets/images/card1.png": "aabf4ce2b517deec5ce86ca8522ef917",
"assets/assets/images/d.png": "24d58150016ffadfd8bf0a988151eacf",
"assets/assets/images/giphy.gif": "6bb65b184f4b26a7897cd989d42d3811",
"assets/assets/images/giphy2.gif": "f748955f997fe38438cf20fb59ed9be4",
"assets/assets/images/giphy3.gif": "66060ef91c97f90e152bb2a04a597fa2",
"assets/assets/images/logo.png": "d904caea801c2f2e67f3d1e79305313a",
"assets/assets/images/main.png": "fdff2e0c20daa2c478adc357562ab34d",
"assets/assets/images/media1.png": "3288ce6017270ada54ab668de4ad0b6a",
"assets/assets/images/media2.png": "11f8e95ceff2a45cf29bf7c9644c545e",
"assets/assets/images/mobile.jpg": "e808e853130dfae5a0a6e2f5d1ebf8b9",
"assets/assets/images/offer3.png": "d81d5fb6d304d448ae89c9385a55e8b8",
"assets/assets/images/offers1.png": "7c8ee8a09cd41ef3056eab0eea4f0863",
"assets/assets/images/others.png": "887e4d0447ee3c10b013980c2df98a41",
"assets/assets/images/reputation.png": "2915669c88f9f744503f9ac51836b00b",
"assets/assets/images/seo.jpg": "f9f47e330b24e9a950a11049739289ac",
"assets/assets/images/socialmedia.png": "31c8916576087a5f2837b4b42e0287a2",
"assets/assets/images/testimonial1.png": "aa67d1537ef05d5873b1760982ed3a70",
"assets/assets/images/website.jpg": "ae171a9adf5f2a17809b061a074f46e6",
"assets/assets/images/wide.jfif": "63acb7e1234fae4bdc31e0f7c5eda040",
"assets/assets/videos/v1.mp4": "53c3c1e8d6907b741cb5a942d5d73a28",
"assets/assets/videos/v2.mp4": "b9e7858695c536dc7d219646183a7ef2",
"assets/FontManifest.json": "6a156a1da90b5acff20b1e59a913ec9a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "277923d0ed6067d58513c781051cc28c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "fae2b769c0761c672b888fc1ce87d1b3",
"/": "fae2b769c0761c672b888fc1ce87d1b3",
"main.dart.js": "f8c82dbbdfd029e7758ab819213b168c",
"manifest.json": "c28b9a39b99cb89a9e8a52abaa82bd0e",
"version.json": "48f852f251300e62790186efa14081b8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
