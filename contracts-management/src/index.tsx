
// SPDX-License-Identifier: Apache-2.0

import type { AppProps as Props } from '@polkadot/react-components/types';

import React, { useRef } from 'react';

import { useTranslation } from '@polkadot/app-contracts/translate';
import { HelpOverlay, Tabs } from '@polkadot/react-components';

import introMd from './md/intro.md';
import Contracts from './Contracts';

function ContractsApp ({ basePath, className = '' }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  const itemsRef = useRef([
    {
      isRoot: true,
      name: 'contracts',
      text: t('Contracts')
    }
  ]);

  return (
    <main className={`contracts--App ${className}`}>
      <HelpOverlay md={introMd as string} />
      <header>
        <Tabs
          basePath={basePath}
          items={itemsRef.current}
        />
      </header>
      <Contracts />
    </main>
  );
}

export default React.memo(ContractsApp);
