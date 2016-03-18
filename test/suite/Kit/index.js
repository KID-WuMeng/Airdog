"use strict"
let Kit = Airdog.import('Kit')



test('Merge Normal-Object', function(){
  let src = { name: 'kid', age: 18 }
  let dest = {}
  let res = Kit.merge(dest, src)
  
  dest.name.should.equal('kid')
  dest.age.should.equal(18)
  
  res.name.should.equal('kid')
  res.age.should.equal(18)
})



test('Merge Class\'s this', function(){
  function Class(src){
    Kit.merge(this, src)
  }
  
  let obj = new Class({
    name: 'kid',
    age: 18
  })
  
  obj.name.should.equal('kid')
  obj.age.should.equal(18)
})



test('Merge ( no src )', function(){
  let dest = {}
  let res = Kit.merge(dest)
  dest.should.empty
  res.should.empty
})



test('Is Empty-Object', function(){
  let o1 = {}
  let o2 = { name: 'kid' }
  Kit.isEmptyObject(o1).should.true
  Kit.isEmptyObject(o2).should.false
})