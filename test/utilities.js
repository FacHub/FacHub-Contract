import { Contract } from 'ethers'
import { Web3Provider } from 'ethers/providers'
import {
  BigNumber,
  bigNumberify,
getAddress,
  keccak256,
  defaultAbiCoder,
  toUtf8Bytes,
  solidityPack
} from 'ethers/utils'
const PERMIT_TYPEHASH = keccak256(
  toUtf8Bytes('Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)')
)
export function expandTo18Decimals(n: number): BigNumber {
  return bigNumberify(n).mul(bigNumberify(10).pow(18))
}
function getDomainSeparator(name: string, tokenAddress: string) {
return keccak256(
  defaultAbiCoder.encode(
 ['bytes32', 'bytes32', 'bytes32', 'uint256', 'address'],
            [PERMIT_TYPEHASH, approve.owner, approve.spender, approve.value, nonce, deadline]
export async function mineBlock(provider: Web3Provider, timestamp: number): Promise<void> {
  await new Promise(async (resolve, reject) => {
