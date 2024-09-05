import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { cookieStorage, createStorage } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

// Get projectId at https://cloud.walletconnect.com
export const projectId = "2d8395ee0b3511a83f82e0b83dd3c269";

const metadata = {
  name: "test-app",
  description: "AlterscopeWallet",
  url: "http://localhose:3000", // origin must match your domain & subdomain
  icons: [],
};
// Create wagmiConfig
export const config = defaultWagmiConfig({
  chains: [mainnet, sepolia], // required
  projectId, // required
  metadata, // required
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  enableWalletConnect: true, // Optional - true by default
  enableInjected: true, // Optional - true by default
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: true, // Optional - true by default
  auth: {
    email: false,
    socials: false,
  },
});
