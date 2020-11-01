# Encrip
Tiny, Secure, Zero Dependency and Secret Key Based Encryption

# Installation
```sh
npm install encrip
```

# Usage
```js
import Encrip from 'encrip'

const plainText = 'Hello world'
const secretKey = 'mysecretkey'

const cipher = Encrip.encrypt(plainText, secretKey) // ӽԚԡԡԤӕԬԤԧԡԙ
Encrip.decrypt(cipher, secretKey) // Hello world
```