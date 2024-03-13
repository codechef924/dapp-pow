/* This file was generated by github.com/ronanyeah/elm-port-gen */

interface ElmApp {
  ports: Ports;
}

interface Ports {
  log: PortOut<string>;
  wsDisconnect: PortOut<null>;
  wsConnect: PortOut<string>;
  disconnectOut: PortOut<null>;
  signIn: PortOut<null>;
  findRegister: PortOut<number>;
  startGrind: PortOut<any>;
  stopGrind: PortOut<null>;
  openWalletMenu: PortOut<null>;
  mintNft: PortOut<number[]>;
  fileOut: PortOut<any>;
  copy: PortOut<string>;
  findRegisterCb: PortIn<{
    id: number;
    register: string;
  }>;
  addrCb: PortIn<string[]>;
  signInCb: PortIn<[string, string]>;
  walletCb: PortIn<string>;
  startTimeCb: PortIn<number>;
  mintCb: PortIn<string>;
  grindCb: PortIn<Key>;
  countCb: PortIn<number>;
  walletErr: PortIn<null>;
  loadKeypairCb: PortIn<Key | null>;
  disconnect: PortIn<null>;
  hitCb: PortIn<any>;
  wsConnectCb: PortIn<boolean>;
  wsDisconnected: PortIn<null>;
}

interface PortOut<T> {
  subscribe: (_: (_: T) => void) => void;
}

interface PortIn<T> {
  send: (_: T) => void;
}

interface Key {
  pubkey: string;
  parts: string[];
  bytes: number[];
  nft: {
    id: number;
    tier: number;
    register: string;
  } | null;
}

export { ElmApp, Key };