const CACHE_NAME = 'cache_v1'
const files = [
    '/',
    '/index.html',
    '/img/icons/android-chrome-192x192.png',
    '/manifest.json'
]

self.addEventListener('install', async e => {
    console.log(e);

    //缓存文件到cache storage
    const cache = await caches.open(CACHE_NAME)
    await cache.addAll(files)

    //跳过等待,立即安装新版sw
    await self.skipWaiting()
})

self.addEventListener('activate', async e => {
    console.log(e);

    //删除旧缓存
    const keys = await caches.keys()
    console.log(keys);
    keys.forEach(key => {
        if (key != CACHE_NAME)
            caches.delete(key)
    })

    //sw立即获取控制权
    await self.clients.claim()
})

self.addEventListener('fetch', e => {
    console.log(e);

    //响应请求
    e.respondWith(netWorkFirst(e.request))
    // e.respondWith(cacheFirst(e.request))
})

//==============响应策略=====================

//网络优先
async function netWorkFirst(req) {
    //打开缓存
    const cache = await caches.open(CACHE_NAME);
    //请求响应
    var response;

    try {
        //请求资源
        response = await fetch(req)
        //200成功-缓响应并返回
        if (response.status == 200) {
            cache.put(req, response.clone())
            return response
        }
        //失败-尝试从缓存中返回
        return cache.match(req)
    } catch (error) {
        //错误-返回缓存
        return cache.match(req)
    }
}

//缓存优先
async function cacheFirst(req) {
    //打开缓存
    const cache = caches.open(CACHE_NAME)
    //匹配缓存
    try {
        //成功-返回缓存
        return await cache.match(req)
    } catch (error) {
        //失败-fetch资源缓存并返回
        const fresh = await fetch(req)
        if (fresh.status == 200) {
            cache.put(req, fresh.clone())
        }
        return fresh
    }
}

//仅缓存
async function cacheOnly(req) {
    return await caches.match(req)
}

//仅网络
async function netWorkOnly(req) {
    return fetch(req)
}
