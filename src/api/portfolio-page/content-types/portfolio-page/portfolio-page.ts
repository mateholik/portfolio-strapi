// Interface automatically generated by schemas-to-ts

import { TitleAndCards } from '../../../../components/blocks/interfaces/TitleAndCards';
import { TitleAndCards_Plain } from '../../../../components/blocks/interfaces/TitleAndCards';
import { TitleAndCards_NoRelations } from '../../../../components/blocks/interfaces/TitleAndCards';

export interface PortfolioPage {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    title?: string;
    websites: TitleAndCards[];
  };
}
export interface PortfolioPage_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  websites: TitleAndCards_Plain[];
}

export interface PortfolioPage_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  websites: TitleAndCards_NoRelations[];
}

export interface PortfolioPage_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  websites: TitleAndCards_Plain[];
}