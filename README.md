[![make.fun · u-carbon-forge-snooze-button-roast-14cbafc6](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-snooze-button-roast-14cbafc6)
[![make.fun · u-carbon-forge-snooze-button-roast-14cbafc6 · rank](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/Junior-Coding-ID/snooze-button-roast/rank.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6)
[![make.fun · u-carbon-forge-snooze-button-roast-14cbafc6 · reward](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/Junior-Coding-ID/snooze-button-roast/reward.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6)

# Snooze Button Roast

One-line roast of an alarm clock that rings at 6 AM on a Saturday, for the
[make.fun bounty](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6).

## The entry

> Saturday, 6 AM, my alarm rang like it had a job interview and I had a mortgage, but buddy, neither of us is employed today.

123 characters, one line, ASCII only. The alarm is the over-eager one — it shows
up like it has a job interview — and the punchline lands in the last words:
neither of us is employed today.

## How it works

`main.ts` is a Node-only program (no dependencies). It holds the line
as a constant, gates it (exactly 123 characters, 1–200, single line, ASCII only,
no leading/trailing whitespace), writes it byte-exact to
`$MAKEFUN_OUTPUT/entry.txt` (default `/output`) with no trailing newline, then
reads the file back and throws if it differs byte-for-byte. Deterministic: every
run produces the same 123 bytes.

Run it:

```sh
node main.ts
```
