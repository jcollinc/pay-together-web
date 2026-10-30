// Carries the visit's UTM tags onto links into the app, so the app can record where a new
// account came from (a tagged social profile link, say). Tags already on a link are kept.
(function () {
  var params = new URLSearchParams(window.location.search);
  var tags = ['utm_source', 'utm_medium', 'utm_campaign'].filter(function (tag) {
    return params.get(tag);
  });
  if (!tags.length) return;

  document.querySelectorAll('a[href^="https://app.paytogether.io"]').forEach(function (link) {
    var url = new URL(link.href);
    tags.forEach(function (tag) {
      if (!url.searchParams.has(tag)) url.searchParams.set(tag, params.get(tag));
    });
    link.href = url.toString();
  });
})();
