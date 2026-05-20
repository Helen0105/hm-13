// завдання 1

const delay = ms => {
  return new Promise((res)=>{
    setTimeout(()=>{
      res(ms)
    },ms)
  })
};

const logger = time => console.log(`Resolved after ${time}ms`);


delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms



// завдання 2

// Створіть функцію delayedPromise, яка приймає значення і затримку (у мілісекундах) і повертає проміс, який вирішується з заданим значенням після затримки.
// Створіть масив з 5 промісів, використовуючи функцію delayedPromise, із різними значеннями та затримками.
// Використайте Promise.all, щоб одночасно виконати всі проміси з масиву.
// Обробіть результати вирішення промісів та виведіть їх у консоль.

function randomDelay() {
    return Math.floor(Math.random()*(5000-1000)+1000);
}

// console.log(randomDelay());

function delayedPromise(text,delay) {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(text)
        },delay)
    })
}

const delay1 = randomDelay()
const delay2 = randomDelay()
const delay3 = randomDelay()
const delay4 = randomDelay()
const delay5 = randomDelay()

const promise1 = delayedPromise(`Promise1 виконався з затримкою ${delay1}`,delay1)
const promise2 = delayedPromise(`Promise2 виконався з затримкою ${delay2}`,delay2)
const promise3 = delayedPromise(`Promise3 виконався з затримкою ${delay3}`,delay3)
const promise4 = delayedPromise(`Promise4 виконався з затримкою ${delay4}`,delay4)
const promise5 = delayedPromise(`Promise5 виконався з затримкою ${delay5}`,delay5)

Promise.all([promise1,promise2,promise3,promise4,promise5]).then(res=>console.log(res));
Promise.race([promise1,promise2,promise3,promise4,promise5]).then(res=>console.log(res))




// завдання 3


const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];


const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve) => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );

    resolve(updatedUsers);
  });
};

const logger = updatedUsers => console.table(updatedUsers);


toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);