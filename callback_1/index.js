// Функція, яка симулює асинхронний запит // simulation async request
function simulateAsyncRequest(data, callback) {
    setTimeout(() => {
      // data load simulation
      // Симулюємо завантаження даних (може бути Ajax-запитом або іншим асинхронним процесом)
      if (data) {
        callback(null, data); // Передаємо дані в колбек // pass data to callback
      } else {
        callback('Error in Request', null); // Передаємо помилку в колбек // handle error
      }
    }, 1000); // Симулюємо затримку 1 секунду // delay
  }
  
  // Використання функції з колбеком // use fn with callback
  simulateAsyncRequest({ key: 'value' }, (error, result) => {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('Result:', result);
    }
  });