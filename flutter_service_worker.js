'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c9335200fd08adf55af9c11f98439f05",
".git/config": "409594d51b1d893ebc1b85f589ff7de5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "bf68ef424cdc69cffaeb42b99fb4ebc0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b3d98faf8a7ab4144b3972737cb27f9f",
".git/logs/refs/heads/main": "428a531942ffd3674f6646fa661e50b2",
".git/logs/refs/remotes/origin/main": "1d3b624e541ee633474ceccb1fa3885b",
".git/objects/01/600914fa6778a46fa459ae5716ba65f0be4bb2": "542e27cce4b04dd8d0910cc6e953a636",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/1e18a0e593bebad7118a71a7fb74a275a2ee5e": "de3b97e022b2961b010b9b9da271b345",
".git/objects/07/8944a126d893a60c6cf084fc85d287f8ad1d0f": "53c2f02389955d4505d342850bd06ec9",
".git/objects/0c/116d9ec38fa0944f3f9b11cb4fa3597df22076": "a7991ae12a956e7fccd91b7e0f321759",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/f3597156042ae583010263e1b95e4f266da017": "0e450a3bd98d6303ee3975c13ca2f9da",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/7a49694c2b81e1b5fa24112eef3cb6ad1f804f": "d24ad6a4f29d039f9e67726442c46157",
".git/objects/2f/9a96b889c6a066c5b0a7ddd39453601ebb1907": "9ba62c855d6d1e7c05d6b4cebd41582c",
".git/objects/35/dffb0b3d1c0ba30c361f8190e1011e7db730cd": "25f0d3a8221d3ce03113599ee585cb21",
".git/objects/3a/44831ee543aff20c699ce15227c303d1567260": "e619bedb913f803d6238c5b708b072dc",
".git/objects/3e/43519bb35d6e546000bf23af95592744c0266a": "be1f33f5ebc8025c0107df529ca9cd6c",
".git/objects/43/d063535c2f216d518233120feda6a166efe612": "cd0256eec21c578b8e9362655df2be99",
".git/objects/43/d224e418d663ee26a62896d77c575bc278cbd2": "fae4cad45ab5c14ccb9b9ea3641749a5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/8161c8bbd8632395caa06cc41d1616e11b0cee": "da10ed0229f4ce9ea2dff8ab69a0c563",
".git/objects/49/90adbaa22207a31db8b181655c556ae602ee0f": "3abaab3643d9a91c3ff16ad57cefd765",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/23dfe999c8e2f54e86470dbe5437ac5ac70a3f": "b614c3abc1a0c8cd6014d04bde008903",
".git/objects/4c/b28d0eb5493d0243156d83eeb61822f32556cf": "1e2e64a3ea221b538e437bfc95f52f17",
".git/objects/4d/a124699e8fabf22f03e1569a4ff00427f44853": "84c9584bc3163abc0d916ba5b5e44ede",
".git/objects/4d/aee7eb55297c533c75584cd38d1c80099197ec": "2bc9a314f58e27f51deee40f4d68e9ae",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5b/6dea4a2cb374bce298a273032ab8bd051df4f7": "8d2714e8b9c837bc7e8e433b41159e3a",
".git/objects/60/7e29c7fbc10286f5322ce66c25e945d2e247d6": "0eb7e053078d3ef0621406c2b30bd7f9",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/68/6d689da533491834f1914e8a23ec2d994ccbb5": "080f16454b9e9909c76f628f4b1ec489",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9cefa3700c3d59c84592c02edfbbfff88f82fc": "1071ae474cebaecf58e60977140f6145",
".git/objects/6d/525a3e68882c8075171cc8c33025885659a8c7": "d47b218d4bfd5c4532291f269eaf305d",
".git/objects/6e/c03b5c2c1536af3cec51ac6a603d53421f0c9a": "8589fdacc1daf31cc2e624c2ee2e004a",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/77/a6905d5cfdb2aeb543970d017a14071dd3ea1c": "46fa343ee08393bcc8864581a63be92e",
".git/objects/79/d6f58baa1faff535ea626b5d709a92b227bd24": "03ef150dc6b96ad53d3c19598ec3cd80",
".git/objects/80/5e0dfd465ea95a6c08a58e383908c0a483a234": "df21c4aed4f3365b6228ba0b22493df4",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/e8440e71c188b1028eb398ffef9c68a2e24c24": "0b7a8815a9159889bab6bc9a2b107ecd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/a9402b5e28f3d101963ec93997bac71c5d2747": "416f5f72a708e393e56dc605cdf9ad47",
".git/objects/8f/9566673c2b6affe67c2301205b4b29fa8689a2": "022c583d82b181e882d07aa28054dc2b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/a0/6fa69454d0c7351ab7e94152a39ca9e7654739": "e7e0e5c45e2fdfb6c12fedcb24d30a9d",
".git/objects/a2/44293a46c00677f8ff62a014d6caad5064bfe1": "156838f35ac9385ad9814b2a31fd1e73",
".git/objects/a9/f506a22c84011dee6340a0fedabc4ef607acbc": "b33e858a00920d85952fe5c666534320",
".git/objects/ad/3c4d33d00a33d27070e7befe8012e2005d4350": "84b6a7d899b03633ba3d8dbbc901efde",
".git/objects/ad/620bb6b7804acfd03d03bb0b55e10b5bc0ea3d": "2d16336e5b17462365d04c3bdc70f9f4",
".git/objects/ad/91c1582523ddadf860543eb09edc65fc5f1e19": "b2a4af52d309cc3d65479e281520ace8",
".git/objects/ae/1315ba8097700e920cb873f1020abe7d0d4f19": "d054e1daf2236683cc4a055ec613c8f1",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/c4e30b42bedc0732e0272c35b2ceb2d7e31a25": "6ac3563d440a394dd526e2eed3d71b39",
".git/objects/c0/7396fe895547911cdbd5d60503483a347a17ea": "30b72dda66321fb3e818281611e1ae2f",
".git/objects/c7/f98c22d54b1866690d174d7e82d5dbc490e83c": "43a29c214c21078da3b4dbdb67ba5f2b",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cf/69f437a9cd33fc572a0a9e34db988a271343e8": "c8a119c283ffba5333e09ebffbe1d20e",
".git/objects/cf/9c54e8b1d8bb2b51a3e245b25ec7965a23af52": "fe16971e741fc06af6f5089fcd20f435",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/3b509aa45fbaf322f323a77e387d76c58c486a": "52b3ea454472557de446a02891cac24b",
".git/objects/d2/5e13f8e95648d05b9c4537bd0555d253818428": "74515b204752f6fddcd52fae9039b7f2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/31c634f67a14a7d342a89ef895ca5506854a6f": "fe9db972437528da56a9f5911d29026e",
".git/objects/d9/f4f204a1d8ad55faeb109377d7e49c1d0b5e8e": "f12c7951a22106b3335302fa3c1a1f33",
".git/objects/dd/e1505c22a1af06ed41e4aee8b4d775777577c1": "d928fb833e851815f606e8f819f22b54",
".git/objects/e0/d02bec08f65683cb824d905bc6e77abe4cbc4e": "0e3386e27c0a82a239d0a0c323ab4602",
".git/objects/e1/5bf0d565f906c137f4384e9e65be565aa62d1d": "eb93635788652d0fdd616c6e2013f4f7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/75b8225c4d9e43aa0a95f4e727ec19329a15e7": "e2971bba936723eaf0d245d564d0522e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/8a3400eb5ab7868c213037e0a4d96cf3fb9a30": "3f82e3a15110d15cfa43272bdf902e89",
".git/refs/heads/main": "9a1bc05601be9a7f82d9a2622c204007",
".git/refs/remotes/origin/main": "9a1bc05601be9a7f82d9a2622c204007",
"assets/AssetManifest.bin": "0cb7440d132a48d2b30e86debe570c77",
"assets/AssetManifest.bin.json": "22ba0295df552507a4de0c3df2605579",
"assets/AssetManifest.json": "9415ef2e91119054667d17a0ef45aa93",
"assets/assets/sona.png": "4eef8743dcdadc3af0a1412feb212a98",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "75ff1b9670527e38efccf7307f7e5b83",
"assets/NOTICES": "c621e3a23a151ed3eef820bba927b096",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
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
"conf/app.conf": "27b9f8f06e2c2ba98a11a9a2b7d808b2",
"conf/nginx.conf": "6fd1f0c6d710b273aab3c81e895158ff",
"Dockerfile": "814e0c8e66fb59c1d44cb098b2ab06d2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "c99dcaebf74874eebde9e0bbf669ce8a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "eb02d32d49ab6c1a53a47cdde2b313f5",
"/": "eb02d32d49ab6c1a53a47cdde2b313f5",
"main.dart.js": "b6c2c5d63f34f8edfe0850cc6de4754f",
"manifest.json": "0fe5c12bf47b1e6a08e31ff4a0939495",
"version.json": "a503165934b45ffa98e4ac9a99cdf799"};
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
