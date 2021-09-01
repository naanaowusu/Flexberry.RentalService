import { Serializer as RentSerializer } from
  '../mixins/regenerated/serializers/i-i-s-rental-service-rent';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(RentSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
