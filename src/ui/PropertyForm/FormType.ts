export enum HouseType {
  BRICK = "Кирпичный",
  BLOCK = "Блочный",
  PANEL = "Панельный",
  OTHER = "Другое",
}

export enum RepairType {
  NONE = "Без ремонта",
  COSMETIC = "Косметический",
  MODERN = "Современный",
}

export enum SaleTimeType {
  URGENT = "Нужно было еще вчера",
  VERY_SOON = "В самое ближайшее время",
  MONTHS_1_3 = "В течение 1-3 месяцев",
  NO_RUSH = "Время есть, рассматриваю варианты",
}

export interface PropertyFormState {
  name: string;
  phone: string;
  agreeToTerms: boolean;
  address: string;
  area: number | null;
  floor: number | null;
  rooms: number | null;
  houseType: HouseType | null;
  repairType: RepairType | null;
  saleTime: SaleTimeType | null;
}

export const INITIAL_FORM_STATE: PropertyFormState = {
  name: "",
  phone: "",
  agreeToTerms: false,
  address: "",
  area: null,
  floor: null,
  rooms: null,
  houseType: null,
  repairType: null,
  saleTime: null,
};
