import React from "react";
import {useDisconnect, useMetamask} from "@thirdweb-dev/react";

interface Props {
  account?: string;
}

const Sidebar = ({ account }: Props) => {
  const connectWithMetamask = useMetamask();
  const disconnect = useDisconnect();

  return (
    <div className="sidebar">
      {account && (
        <>
          <b>Connected as:</b>
          <br />
          <small>{account}</small>
        </>
      )}
      {!account && (
        <button onClick={connectWithMetamask}>Connect With MetaMask</button>
      )}

      {account && (
        <button onClick={disconnect}>Logout</button>
      )}
    </div>
  );
};

export default Sidebar;
