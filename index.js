/*
Реализуйте класс МайПромис, который будет работать точно также,
как и Промис. Достаточно реализовать методы them  catch finaly
Методы All race делать ненужно
*/
// вот классический промис
// var promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2)
//   }, 200);
// })

// promise
// .then(num => num *=2)
// .catch(err => console.log(err))
// .then(num => num *=3)
// .finally(()=> console.log('finally'))

class myPromise {
  constructor(callback) {
    function resolver(){
      this.onCatch = null
      this.onFinally = null
      this.thenCbs = []


    }

    function resolver(data) {
      this.thenCbs.forEach(then =>{
        data = cb(data)
      })
    }
    function rejecter(error){
      if (this.onCatch) {
        this.onCatch(error)
      }
      if (this.onFinally){
        this.onFinally()
      }
    }


    callback(resolver.bind(this), rejecter.bind(this))
  }

  then(cb){
    this.thenCbs.push(cb)
    return this
  }

  catch(cb){
    this.onCatch = cb
    return this
  }

  finally(cb){
    this.onFinally = cb
    return this
  }
}

const promise = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 200);
})

promise
.then(num => num *=2)
.catch(err => console.log(err))
.then(num => num *=3)
.finally(()=> console.log('finally'))