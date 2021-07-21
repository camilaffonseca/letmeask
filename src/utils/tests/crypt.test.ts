import { getObfuscatedToken, getUnobfuscatedToken } from 'utils/crypt'

describe('[ENVS]', () => {
  test('Test token obfuscators.', () => {
    expect(getObfuscatedToken('token')).toBe('Nexpy-dG9rZW4=')

    expect(getUnobfuscatedToken('Nexpy-dG9rZW4=')).toBe('token')
  })
})
