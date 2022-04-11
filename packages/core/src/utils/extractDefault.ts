
type Slots = { default?: () => { children: string; text: string }[] };

export const extractDefaultSlotsText = (slots?: Slots): string => {
  if (slots && slots.default) {
    const defaultSlot = slots.default();
    let slotText:string;
    slotText = defaultSlot[0].children;
    if (typeof slotText === "string") {
      return slotText;
    } else {
      if (process.env.NODE_ENV !== "production") {
        console.warn("Slots should be text only");
      }
      return "";
    }
  }
  return "";
};
