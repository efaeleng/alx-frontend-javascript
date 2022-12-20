export default function appendToEachArrayValue(array, appendString) {
  // eslint-disable
	for (const value of array) {
  // eslint-disable
		array[array.indexOf(value)] = appendString + value;
  }

  return array;
}
