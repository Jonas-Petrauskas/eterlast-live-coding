import "./App.css";
import { useState } from "react";
import { ethers } from "ethers";
import From from "./components/formComponent/form";

function App() {
  const [walletAddress, setWalletAddress] = useState("");
  const [connectedWallet, setConnectedWallet] = useState(false);
  const [networkName, setNetworkName] = useState("");

  const firstFiveWalletValues = walletAddress.substring(4, 0);
  const lastFourWalletValues = walletAddress.substring(
    walletAddress.length - 4
  );
  const substringWalletAddress = `${firstFiveWalletValues}...${lastFourWalletValues}`;

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const account = await provider.send("eth_requestAccounts", []);

        // get network name
        const networkName = (await provider._networkPromise).name;
        // pass to getNetwork and received and updated object
        const network = ethers.providers.getNetwork(networkName);

        setWalletAddress(account[0]);
        setNetworkName(network);
        setConnectedWallet(true);
      } else console.log("No wallet detected!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {connectedWallet ? (
          <div className="App-header__wallet__info">
            <h3 className="App-network__name">Network: {networkName.name}</h3>
            <h3>{substringWalletAddress}</h3>
          </div>
        ) : (
          <span></span>
        )}
        <button className="App-connect__button" onClick={connectWallet}>
          Connect Wallet
        </button>
      </header>
      <From />
    </div>
  );
}

export default App;
