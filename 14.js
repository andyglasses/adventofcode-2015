function run(time){
  var input = getInput().trim().split('\n').map(function(x) { return x.trim().split(' '); });
  var dear = [];
  input.forEach(i => {
    dear.push({
      name: i[0],
      speed: parseInt(i[3]),
      time: parseInt(i[6]),
      rest: parseInt(i[13]),
      moved: 0,
      points: 0,
      moving: true,
      partialTime: 0
    });
  })
  for(let t = 0; t <= time; t++){
    dear.forEach(d => {
      d.partialTime++;
      if(d.moving && d.partialTime > d.time){
        d.partialTime = 1;
        d.moving = false;
      }
      if(!d.moving && d.partialTime > d.rest){
        d.partialTime = 1;
        d.moving = true;
      }
      if(d.moving){
        d.moved += d.speed;
      }      
    });
    dear.reduce((p, d) => p.moved > d.moved ? p : d, { moved: 0}).points++;
  }

  console.log(dear.map(d => `${d.name}: ${d.points}`));
  console.log(dear.reduce((p, d) => p.points > d.points ? p : d, { points: 0}).points)


}

function getInput(){
/*  return `Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.
Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.`;*/
return `Rudolph can fly 22 km/s for 8 seconds, but then must rest for 165 seconds.
Cupid can fly 8 km/s for 17 seconds, but then must rest for 114 seconds.
Prancer can fly 18 km/s for 6 seconds, but then must rest for 103 seconds.
Donner can fly 25 km/s for 6 seconds, but then must rest for 145 seconds.
Dasher can fly 11 km/s for 12 seconds, but then must rest for 125 seconds.
Comet can fly 21 km/s for 6 seconds, but then must rest for 121 seconds.
Blitzen can fly 18 km/s for 3 seconds, but then must rest for 50 seconds.
Vixen can fly 20 km/s for 4 seconds, but then must rest for 75 seconds.
Dancer can fly 7 km/s for 20 seconds, but then must rest for 119 seconds.`
}

run(2503);