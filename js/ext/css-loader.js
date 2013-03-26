loader = function(type, url, callback) {
    var el, doc = document;

    switch(type) {
        case 'js':
            el = doc.createElement('script');
            el.src = url;
            break;
        case 'css':
            el = doc.createElement('link');
            el.href= url;
            el.rel='stylesheet';
            break;
        default:
            return;
    }

    if (callback)
        el.addEventListener('load', function (e) { callback(e); }, false);

    doc.getElementsByTagName('head')[0].appendChild(el);
}