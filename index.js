// Write your solution in this file!
let driver = new Object();

function updateDriverWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value){
 object[key] = value
return object
}

function deleteFromDriverByKey(object, key){
  var newObj =  Object.assign({},object)
  delete newObj[key]
  return newObj
}