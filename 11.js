const alphabet = ['a', 'b', 'c', 'd', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

console.log('ghjaabcc'.trim().split('').map(function(x) { return alphabet.findIndex(a => a == x.trim());  }));

function run(){
  const input = getInput().trim().split('').map(function(x) { return alphabet.findIndex(a => a == x.trim());  });
  let valid = false;
  var count = 0;
  while(!valid){
    count++;
    input[input.length - 1]++;
    let i26 = input.indexOf(26)
    while(i26 > -1){
      if(i26 == 0){
        console.error("trying to wrap on first character");
        return;
      }
      input[i26 - 1]++;
      input[i26] = 0
      i26 = input.indexOf(26)
    }
    let i8 = input.findLastIndex(i =>  i == 8 || i == 14 || i == 11)
    while(i8 > -1){
      input[i8]++;
      for(var i = i8 +1; i < input.length; i++){
        input[i] = 0
      }
      i8 = input.findLastIndex(i =>  i == 8 || i == 14 || i == 11)
    }

    valid = isValid(input)
      /*let string = '';
      for(var i = 0; i < input.length; i++){
        string += alphabet[input[i]];
      }
      console.log(string, count);*/

  }

  console.log('-------');
  let string = '';
  for(var i = 0; i < input.length; i++){
    string += alphabet[input[i]];
  }
  console.log(string);
}

function isValid(letters){
  return case1(letters) && case2(letters) && case3(letters);
}

function case1(letters){
  for(let i = 0; i < letters.length - 2; i++){
    if(letters[i] +1 == letters[i + 1] && letters[i] +2 == letters[i + 2]){
      return true;
    }
  }
  return false
}

function case2(letters){
  return !letters.some(l => l == 8 || l == 14 || l == 11)
}

function case3(letters){
  let num = 0;
  for(let i = 0; i < letters.length - 1; i++){
    if(letters[i] == letters[i+ 1]){
      i++;
      num++;
    }
    if(num == 2){
      return true;
    }
  }
  return false;
}

function getInput(){
  return `vzbxxyzz`;
}

run();