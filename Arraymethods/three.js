var ids=[101,102,103,104]
console.log(ids.length);

var new_Size=ids.push(105)
console.log(ids)
console.log(new_Size)

ids.unshift(100)
console.log(ids)

var removed_Value=ids.pop()
console.log(ids)
console.log(removed_Value)

ids.shift()
console.log(ids)