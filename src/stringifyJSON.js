// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var returnStr = '';
  
  //null case with break
  if(obj === null){
    return 'null';
  }
  //string case
  if(typeof obj === 'string'){
    returnStr += '"' + obj + '"';
  }
  //number and boolean case
  if(typeof obj === 'number' || typeof obj === 'boolean'){
    returnStr += obj;
  }

  //array case
  if(Array.isArray(obj)){
    returnStr+= '[';
    for(var i = 0; i < obj.length; i++){
     returnStr += stringifyJSON(obj[i]);
      returnStr += ',';
    }
    if(returnStr[returnStr.length - 1] === ','){
      returnStr = returnStr.slice(0, returnStr.length - 1);
    }
    returnStr += ']';
  }
  
//object case
  if(typeof obj === 'object' && !Array.isArray(obj)){
    returnStr += '{';
    for(var prop in obj){
      if(obj[prop] !== undefined && (typeof obj[prop] !== 'function')){
        returnStr += stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]) + ',';
      }
    }
    if(returnStr[returnStr.length - 1] === ','){
      returnStr = returnStr.slice(0, returnStr.length - 1);
    }
    returnStr += '}'
  }
  return returnStr;
};

