import SecretKey from './SecretKey'

/** Decryption representation */
export default class Decryption {

  /** Cipher text value to decrypt */
  private cipherText: string

  /** Secret key's character codes sum */
  private secretKeySum: number

  /**
   * Create decryption instance
   * @param {string} cipherText - Cipher text to decrypt
   * @param {string} secretKey - Secret key
   */
  public constructor (cipherText: string, secretKey: string) {
    this.cipherText = cipherText
    this.secretKeySum = new SecretKey(secretKey).sum()
  }

  /**
   * To generate the plain text value
   * @return {string} The decrypted plain text
   */
  public decrypt (): string {
    const characters = this.cipherText.split('')
    const plainCharacters = characters.map((character, index) => {
      const characterCode = (this.cipherText.charCodeAt(index) - this.secretKeySum)
      return String.fromCharCode(characterCode)
    })
    return plainCharacters.join('')
  }
}