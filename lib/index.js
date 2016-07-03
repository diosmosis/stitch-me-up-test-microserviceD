'use strict'

const app = require('koa')()
const router = require('koa-router')()
const request = require('request-promise')

router.get('/service-d', function* (next) {
  const serviceCResponse = yield request.get(process.env.MICROSERVICEC_ENDPOINT + '/service-c2')
  this.body = '(' + ['service-d-response-2nd-post-1.0', serviceCResponse].join(',') + ')'
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000)

console.log('microserviceD listening on 3000')
