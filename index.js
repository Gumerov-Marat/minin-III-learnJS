/*
  Клиент -> Server -> DataBase -> Server -> Клиент
*/

console.log('Клиент: Хочу получить список пользователей');
console.log('...');

setTimeout(function(){
  console.log('Сервер: запрашиваю список пользователей в БД');
  console.log('...');
  
  setTimeout(function () {
    console.log('БД: формирую список пользователей');
    console.log('...');

    setTimeout(function () {
      console.log('Сервер:трансформирую данные для клиента');
      console.log('...');

      setTimeout(function () {
        console.log('Клиент: получил данные и отображаю их');
        console.log('...');
      }, 1000);
    }, 500);
  }, 500);
}, 1000);

