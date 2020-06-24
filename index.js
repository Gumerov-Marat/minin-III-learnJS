function sleep (ms) {
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve()
    }, ms);
  })
}

sleep(1500).then(function(){
  console.log('1500');
})

sleep(3000).then(function () {
  console.log('3000');
})

Promise.all([sleep(1500), sleep(3000)]).then(function(){
  console.log('all');
  
})

Promise.race([sleep(1500), sleep(3000)]).then(function () {
  console.log('race');

})