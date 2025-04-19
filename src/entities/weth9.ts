import { Token } from './token'

/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WETH9: { [chainId: number]: Token } = {
  [1]: new Token(1, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'),
  [393]: new Token(393, '0xFe043387249e426f8ACf8BC6c682825F58242801', 18, 'WNEX', 'Wrapped Nexus'),
  [504]: new Token(504, "0x501606f3972A9e00B2DDd44C7E38fe9c22B4e351", 18, "WLCAI", "Wrapped LCAI")
}
