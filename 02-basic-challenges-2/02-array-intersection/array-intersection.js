function arrayIntersection(arr1,arr2) {
  if(arr1.length > arr2.length){
    return arr1 = arr1.filter((value) => arr2.includes(value));
  } else{
    return arr2 = arr2.filter((value) => arr1.includes(value));
  }
}

module.exports = arrayIntersection;
