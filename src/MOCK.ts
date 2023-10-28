const cryptoData = [
  {
    name: "Bitcoin",
    currency: 48000,
    thumb: "https://exemplo.com/bitcoin.png",
    value: "$48,000.00"
  },
  {
    name: "Ethereum",
    currency: 3200,
    thumb: "https://exemplo.com/ethereum.png",
    value: "$3,200.00"
  },
  {
    name: "Binance Coin",
    currency: 400,
    thumb: "https://exemplo.com/binancecoin.png",
    value: "$400.00"
  },
  {
    name: "Cardano",
    currency: 2.5,
    thumb: "https://exemplo.com/cardano.png",
    value: "$2.50"
  },
  {
    name: "XRP",
    currency: 1.2,
    thumb: "https://exemplo.com/xrp.png",
    value: "$1.20"
  },
  {
    name: "Solana",
    currency: 150,
    thumb: "https://exemplo.com/solana.png",
    value: "$150.00"
  },
  {
    name: "Polkadot",
    currency: 30,
    thumb: "https://exemplo.com/polkadot.png",
    value: "$30.00"
  },
  {
    name: "Dogecoin",
    currency: 0.3,
    thumb: "https://exemplo.com/dogecoin.png",
    value: "$0.30"
  },
  {
    name: "Avalanche",
    currency: 60,
    thumb: "https://exemplo.com/avalanche.png",
    value: "$60.00"
  },
  {
    name: "Chainlink",
    currency: 25,
    thumb: "https://exemplo.com/chainlink.png",
    value: "$25.00"
  },
  {
    name: "Litecoin",
    currency: 150,
    thumb: "https://exemplo.com/litecoin.png",
    value: "$150.00"
  },
  {
    name: "Tezos",
    currency: 5,
    thumb: "https://exemplo.com/tezos.png",
    value: "$5.00"
  },
  {
    name: "Stellar",
    currency: 0.6,
    thumb: "https://exemplo.com/stellar.png",
    value: "$0.60"
  },
  {
    name: "VeChain",
    currency: 0.1,
    thumb: "https://exemplo.com/vechain.png",
    value: "$0.10"
  },
  {
    name: "Monero",
    currency: 250,
    thumb: "https://exemplo.com/monero.png",
    value: "$250.00"
  },
  {
    name: "EOS",
    currency: 3,
    thumb: "https://exemplo.com/eos.png",
    value: "$3.00"
  },
  {
    name: "Tron",
    currency: 0.05,
    thumb: "https://exemplo.com/tron.png",
    value: "$0.05"
  },
  {
    name: "Bitcoin Cash",
    currency: 600,
    thumb: "https://exemplo.com/bitcoincash.png",
    value: "$600.00"
  },
  {
    name: "Aave",
    currency: 50,
    thumb: "https://exemplo.com/aave.png",
    value: "$50.00"
  },
  {
    name: "Neo",
    currency: 30,
    thumb: "https://exemplo.com/neo.png",
    value: "$30.00"
  },
  {
    name: "Filecoin",
    currency: 70,
    thumb: "https://exemplo.com/filecoin.png",
    value: "$70.00"
  },
  {
    name: "Cosmos",
    currency: 25,
    thumb: "https://exemplo.com/cosmos.png",
    value: "$25.00"
  },
  {
    name: "THETA",
    currency: 5,
    thumb: "https://exemplo.com/theta.png",
    value: "$5.00"
  },
  {
    name: "Maker",
    currency: 2500,
    thumb: "https://exemplo.com/maker.png",
    value: "$2,500.00"
  },
  {
    name: "Compound",
    currency: 150,
    thumb: "https://exemplo.com/compound.png",
    value: "$150.00"
  },
  {
    name: "Dai",
    currency: 1,
    thumb: "https://exemplo.com/dai.png",
    value: "$1.00"
  },
  {
    name: "Amp",
    currency: 0.01,
    thumb: "https://exemplo.com/amp.png",
    value: "$0.01"
  },
  {
    name: "Algorand",
    currency: 1.2,
    thumb: "https://exemplo.com/algorand.png",
    value: "$1.20"
  },
  {
    name: "The Graph",
    currency: 0.5,
    thumb: "https://exemplo.com/thegraph.png",
    value: "$0.50"
  },
  {
    name: "Dash",
    currency: 100,
    thumb: "https://exemplo.com/dash.png",
    value: "$100.00"
  },
  {
    name: "Zcash",
    currency: 100,
    thumb: "https://exemplo.com/zcash.png",
    value: "$100.00"
  },
  {
    name: "Bitcoin SV",
    currency: 100,
    thumb: "https://exemplo.com/bitcoinsv.png",
    value: "$100.00"
  },
  {
    name: "Ethereum Classic",
    currency: 50,
    thumb: "https://exemplo.com/ethereumclassic.png",
    value: "$50.00"
  },
  {
    name: "Waves",
    currency: 30,
    thumb: "https://exemplo.com/waves.png",
    value: "$30.00"
  },
  {
    name: "Terra",
    currency: 30,
    thumb: "https://exemplo.com/terra.png",
    value: "$30.00"
  },
  {
    name: "Bitcoin Gold",
    currency: 20,
    thumb: "https://exemplo.com/bitcoingold.png",
    value: "$20.00"
  },
  {
    name: "Ethereum Classic",
    currency: 50,
    thumb: "https://exemplo.com/ethereumclassic.png",
    value: "$50.00"
  },
  {
    name: "Waves",
    currency: 30,
    thumb: "https://exemplo.com/waves.png",
    value: "$30.00"
  },
  {
    name: "Terra",
    currency: 30,
    thumb: "https://exemplo.com/terra.png",
    value: "$30.00"
  },
  {
    name: "Bitcoin Gold",
    currency: 20,
    thumb: "https://exemplo.com/bitcoingold.png",
    value: "$20.00"
  },
  {
    name: "Quant",
    currency: 200,
    thumb: "https://exemplo.com/quant.png",
    value: "$200.00"
  },
  {
    name: "Iota",
    currency: 1,
    thumb: "https://exemplo.com/iota.png",
    value: "$1.00"
  },
  {
    name: "Enjin Coin",
    currency: 2,
    thumb: "https://exemplo.com/enjincoin.png",
    value: "$2.00"
  },
  {
    name: "Ontology",
    currency: 1.5,
    thumb: "https://exemplo.com/ontology.png",
    value: "$1.50"
  },
  {
    name: "Decentraland",
    currency: 0.5,
    thumb: "https://exemplo.com/decentraland.png",
    value: "$0.50"
  },
  {
    name: "Hedera Hashgraph",
    currency: 0.1,
    thumb: "https://exemplo.com/hederahashgraph.png",
    value: "$0.10"
  },
  {
    name: "Basic Attention Token",
    currency: 0.6,
    thumb: "https://exemplo.com/bat.png",
    value: "$0.60"
  },
  {
    name: "SushiSwap",
    currency: 10,
    thumb: "https://exemplo.com/sushiswap.png",
    value: "$10.00"
  },
  {
    name: "Yearn.Finance",
    currency: 30000,
    thumb: "https://exemplo.com/yearnfinance.png",
    value: "$30,000.00"
  },
  {
    name: "Ren",
    currency: 0.3,
    thumb: "https://exemplo.com/ren.png",
    value: "$0.30"
  },
  {
    name: "OMG Network",
    currency: 1.5,
    thumb: "https://exemplo.com/omgnetwork.png",
    value: "$1.50"
  },
  {
    name: "Reserve Rights",
    currency: 0.1,
    thumb: "https://exemplo.com/reserverights.png",
    value: "$0.10"
  },
  {
    name: "Numeraire",
    currency: 50,
    thumb: "https://exemplo.com/numeraire.png",
    value: "$50.00"
  },
  {
    name: "ICON",
    currency: 2,
    thumb: "https://exemplo.com/icon.png",
    value: "$2.00"
  },
  {
    name: "Celo",
    currency: 5,
    thumb: "https://exemplo.com/celo.png",
    value: "$5.00"
  },
  {
    name: "Zilliqa",
    currency: 0.1,
    thumb: "https://exemplo.com/zilliqa.png",
    value: "$0.10"
  },
  {
    name: "Loopring",
    currency: 0.5,
    thumb: "https://exemplo.com/loopring.png",
    value: "$0.50"
  },
  {
    name: "Nexo",
    currency: 1,
    thumb: "https://exemplo.com/nexo.png",
    value: "$1.00"
  },
  {
    name: "Quant",
    currency: 200,
    thumb: "https://exemplo.com/quant.png",
    value: "$200.00"
  },
  {
    name: "Iota",
    currency: 1,
    thumb: "https://exemplo.com/iota.png",
    value: "$1.00"
  },
  {
    name: "Enjin Coin",
    currency: 2,
    thumb: "https://exemplo.com/enjincoin.png",
    value: "$2.00"
  },
  {
    name: "Ontology",
    currency: 1.5,
    thumb: "https://exemplo.com/ontology.png",
    value: "$1.50"
  },
  {
    name: "Decentraland",
    currency: 0.5,
    thumb: "https://exemplo.com/decentraland.png",
    value: "$0.50"
  },
  {
    name: "Hedera Hashgraph",
    currency: 0.1,
    thumb: "https://exemplo.com/hederahashgraph.png",
    value: "$0.10"
  },
  {
    name: "Basic Attention Token",
    currency: 0.6,
    thumb: "https://exemplo.com/bat.png",
    value: "$0.60"
  },
  {
    name: "SushiSwap",
    currency: 10,
    thumb: "https://exemplo.com/sushiswap.png",
    value: "$10.00"
  },
  {
    name: "Yearn.Finance",
    currency: 30000,
    thumb: "https://exemplo.com/yearnfinance.png",
    value: "$30,000.00"
  },
  {
    name: "Ren",
    currency: 0.3,
    thumb: "https://exemplo.com/ren.png",
    value: "$0.30"
  },
  {
    name: "OMG Network",
    currency: 1.5,
    thumb: "https://exemplo.com/omgnetwork.png",
    value: "$1.50"
  },
  {
    name: "Reserve Rights",
    currency: 0.1,
    thumb: "https://exemplo.com/reserverights.png",
    value: "$0.10"
  },
  {
    name: "Numeraire",
    currency: 50,
    thumb: "https://exemplo.com/numeraire.png",
    value: "$50.00"
  },
  {
    name: "ICON",
    currency: 2,
    thumb: "https://exemplo.com/icon.png",
    value: "$2.00"
  },
  {
    name: "Celo",
    currency: 5,
    thumb: "https://exemplo.com/celo.png",
    value: "$5.00"
  },
  {
    name: "Zilliqa",
    currency: 0.1,
    thumb: "https://exemplo.com/zilliqa.png",
    value: "$0.10"
  },
  {
    name: "Loopring",
    currency: 0.5,
    thumb: "https://exemplo.com/loopring.png",
    value: "$0.50"
  },
  {
    name: "Nexo",
    currency: 1,
    thumb: "https://exemplo.com/nexo.png",
    value: "$1.00"
  },
];


export default cryptoData;