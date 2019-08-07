/**
 * Returns a content as a string, tranforming undefined as an empty string if needed
 *
 * @param input Input to transform if undefined
 */
export const returnEmptyWhenUndefined = (input: string | undefined): string => {
  return input === undefined ? '' : input;
};
