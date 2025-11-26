import { createClient } from 'microcms-js-sdk';

import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from 'microcms-js-sdk';

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
export type television = {
  title : string;
}

export type name = {
  name: string;
}

export type features = {
  features: string;
}

export type nickname = {
  nickname: string;
}

export const gettelevisionList = async (querier?: MicroCMSQueries) => {
  const televisionlist = await client
    .getList<television>({
      endpoint: 'television',
      queries: querier,
    });
  return televisionlist;
}
export const gettelevisiondata = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const televisiondata = await client.getListDetail<television>({
      endpoint: 'television',
      contentId,
      queries,
    });
  return televisiondata;
}
export const getnicknameList = async (querier?: MicroCMSQueries) => {
  const nicknamelist = await client
    .getList<nickname>({
      endpoint: 'nickname',
      queries: querier,
    });
  return nicknamelist;
}
export const getnicknamedata = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const nicknamedata = await client.getListDetail<nickname>({
      endpoint: 'nickname',
      contentId,
      queries,
    });
  return nicknamedata;
}
export const getnameList = async (querier?: MicroCMSQueries) => {
  const namelist = await client
    .getList<name>({
      endpoint: 'name',
      queries: querier,
    });
  return namelist;
}
export const getnamedata = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const namedata = await client.getListDetail<name>({
      endpoint: 'name',
      contentId,
      queries,
    });
  return namedata;
}
export const getfeaturesList = async (querier?: MicroCMSQueries) => {
  const featureslist = await client
    .getList<features>({
      endpoint: 'features',
      queries: querier,
    });
  return featureslist;
}
export const getfeaturesdata = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const featuresdata = await client.getListDetail<features>({
      endpoint: 'features',
      contentId,
      queries,
    });
  return featuresdata;
}

