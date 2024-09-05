// src/MetaMaskSignup.js
import React, { useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";

const MetaMaskSignUp = () => {
  const { isConnected, address } = useAccount();
  const { open } = useWeb3Modal();
  const { error } = useConnect();
  const { disconnect } = useDisconnect();

  const handleConnectWallet = () => {
    open();
  };

  return (
    <div>
      {isConnected ? (
        <div>
          <p>Connected to: {address}</p>
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
      ) : (
        <div>
          <p>Not connected</p>
          <button onClick={() => handleConnectWallet()}>Connect Wallet</button>
        </div>
      )}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default MetaMaskSignUp;
