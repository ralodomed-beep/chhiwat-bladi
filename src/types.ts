export enum Language {
  AR = "ar",
  FR = "fr",
  EN = "en"
}

export enum Category {
  TAJINE = "TAJINE",
  COUSCOUS = "COUSCOUS",
  HARIRA_SOUPS = "HARIRA_SOUPS",
  DESSERTS = "DESSERTS",
  SALADS = "SALADS",
  DRINKS = "DRINKS",
  RAMADAN = "RAMADAN"
}

export interface LocalizedString {
  [Language.AR]: string;
  [Language.FR]: string;
  [Language.EN]: string;
}

export interface LocalizedArray {
  [Language.AR]: string[];
  [Language.FR]: string[];
  [Language.EN]: string[];
}

export interface Recipe {
  id: string;
  name: LocalizedString;
  category: Category;
  subCategory?: string; // e.g., "Soup", "Appetizer"
  image: string;
  description: LocalizedString;
  prepTime: LocalizedString;
  cookTime?: LocalizedString;
  servings: number;
  difficulty?: LocalizedString; // "Easy", "Medium", "Hard"
  ingredients: LocalizedArray;
  steps: LocalizedArray;
  tips: LocalizedArray;
  servingMethod?: LocalizedString;
  keywords?: string[];
  videoUrl?: string;
  isFavorite?: boolean;
}

export const CategoryNames: Record<Category, LocalizedString> = {
  [Category.TAJINE]: { ar: "طاجين", fr: "Tajine", en: "Tajine" },
  [Category.COUSCOUS]: { ar: "كسكس", fr: "Couscous", en: "Couscous" },
  [Category.HARIRA_SOUPS]: { ar: "حريرة وشوربات", fr: "Harira & Soupes", en: "Harira & Soups" },
  [Category.DESSERTS]: { ar: "حلويات مغربية", fr: "Pâtisseries", en: "Sweets" },
  [Category.SALADS]: { ar: "سلطات", fr: "Salades", en: "Salads" },
  [Category.DRINKS]: { ar: "مشروبات تقليدية", fr: "Boissons", en: "Drinks" },
  [Category.RAMADAN]: { ar: "أطباق رمضان", fr: "Plats Ramadan", en: "Ramadan Dishes" },
};
