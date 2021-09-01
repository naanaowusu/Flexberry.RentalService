import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-rental-service-rent-point', 'Unit | Model | i-i-s-rental-service-rent-point', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
