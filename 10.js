function run(){
  var input = getInput().trim().split('').map(function(x) { return parseInt(x.trim()); });
  
  for(var i = 0; i < 50; i++){
    //console.log(input.join(''))
    var input = parseInput([...input]);   
  }
  console.log(input.length)
}

function parseInput(input){
  var previousCount = 0;
  var previousVal = 0;
  var  output = [];
  for(var i = 0; i < input.length; i++){
    if(previousVal == 0){
      previousVal = input[i];
      previousCount = 1;
    } else if(previousVal == input[i]){
      previousCount++;
    } else {
      output.push(previousCount)
      output.push(previousVal)
      previousVal = input[i];
      previousCount = 1;
    }
  }
  output.push(previousCount)
  output.push(previousVal)
  return output;
}

function getInput(){
  return `1113122113`;
}

run();