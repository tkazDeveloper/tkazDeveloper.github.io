'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f59b4c3584fd089c5d3f210ff8121528",
"index.html": "cc41aee9b4679119ad8dd70694f0acd8",
"/": "cc41aee9b4679119ad8dd70694f0acd8",
"main.dart.js": "042bf0501b7b2ae2f2c864bae8f5462e",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "51f8a4c86e0adf3767533c268328fdd3",
"icons/Icon-maskable-192.png": "51f8a4c86e0adf3767533c268328fdd3",
"icons/Icon-maskable-512.png": "47cd359f18f9f530ef8b394696f9b3fc",
"icons/Icon-512.png": "47cd359f18f9f530ef8b394696f9b3fc",
"manifest.json": "550d77f54d0f2c7a29c627efec3441da",
"assets/AssetManifest.json": "92ae8f3b2561d594277a72294decfec6",
"assets/NOTICES": "0dc5f7cb3e3d7cf4dc0e7a77fe64a3c4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/lib/assets/48.jpg": "be592c58a4a82ade254dad50af240b09",
"assets/lib/assets/48.png": "b441468a1c54683c6d43877ce0f446b9",
"assets/lib/assets/49.png": "31631ab103b43a450521e07b4a5537a1",
"assets/lib/assets/49.jpg": "45b77684bc81a90ed35a15302e190716",
"assets/lib/assets/14.jpg": "985f01fbad1fb95647e7de2abd0b97ce",
"assets/lib/assets/28.jpg": "a74696a8d8a9607f3210b2af0ad760f6",
"assets/lib/assets/14.png": "3ad062464cdc31b02fcbcc7facb4c0dc",
"assets/lib/assets/28.png": "f45d523716353c68fff226479c627df8",
"assets/lib/assets/29.png": "88756b025b52f154c0ac09cb776884c6",
"assets/lib/assets/01.png": "e615f9c737c372dcb1e641960c4bad06",
"assets/lib/assets/15.png": "2a9361f29ca2265a51591bb586d3b393",
"assets/lib/assets/29.jpg": "1c8ca0ce198ca188cb1773df045fc6d9",
"assets/lib/assets/15.jpg": "e5989d127bf8cae5316061f039953246",
"assets/lib/assets/01.jpg": "f47d5bf45e8e4c0facd1957c1e69d5c4",
"assets/lib/assets/17.jpg": "d225c8cbf53ca58a05d1beb1c61c07ea",
"assets/lib/assets/03.jpg": "e4579e6cd3feeecfbd922e1efd8de135",
"assets/lib/assets/03.png": "6ce142980a57c525b09ba01396c76f18",
"assets/lib/assets/17.png": "7688dbd4adaa552b6567d9be974a69b1",
"assets/lib/assets/16.png": "9f2fb97641d43b9093b1e5fd333de095",
"assets/lib/assets/02.png": "ab45129ab16704726c34830572a104ed",
"assets/lib/assets/02.jpg": "239b30dea81f69befb89d7f9efc032eb",
"assets/lib/assets/16.jpg": "a7be59e6ceb999e5047cdc3d83034a47",
"assets/lib/assets/12.jpg": "380671fd444f4229f00507e9eaa9ee01",
"assets/lib/assets/06.jpg": "462301fbecc245151758290213ed5490",
"assets/lib/assets/06.png": "1f278455b4b6502f428982d141c6776d",
"assets/lib/assets/12.png": "17e9f46324012a50d413f9fe927bccef",
"assets/lib/assets/13.png": "4aadbf546ca819480859b6b66a09fe1b",
"assets/lib/assets/07.png": "696bb62f9877677742ef4cf3aea0b44a",
"assets/lib/assets/07.jpg": "37626137870ee2e374f9d2b38562a0a2",
"assets/lib/assets/13.jpg": "5c21e52cf893ad17e8ce02f0a5d5cfc5",
"assets/lib/assets/39.jpg": "a285f9725345b50b750d9f2a6d76b04b",
"assets/lib/assets/05.jpg": "59405e3afd939986616def1e82cfc90e",
"assets/lib/assets/11.jpg": "dbf5e1f542e7f389e014c78bb8cd1591",
"assets/lib/assets/39.png": "6c28a6bc23cda56ad33c17ed7b25a5d2",
"assets/lib/assets/11.png": "5e664ecd7a4b4a46677736c35be3c810",
"assets/lib/assets/05.png": "432e5fefd686026eaa60508c5cd7e9a3",
"assets/lib/assets/04.png": "0f0c12f3a66adb23499e916eed6224d6",
"assets/lib/assets/10.png": "1955708bedec52237bd4b2046b2e0d43",
"assets/lib/assets/38.png": "a08780b3b8ff573fb2189950cb068893",
"assets/lib/assets/10.jpg": "09c2234ae1940a8a0bcd4eba6da86969",
"assets/lib/assets/04.jpg": "81ae4600f3e53377448f4bee918b70df",
"assets/lib/assets/38.jpg": "5e8991e66d0c8db4e36033beaacf2288",
"assets/lib/assets/21.jpg": "9b05a0ab335b2ef2e8f4d0b4d8ef9e3c",
"assets/lib/assets/35.jpg": "ae74baeaec07601dca6809d4a36316a9",
"assets/lib/assets/09.jpg": "545f1e5c6d2a6e9feb2750114dd54280",
"assets/lib/assets/35.png": "694922c66012b596f08c3a5ad59361b6",
"assets/lib/assets/21.png": "232bc428cc455662487501a03b2df677",
"assets/lib/assets/09.png": "b00efac41f5e8adb2164876a6130587f",
"assets/lib/assets/08.png": "abe1ece02288511d6566dbbf48d08440",
"assets/lib/assets/20.png": "f30c4eba601e41d5aca3bf4c26d9b62d",
"assets/lib/assets/34.png": "8634ad2cbab488bc221ecc183104e35e",
"assets/lib/assets/08.jpg": "31bf345dd5d22aecc9c25b175d02fdfe",
"assets/lib/assets/34.jpg": "61314e35e373c83d544fea33d92b7dca",
"assets/lib/assets/20.jpg": "8762d9fc2c48537ce213c2fe027a5213",
"assets/lib/assets/36.jpg": "66e320bd1bdcc1174cfff565dbb141f9",
"assets/lib/assets/22.jpg": "2daf7ff662590464321d446cec2c23b1",
"assets/lib/assets/22.png": "552105b4c9d5ed225fca6759678e16e4",
"assets/lib/assets/36.png": "116aa3c1ca575a4f3fdbdd458377ff71",
"assets/lib/assets/37.png": "5b8bb0175f733343fe18b5a119b3ea08",
"assets/lib/assets/23.png": "d6c9bcc9c97cc81f0614b1ff3b1f8dbb",
"assets/lib/assets/23.jpg": "98deec1e644ccb6f0b5bc41334320ebc",
"assets/lib/assets/37.jpg": "7b06be671c4bc838f159930ecb744a22",
"assets/lib/assets/33.jpg": "a5de6b6daea660a10cb1cda3ac172ead",
"assets/lib/assets/27.jpg": "d8c6e891ac035f6ff3be28c6965d3f19",
"assets/lib/assets/27.png": "587d4692f8a098ccb045e1ca2d519111",
"assets/lib/assets/33.png": "f92146f9076a4d553abb2902c6c1fac1",
"assets/lib/assets/32.png": "6003e2cd4d5e31ad700f177e63ff9b3f",
"assets/lib/assets/26.png": "0d11c5ef3ef8200ab19568290b7e501d",
"assets/lib/assets/26.jpg": "20198d4bccc6f9078a461b4e095ac7b9",
"assets/lib/assets/32.jpg": "2d7995bf8d40e8f33fb93794b644f68c",
"assets/lib/assets/18.jpg": "272f107cb0f66a7d91155f5b89e918cc",
"assets/lib/assets/24.jpg": "463560e45e3ee5c701f9c458a867b806",
"assets/lib/assets/30.jpg": "585b2ace88a4e74e88645fcdd88863b0",
"assets/lib/assets/18.png": "b651de355b2efbe59fd6ab6a7fc24cc5",
"assets/lib/assets/30.png": "01c69d7cd36a8c8215cc0f5e29b69441",
"assets/lib/assets/24.png": "cf6ac2890cbbdd5e61457f0b968202bf",
"assets/lib/assets/25.png": "fdb5befe83b25cb96c7df095c953c424",
"assets/lib/assets/31.png": "8e12da035e2753640e8b7ce56a02f002",
"assets/lib/assets/19.png": "44cec190885c43859bde9764f70d17f1",
"assets/lib/assets/31.jpg": "230787ebf166d6234185785989a1889b",
"assets/lib/assets/25.jpg": "7c25217905d699e85999216b0bbc6f3c",
"assets/lib/assets/19.jpg": "c0cb4139cc055d243a2b2928efa17527",
"assets/lib/assets/42.jpg": "a4dee576a5b34ff5e989a8383440fa87",
"assets/lib/assets/42.png": "fe2c4a5b9ad7346643faf3ec48f84032",
"assets/lib/assets/43.png": "f0956341bcd6ce8829ff9602f5c1f9cb",
"assets/lib/assets/43.jpg": "8113d711bc8955542dfcedae681d5e76",
"assets/lib/assets/41.jpg": "c277bd0389c3aa0c9a0d9034e5f33729",
"assets/lib/assets/41.png": "f31cea91a49933982bdc2cb4a67a402e",
"assets/lib/assets/40.png": "4f28088de41785b2e8921a7d691484af",
"assets/lib/assets/40.jpg": "7277966325067a7a16b360380839b555",
"assets/lib/assets/44.jpg": "428c75d0795dff35a4e38cd4ae1ce3ad",
"assets/lib/assets/44.png": "1399f2418795e493168d23de2079cd3d",
"assets/lib/assets/45.png": "1ce9f928b4104e55f662f2dfb1b5fee9",
"assets/lib/assets/45.jpg": "c044d1e0eb3c7d572633650a91858481",
"assets/lib/assets/47.jpg": "37c8cf00a67db2c36c160ed253fe269e",
"assets/lib/assets/47.png": "cfcdc91fe7c5b2f263ac97d263524bf0",
"assets/lib/assets/46.png": "e38495ba888cc923ce11e8efb0f51bc2",
"assets/lib/assets/46.jpg": "3147c97448ceb2d91133daf3835b31b0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
