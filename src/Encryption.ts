import SecretKey from './SecretKey'

/** Encryption representation */
export default class Encryption {

  /** Plain text value to encrypt */
  private plainText: string

  /** Secret key's character codes sum */
  private secretKeySum: number

  /**
   * Create encryption instance
   * @param {string} plainText - Plain text to encrypt
   * @param {string} secretKey - Secret key
   */
  public constructor (plainText: string, secretKey: string) {
    this.plainText = plainText
    this.secretKeySum = new SecretKey(secretKey).sum()
  }

  /**
   * To generate the encrypted value
   * @return {string} The encrypted value
   */
  public encrypt (): string {
    const characters = this.plainText.split('')
    const encodedCharacters = characters.map((character, index) => {
      const characterCode = (this.secretKeySum + this.plainText.charCodeAt(index))
      return String.fromCharCode(characterCode)
    })
    return encodedCharacters.join('')
  }
}