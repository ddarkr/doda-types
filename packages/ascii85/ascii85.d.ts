declare module "ascii85" {
  interface Ascii85 {
    /**
     * Encode a string or Buffer.
     *
     * @param data A string or a Buffer.
     * @param options If it's provided, it can be an array of character or an option object.
     */
    encode(data: string | Buffer, options?: Array<any> | object): Buffer;

    /**
     * Decode a ascii85-encoded string or Buffer.
     *
     * @param str string or Buffer. All invalid characters will be discarded. If `str` starts with `<~`, it must have `~>` at the end. Otherwise, an error will be thrown.
     * @param table a sparse array to map char code to decoded value for decoding.
     */
    decode(str: string | Buffer, table?: Array<any> | object): Buffer;
  }
  let k: Ascii85;
  export = k;
}
