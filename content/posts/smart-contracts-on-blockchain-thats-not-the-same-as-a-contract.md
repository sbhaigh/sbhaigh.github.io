---
title: "Smart Contracts on Blockchain? That's Not the Same as a Contract"
date: 2026-01-17
author: Steve Haigh
tags:
  - smart-contracts
  - digital-assets
  - post-trade
  - blockchain
---
There is a habit in this industry of taking a perfectly good term, squeezing it through a narrow technical lens, and then pretending nothing got lost in the process.

That is more or less what has happened with smart contracts.

These days, if someone says "smart contract", what they usually mean is on-chain code, generally in the Ethereum mould. Code is deployed to a blockchain, it executes deterministically, state changes, and that is taken to be the contract.

I think that gets the wrong end of the stick.

Putting code on-chain is not the same thing as representing a contract. In most cases, it is not even close. What it usually gives you is a mechanism for execution and state transition. Useful, certainly. Clever, sometimes. But that is not the same as capturing the legal, operational and economic reality of an agreement between parties.

That distinction is not academic. It matters a great deal if you work in financial services, where contracts are not just chunks of logic waiting to be run, but living arrangements made up of rights, obligations, timing, events, exceptions, notices, calculations, disputes and recourse.

Some of that can be automated very well.

Some of it cannot.

And some of it absolutely should not be confused with whatever happened to execute on a blockchain.

That, for me, is where much of the modern smart contract conversation goes off the rails.

## The industry has mistaken execution for meaning

The prevailing blockchain view of smart contracts tends to collapse everything into execution.

If the code ran, then the contract has done its job.

If the ledger updated, then the event has happened.

If the network reached consensus, then the matter is settled.

That might be fine for a narrow category of digital asset transfer. It is nowhere near enough for most serious contracts, and it is certainly not enough for many financial contracts.

A repo is not just code.
A derivative is not just code.
A settlement obligation is not just code.

These things sit inside a legal framework, an operating model and a market context. They depend on data, process, timing, fallback provisions and, from time to time, plain old human judgement. There are notices to issue, calculations to validate, events to interpret and disagreements to resolve. Anyone who has spent time around real post-trade operations knows the world is rarely as neat as the on-chain story likes to suggest.

So when people say a blockchain smart contract is the contract, I think that is giving the technology too much credit and not nearly enough scrutiny.

More often than not, it is a piece of automation attached to a contract-shaped problem.

That is not the same thing.

## Ethereum made this way of thinking feel normal

Ethereum deserves credit for making programmable blockchain infrastructure mainstream. It gave developers a general-purpose platform for writing code that manages assets and shared state directly on-chain.

Technically, that was a big step forward.

But it also hard-wired a particular mental model into the market. In an account-based system, the natural pattern is to build a long-lived application that owns mutable state. The contract becomes a software object. Assets are balances or records within that object. Behaviour is expressed through functions that update shared state over time.

That is powerful, but it is also where the conceptual slippage begins.

Because once you start thinking that way, it becomes very easy to assume that the application state is the contract, or at least the definitive expression of it.

In practice, that is often not true.

What you have is a system that records and executes some operational aspects of an arrangement. You may have captured transfer logic, calculation rules, entitlement conditions or settlement steps. Fine. But you have not necessarily captured the actual meaning of the agreement in the round. You have not captured the legal framework. You have not captured every exception. You have not captured the fact that commercial life has rough edges and strange corners and occasionally refuses to sit nicely inside deterministic code.

There is a tendency in blockchain circles to brush past that point. I think that is a mistake.

## In financial services, provenance matters just as much as state

This is where the comparison between account-based and UTXO-based models becomes more interesting than people sometimes allow.

At first glance, it can seem like a technical distinction. One model updates balances in accounts. The other consumes and creates discrete outputs. But the difference runs deeper than that, because it changes the shape of the system and the way you reason about what has happened.

Account-based systems are naturally geared towards maintaining current state. Who owns what, what the balance is, what the contract storage says right now.

UTXO-based systems are naturally geared towards transition and lineage. What existed before, what was consumed, what was created, and how one state gave rise to another.

That matters in finance.

A great deal of financial processing is event-driven. Cash is paid. Title transfers. Collateral is allocated. Positions are reset. Assets are encumbered, released, novated or settled. In those scenarios, the important question is often not just "what is the current state?" but "how did we get here, through which chain of rights, obligations and events?"

That is one reason UTXO-based models can feel closer to the underlying commercial problem. They force a discipline around provenance. They encourage explicit state transitions. They produce a more natural evidential trail.

I would not push that too far. UTXO systems can be awkward for certain types of general application logic, and account-based systems are often more straightforward for developers building rich applications. Fair enough.

But if you are dealing with contracts, especially where auditability, traceability and event lineage matter, the UTXO model has a habit of asking the right questions.

Not just what the state is now, but how it came to be.

That is often the more important thing.

## The phrase "code is law" was always a bit glib

One of the more enduring slogans to come out of blockchain was "code is law".

It is catchy. It also papers over quite a lot.

Code is not law. Code is code. It does what it has been written to do, no more and no less. That can be useful. It can be rigorous. It can be highly effective where the rules are clear and bounded. But it does not interpret intent, weigh ambiguity, handle unforeseen commercial circumstances, or step outside its own model of the world.

Law, by contrast, exists precisely because the world does not fit neatly into machine branches.

So I have always thought "code is law" confused enforcement with meaning. It mistakes the ability to execute something automatically for the ability to capture the full substance of what has been agreed.

In the real world, and particularly in financial services, a contract is broader than its implementation. It is not exhausted by the code.

That does not reduce the value of automation. Far from it. Good automation is essential. Deterministic execution is valuable. Verifiable state transitions are valuable. Shared records are valuable. But they remain parts of a larger picture.

That is the point.

## A better way to think about smart contracts

For my money, a smart contract should not be defined by whether it runs on-chain.

It should be defined by whether it faithfully expresses and automates the operationally deterministic parts of an agreement.

That may involve blockchain.
It may not.

It may involve workflow engines, event processors, state models, shared ledgers, rule engines, API integrations and legal documentation, all working together.

That is much closer to how serious systems in financial markets actually have to be built.

The real design question is not, "Can we put this contract on-chain?"

It is, "Which parts of this arrangement are precise enough to automate, which parts need evidence and traceability, and which parts remain anchored in legal text and operational process?"

That is a far better question. It is also a more grown-up one.

Because once you frame it properly, it becomes obvious that putting code on a blockchain is only one implementation choice among many. Sometimes it is the right one. Sometimes it is not. Often it is only part of the answer.

## So what is the point being missed?

The point being missed is that contracts are about meaning before they are about execution.

Execution matters, of course it does. But meaning comes first. Rights and obligations come first. The legal relationship comes first. The operating model comes first. Evidence, process and governance all come first.

The machine should serve that reality, not pretend to replace it.

That is why I think so many blockchain smart contracts miss the point. They start from the implementation and work backwards. They assume that because a thing can execute deterministically on-chain, it has somehow captured the contract in full.

Usually, it has not.

Usually, it has captured one slice of behaviour and wrapped it in more certainty than it deserves.

And in financial services, that is not a small distinction. It is the whole game.