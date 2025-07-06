import type { Schema, Struct } from '@strapi/strapi';

export interface ShippingShippingInfo extends Struct.ComponentSchema {
  collectionName: 'components_shipping_shipping_infos';
  info: {
    displayName: 'Shipping Info';
  };
  attributes: {
    address: Schema.Attribute.Text & Schema.Attribute.Required;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    country: Schema.Attribute.String & Schema.Attribute.Required;
    full_name: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    postal_code: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shipping.shipping-info': ShippingShippingInfo;
    }
  }
}
