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
