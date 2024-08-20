//1º) importanto as dependencias

const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

//2º) definir a rede
//bitcoin -> rede principal => mainnet
//testnet -> rede de teste => testnet
const network = bitcoin.networks.testnet

//derivação de carteiras HD - hierarquical deterministica
// mainnet -> `m/49'/0'/0'/0`
// testnet -> `m/49'/1'/0'/0`
const path = `m/49'/1'/0'/0`

//criando o minemoneo para seed (palavras de senha)
let mnemonic = bip39.generateMnemonic()

//criar o conjunto de palavras aleatórias "seed"
const seed = bip39.mnemonicToSeedSync(mnemonic)

//criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network)

//criando uma conta - par pvt-pub keys
let account = root.derivePath(path)
let node = account.derive(0).derive(0)

/*let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address
*/

let bech32Address = bitcoin.payments.p2wpkh({

    pubkey: node.publicKey,

    network: network,

}).address

console.log("Carteira gerada")
/*console.log("Endereço: ", btcAddress)*/
console.log("Endereço: ", bech32Address)
console.log("Chave privada: ", node.toWIF())
console.log("Seed", mnemonic)