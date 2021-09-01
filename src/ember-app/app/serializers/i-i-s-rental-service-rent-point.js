import { Serializer as RentPointSerializer } from
  '../mixins/regenerated/serializers/i-i-s-rental-service-rent-point';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(RentPointSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
