// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// only here, needs to be available for the rest of the codebase
/* eslint-disable react/jsx-max-props-per-line */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { InputAddress } from '@polkadot/react-components';

interface Props {
  className?: string;
  onChange: (accountId: string | null) => void;
}

function AccountSelector ({ className, onChange }: Props): React.ReactElement<Props> {
  const [accountId, setAccountId] = useState<string | null>(null);
  
  useEffect(
    (): void => onChange(accountId),
    [accountId, onChange]
  );

  return (
    <section className={`template--AccountSelector ui--row ${className}`}>
      <InputAddress
        className='medium'
        label='my default account'
        onChange={setAccountId}
        type='account'
      />
      <div className='medium'>
      </div>
    </section>
  );
}

export default React.memo(styled(AccountSelector)`
  margin-top: 20px;
  .summary {
    text-align: center;
  }
`);
