//module.exports = require('./dist/index.js')

yarn add nubank

import createNuBank from 'nubank'
const NuBank = createNuBank()

NuBank.getLoginToken({
  password: senha,
  login: cpf, // no dashes nor dots!
}).then(response => console.log(`I'm in!`)) // just need to call this once

// After signing you can now fetch your whole feed
// since the very beginning of your relationship with NuBank <3

NuBank
  .getWholeFeed()
  .then(history => {
    // ... doing some neat personal analysis ...
    // ... jeez, too much money spent on candies and coffee ...

    // history is something like:
    [
     { description: 'Netflix Com',
       category: 'transaction',
       amount: 2290,
       time: '2016-09-06T09:22:00Z',
       title: 'serviços',
       details: [Object],
       id: '57ce8ab9-016d-4060-907d-4e5f4306483f',
       _links: [Object],
       href: 'nuapp://transaction/57ce8ab9-016d-4060-907d-4e5f4306483f'
     }, ...]
  })
```