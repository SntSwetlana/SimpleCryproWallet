require('@nomiclabs/hardhat-waffle');
module.exports = {
    solidity: '0.8.0',
    networks: {
        goerli: {
            url: 'https://eth-goerli.g.alchemy.com/v2/whdxOCC1cUdr3CZKKtVVBCtr4lfQnWal',
            accounts: ['1c76a150e63924b26eb5c359536c6838a57dda7ad56c14f7a8d9654bf0d73a8d']
        }
    }
}
