import { describe, expect, it } from "vitest";
import {
  getTranslationArray,
  isString,
  isTimelineItem,
} from "@/features/portfolio/utils/translation";

describe("translation data validation", () => {
  it("keeps only values accepted by the item guard", () => {
    expect(getTranslationArray(["React", 19, null], isString)).toEqual([
      "React",
    ]);
  });

  it("rejects incomplete structured translation entries", () => {
    const entries = [
      { date: "2022 - Present", title: "Tech Lead", description: "Delivery" },
      { date: "2021", title: "Developer" },
    ];

    expect(getTranslationArray(entries, isTimelineItem)).toEqual([entries[0]]);
  });

  it("returns an empty array for non-array values", () => {
    expect(getTranslationArray("React", isString)).toEqual([]);
  });
});
