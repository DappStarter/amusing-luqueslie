require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note range purchase install clog swallow spoil'; 
let testAccounts = [
"0x479f5f0e0480730d64b9989d6ca678a3f45ff9dd550afbfac17b77e239e45605",
"0x521e432b2c760fffdfb754d91e3657f92147c57e2c3c34d6afcaa86b22ee9d10",
"0x26cdf9e0efe6b187b1ef0691c4885ce62d998d67897fd974904437b81fb07805",
"0x572b3a1f4484a4485ba0c675f1d75db7b0fcbfd28e6808e70caefb9b656c58b9",
"0xc2aab4b7685da684bb3e105c543f7d075d764e6c902669752ed6db6087b453ab",
"0xec7dd9e2f9ea512255cc33e1b228746e4fa9916be76475667a1e85b53366dfbe",
"0xe87cd35fb245fc3eaa807165551dbdb52afed6ea7f156cd6f49e4ce7f7f91ec4",
"0xbf236046ddc2f396f8d9de3f9ba21f6c1a614073bc1a4072c53ef4b51b93fe8e",
"0x619987724f2b3b92be1cd4fb73879d21bbf99986efdc09131bec9ece55b67f12",
"0xf805289504b664d450221f193348c68c7934ea0b6d088717efde0a707a393c28"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

