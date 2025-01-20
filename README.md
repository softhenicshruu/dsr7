# STO-PAP-SCI - A DeFi Game for Enhanced Staking, Transparency, and Interoperability of Skins in Gaming

**STO-PAP-SCI** is a decentralized finance (DeFi) game designed to enhance the staking, transparency, and interoperability of skins within the gaming ecosystem. This project leverages the power of blockchain technology to create a transparent and fair environment where players can stake, trade, and manage skins in a decentralized way. The game integrates with the Agoric smart contract platform to ensure a seamless experience.

## Features
- **Improved Staking**: Stake your skins and earn rewards in a secure and transparent manner.
- **Transparency**: All transactions are recorded on the blockchain, ensuring that everything is open and auditable.
- **Interoperability**: Game skins can be transferred and used across various games and platforms.

## Getting Started

### Prerequisites

Before you can start the project, ensure that you have the following installed on your system:
- Node.js
- Yarn
- Docker
- Keplr Wallet (for blockchain interaction)

You can also follow along in **Github Codespaces**, where you can run the project without having to install anything on your local machine (except for Keplr Wallet).

### Setup Instructions

1. Clone the repository to your local machine:
   bash
   git clone https://github.com/yourusername/STO-PAP-SCI.git
   cd STO-PAP-SCI
   

2. Install the dependencies:
   bash
   yarn install
   
   *This may take a few minutes as it will install all the necessary dependencies for both the UI (React) and the smart contract (Agoric framework).*

3. Start a local Agoric blockchain using Docker:
   bash
   yarn start:docker
   

4. Once the blockchain is running, check the logs to ensure everything is functioning:
   bash
   yarn docker:logs
   
   You should see logs similar to:
   
   demo-agd-1  | 2023-12-27T04:08:06.384Z block-manager: block 1003 begin
   demo-agd-1  | 2023-12-27T04:08:06.386Z block-manager: block 1003 commit
   demo-agd-1  | 2023-12-27T04:08:07.396Z block-manager: block 1004 begin
   demo-agd-1  | 2023-12-27T04:08:07.398Z block-manager: block 1004 commit
   

5. Start the smart contract:
   bash
   yarn start:contract
   

6. Start the user interface (UI) for the game:
   bash
   yarn start:ui
   

7. Open the index.html file in your browser using the provided URL to interact with the game.

### Running the Project

After following the steps above,
run the index.html file 
 you can run the HTML file located in the main branch to access the UI and start playing the DeFi game.

## Testing

To run the unit tests for the smart contract, use the following command:
bash
yarn test


To run end-to-end (e2e) tests, use the following command. You can replace `chrome` with your preferred browser:
bash
yarn test:e2e --browser chrome


## Contributing

We welcome contributions to this project! To get started, please refer to the [CONTRIBUTING.md](./CONTRIBUTING.md) file for guidelines on how to contribute to this repository.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Support

For support and troubleshooting, refer to the detailed instructions and resources in the [Agoric Documentation](https://docs.agoric.com/guides/getting-started/).


This updated README.md file introduces your *STO-PAP-SCI* DeFi game and provides detailed instructions for running and interacting with the project. Let me know if you'd like any further changes!
