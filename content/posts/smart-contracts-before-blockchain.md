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

Smart Contracts Before Blockchain

A 1990s idea we’ve slightly oversold

If you listen to enough conversations in digital assets, you’d be forgiven for thinking smart contracts are something that live on blockchains.

They’re not.

Or at least, they didn’t start that way. And in my view, they don’t need to.

The term itself goes back to the 1990s, when Nick Szabo was writing about whether agreements could be expressed in software and enforced by the system itself. This was well before Bitcoin, long before Ethereum, and long before we started attaching tokens to everything that moves.

His idea was fairly grounded. If you can define the rules of an agreement clearly enough, you can build a system that enforces those rules without needing people in the middle.

The example he used was a vending machine. You put money in, press a button, and if everything lines up, out comes your drink. No reconciliation, no follow-up, no debate about what was meant to happen. It just does what it’s supposed to do.

That’s a smart contract in the original sense.

And importantly, there’s no blockchain anywhere in sight.

Somewhere along the way, the meaning shifted

The association between smart contracts and blockchains really took off with Ethereum. When Ethereum launched in 2015, it explicitly positioned itself as a platform for running “smart contracts”, and that framing stuck.

Since then, the term has been more or less absorbed into blockchain vocabulary. In most conversations today, a smart contract is assumed to be code deployed on a blockchain, typically running inside something like the Ethereum Virtual Machine.

That’s understandable, but it’s also a bit of a category mistake.

Because what Szabo was describing wasn’t tied to any particular infrastructure. It was a property of a system. If a system encodes the rules of an agreement and enforces them automatically, then by that definition, it’s a smart contract. It doesn’t matter whether it runs on a blockchain, a server, or a fairly old bit of embedded hardware.

A vending machine qualifies.

So does any piece of software that deterministically enforces an agreement between parties.

Which means the idea is much broader, and much more useful, than the current shorthand suggests.

The real problem: contracts aren’t simple

All of that works nicely for simple systems.

If the rules are clear, the inputs are known, and the outcomes are limited, then automating the agreement is entirely sensible. In those cases, code is exactly what you want. It removes ambiguity, enforces consistency, and gets rid of a lot of unnecessary operational overhead.

But most real contracts, particularly in financial markets, don’t look like that.

They’re long-lived, nuanced, and full of edge cases. Terms get amended. Events occur that no one quite anticipated. Different parts of the agreement interact in ways that only become clear over time. And when something doesn’t line up neatly, the answer isn’t sitting there waiting in a function call.

It’s worked out through interpretation.

That’s the bit the “smart contract” narrative tends to gloss over. Real contracts aren’t just about execution. They’re about meaning. They’re written in a way that leaves room for context, intent and, occasionally, disagreement. Not because lawyers enjoy ambiguity, but because the real world doesn’t fit neatly into predefined branches of logic.

And when things do go wrong, as they inevitably do, you don’t turn to the code and say “that’s final”.

You go back to the contract.

And very often, to the lawyers.

Code is not law

There’s a phrase that crops up from time to time: code is law.

I’ve never found that particularly convincing in the context of capital markets.

Code is precise. It does exactly what it’s told. That’s its strength. But it only deals with what has been explicitly modelled. It doesn’t cope well with ambiguity, conflicting interpretations, or situations that sit outside what anyone thought to encode at the outset.

Law is different. It exists precisely to deal with those situations. It handles intent, context, judgement, and the messy edge cases that don’t fit neatly into a predefined structure.

Trying to collapse one into the other doesn’t really work.

You can encode a lot of behaviour in code. You can make systems highly deterministic. But you can’t realistically capture every possible outcome of a complex financial agreement, and you certainly can’t remove the need for interpretation when something unexpected happens.

At that point, the “smart” contract isn’t particularly smart. It’s just rigid.

This isn’t about blockchain

It’s also worth being clear that none of this is an argument against blockchain.

Blockchains are useful. They give you shared state, tamper resistance, and a way for multiple parties to agree on outcomes without a central operator. That’s valuable.

But they’re not what makes something a smart contract.

The industry has slightly conflated the two ideas. Smart contracts became “things that run on blockchains”, when in reality they’re just systems that enforce agreements automatically.

Blockchain is one way of doing that.

Not the only way.

Where this shows up in practice

From where I sit, working in post-trade and digital assets, this distinction matters quite a lot.

A big part of what we’re doing at <a href="https://tokenovate.com" target="_blank" rel="noopener noreferrer">Tokenovate</a> is building systems that codify the lifecycle of financial products. In particular, using the <a href="https://cdm.finos.org" target="_blank" rel="noopener noreferrer">FINOS Common Domain Model (CDM)</a> to represent the rules of derivatives and securities financing transactions, based on things like ISDA and GMRA agreements.

In many ways, that is exactly what Szabo was getting at.

You take the economic terms, the lifecycle events, the allowable state transitions, and you express them in a form that a system can apply deterministically. If an event is valid, it moves the contract from one state to another. If it isn’t, it doesn’t.

By any reasonable definition, that’s a smart contract.

And it doesn’t need to sit on a blockchain to be one.

But it still isn’t the whole contract

Even then, it’s not complete.

You can codify a great deal of the lifecycle. You can make behaviour far more deterministic than it is today. You can remove a lot of reconciliation and ambiguity from the operational layer.

But you can’t capture everything.

There will always be edge cases. There will always be scenarios that weren’t anticipated. There will always be moments where interpretation matters, where the wording of the legal agreement takes precedence, and where the system doesn’t have a definitive answer.

At that point, you fall back to the legal contract.

And, usually, to the lawyers.

So what are smart contracts, really?

If you strip away the hype, smart contracts are best understood as:

systems that automate the well-defined parts of an agreement.

That’s already useful. In fact, it’s quite powerful. But it’s not the same as replacing the agreement itself, and it’s not the same as eliminating ambiguity altogether.

In simple systems, smart contracts work well.

In complex financial instruments, they’re only part of the picture.

Closing thought

The original idea behind smart contracts still stands up. If you can define the rules clearly enough, you can get the system to enforce them.

That’s worth pursuing.

But it only takes you so far.

You can automate the predictable bits. You can make execution cleaner. You can reduce the need for trust in process.

But you can’t write code for every edge case. You can’t eliminate ambiguity entirely. And you can’t replace the role of legal interpretation when things get difficult.

So yes, smart contracts are useful.

But they’re not quite as smart as we sometimes make them out to be. Oh, and they don't have to live on a blockchain.
