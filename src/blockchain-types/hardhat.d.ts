/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "ReentrancyGuardUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReentrancyGuardUpgradeable__factory>;
    getContractFactory(
      name: "IERC20PermitUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20PermitUpgradeable__factory>;
    getContractFactory(
      name: "IERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Upgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "AirdropFactoryA",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AirdropFactoryA__factory>;
    getContractFactory(
      name: "AirdropFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AirdropFactory__factory>;
    getContractFactory(
      name: "IAirdropManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAirdropManager__factory>;
    getContractFactory(
      name: "AirdropMaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AirdropMaster__factory>;
    getContractFactory(
      name: "IAirdrop",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAirdrop__factory>;
    getContractFactory(
      name: "IERC20Info",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Info__factory>;
    getContractFactory(
      name: "IPoolFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPoolFactory__factory>;
    getContractFactory(
      name: "AirdropManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AirdropManager__factory>;
    getContractFactory(
      name: "CircleFairPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CircleFairPool__factory>;
    getContractFactory(
      name: "IERC20Info",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Info__factory>;
    getContractFactory(
      name: "IFairPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFairPool__factory>;
    getContractFactory(
      name: "IPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPool__factory>;
    getContractFactory(
      name: "IPoolFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPoolFactory__factory>;
    getContractFactory(
      name: "IPoolManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPoolManager__factory>;
    getContractFactory(
      name: "IPrivatePool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPrivatePool__factory>;
    getContractFactory(
      name: "IUniswapV2Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Factory__factory>;
    getContractFactory(
      name: "IUniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Pair__factory>;
    getContractFactory(
      name: "IUniswapV2Router01",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router01__factory>;
    getContractFactory(
      name: "IUniswapV2Router02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router02__factory>;
    getContractFactory(
      name: "CirclePoolFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CirclePoolFactory__factory>;
    getContractFactory(
      name: "CirclePoolManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CirclePoolManager__factory>;
    getContractFactory(
      name: "CirclePresalePool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CirclePresalePool__factory>;
    getContractFactory(
      name: "CirclePrivatePool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CirclePrivatePool__factory>;
    getContractFactory(
      name: "Lock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lock__factory>;
    getContractFactory(
      name: "CircleLocker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CircleLocker__factory>;
    getContractFactory(
      name: "ICircleLocker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICircleLocker__factory>;
    getContractFactory(
      name: "BaseERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseERC20__factory>;

    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "ReentrancyGuardUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ReentrancyGuardUpgradeable>;
    getContractAt(
      name: "IERC20PermitUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20PermitUpgradeable>;
    getContractAt(
      name: "IERC20Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Upgradeable>;
    getContractAt(
      name: "ContextUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContextUpgradeable>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "AirdropFactoryA",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AirdropFactoryA>;
    getContractAt(
      name: "AirdropFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AirdropFactory>;
    getContractAt(
      name: "IAirdropManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAirdropManager>;
    getContractAt(
      name: "AirdropMaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AirdropMaster>;
    getContractAt(
      name: "IAirdrop",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAirdrop>;
    getContractAt(
      name: "IERC20Info",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Info>;
    getContractAt(
      name: "IPoolFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPoolFactory>;
    getContractAt(
      name: "AirdropManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AirdropManager>;
    getContractAt(
      name: "CircleFairPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CircleFairPool>;
    getContractAt(
      name: "IERC20Info",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Info>;
    getContractAt(
      name: "IFairPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFairPool>;
    getContractAt(
      name: "IPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPool>;
    getContractAt(
      name: "IPoolFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPoolFactory>;
    getContractAt(
      name: "IPoolManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPoolManager>;
    getContractAt(
      name: "IPrivatePool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPrivatePool>;
    getContractAt(
      name: "IUniswapV2Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Factory>;
    getContractAt(
      name: "IUniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Pair>;
    getContractAt(
      name: "IUniswapV2Router01",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Router01>;
    getContractAt(
      name: "IUniswapV2Router02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Router02>;
    getContractAt(
      name: "CirclePoolFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CirclePoolFactory>;
    getContractAt(
      name: "CirclePoolManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CirclePoolManager>;
    getContractAt(
      name: "CirclePresalePool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CirclePresalePool>;
    getContractAt(
      name: "CirclePrivatePool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CirclePrivatePool>;
    getContractAt(
      name: "Lock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Lock>;
    getContractAt(
      name: "CircleLocker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CircleLocker>;
    getContractAt(
      name: "ICircleLocker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICircleLocker>;
    getContractAt(
      name: "BaseERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseERC20>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}