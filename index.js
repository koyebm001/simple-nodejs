'use strict'

const http = require('http')

const server = http.createServer((req, res) => {
  res.end(`Answered by "${process.env.CC_APP_NAME}" to "${req.url}"`)
})

server.listen(process.env.PORT)
