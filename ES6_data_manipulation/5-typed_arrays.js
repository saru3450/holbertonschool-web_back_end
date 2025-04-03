export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const vue = new DataView(buffer);
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  vue.setInt8(position, value);
  return vue;
}
