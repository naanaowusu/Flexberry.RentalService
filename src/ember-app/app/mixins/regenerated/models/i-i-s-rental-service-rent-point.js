import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  address: DS.attr('string')
});

export let ValidationRules = {
  address: {
    descriptionKey: 'models.i-i-s-rental-service-rent-point.validations.address.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('RentPointE', 'i-i-s-rental-service-rent-point', {
    address: attr('Address', { index: 0 })
  });

  modelClass.defineProjection('RentPointL', 'i-i-s-rental-service-rent-point', {
    address: attr('Address', { index: 0 })
  });
};
