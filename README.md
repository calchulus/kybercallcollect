
# KyberCallCollect

[Demo](https://calchulus.github.io/kybercallcollect/)

The goal of the KyberCallCollect is to allow individuals who have no ETH to send any transactions, but may have an ERC-20 that is airdropped to them, can transact out using a “Call Collect” logic, so that the recipient can front the estimated gas fee at the time of transaction so that the sender has ETH to move the ERC-20.

In this dApp, we allow a user to create a new wallet using Torus by providing simply an email. From here, we pass over the address over to the Kyber Widget call, and pull average gas fees at the time of load (from ETH Gas Station), as well as the live ETH/DAI exchange rate from the Kyber Trading API, and then calculate the estimated gas necessary.
<img src="https://calchulus.github.io/kybercallcollect/screenshots/shot1.png" alt="drawing" width="70%" height="auto" style="margin-left:15%"/>
<img src="https://calchulus.github.io/kybercallcollect/screenshots/shot2.png" alt="drawing" width="70%" height="auto" style="margin-left:15%"/>


From there, we have an auto-populated Kyber Widget that allows the “collector” to send the requisite ETH for the user to then send their owed funds.

<img src="https://calchulus.github.io/kybercallcollect/screenshots/kyber.png" alt="drawing" width="30%" height="auto" style="margin-left:35%"/>


Some future additions could be made - Instead of requiring a counterparty, it may be possible to draw these tokens directly from a Kyber Reserve, such that users just swap and trade. 



A future addition would be to offer a buffer of extra ETH in case gas fees fluctuate.

The key achievements of this hack include:  
1. allowing a new crypto adopter to get involved right away from just an email address

2. Pulls live data on gas fees to best educate a user on what’s going on with gas.

3. Integrating two Kyber APIs & Torus SDK 

<img src="https://calchulus.github.io/kybercallcollect/screenshots/torus.png" alt="drawing" width="30%" height="auto" style="margin-left:35%"/>
