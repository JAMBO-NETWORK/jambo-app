


import React from 'react';

import { useApi } from '@polkadot/react-hooks';

import useChainInfo from '../useChainInfo';
import Extensions from './Extensions';
import NetworkSpecs from './NetworkSpecs';

export default function Metadata (): React.ReactElement {
  const { isDevelopment } = useApi();
  const chainInfo = useChainInfo();

  return (
    <>
      {!isDevelopment && (
        <>
          <Extensions chainInfo={chainInfo} />
        </>
      )}
      <NetworkSpecs chainInfo={chainInfo} />
    </>
  );
}
