function removeNumberFromString(str) {
  // Remove numbers from the beginning of the string
  return str.replace(/^\d+[-]?/, "");
}

export { removeNumberFromString };
