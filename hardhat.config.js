require("@nomiclabs/hardhat-ethers");

module.exports = {
    defaultNetwork: "matic",
    networks: {
        hardhat: {
        },
        matic: {
            url: 'ALCHEMY_URL',
            accounts: ['PRIVATE_KEY'],
        }
    },
    solidity: {
        version: "0.8.0",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts"
    },
    mocha: {
        timeout: 20000
    }
}