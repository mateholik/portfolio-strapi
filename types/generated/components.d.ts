import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksTitleAndCards extends Schema.Component {
  collectionName: 'components_blocks_title_and_cards';
  info: {
    displayName: 'Title and cards';
    icon: 'bold';
    description: '';
  };
  attributes: {
    card: Attribute.Component<'elements.card', true>;
    title: Attribute.String;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    url: Attribute.String;
    image: Attribute.Media;
    category: Attribute.Relation<
      'elements.card',
      'oneToOne',
      'api::category.category'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.title-and-cards': BlocksTitleAndCards;
      'elements.card': ElementsCard;
    }
  }
}
