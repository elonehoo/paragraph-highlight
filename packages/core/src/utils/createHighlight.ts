import { h } from 'vue'

const escapeRegExp = (text: string) => {
  return text.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
};

const createHighlightPattern = (options: {
  query: string | RegExp;
  splitBySpace: boolean;
  caseSensitive: boolean;
}): RegExp => {
  let pattern: string;

  if (options.query instanceof RegExp) {
    return new RegExp(
      String.raw`(${options.query.source})`,
      `g${options.caseSensitive ? "" : "i"}`
    );
  }

  if (options.splitBySpace) {
    const normalizeQuery = options.query.trim().replace(/\s+/g, " ");
    pattern = String.raw`(${normalizeQuery
      .split(/\s/)
      .map(escapeRegExp)
      .join("|")})`;
  } else {
    pattern = String.raw`(${escapeRegExp(options.query)})`;
  }

  return new RegExp(
    String.raw`${pattern}`,
    `g${options.caseSensitive ? "" : "i"}`
  );
};

export const createHighlightWordChunk = (
  targetText: string,
  options: {
    query: string | RegExp;
    splitBySpace: boolean;
    caseSensitive: boolean;
    highlightTag: string;
    highlightClass: string;
    highlightStyle: string;
  }
) => {
  if (
    !options.query ||
    (options.query instanceof String && !options.query.trim())
  ) {
    return targetText;
  }

  const pattern = createHighlightPattern({
    query: options.query,
    splitBySpace: options.splitBySpace,
    caseSensitive: options.caseSensitive,
  });

  const words = targetText.split(pattern);

  return words.map((w: string) => {
    if (pattern.test(w)) {
      return h(
        options.highlightTag,
        {
          class: options.highlightClass,
          style: options.highlightStyle,
        },
        w
      );
    }
    return w;
  });
};
