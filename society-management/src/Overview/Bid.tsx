


import type { Bid } from '@polkadot/types/interfaces';

import React, { useEffect, useState } from 'react';

import { AddressSmall, TxButton } from '@polkadot/react-components';
import { useAccounts, useApi } from '@polkadot/react-hooks';
import { FormatBalance } from '@polkadot/react-query';

import { useTranslation } from '../translate';

interface Props {
  index: number;
  value: Bid;
}

function BidRow ({ index, value: { kind, value, who } }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { api } = useApi();
  const { allAccounts } = useAccounts();
  const [isBidder, setIsBidder] = useState(false);

  useEffect((): void => {
    const address = who.toString();

    setIsBidder(allAccounts.some((accountId) => accountId === address));
  }, [allAccounts, who]);

  return (
    <tr>
      <td className='all'>
        <AddressSmall value={who} />
      </td>
      <td className='number'>
        {kind.type}
      </td>
      <td className='number'>
        <FormatBalance value={value} />
      </td>
      <td className='button'>
        <TxButton
          accountId={who}
          icon='times'
          isDisabled={!isBidder}
          label={t<string>('Unbid')}
          params={[index]}
          tx={api.tx.society.unbid}
        />
      </td>
    </tr>
  );
}

export default React.memo(BidRow);
