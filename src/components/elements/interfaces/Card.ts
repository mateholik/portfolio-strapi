// Interface automatically generated by schemas-to-ts

import { Media } from '../../../common/schemas-to-ts/Media';
import { Category } from '../../../api/category/content-types/category/category';
import { Media_Plain } from '../../../common/schemas-to-ts/Media';
import { Category_Plain } from '../../../api/category/content-types/category/category';

export interface Card {
  title?: string;
  subTitle?: string;
  url?: string;
  image?: { data: Media };
  category?: { data: Category };
}
export interface Card_Plain {
  title?: string;
  subTitle?: string;
  url?: string;
  image?: Media_Plain;
  category?: Category_Plain;
}

export interface Card_NoRelations {
  title?: string;
  subTitle?: string;
  url?: string;
  image?: number;
  category?: number;
}
