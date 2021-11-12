export default class Password {
  constructor(length, patterns) {
    this.length = length;
    this.pattern = new RegExp(
      patterns.reduce(
        (acc, curr) => new RegExp(acc.source + "|" + curr.source)
      ),
      "g"
    );
  }
  getRandomByte() {
    let result = new Uint8Array(1);
    window.crypto.getRandomValues(result);
    return result[0];
  }
  generate() {
    return Array.apply(null, { length: this.length })
      .map(() => {
        let result;
        while (true) {
          result = String.fromCharCode(this.getRandomByte());
          if (this.pattern.test(result)) {
            return result;
          }
        }
      }, this)
      .join("");
  }
}
