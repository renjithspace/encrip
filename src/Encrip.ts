import Decryption from './Decryption'
import Encryption from './Encryption'

/** Encrip representation */
class Encrip {

  /**
   * To generate the encrypted value
   * @param {string} plainText - Plain text to encrypt
   * @param {string} secretKey - Secret key
   * @return {string} The encrypted value
   */
  public static encrypt (plainText: string, secretKey: string): string {
    const encryption = new Encryption(plainText, secretKey)
    return encryption.encrypt()
  }

  /**
   * To generate the plain text value
   * @param {string} cipherText - Cipher text to decrypt
   * @param {string} secretKey - Secret key
   * @return {string} The decrypted plain text
   */
  public static decrypt (cipherText: string, secretKey: string): string {
    const decryption = new Decryption(cipherText, secretKey)
    return decryption.decrypt()
  }
}

module.exports = Encrip
