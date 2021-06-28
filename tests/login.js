const NuBank = require('./index.js').default()

NuBank.getLoginToken({ password: senha, login: cpf }).then(() => {
  NuBank.getWholeFeed().then(r => console.log(r))
})
