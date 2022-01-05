require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strategy response tape provide gentle light army gentle'; 
let testAccounts = [
"0x8b9c8df5046b8fb6733257bd61c0f5895dc99292c98477a55a779da0cc405bdd",
"0x47da7b0e614becb0b5051028205415652eaaa3a5077c2a39caa7cae2783124e4",
"0xa65cb40ae4c34e16973fee81c7f1a9c0b87f75f9e3057492502c566e2fbe32af",
"0x264a4f6fb2baf6281cecfc2911e2649791d44358da144235f01fc0af76dff2f6",
"0xa5f33c4c2816d309d1458f35d656dede04c13997a130af74961d36852020e387",
"0xd7fad3912993825bbefee674f4b0bb4be2c3a0cafe5fd6943a7bf8a6943b4c59",
"0x95f8d8680a175c02dab480b8ca75de0f4cc6a0bcbd2b4db2585b2c5cf66a0f74",
"0x9e541d08cbfc2e3d2cbea10b929fc50191624d767eb2cc090be2c4cc5573b17c",
"0xb77e7b5459b44140404da4b2dbad19879f50da4344518dc2d697c88cb4da3140",
"0x865e04e8cf10453b6132a3eea159dc9e558bff2388c519401cf84d5f2a5c82ae"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


