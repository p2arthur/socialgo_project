const formatWalletAddress = (walletAddress: string): string => {
  if (walletAddress) {
    const firstPart = walletAddress.substring(0, 4);
    const lastPart = walletAddress.substring(walletAddress.length - 5);

    return `${firstPart}...${lastPart}`;
  }
};

export default formatWalletAddress;
