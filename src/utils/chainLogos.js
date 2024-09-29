export const chainLogos = {
  "Ethereum": "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
  "Optimism": "https://static.optimism.io/optimism.tokenlist.json",
  "Synthetix": "https://synths.snx.eth",
  "UMA": "https://umaproject.org/uma.tokenlist.json",
  "Uniswap": "https://gateway.ipfs.io/ipns/tokens.uniswap.org",
  "1inch": "https://tokens.1inch.eth",
  // Add more chains and their logo URLs as needed
};

export const getRandomChainLogo = () => {
  const chains = Object.keys(chainLogos);
  const randomChain = chains[Math.floor(Math.random() * chains.length)];
  return chainLogos[randomChain];
};