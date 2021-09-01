import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  brands: DS.belongsTo('i-i-s-rental-service-bike-brand', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-rental-service-bikes.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  brands: {
    descriptionKey: 'models.i-i-s-rental-service-bikes.validations.brands.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('BikesE', 'i-i-s-rental-service-bikes', {
    name: attr('Name', { index: 0 }),
    brands: belongsTo('i-i-s-rental-service-bike-brand', 'Brands', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('BikesL', 'i-i-s-rental-service-bikes', {
    name: attr('Name', { index: 0 }),
    brands: belongsTo('i-i-s-rental-service-bike-brand', 'Name', {
      name: attr('Name', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
