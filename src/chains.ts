export enum ChainId {
  LIGHTCHAIN_TESTNET = 504
}

export const SUPPORTED_CHAINS = [
  ChainId.LIGHTCHAIN_TESTNET
] as const
export type SupportedChainsType = typeof SUPPORTED_CHAINS[number]

export enum NativeCurrencyName {
  // Strings match input for CLI
  LCAI = "LCAI"
}
