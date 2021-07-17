// global app props
import { AppProps as Props } from "@polkadot/react-components/types";

// external imports (including those found in the packages/*
// of this repo)
import React from "react";
import { lastAccount } from "@polkadot/react-hooks";
import Partner from "./Partner";

function Team({ className }: Props): React.ReactElement<Props> {
  const accountId = lastAccount();

  return (
    // in all apps, the main wrapper is setup to allow the padding
    // and margins inside the application. (Just from a consistent pov)
    <main>
      <div className={className}>
        <Partner accountId={accountId} />
      </div>
    </main>
  );
}

export default React.memo(Team);
