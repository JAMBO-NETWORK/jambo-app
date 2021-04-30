
// SPDX-License-Identifier: Apache-2.0

import BN from 'bn.js';

import { Abi } from '@polkadot/api-contract';

export interface CodeJson {
  abi?: string | null;
  codeHash: string;
  name: string;
  genesisHash: string;
  tags: string[];
  whenCreated: number;
}

export interface CodeStored {
  json: CodeJson;
  contractAbi?: Abi;
}

export interface ContractJsonOld {
  genesisHash: string;
  abi: string;
  address: string;
  name: string;
}

export interface UseWeight {
  executionTime: number;
  isEmpty: boolean;
  isValid: boolean;
  megaGas: BN;
  percentage: number;
  setIsEmpty: React.Dispatch<boolean>
  setMegaGas: React.Dispatch<BN | undefined>;
  weight: BN;
}
