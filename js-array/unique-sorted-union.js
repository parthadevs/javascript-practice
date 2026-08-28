function uniteUnique(){
  let store = new Set()
  for (let arg of arguments){
    for(let item of arg){
      store.add(item)
    }
  }

  return Array.from(store)
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))