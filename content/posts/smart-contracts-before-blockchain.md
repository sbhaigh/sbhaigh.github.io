---
title: "Smart Contracts Before Blockchain"
date: 2025-10-01
author: Steve Haigh
tags:
  - smart-contracts
  - digital-assets
  - post-trade
  - blockchain
---

A 1990s idea that we've slightly misunderstood

If you work anywhere near digital assets, you can't really avoid the term smart contract. It gets applied to just about everything. A bit of Solidity code? Smart contract. A DeFi protocol? Smart contract. Anything vaguely automated with a token attached? Probably also a smart contract.

I've always found that slightly unsatisfying.

Partly because it's imprecise, but mostly because it misses where the idea actually came from.

The term itself was coined in the 1990s by Nick Szabo, long before anyone was talking about blockchains in any practical sense. He wasn't trying to describe decentralised apps or on-chain execution environments. He was exploring something much more fundamental: whether you could design agreements so that they effectively enforce themselves.

Not "self-enforcing" in a marketing sense, but in a very literal one. The rules are defined clearly enough, and embedded deeply enough into the system, that the outcome follows automatically. No chasing, no reconciling, no arguing over interpretation after the fact.

His go-to example was a vending machine, which still holds up. You put money in, make a selection, and the machine either gives you the item or it doesn't. That's it. No ambiguity, no middle ground, no operational overhead. It's a contract that just… works.

There's something quite elegant about that, and also quite unglamorous. Which is probably why the industry has managed to drift away from it.

The word smart hasn't helped. It suggests something clever, maybe even a bit magical. In reality, what Szabo was getting at was the opposite. Not intelligence, but predictability. Not flexibility, but determinism. A smart contract, in the original sense, is just a system where the rules are explicit and the outcome is enforced by design.

That lands differently if you spend your time in post-trade.

A lot of what we do is deal with the fact that contracts don't behave like that. They're written in legal language, interpreted by different systems, processed by different parties, and then reconciled after the fact when things inevitably don't quite line up. There's a huge amount of infrastructure dedicated to working out what should have happened, what actually happened, and whether those two things are close enough.

So when people talk about smart contracts, I think the interesting question isn't "can we run this on a blockchain?" It's "can we remove some of that ambiguity?"

That was the original idea.

And it's worth saying, because it often gets lost, that none of this required a blockchain. Szabo wasn't imagining code deployed to a global network. He was thinking about software, cryptography, and systems design. The missing piece at the time was a shared, tamper-resistant record that multiple parties could rely on without handing control to a central intermediary.

Blockchain eventually turned up and solved that part of the puzzle, or at least one version of it. But somewhere along the way, the definition of a smart contract got collapsed into "code running on a blockchain", particularly in the Ethereum world.

That's fine as far as it goes, but it's a fairly narrow interpretation.

In fact, I'd argue it's a bit of a distraction in capital markets.

Because the problem we're trying to solve isn't really about where code runs. It's about whether the meaning of a contract can be expressed clearly enough that its lifecycle becomes deterministic. That's a much harder problem, and a much more interesting one. It involves legal terms, market conventions, lifecycle events, edge cases, and all the messiness that comes with real financial products.

You don't get very far with that if you treat everything as an application to be deployed.

From where I sit, working in post-trade and digital assets, the opportunity is less about inventing new kinds of contracts and more about making existing ones behave properly. Less ambiguity, less reconciliation, more shared understanding of state. That's where the operational gains are, and it's where things start to get properly scalable.

Which brings it back to Szabo.

The core idea still holds up remarkably well. Define the rules clearly enough, and the system can do the enforcing. Everything else is implementation detail.

Blockchain is one way of doing it. Not the only way, and not always the best one.

We've spent the last few years getting quite excited about the plumbing, which is understandable. But the interesting work, at least from a capital markets perspective, is still in the contract itself. What it means, how it evolves, and whether two parties can look at it and arrive at the same conclusion without a small army of systems and people in the middle.

That's the bit we haven't quite cracked yet.

And it's probably the bit that matters most.
