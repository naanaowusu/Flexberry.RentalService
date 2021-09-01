import { Serializer as BikesSerializer } from
  '../mixins/regenerated/serializers/i-i-s-rental-service-bikes';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(BikesSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
