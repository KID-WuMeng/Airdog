import { MongoClient } from 'mongodb'
import Collection from './Collection'

export default class DB {

  constructor(op){
    this.op = op
    this.conn = null
  }

  async connect(){
    let {name, host='localhost', port='27017'} = this.op
    this.conn = await MongoClient.connect(`mongodb://${host}:${port}/${name}`)
  }

  use(name){
    return new Collection(this, name)
  }

}