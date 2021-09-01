import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  startRent: DS.attr('date'),
  duration: DS.attr('decimal'),
  endRent: DS.attr('date'),
  cost: DS.attr('number'),
  getAt: DS.belongsTo('i-i-s-rental-service-rent-point', { inverse: null, async: false }),
  leftAt: DS.belongsTo('i-i-s-rental-service-rent-point', { inverse: null, async: false }),
  rentBike: DS.belongsTo('i-i-s-rental-service-bikes', { inverse: null, async: false })
});

export let ValidationRules = {
  startRent: {
    descriptionKey: 'models.i-i-s-rental-service-rent.validations.startRent.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  duration: {
    descriptionKey: 'models.i-i-s-rental-service-rent.validations.duration.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  endRent: {
    descriptionKey: 'models.i-i-s-rental-service-rent.validations.endRent.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  cost: {
    descriptionKey: 'models.i-i-s-rental-service-rent.validations.cost.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  getAt: {
    descriptionKey: 'models.i-i-s-rental-service-rent.validations.getAt.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  leftAt: {
    descriptionKey: 'models.i-i-s-rental-service-rent.validations.leftAt.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  rentBike: {
    descriptionKey: 'models.i-i-s-rental-service-rent.validations.rentBike.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('RentE', 'i-i-s-rental-service-rent', {
    startRent: attr('Start rent', { index: 0 }),
    endRent: attr('End rent', { index: 1 }),
    duration: attr('Duration', { index: 2 }),
    cost: attr('Cost', { index: 3 }),
    getAt: belongsTo('i-i-s-rental-service-rent-point', 'Get at', {
      address: attr('Address', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'address' }),
    leftAt: belongsTo('i-i-s-rental-service-rent-point', 'Left at', {
      address: attr('Address', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'address' }),
    rentBike: belongsTo('i-i-s-rental-service-bikes', 'Rent bike', {
      name: attr('Name', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('RentL', 'i-i-s-rental-service-rent', {
    startRent: attr('Start rent', { index: 0 }),
    endRent: attr('End rent', { index: 1 }),
    duration: attr('Duration', { index: 2 }),
    cost: attr('Cost', { index: 3 }),
    getAt: belongsTo('i-i-s-rental-service-rent-point', 'Address', {
      address: attr('Address', { index: 4 })
    }, { index: -1, hidden: true }),
    leftAt: belongsTo('i-i-s-rental-service-rent-point', 'Address', {
      address: attr('Address', { index: 5 })
    }, { index: -1, hidden: true }),
    rentBike: belongsTo('i-i-s-rental-service-bikes', 'Name', {
      name: attr('Name', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
