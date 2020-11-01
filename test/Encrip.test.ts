import { notStrictEqual, strictEqual } from 'assert'
import Encrip from '../src/Encrip'

describe('Encrip', () => {
  const plainText = 'Hello world'
  const secretKey = 'mysecretkey'

  describe('#encrypt()', () => {
    const encryptedText = Encrip.encrypt(plainText, secretKey)
  
    it ('Should return string', () => {
      strictEqual(typeof(encryptedText), 'string')
    })

    it ('Should return value length equal to plain text', () => {
      strictEqual(encryptedText.length, plainText.length)
    })

    it ('Should return value not be equal to plan text', () => {
      notStrictEqual(encryptedText, plainText)
    })
  })

  describe('#decrypt()', () => {
    const cipherText = Encrip.encrypt(plainText, secretKey) 
    const decryptedText = Encrip.decrypt(cipherText, secretKey)
  
    it ('Should return string', () => {
      strictEqual(typeof(decryptedText), 'string')
    })

    it ('Should return value length equal to cipher text', () => {
      strictEqual(decryptedText.length, cipherText.length)
    })

    it ('Should return value not be equal to plan text', () => {
      notStrictEqual(decryptedText, cipherText)
    })

    it ('Should return value equal to plain text', () => {
      strictEqual(decryptedText, plainText)
    })
  })
})