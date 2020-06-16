import { EmailValidatorAdapter } from './email-validator-adapter'
import validator from 'validator'

const EmailValidatorAdapterFactory = () => (
  new EmailValidatorAdapter()
)

describe('Email Adapter', () => {
  test('should return false if validation is false', () => {
    const sut = EmailValidatorAdapterFactory()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValidResult = sut.isValid('invalid_email@mail.com')
    expect(isValidResult).toBe(false)
  })

  test('should return true if validation is true', () => {
    const sut = EmailValidatorAdapterFactory()
    const isValidResult = sut.isValid('valid_email@mail.com')
    expect(isValidResult).toBe(true)
  })

  test('should call isValid with correct parameters', () => {
    const sut = EmailValidatorAdapterFactory()
    const isValidSpy = jest.spyOn(sut, 'isValid')
    sut.isValid('valid_email@mail.com')
    expect(isValidSpy).toHaveBeenCalledWith('valid_email@mail.com')
  })
})
