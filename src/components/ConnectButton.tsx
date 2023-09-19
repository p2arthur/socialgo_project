import { useEffect } from "react";
import { useWallet } from "@txnlab/use-wallet";
import formatWalletAddress from "../utils/formatWalletAddress";
import { BiLogOut } from "react-icons/bi";

const ConnectButton = () => {
  const { providers, activeAccount } = useWallet();

  const handleLogIn = async () => {
    if (providers) {
      try {
        providers[0].connect();
      } catch (error) {
        console.error("Error connecting with wallet");
      }
    }
  };
  const handleLogOut = async () => {
    if (providers) {
      await providers[0].disconnect();
    }
  };

  return (
    <div className="w-32">
      {!activeAccount ? (
        <button
          className="p-1 rounded w-full transition all bg-transparent border border-gray-100 text-gray-100 hover:bg-cyan-500 hover:border-transparent text-xs"
          onClick={handleLogIn}
        >
          Connect wallet
        </button>
      ) : (
        <div className="flex">
          <button className="w-3/4 rounded-bl rounded-tl bg-cyan-500 p-1 text-sm">
            {formatWalletAddress(activeAccount.address)}
          </button>
          <button
            className="p-1 rounded-tr rounded-br w-1/4 transition all bg-transparent hover:bg-red-700 bg-red-500 flex flex-col items-center justify-center"
            onClick={handleLogOut}
          >
            <BiLogOut className="" />
          </button>
        </div>
      )}
    </div>
  );
};
export default ConnectButton;
