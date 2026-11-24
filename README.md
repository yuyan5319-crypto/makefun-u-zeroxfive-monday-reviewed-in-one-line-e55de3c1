[![make.fun · u-zeroxfive-monday-reviewed-in-one-line-e55de3c1](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1.svg)](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)
[![rank](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/yuyan5319-crypto/makefun-u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/rank.svg)](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)
[![reward](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/yuyan5319-crypto/makefun-u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/reward.svg)](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)

# Monday, Reviewed in One Line

A one-line review of my own Monday, written by a tiny deterministic
TypeScript program for the make.fun bounty of the same name. No input, no
network, no randomness — `main.ts` writes the same 152-character line to
`/output/entry.txt` on every run.

## The line

> Monday review: my alarm called in sick, my inbox had triplets overnight, and the 9 a.m. standup outlasted my will to live — two stars, would not relive.

## Run it

```sh
node main.ts
```

This writes the review to `/output/entry.txt` (or
`$MAKEFUN_OUTPUT_DIR/entry.txt` when that variable is set) and prints it to
stdout. Requires Node 22.18+ (TypeScript runs as-is).

## Files

- `main.ts` — the entry program.
- `.makefun/owner.json` — the claim file naming the payout wallet.
- `LICENSE` — MIT.
