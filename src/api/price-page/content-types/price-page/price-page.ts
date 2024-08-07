// Interface automatically generated by schemas-to-ts

import { PricebBlock } from '../../../../components/elements/interfaces/PricebBlock';
import { Seo } from '../../../../components/shared/interfaces/Seo';
import { PricebBlock_Plain } from '../../../../components/elements/interfaces/PricebBlock';
import { Seo_Plain } from '../../../../components/shared/interfaces/Seo';
import { PricebBlock_NoRelations } from '../../../../components/elements/interfaces/PricebBlock';
import { Seo_NoRelations } from '../../../../components/shared/interfaces/Seo';

export interface PricePage {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    pageTitle?: string;
    totalPriceText?: string;
    calculator: PricebBlock[];
    mobText?: string;
    seo?: Seo;
  };
}
export interface PricePage_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  pageTitle?: string;
  totalPriceText?: string;
  calculator: PricebBlock_Plain[];
  mobText?: string;
  seo?: Seo_Plain;
}

export interface PricePage_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  pageTitle?: string;
  totalPriceText?: string;
  calculator: PricebBlock_NoRelations[];
  mobText?: string;
  seo?: Seo_NoRelations;
}

export interface PricePage_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  pageTitle?: string;
  totalPriceText?: string;
  calculator: PricebBlock_Plain[];
  mobText?: string;
  seo?: Seo_Plain;
}
