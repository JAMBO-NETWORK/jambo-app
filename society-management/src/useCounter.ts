


import type { Bid } from '@polkadot/types/interfaces';

import { useApi, useCall } from '@polkadot/react-hooks';

export default function useCounter (): number {
  const { api } = useApi();
  const bids = useCall<Bid[]>(api.query.society?.bids);

  return bids?.length || 0;
}
