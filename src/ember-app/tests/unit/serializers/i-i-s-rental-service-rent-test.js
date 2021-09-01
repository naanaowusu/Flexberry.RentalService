import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-rental-service-rent', 'Unit | Serializer | i-i-s-rental-service-rent', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-rental-service-rent',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-rental-service-bike-brand',
    'model:i-i-s-rental-service-bikes',
    'model:i-i-s-rental-service-rent-point',
    'model:i-i-s-rental-service-rent',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
