export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dvue = new DataView(buffer);

  // check if position is outside range
  if (position >= length) throw new Error('Position outside range');
  // set the new value in the desired position
  dvue.setInt8(position, value);

  return dvue;
}
