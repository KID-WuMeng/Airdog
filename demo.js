import Airdog from './lib/Airdog'
import request from 'request'
import fs from 'fs'
import https from 'https'
let Server = Airdog.import('Server')

let s = new Server({
})

s.get('/', function(){
  this.raw.res.setHeader('Content-Length', 30)
  this.body = '12345678'
})

s.listen(8080)

request.get({
  url: 'http://127.0.0.1:8080/',
}, function(err, res, body){
  console.log(body.length);
  s.close()
})