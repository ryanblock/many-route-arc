exports.handler = async function http(req) {
  return {
    headers: {'content-type': 'text/html; charset=utf8'},
    body: '<h1>Hello from <code>put /on-your-best-threads</code>!</h1>'
  }
}
