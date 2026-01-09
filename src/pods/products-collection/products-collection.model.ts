import type { Media } from '@content-island/api-client';

export interface NutritionInfo {
  id: string;
  language: 'en';
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  label: string;
  value: string;
}

export interface Product {
  id: string;
  language: 'en';
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  title: string;
  slug: string;
  price: number;
  weight: string;
  picture: Media;
  shortDescription: string;
  description: string;
  inStock?: boolean;
  feature: string[];
  nutritionInfo: NutritionInfo[];
  category: string[];
}