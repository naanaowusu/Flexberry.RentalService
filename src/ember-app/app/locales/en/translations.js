import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISRental_serviceBikeBrandLForm from './forms/i-i-s-rental-service-bike-brand-l';
import IISRental_serviceBikesLForm from './forms/i-i-s-rental-service-bikes-l';
import IISRental_serviceRentLForm from './forms/i-i-s-rental-service-rent-l';
import IISRental_serviceRentPointLForm from './forms/i-i-s-rental-service-rent-point-l';
import IISRental_serviceBikeBrandEForm from './forms/i-i-s-rental-service-bike-brand-e';
import IISRental_serviceBikesEForm from './forms/i-i-s-rental-service-bikes-e';
import IISRental_serviceRentEForm from './forms/i-i-s-rental-service-rent-e';
import IISRental_serviceRentPointEForm from './forms/i-i-s-rental-service-rent-point-e';
import IISRental_serviceBikeBrandModel from './models/i-i-s-rental-service-bike-brand';
import IISRental_serviceBikesModel from './models/i-i-s-rental-service-bikes';
import IISRental_serviceRentPointModel from './models/i-i-s-rental-service-rent-point';
import IISRental_serviceRentModel from './models/i-i-s-rental-service-rent';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-rental-service-bike-brand': IISRental_serviceBikeBrandModel,
    'i-i-s-rental-service-bikes': IISRental_serviceBikesModel,
    'i-i-s-rental-service-rent-point': IISRental_serviceRentPointModel,
    'i-i-s-rental-service-rent': IISRental_serviceRentModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'rental-service': {
          caption: 'rental-service',
          title: 'rental-service',
          'i-i-s-rental-service-bikes-l': {
            caption: 'i-i-s-rental-service-bikes-l',
            title: 'i-i-s-rental-service-bikes-l'
          },
          'i-i-s-rental-service-bike-brand-l': {
            caption: 'i-i-s-rental-service-bike-brand-l',
            title: 'i-i-s-rental-service-bike-brand-l'
          },
          'i-i-s-rental-service-rent-point-l': {
            caption: 'i-i-s-rental-service-rent-point-l',
            title: 'i-i-s-rental-service-rent-point-l'
          },
          'i-i-s-rental-service-rent-l': {
            caption: 'i-i-s-rental-service-rent-l',
            title: 'i-i-s-rental-service-rent-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-rental-service-bike-brand-l': IISRental_serviceBikeBrandLForm,
    'i-i-s-rental-service-bikes-l': IISRental_serviceBikesLForm,
    'i-i-s-rental-service-rent-l': IISRental_serviceRentLForm,
    'i-i-s-rental-service-rent-point-l': IISRental_serviceRentPointLForm,
    'i-i-s-rental-service-bike-brand-e': IISRental_serviceBikeBrandEForm,
    'i-i-s-rental-service-bikes-e': IISRental_serviceBikesEForm,
    'i-i-s-rental-service-rent-e': IISRental_serviceRentEForm,
    'i-i-s-rental-service-rent-point-e': IISRental_serviceRentPointEForm
  },

});

export default translations;
