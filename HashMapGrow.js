function Grow(hashMap){
    Math.floor(hashMap.length*=1.5);
    for(var i = 0; i<hashMap.length;i++){
        if(hashMap[i]){
            for(var j = 0; j<hashMap[i].length; j++){
                var hashedKey = hashMap[i][j][0].hashCode();
                var hashed = mod(hashedKey,hashMap.length);
                if(hashed<= hashMap.length && hashed != i){
                  if(hashMap[hashed] === undefined){
                    hashMap[hashed] = [];
                    hashMap[hashed].push(hashMap[i][j]);
                    hashMap[i].splice(j,i);
                  }  
                  else{
                    hashMap[hashed].push(hashMap[i][j]);
                    hashMap[i].splice(j,i);
                  }
                }
            }
        }
    }
    return hashMap;
}