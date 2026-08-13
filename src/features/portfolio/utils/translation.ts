import type { Award, Certification, TimelineItem } from "../types";

type TranslationItemGuard<T> = (value: unknown) => value is T;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const hasStringProperty = (
  value: Record<string, unknown>,
  property: string,
): boolean => typeof value[property] === "string";

export const getTranslationArray = <T>(
  value: unknown,
  isItem: TranslationItemGuard<T>,
): T[] => (Array.isArray(value) ? value.filter(isItem) : []);

export const isString = (value: unknown): value is string =>
  typeof value === "string";

export const isTimelineItem = (value: unknown): value is TimelineItem =>
  isRecord(value) &&
  hasStringProperty(value, "date") &&
  hasStringProperty(value, "title") &&
  hasStringProperty(value, "description");

export const isCertification = (value: unknown): value is Certification =>
  isRecord(value) &&
  hasStringProperty(value, "title") &&
  hasStringProperty(value, "issuer") &&
  hasStringProperty(value, "date") &&
  hasStringProperty(value, "image") &&
  hasStringProperty(value, "link");

export const isAward = (value: unknown): value is Award =>
  isRecord(value) &&
  hasStringProperty(value, "title") &&
  hasStringProperty(value, "description") &&
  hasStringProperty(value, "image") &&
  hasStringProperty(value, "link");
