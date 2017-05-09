const findMinMax = (arrayOfNumbers) =>{
  if(typeof(arrayOfNumbers)==='object'){
    if(Object.prototype.toString.call(arrayOfNumbers) === "[object Array]"){
      arrayOfNumbers.sort(function(a,b){return a-b});
      if(typeof(arrayOfNumbers[0])!="number" | typeof(arrayOfNumbers[arrayOfNumbers.length-1])!="number"){
        return 0;
      }
      else if (arrayOfNumbers[0]===arrayOfNumbers[arrayOfNumbers.length-1]){
        return [arrayOfNumbers[0]];
      }      
      else{
        return [arrayOfNumbers[0], arrayOfNumbers[arrayOfNumbers.length-1]];
      };
    }
    else{
      return 'invalid input - input not an Array';
    };
  }
  else{
    return 'invalid input - input not an Object';
  };  
};


module.exports = {
  findMinMax : findMinMax
}