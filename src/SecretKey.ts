
/** Secret key representation */
export default class SecretKey {

  /** Secret key */
  private secretKey: string

  /**
   * Create secret key instance
   * @param {string} secretKey - Secret key
   */
  public constructor (secretKey: string) {
    this.secretKey = secretKey
  }

  /**
   * Calculate the sum of secret key's character codes
   * @return {number} The secret key's sum
   */
  public sum (): number {
    const characters = this.secretKey.split('')
    const characterCodes = characters.map((character, index) => {
      return this.secretKey.charCodeAt(index)
    })
    return characterCodes.reduce((accumulator, characterCode) => {
      return accumulator + characterCode
    })
  }
}
