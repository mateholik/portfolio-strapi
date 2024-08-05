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

export interface BlocksTitleAndServices extends Schema.Component {
  collectionName: 'components_blocks_title_and_services';
  info: {
    displayName: 'Title and services';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.RichText;
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

export interface ElementsPriceBlockOption extends Schema.Component {
  collectionName: 'components_elements_price_block_options';
  info: {
    displayName: 'Price block option';
  };
  attributes: {
    title: Attribute.String;
    price: Attribute.Integer;
    description: Attribute.Text;
  };
}

export interface ElementsPricebBlock extends Schema.Component {
  collectionName: 'components_elements_priceb_blocks';
  info: {
    displayName: 'Price block';
    description: '';
  };
  attributes: {
    blockTitle: Attribute.String;
    option: Attribute.Component<'elements.price-block-option', true>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.title-and-cards': BlocksTitleAndCards;
      'blocks.title-and-services': BlocksTitleAndServices;
      'elements.card': ElementsCard;
      'elements.price-block-option': ElementsPriceBlockOption;
      'elements.priceb-block': ElementsPricebBlock;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
