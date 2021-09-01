import { Serializer as BikeBrandSerializer } from
  '../mixins/regenerated/serializers/i-i-s-rental-service-bike-brand';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(BikeBrandSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
