import type { Media } from '@content-island/api-client';

export interface NutritionInfo {
  id: string;
  language: 'en';
  lastUpdate: string;
  label: string;
  value: string;
}

export interface Product {
  id: string;
  language: 'en';
  lastUpdate: string; 
  title: string;
  slug: string;
  price: number;
  weight: string;
  picture: Media[];
  shortDescription: string;
  description: string;
  inStock?: boolean;
  feature: string[];
  nutritionInfo: NutritionInfo[];
  category: string[];
}