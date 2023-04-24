import http from 'node:http'

// - CommnJS => require
// - ESModules => import/export
//   - need to add in package.json `"type": "module"`

const server = http.createServer((req, res) => {
  return res.end('Hello World-watch')
})

server.listen(3333)