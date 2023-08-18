// capitalize each word in a string
export function capitalize(str: string): string {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export function splitGetFirst(
  str: string,
  delimiter: string = ' ',
  joinDelimiter: string = ''
): string | undefined {
  if (str === undefined) {
    return undefined;
  }
  return str
    .split(delimiter)
    .map((i) => i[0])
    .join(joinDelimiter)
    .toUpperCase();
}

export function toLowerKebab(str: string): string {
  return str.toLowerCase().replace(/ /g, '-');
}

export function underscoreToCamel(str: string): string {
  return capitalize(str.replace(/_/g, ' '));
}
