


import type { SubmittableExtrinsic } from '@polkadot/api/types';

export interface BondInfo {
  bondOwnTx?: SubmittableExtrinsic<'promise'> | null;
  bondTx?: SubmittableExtrinsic<'promise'> | null;
  controllerId?: string | null;
  controllerTx?: SubmittableExtrinsic<'promise'> | null;
  stashId?: string | null;
}

export interface NominateInfo {
  nominateTx?: SubmittableExtrinsic<'promise'> | null;
}

export interface SessionInfo {
  sessionTx?: SubmittableExtrinsic<'promise'> | null;
}

export interface ValidateInfo {
  validateTx?: SubmittableExtrinsic<'promise'> | null;
}
