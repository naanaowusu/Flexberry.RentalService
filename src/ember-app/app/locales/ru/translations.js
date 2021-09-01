import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Rental_service',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Rental_service',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Rental_service',
          title: 'Rental_service'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'rental-service': {
          caption: 'Rental_service',
          title: 'Rental_service',
          'i-i-s-rental-service-bikes-l': {
            caption: 'Bikes',
            title: 'There are 100 bikes in stock'
          },
          'i-i-s-rental-service-bike-brand-l': {
            caption: 'Bike brand',
            title: 'We have several bicycle brands that you can select. '
          },
          'i-i-s-rental-service-rent-point-l': {
            caption: 'Rent point',
            title: 'You can order a bike at any of our rental points and return to the nearest and return at any which is comfortable for you.'
          },
          'i-i-s-rental-service-rent-l': {
            caption: 'Rent',
            title: 'Order and pay by cash or by card'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
