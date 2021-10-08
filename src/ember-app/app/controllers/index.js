import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.rental-service.caption'),
          title: i18n.t('forms.application.sitemap.rental-service.title'),
          children: [{
            link: 'i-i-s-rental-service-bikes-l',
            caption: i18n.t('forms.application.sitemap.rental-service.i-i-s-rental-service-bikes-l.caption'),
            title: i18n.t('forms.application.sitemap.rental-service.i-i-s-rental-service-bikes-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-rental-service-bike-brand-l',
            caption: i18n.t('forms.application.sitemap.rental-service.i-i-s-rental-service-bike-brand-l.caption'),
            title: i18n.t('forms.application.sitemap.rental-service.i-i-s-rental-service-bike-brand-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-rental-service-rent-point-l',
            caption: i18n.t('forms.application.sitemap.rental-service.i-i-s-rental-service-rent-point-l.caption'),
            title: i18n.t('forms.application.sitemap.rental-service.i-i-s-rental-service-rent-point-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-rental-service-rent-l',
            caption: i18n.t('forms.application.sitemap.rental-service.i-i-s-rental-service-rent-l.caption'),
            title: i18n.t('forms.application.sitemap.rental-service.i-i-s-rental-service-rent-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})