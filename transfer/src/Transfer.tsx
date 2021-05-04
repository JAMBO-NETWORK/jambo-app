// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from "bn.js";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Button, InputBalance, Input, TxButton } from "@polkadot/react-components";
import { didToHex } from "./util";
import { useApi } from "@polkadot/react-hooks";

interface Props {
  className?: string;
  accountId?: string | null;
}

function DidTransfer({ className, accountId }: Props): React.ReactElement<Props> {
  const { api } = useApi();
  const [amount, setAmount] = useState<BN | undefined | null>(new BN(10 ** 15));
  const [did, setDid] = useState<string | null>(null);
  const [memo, setMemo] = useState<string | null>(null);
  const _onDidChange = useCallback((did: string): void => {
    const didHex = didToHex(did);
    console.log(didHex, "did hex----");
    setDid(didHex);
  }, []);

  return (
    <section className={className}>
      <div className="ui--row">
        <div className="large">
          <h2>Transfer</h2>
          <Input
            maxLength={50}
            min={20}
            onChange={_onDidChange}
            label="Recipient DID"
            placeholder="Please input DID"
          />
          <InputBalance label="Amount to transfer" onChange={setAmount} value={amount} placeholder="Please input a number" />
          <Input maxLength={150} onChange={setMemo} label="Memo" />
          <Button.Group>
            <TxButton
              accountId={accountId}
              isDisabled={!amount || !did}
              icon="paper-plane"
              label="OK"
              params={[did, amount, memo]}
              tx={api.tx.did.transfer}
              withSpinner
            />
          </Button.Group>
        </div>
      </div>
    </section>
  );
}

export default React.memo(styled(DidTransfer)`
  padding: 50px;
  background: #fff;
  width: 60%;
  border-radius: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .ui--row {
    justify-content: center;
    h2 {
      padding-left: 2rem;
    }
    div.large {
      flex: 0 100%;
    }
  }
`);
