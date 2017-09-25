// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var returnStr = '';
  
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
    returnStr += ']';
  }
  

  //object case






  return returnStr;
};

