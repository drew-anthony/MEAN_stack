function HashMapLookUp(hashMap, key){
    hashedKey = key.hashCode();
    hashed = hashedKey.length%hashMap.length;
    console.log(hashed)
    if(hashMap[hashed] === undefined){
      return null;
    }
    else{
      for(i=0; i<hashMap[hashed].length;i++){
        if(hashMap[hashed][i][0] == key){
          return hashMap[hashed][i][1];
        }
      }
    }
  return null;
}