class Cdb {
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    
    return {key: value}
  }

  get(something, method=1) {
    if (method == 1) return this.getValue(something)
    else if(method == 2) {
      this.getKey(something)
    }
  }

  getValue(key) {
    return JSON.parse(localStorage.getItem(key))
  }

  getKey(value) {
    var data = Object.keys(localStorage)
    var r
    var keys = []

    for(var i=0; i<data.length; i++) {
      r = this.getValue(data[i])
      
      if (JSON.stringify(r) == JSON.stringify(value)) {
        keys.push(data[i])
      }
    }

    return keys
  } 

  remove(key) {
    return localStorage.removeItem(key)
  }

  removeByValue(value) {
    var data = Object.keys(localStorage)
    var r
    var keys = []

    for(var i=0; i<data.length; i++) {
      r = this.getValue(data[i])
      
      if (JSON.stringify(r) == JSON.stringify(value)) {
        keys.push(data[i])
        this.remove(data[i])
      }
    }

    return keys
  }

  removeAll() {
    localStorage.clear()
  }
}
