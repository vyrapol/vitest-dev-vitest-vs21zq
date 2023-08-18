function isValidObject(obj: any): boolean {
  return obj !== null && typeof obj === 'object' && !Array.isArray(obj);
}

function isObjectEmpty(obj: Object): boolean {
  if (!isValidObject(obj)) {
    return true;
  }
  return Object.keys(obj).length === 0;
}

export default {
  isObjectEmpty,
  isValidObject,
};
