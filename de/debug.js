let s = new Airdog({})

s.get('/', function(){
  this.body = '12345678'
})

s.listen(8080)

client.get({
  url: 'http://127.0.0.1:8080/',
}, function(err, res, body){
  console.log(body);
  s.close()
})