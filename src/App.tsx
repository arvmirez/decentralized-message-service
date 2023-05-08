import React, { useState } from "react";
import "./App.css";
import DecentralizedMessagedServiceArtifact from "./contracts/artifacts/contracts/decentralized-message-service.sol/DecentralizedMessageService.json";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import {useAddress} from "@thirdweb-dev/react";
import useChatContract from "./hooks/useContract";

function App() {
  const contractAddress = `${process.env.REACT_APP_CONTRACT_ADDRESS}`;

  const account = useAddress();
  const chatContract = useChatContract(
    contractAddress,
    DecentralizedMessagedServiceArtifact.abi,
    account
  );

  return (
    <div className="App">
      <Sidebar account={account} />
      <Chat account={account} chatContract={chatContract} />
    </div>
  );
}

export default App;
