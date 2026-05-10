---
title: Chain.report
description: This page explains how to set up Chain.report for DeFiChain and DefiMetaChain tax reporting.
---

# 📋 Chain.report – Setup Guide

> **Chain.report** is a crypto tax tool that imports transactions from exchanges and wallets and generates a legally compliant tax report.


---


## 📋 Table of Contents

- [🔐 Create an Account](#-create-an-account)
- [🏦 Add an Exchange](#-add-an-exchange)
- [⛓️ Add a DeFiChain Wallet](#%EF%B8%8F-add-a-defichain-wallet)
- [🦊 DefiMetaChain – Lightwallet / EVM Address](#-defimetachain--lightwallet--evm-address)
- [🦊 DefiMetaChain – MetaMask Address](#-defimetachain--metamask-address)
- [🗂️ Create a Subwallet](#%EF%B8%8F-create-a-subwallet-for-dapps--smart-contracts)


---


## 🔐 Create an Account

1. Go to [chain.report/en/sign-up/](https://chain.report/en/sign-up/) and enter your **email address** and a secure **password**.
2. Click the **confirmation link** in the email sent to you by chain.report.
3. Log in at [chain.report/en/sign-in/](https://chain.report/en/sign-in/).


---


## 🏦 Add an Exchange

1. Navigate to **Wallets** → **"+ Add Exchange"**.
2. Select your exchange from the list (e.g. Binance, Kraken, Bitstamp).
3. Create a **Read-Only API key** in your exchange:
   - Profile → API Management → create a new key with **read-only access only**
   - Copy the key & secret
4. Enter the API key and secret in chain.report and click **"Save"**.

> [!WARNING]
> **Never** grant the API key trading or withdrawal permissions – read-only access is all that is required.

> [!TIP]
> The automatic API import is easier and more accurate than a manual CSV import.


---


## ⛓️ Add a DeFiChain Wallet

The classic DeFiChain address starts with **`d...`** – no API key required.

1. Navigate to **Wallets** → **"+ Add Wallet"** → select **DeFiChain / DFI**.
2. Copy your public wallet address:

   | Wallet | Where to find the address |
   |--------|--------------------------|
   | **DeFiChain App** | Portfolio → "Receive" → copy address |
   | **DeFiChain Desktop** | Click your address at the top → Copy |
   | **Bake** | Wallet overview → DFI receive address |

3. Enter the address and click **"Save"**.

> [!WARNING]
> Only enter your **public wallet address** – never your private key or seed phrase!

> [!NOTE]
> Multiple DeFiChain addresses? Repeat the steps for each additional address.


---


## 🦊 DefiMetaChain – Lightwallet / EVM Address

DMC addresses start with **`0x...`**. **Two separate addresses** must be added – this one is the EVM address from the Lightwallet.

1. Navigate to **Wallets** → **"+ Add Wallet"** → select **DefiMetaChain / DMC**.
2. Open the **DeFiChain Lightwallet App** → switch to the **EVM section**.
3. Tap **"Receive"** and copy the `0x...` address.
4. Enter the address in chain.report and click **"Save"**.


---


## 🦊 DefiMetaChain – MetaMask Address

This is the second DMC address – the one from your MetaMask wallet.

1. Navigate again to **Wallets** → **"+ Add Wallet"** → select **DefiMetaChain / DMC** again.
2. Open **MetaMask** and make sure you are connected to the **DefiMetaChain network**.
3. Copy the displayed `0x...` address.
4. Enter the address in chain.report and click **"Save"**.

> [!NOTE]
> The Lightwallet EVM address and the MetaMask address are **two different `0x...` addresses** and must both be added separately to ensure all transactions are captured completely.


---


## 🗂️ Create a Subwallet 

When you use dApps on the DefiMetaChain—e.g., for staking, liquidity mining, or other protocols—your wallet interacts with a smart contract belonging to the respective service provider.
chain.report cannot automatically and correctly identify all smart contracts.

In such cases, creating a sub-wallet within the service provider's specific wallet is the solution.

The detected transactions must then be processed and assigned to this sub-wallet.

> [!WARNING]
> Without processed transactions and a sub-wallet, chain.report cannot recognize a staking deposit as such; the tokens will simply appear to "vanish" and will be treated incorrectly for tax purposes.

**Example:** When you deposit tokens into a dApp (e.g. staking with Crypto Factor), those tokens are sent to the dApp's smart contract. The subwallet maps this smart contract inside chain.report – so the deposit is correctly recognised as a *transfer to the staking contract* and later payouts are recognised as *rewards or returns*.

1. Navigate to **Wallets** and open the desired **MetaChain (DeFiChain EVM)** wallet.
2. Scroll down and tap **"Create Subwallet"**.
3. Give it a clear name – ideally the name of the dApp, e.g. `Crypto_Factor`.
4. Enter the **smart contract address** of the dApp.
   You can find it in the official documentation or GitHub repository of the respective dApp.
5. Confirm with **"Save"**.

> [!NOTE]
> Repeat this process for **every dApp you use**. You can create as many subwallets as needed within a single MetaChain wallet.

> [!TIP]
> Use descriptive names (e.g. `Crypto_Factor`, `DMC_DEX`) so you can immediately identify which transactions belong to which dApp in your tax report.

---




