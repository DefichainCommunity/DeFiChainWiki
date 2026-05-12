---
title: cAssets dToken Wrapper
description: How to use the DeFiChain Community cAssets/dToken Wrapper with MetaMask.
---

# 🔄 Using the cAssets / dToken Wrapper with MetaMask


## 📋 Table of Contents

- [💡 What is the cAssets dToken Wrapper?](#-what-is-the-cassets-dtoken-wrapper)
- [✅ Requirements](#-requirements)
- [🔌 Step 1 – Open the dApp & Connect Wallet](#-step-1--open-the-dapp--connect-wallet)
- [🔄 Step 2 – Wrap cAssets into dTokens](#-step-3--wrap-cassets-into-dtokens)
- [↩️ Step 3 – Unwrap dTokens into cAssets](#-step-4--unwrap-dtokens-into-cassets)
- [💱 Step 4 – Swap Tokens (DEX)](#-step-5--swap-tokens-dex)


---


## 💡 What is the cAssets dToken Wrapper?

The **cAssets dToken Wrapper** is a community frontend built by the DeFiChain Community, developed by the **DTL Team** (Dex Trading Live). It was created as a replacement for the discontinued VanillaSwap UI.

| Feature | Description |
|---------|-------------|
| **Wrap** | Convert cAssets (EVM side) into dTokens (native DeFiChain) |
| **Unwrap** | Convert dTokens back into cAssets |
| **Swap** | Exchange tokens directly via the DeFiMetaChain DEX |

**Examples of supported assets:**

| cAsset (EVM) | dToken (Native) |
|-------------|----------------|
| `cUSDC` | `dUSDC` |
| `cDFI` | `DFI` |


> ℹ️ **cAssets** are tokens on the **EVM side** of DeFiMetaChain (compatible with MetaMask). **dTokens** are tokens on the **native DeFiChain side**. The wrapper bridges both sides.

> ⚠️ The dApp is still in active development – minor bugs may occur.


---


## ✅ Requirements

- [ ] **MetaMask** installed (browser extension)
- [ ] **DeFiMetaChain network** added to MetaMask
- [ ] **cAssets or DFI** in your wallet for transactions
- [ ] Some **DFI for gas fees**

> ⚠️ Without DFI for gas, no transactions can be made!


---


## 🔌 Step 1 – Open the dApp & Connect Wallet

### 1.1 – Open the dApp

Open your browser and type the URL manually:

```
https://defichaincommunity.github.io/cAssets_dToken_wrapper/
```

> ⚠️ **Always type the URL manually** – phishing sites imitate dApps!

### 1.2 – Connect Your Wallet

Click **"Connect Wallet"** on the homepage and select **"MetaMask"**.

### 1.3 – Confirm the Connection in MetaMask

MetaMask will open automatically:

1. Check the displayed website address:
```
defichaincommunity.github.io
```
2. Select your account
3. Click **"Connect"**

> ✅ Your wallet address will appear at the top of the dApp – connection active!


---


## 🔄 Step 2 – Wrap cAssets into dTokens

"Wrapping" means transferring cAssets from the **EVM side** to the **native DeFiChain side**.

### 2.1 – Open the Wrap Function

Click **"Wrap"** or **"Convert"** in the navigation.

### 2.2 – Select Token and Amount

1. Select the **cAsset** you want to wrap (e.g. `cUSDC`)
2. Enter the **amount**
3. The target dToken is shown automatically (e.g. `dUSDC`)

### 2.3 – Approve the Token (first time only)

On first use, you need to allow MetaMask to use the token:

1. Click **"Approve"**
2. MetaMask opens with an approval request
3. Check the token and amount
4. Click **"Confirm"**

> ℹ️ The approval transaction costs a small gas fee in DFI and only needs to be done once per token.

### 2.4 – Confirm the Wrap

1. Click **"Wrap"** / **"Convert"**
2. MetaMask opens with the transaction request
3. Check the amount and gas fees
4. Click **"Confirm"**

> ✅ After confirmation, the dTokens will appear in your native DeFiChain wallet.


---


## ↩️ Step 3 – Unwrap dTokens into cAssets

"Unwrapping" means transferring dTokens from the **native DeFiChain side** back to the **EVM side**.

### 3.1 – Open the Unwrap Function

Click **"Unwrap"** or switch the direction of the converter.

### 3.2 – Select Token and Amount

1. Select the **dToken** you want to unwrap (e.g. `dUSDC`)
2. Enter the **amount**
3. The target cAsset is shown automatically (e.g. `cUSDC`)

### 3.3 – Confirm the Transaction

1. Click **"Unwrap"**
2. Confirm in MetaMask
3. cAssets will appear in your MetaMask wallet


---


## 💱 Step 4 – Swap Tokens (DEX)

The wrapper also includes a **swap function** for the DeFiMetaChain DEX.

### 4.1 – Open Swap

Click **"Swap"** in the navigation.

### 4.2 – Select Tokens

1. Select the **token you are selling** (e.g. `DFI`)
2. Select the **token you want to receive** (e.g. `cUSDC`)
3. Enter the **amount**
4. The exchange rate and expected output are displayed

### 4.3 – Check Slippage

> 💡 **Slippage** is the maximum price deviation you accept. Increase it if liquidity is low.

### 4.4 – Confirm the Swap

1. Click **"Swap"**
2. MetaMask opens with the transaction request
3. Check: amount, token received, gas fees
4. Click **"Confirm"**

> ✅ The swapped tokens will appear in your wallet after confirmation!


---


## 🔗 Official Links

| Resource | Link |
|----------|------|
| 🔄 cAssets dToken Wrapper | [defichaincommunity.github.io](https://defichaincommunity.github.io/cAssets_dToken_wrapper/) |
| 📖 DeFiChain Blog | [blog.defichain.com](https://blog.defichain.com) |
| 🌐 DeFiChain Website | [defichain.com](https://defichain.com) |

---

