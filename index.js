// 22
let totalBalance = 0;
let phoneNumbers = [];

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  const balance = parseFloat(user.balance.replace('$', '').replace(',', ''));

  if (balance > 2000) {
    phoneNumbers.push(user.phone);
  }

  totalBalance += balance;
}

console.log("Телефонні номери користувачів з балансом більше 2000 доларів:");
console.log(phoneNumbers);
console.log("Сума всіх балансів користувачів:", totalBalance);

// 23

function pow(num, degree) {
  if (degree === 0) {
    return 1;
  }
  
  return num * pow(num, degree - 1);
}

const number = 2;
const exponent = 3;
const result = pow(number, exponent);
console.log(result); 
