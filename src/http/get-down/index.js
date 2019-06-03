exports.handler = async function http(req) {
  return {
    headers: {'content-type': 'text/html; charset=utf8'},
    body: '<h1>Hello from <code>get /down</code>!</h1>'
  }
}
