import { createClient } from 'microcms-js-sdk';

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// 型定義
export type Profile = {
  id: string;
  name: string;
  nameKana: string;
  birthDate: string;
  birthPlace: string;
  occupation: string;
  agency: string;
  activePeriod: string;
  subtitle: string;
  images: Array<{
    url: string;
    width?: number;
    height?: number;
  }>;
};

export type Card = {
  id: string;
  title: string;
  slug: string;
};

export type Program = {
  id: string;
  title: string;
  description: string;
  period?: string;
};

export type Title = {
  id: string;
  title: string;
  description?: string;
};

export type Feature = {
  id: string;
  title: string;
  description: string;
};

export type Nickname = {
  id: string;
  name: string;
  description?: string;
};