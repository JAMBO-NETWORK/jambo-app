// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// global app props
import { AppProps as Props } from "@polkadot/react-components/types";

// external imports (including those found in the packages/*
// of this repo)
import React, { useState } from "react";

// local imports and components
import AccountSelector from "./AccountSelector";
import UserCard from "./UserCard";

function MyDid({ className }: Props): React.ReactElement<Props> {
  const [accountId, setAccountId] = useState<string | null>(null);

  return (
    // in all apps, the main wrapper is setup to allow the padding
    // and margins inside the application. (Just from a consistent pov)
    <main>
      <div className={className}>
        <div className="ui--row">
          <AccountSelector onChange={setAccountId} />
        </div>
        <div className="ui--row">
          <UserCard accountId={accountId} />
        </div>
      </div>
    </main>
  );
}

export default React.memo(MyDid);
