'use strict'

var app = require('koa')()
var router = require('koa-router')()

router.get('/service-d', function* (next) {
  this.body = 'mock-serviced-response'
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000)
