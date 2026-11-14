export interface NameParts {
  first: string;
  last: string;
}

export function splitName(fullName: string): NameParts {
  const [first, ...rest] = fullName.split(' ');
  return { first, last: rest.join(' ') };
}
