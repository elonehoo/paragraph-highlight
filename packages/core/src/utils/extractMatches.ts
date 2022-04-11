export const extractMatchesStrings = (
  wordChunk: string | (string | unknown)[]
): string[] => {
  if (typeof wordChunk === "string") {
    return [];
  }
  return wordChunk
    .filter((w) => typeof w !== "string")
    .map((v) => {
      if (typeof v === "string") {
        return v;
      }
      return (v as { children: string }).children;
    });
};
