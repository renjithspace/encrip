# Encrip
Tiny, Secure, Zero Dependency and Secret Key Based Encryption

### Installation
```sh
npm install encrip
```

### Usage
```js
const Encrip = require('encrip')

const plainText = 'Hello world'
const secretKey = 'mysecretkey'

const cipher = Encrip.encrypt(plainText, secretKey) // ӽԚԡԡԤӕԬԤԧԡԙ
Encrip.decrypt(cipher, secretKey) // Hello world
```

### Try online
You can find an Encrip starter project from [repl.it](https://repl.it/@RenjithV/encrip)