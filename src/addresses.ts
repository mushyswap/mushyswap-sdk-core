import { ChainId, SUPPORTED_CHAINS, SupportedChainsType } from './chains'

type AddressMap = { [chainId: number]: string }

type ChainAddresses = {
  multicallAddress: string
  swapRouter02Address?: string
}

const DEFAULT_NETWORKS = [ChainId.LIGHTCHAIN_TESTNET]

function constructSameAddressMap(address: string, additionalNetworks: ChainId[] = []): AddressMap {
  return DEFAULT_NETWORKS.concat(additionalNetworks).reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = address
    return memo
  }, {})
}


/**
 * @deprecated use V2_FACTORY_ADDRESSES instead
 */
export const V2_FACTORY_ADDRESS = '0x538D34c1bF2A6897337F2e07931eEd14b14a09F2'
export const V2_FACTORY_ADDRESSES: AddressMap = {
  [ChainId.LIGHTCHAIN_TESTNET]: "0x538D34c1bF2A6897337F2e07931eEd14b14a09F2"
}

export const V2_ROUTER_ADDRESSES: AddressMap = {
  [ChainId.LIGHTCHAIN_TESTNET]: "0xb1cBA0f802eB1F0a781B79755853F627F86F9B17"
}


const DEFAULT_ADDRESSES: ChainAddresses = {
  multicallAddress: '0xf05F249af774155d671993CE9d905E95aBc90396',
}

const LIGHTCHAIN_ADDRESSES: ChainAddresses = {
  ...DEFAULT_ADDRESSES,
  swapRouter02Address: "0xb1cBA0f802eB1F0a781B79755853F627F86F9B17"
}



export const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses> = {
  [ChainId.LIGHTCHAIN_TESTNET]: LIGHTCHAIN_ADDRESSES
}


export const MULTICALL_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].multicallAddress
    return memo
  }, {})
}

export const SWAP_ROUTER_02_ADDRESSES = (chainId: number) => {
  if (SUPPORTED_CHAINS.includes(chainId)) {
    const id = chainId as SupportedChainsType
    return CHAIN_TO_ADDRESSES_MAP[id].swapRouter02Address ?? '0xb1cBA0f802eB1F0a781B79755853F627F86F9B17'
  }
  return ''
}
