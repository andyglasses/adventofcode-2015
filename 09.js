function run(){
  var input = getInput().trim().split('\n').map(function(x) { return x.trim().split(' '); });
  var data = [];
  input.forEach(v => {
    data.push({ from: v[0], to: v[2], distance: parseInt(v[4]) });
  });
  var locations = data.map(i => i.to).concat(data.map(i => i.from)).filter((value, index, array) => array.indexOf(value) === index);
  var routes = permutations(locations);
  var routeObjs = [];
  routes.forEach((r) => {
    routeObjs.push(r.map((d, i) => {
      var d = { destination: d, distance: 0 };
      if(i == 0){
        return d;
      }
      var from = r[i-1];
      var to = d.destination;
      var flight = data.find(x => (x.from == from && x.to == to) || (x.from == to && x.to == from));
      if(!flight){
        d.distance = -1;
        return d;
      }
      d.distance = flight.distance;
      return d;
    }))
  })

  var min = 9999999999;
  var max= 0;
  routeObjs.forEach(r => {
    if(r.some(x => x.distance == -1)){
      return;
    }
    var total = r.reduce((p, x) => p + x.distance, 0);
    console.log(r.map(x => x.destination).join(), total)
    if(total < min){
      min = total;
    }
    if(total > max){
      max = total;
    }
  })
  console.log('min', min);
  console.log('max', max);
}

const permutations = arr => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
          item,
          ...val,
        ])
      ),
    []
  );
};

function getInput(){
  return `Faerun to Tristram = 65
Faerun to Tambi = 129
Faerun to Norrath = 144
Faerun to Snowdin = 71
Faerun to Straylight = 137
Faerun to AlphaCentauri = 3
Faerun to Arbre = 149
Tristram to Tambi = 63
Tristram to Norrath = 4
Tristram to Snowdin = 105
Tristram to Straylight = 125
Tristram to AlphaCentauri = 55
Tristram to Arbre = 14
Tambi to Norrath = 68
Tambi to Snowdin = 52
Tambi to Straylight = 65
Tambi to AlphaCentauri = 22
Tambi to Arbre = 143
Norrath to Snowdin = 8
Norrath to Straylight = 23
Norrath to AlphaCentauri = 136
Norrath to Arbre = 115
Snowdin to Straylight = 101
Snowdin to AlphaCentauri = 84
Snowdin to Arbre = 96
Straylight to AlphaCentauri = 107
Straylight to Arbre = 14
AlphaCentauri to Arbre = 46`;
}

run();