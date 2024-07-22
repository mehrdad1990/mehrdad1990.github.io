'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8f6d4c15ee6c760db61cf06f0ff32632",
".git/config": "effe4640c49af90e297edfe89d1bece3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ecdec0f3f9557526dc49add3d611c304",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6534ef06ac7fe727c7fc0ab0cc927f7a",
".git/logs/refs/heads/main": "3f9dc839f44d5ddeff1ca01b0ee32a34",
".git/logs/refs/heads/master": "dc9a33292dbfcf298b98bb624c595c47",
".git/logs/refs/remotes/origin/main": "6ac8972a97140ad4d03d91bda9c2c947",
".git/logs/refs/remotes/origin/master": "66da65cf6d154430b52873fd8249c2c0",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/04/512c759d5a0f3b557bb2b500efb572c3e23e11": "dbdcefc2b2538dca45f5346b540b4edf",
".git/objects/09/f8ab8f151ae1f2daa5f951278bfe54e5917c35": "630a9ec1e4cfba0bc9edef83320b9e70",
".git/objects/0a/a24ecc19dc9cf495c9ca0e928aea532e36ea16": "eb0c66de68f7f83e1dca8d3b60e19f46",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/14/e36d69a5ce8bfbfc03da7b01ca32ec5577958a": "2eb55732dab58e6ad05104d7b621f34b",
".git/objects/18/dd55d8693ae7c6db53f0ac2b06b617e18cd146": "db0aa0c684b17ab01bde15e4593a90a2",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/7e57ba07555318dfa8dcefd569b75c25e4a6b0": "88631f76fa8a05e7ff7ec1b2a4519dbc",
".git/objects/27/460deb5dcbe5f25156c12d4d34e4bd31a443f2": "b5db6ee5855fefdbd588bca7da16a2ef",
".git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
".git/objects/30/d8b08b1838d4f6b0fc87e46ed93dd7be6b7ed3": "5ef8863dc63311233efb4efbf3ce6e85",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/35/c5b9a3082462ef063a8f2d0ad711f8c1b30292": "d4eee6981ba3940a3e1aeb5dec7df231",
".git/objects/3d/d53e82eb260ecf3b52d76eba462ad13eeedd90": "16ae4ad49e69fcadec3a14830a79fd19",
".git/objects/3e/fc506b6bfe4353aa4482930393d5ff45d84e6d": "6ee560b8aebcb928049c93bcd27a8be1",
".git/objects/40/104242195dba94b9d87334a341fba7c7016827": "81216aec15a73f258249f011594e0ffe",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/45/a5ce262bad53eb97ae046c20ec66c588ef2e8c": "54e2ea20453109947bc059d56b2b24d6",
".git/objects/49/594df38c4d2a5bc947846ce02d309e43e33126": "0dbcfff1e00cec76a977c8de3652d2ae",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4d/1c3f18f59827eb01bc33ebf781892e47191c16": "1bcb21d85adb8f8eb0c183e6e2a02bc4",
".git/objects/50/fd13515558d49b3843511cc5ecaece3e6bce73": "18defacfad6a071ce73f1bdbe684b289",
".git/objects/51/2410f47d97492c08efb7b9568e295a6b962376": "9489c5a095b31890f0063349dde66387",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5c/6e84e6e34ba046bdd4ae2d43ca1c18af2ed016": "14f2681a40adf4ff871a795179a2258a",
".git/objects/5c/e6f4d0c47fe0d1497d12c1eadd9e5e1218f085": "0ad761a21662cf2826e404fece58b578",
".git/objects/5e/5672b88cf8d85b4cb26e2a580bae7f9df0efd6": "5d42f355cb5faa1a4295d468906b306a",
".git/objects/5e/7350498e30e475f5a70dd387ea08f2d31720f9": "28b32230ea2703fa8f95ab10d4969f0c",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/8c1795dee5c328e85b8eec47459ace6c6b3afc": "a062775540eed7e810765a8d0e06a493",
".git/objects/65/672aaf91e92fd3c2345a2174827aaf2629939e": "523c51af4f3882dc3e7e94c1308805e8",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/82/b0cddcdbf273e870ee8283425521ff8ba0c94f": "497519e9ddc5a395f70995222e1df8c2",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/90/5d74d889f7e48aecb194d2311848e97bb322c3": "f80e31016cd4867e82bdbfd21a6bb60a",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/7a6a83ff0f400250590dd6ceaabce7f05c2390": "e9fba8be76385de3a489acd29f1d30d1",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ab/d3a97b58aececea0449796ddc0e2e9d8ff47d7": "4dae5004b5d041d87125137beb1fef93",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/b1/8a10391da5a3fcf38d984a5ca617da07b4fb36": "5a887db9316513ea5bde75df682d4ecc",
".git/objects/b3/7b0fec9c983b56a400f1d379d30658ae1e1f90": "be9b462038ba422b83501968bd051ddb",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/75ab7b0b597ea60553f3978f39e21e4f0e67da": "7a2222910b1ed6b330d750490c39d31b",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/c0/7a5dab961abd9f876d31320c600a96f718c4ed": "a6818886406c542364831c8cd9bbdd1b",
".git/objects/c4/b64e22fc79de6ef7b48afd5d2a6fbafdccdc49": "7672aabc468108016154143baadfd739",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cb/453ad4b306b3ff6a116d00d1ebd144b44f99bb": "6056cd309deec25bb6f90b0d41a8b83b",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d3/2754b7f3513799a4d70d516f0ed5d539f10942": "543a7b53dc38859e4cc1fb9694827335",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/c0519ef0bd5668d5c5a5af1574fe9b2ae49b51": "fc235a5be02d719d65a92c74c5faa7fc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/ed/b540138501f7739b13315194fd00572711193d": "513da74de213a4c845fe010fda93c2d0",
".git/objects/f0/5d7108a7d690aa961625d55b93691b3e8b687a": "20db4938d53d4fab6237062772acaf62",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/cc8ce19dbdab56345aca8673a0ed51982cc322": "85c7dd0ac3d176c8c646c30c36d8830f",
".git/refs/heads/main": "3795c8f6728babcb66e1fdb7a6d6a084",
".git/refs/heads/master": "3795c8f6728babcb66e1fdb7a6d6a084",
".git/refs/remotes/origin/main": "3795c8f6728babcb66e1fdb7a6d6a084",
".git/refs/remotes/origin/master": "3795c8f6728babcb66e1fdb7a6d6a084",
"assets/AssetManifest.bin": "07a17e615e24acce8272be31df2a6394",
"assets/AssetManifest.bin.json": "f20c51ff9a43def4eb7a80df889dc87e",
"assets/AssetManifest.json": "e4cbd640b245af0972334c9b24309a4b",
"assets/assets/icons/android.svg": "591117075fc95dd71b6a3563a08766fd",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/ios.svg": "00587615733dd4954be85d8bf79f1d6f",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/images/berenjestan.jpg": "cb895ed78d509dfbf6e2351681874d40",
"assets/assets/images/colang.jpg": "c790be94992dd12640bafe063140cd6e",
"assets/assets/images/course_template.png": "e8c49570447beac6f5574edbcd1467fa",
"assets/assets/images/cover.jpg": "a577eee3c6c6b720a606f123c38a2450",
"assets/assets/images/dash.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/gamandishe.jpg": "d153f3a9abf5767c846107deb6626684",
"assets/assets/images/inshape.jpg": "e2eec09a2fcde0838060a2208979e02f",
"assets/assets/images/loading.jpg": "b4baa887f1b0ef2fe52fb908f716e719",
"assets/assets/images/logo.png": "031f4f3dee01cb5bd5dd9d88d5bce5b0",
"assets/assets/images/me.jpg": "306278b2e54b1d3929d154a6454d4194",
"assets/assets/images/monster.jpg": "d0db459ad78e0a827cf5c6cf307ce80f",
"assets/assets/images/musilizer.png": "205c09c4921f75d5eea9710be09b0a10",
"assets/assets/images/najar.jpg": "acab890e8c61844477cb615963520ea1",
"assets/assets/images/shopinow.png": "15d35d66f104133e3284d5e8f80d872e",
"assets/assets/images/triange_icon.png": "086ab5ca50d3e558e3307ff009975083",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e8d2f3f03b55fdff7a207bf867a7261",
"assets/NOTICES": "3d8c6e2069d23a216f100611379fe95d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "088d57bc5172ba21afd70fcd83429955",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0a3124d3615cca653146f62549c98742",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9d4cfa1d1aa29faeb5a5c2455991911d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "a11e9bbe1668e1eaf06b5be282a03e5a",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "0d679afd3a1521e1ac3180be4608bfcc",
"icons/Icon-192.png": "ac0e9a419888a40885d73c2d37da2e4b",
"icons/Icon-512.jpg": "9a21a5ebd732844a0c827db109ef9f8e",
"icons/Icon-maskable-192.png": "ac0e9a419888a40885d73c2d37da2e4b",
"icons/Icon-maskable-512.jpg": "9a21a5ebd732844a0c827db109ef9f8e",
"index.html": "f087813e9524acd2967ef55975b9c372",
"/": "f087813e9524acd2967ef55975b9c372",
"main.dart.js": "e559a6a2bfff461ccacc018b1d494aa3",
"manifest.json": "7504820972ead07b3d765da0d2659658",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
