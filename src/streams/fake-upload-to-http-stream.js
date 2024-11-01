import { Readable } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;
  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));

        this.push(buf);
      }
    }, 1000);
  }
}

fetch("http://localhost:3334", {
  method: "POST",
  body: new OneToHundredStream(),
  duplex: "half",
});

// para resolver o erro
// https://github.com/rocketseat-education/ignite-nodejs-01-fundamentos-nodejs/commit/cbfd026b8be2f7837f2fa1d8b0e69d94abf70950
