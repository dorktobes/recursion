// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  var matchingElements = [];

  function descend (node){
  	
  	if(node.classList && node.classList.contains(className)){
  		matchingElements.push(node);
  	}
  	
    for(var i = 0; i < node.childNodes.length; i++){
      descend(node.childNodes[i]);
    }
  };

  descend(document.body);
 
  return matchingElements;
};
