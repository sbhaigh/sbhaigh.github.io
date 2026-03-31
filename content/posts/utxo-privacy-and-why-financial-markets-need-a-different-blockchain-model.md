---
title: "UTXO, Privacy and Why Financial Markets Need a Different Blockchain Model"
date: 2026-02-03
author: Steve Haigh
tags:
  - utxo
  - privacy
  - blockchain
  - digital-assets
  - post-trade
---
_Why account-based chains solve one problem, while UTXO is often better suited to provenance, confidentiality and market infrastructure._

People still talk about blockchain as though it is one thing. It isn't. Different blockchain systems make different trade-offs about how assets move, how state is represented, what gets shared, and how easy it is to prove what actually happened. In financial markets, those choices matter far more than the broad "blockchain" label suggests.

For me, one of the most important distinctions is between account-based systems and UTXO-based systems, and I think UTXO is the better fit for markets. Account-based systems tend to model the world as a current state: who owns what now, what the balance is now, what the contract says now. UTXO systems work differently. They are built around consuming existing outputs and creating new ones, which makes state transition much more explicit.

That may sound like an implementation detail, but it really is not. Financial markets are driven by events. Cash moves. Title moves. Collateral is allocated and released. Positions are adjusted. Obligations are settled. In that sort of world, it is not enough to know the current state. You also need to know how you got there. That is where UTXO starts to look very strong, because it gives you a cleaner story for lineage and provenance. One thing is consumed, another is created, and you can trace the path from one state to the next in a way that feels much closer to how financial events actually work.

Account-based systems are often better suited to building applications. They are flexible, expressive and familiar to developers. But financial market infrastructure is not just an app problem. It is an evidential problem. You need to show ownership, transfer, entitlement and finality in a way that stands up when somebody asks difficult questions, whether that is an auditor, a regulator, an operator or a counterparty. UTXO is naturally good at that because it treats transitions as first-class things rather than side effects of updating a shared balance.

There is then the separate question of public and private, permissionless and permissioned. People often muddle those up. A public chain is broadly visible, while a private one is not. A permissionless chain allows open participation under the rules of the network, while a permissioned one restricts participation to approved parties. Those are governance choices. UTXO is a transaction model. The two things are related, but they are not the same.

That matters because people too often assume that using a public permissionless UTXO blockchain means putting business data out in the open. It does not have to. In fact, I think one of the more interesting models for financial markets is to build a privacy layer over a public permissionless UTXO blockchain. In that model, the public chain becomes a neutral truth layer for ordering, timestamping and evidencing state transitions, without carrying the underlying business data in the clear. You do not need to put trade economics, client identities, settlement instructions or sensitive counterparty information on-chain. You put commitments on-chain, not the raw facts.

That is where Merkle trees, cryptography and derived keys come in. A Merkle tree allows you to commit to a structured set of data with a single root, and later prove that a particular item was included without revealing everything else. In markets, that is exactly the sort of thing you want. Selective disclosure, not full disclosure. Cryptography allows the underlying records to remain protected off-chain while still letting you prove integrity and linkage on-chain. Derived keys matter because they reduce linkability. If you derive fresh keys for different assets, transactions or workflows, you make it much harder to map activity across the entire system. In wholesale markets, that is not an optional extra. It is basic hygiene.

And privacy in financial markets is not a nice-to-have. Firms cannot expose positions, counterparties, collateral movements and settlement activity to the wider world and hope for the best. That would be commercially reckless. At the same time, regulators and authorised parties may still need controlled visibility. So the design goal is not secrecy, and it is not radical transparency either. It is controlled disclosure with strong evidence.

That, to me, is where UTXO starts to look more serious than the industry often gives it credit for. It gives you a disciplined way to model transitions, a strong evidential trail, and a better base for building privacy-preserving infrastructure on top of public permissionless rails. I am not saying every financial market workflow should sit directly on a public chain. That would be daft. Markets still need identity, governance, legal frameworks and operational controls. But I do think a public permissionless UTXO blockchain, with a proper privacy layer above it, is a far more interesting model than people often assume.

The industry has spent years treating UTXO as yesterday's design and account-based chains as the more sophisticated answer. I am not convinced. If your main concern is building rich on-chain applications, account-based systems are often easier. If your concern is market infrastructure, where provenance, privacy, finality and evidential integrity really matter, UTXO has a lot going for it. Possibly more than most people realise.