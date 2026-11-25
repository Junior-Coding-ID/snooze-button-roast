import * as fs from "node:fs";
import * as path from "node:path";

// Snooze Button Roast — one-line roast of an alarm clock ringing at 6 AM on a Saturday.
// The line below is the entry: the alarm acts like it has a job interview and the
// sleeper has a mortgage, then the punchline lands in the last words — neither of
// them is employed today. Fresh angle: the alarm is the over-eager one, not the sleeper.
const ENTRY =
  "Saturday, 6 AM, my alarm rang like it had a job interview and I had a mortgage, but buddy, neither of us is employed today.";

function fail(message: string): never {
  throw new Error(message);
}

// Gate: the entry must be exactly 123 characters, a single ASCII line, no
// leading or trailing whitespace, inside the 1-200 character gate.
if (ENTRY.length !== 123) {
  fail(`entry length must be exactly 123, got ${ENTRY.length}`);
}
if (ENTRY.length < 1 || ENTRY.length > 200) {
  fail(`entry length out of gate 1-200: ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  fail("entry must be a single line");
}
if (/[^\x00-\x7F]/.test(ENTRY)) {
  fail("entry must be ASCII only");
}
if (ENTRY.trim() !== ENTRY) {
  fail("entry must not have leading or trailing whitespace");
}

const outDir: string = process.env.MAKEFUN_OUTPUT ?? "/output";
const outFile: string = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, ENTRY, "utf8");

// Verify-after-write: read the file back and compare byte-for-byte.
// Any difference (extra newline, encoding drift, truncation) fails the run.
const written: Buffer = fs.readFileSync(outFile);
const expected: Buffer = Buffer.from(ENTRY, "utf8");
if (!written.equals(expected)) {
  fail(
    `verify-after-write failed: wrote ${written.length} bytes, expected ${expected.length} bytes`,
  );
}

// Deterministic by construction: no timestamp, no randomness, no trailing
// newline — every run writes the same 123 bytes to entry.txt.

