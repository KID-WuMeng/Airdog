import * as kit from 'AIRDOG_DIR/core/store/kit'

export default class ActiveRecord {

  static name = null
  static _col = null

  static find(query){
    let record = this._col.find(query)
    return record ?
      kit.createModel(this.name, record)
    : null
  }

  static findAll(query){
    let records = this._col.findAll(query)
    let i, record, models = []
    for(i = 0; i < records.length; i++){
      record = records[i]
      models.push(kit.createModel(this.name, record))
    }
    return records
  }

  static add(record){
    return this._col.add(record)
  }

  static update(query, record){
    return this._col.update(query, record)
  }

  static remove(query){
    return this._col.remove(query)
  }

  static delete(query){
    return this._col.delete(query)
  }

}