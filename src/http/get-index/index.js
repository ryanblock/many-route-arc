exports.handler = async function http(req) {
  return {
    headers: {'content-type': 'text/html; charset=utf8'},
    body: '<h1>Hello from <code>get /</code>!</h1><br><img src="/_static/corgi-butt.gif">'
  }
}
