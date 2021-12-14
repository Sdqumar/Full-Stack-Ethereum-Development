require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
const projectId = "761aa7018cf94186b86afa9f8935d38f";
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      account: [privateKey],
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      account: [privateKey],
    },
  },
  solidity: "0.8.4",
};
