import bcrypt from 'bcrypt'

export class BcryptAdapter {
  private readonly salt
  constructor (salt:number) {
    this.salt = salt
  }

  async hash (plaintext:string):Promise<string> {
    const hash = await bcrypt.hash(plaintext, this.salt)
    return hash
  }
}
