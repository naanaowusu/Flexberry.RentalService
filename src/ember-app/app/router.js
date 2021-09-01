import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-rental-service-bike-brand-l');
  this.route('i-i-s-rental-service-bike-brand-e',
  { path: 'i-i-s-rental-service-bike-brand-e/:id' });
  this.route('i-i-s-rental-service-bike-brand-e.new',
  { path: 'i-i-s-rental-service-bike-brand-e/new' });
  this.route('i-i-s-rental-service-bikes-l');
  this.route('i-i-s-rental-service-bikes-e',
  { path: 'i-i-s-rental-service-bikes-e/:id' });
  this.route('i-i-s-rental-service-bikes-e.new',
  { path: 'i-i-s-rental-service-bikes-e/new' });
  this.route('i-i-s-rental-service-rent-l');
  this.route('i-i-s-rental-service-rent-e',
  { path: 'i-i-s-rental-service-rent-e/:id' });
  this.route('i-i-s-rental-service-rent-e.new',
  { path: 'i-i-s-rental-service-rent-e/new' });
  this.route('i-i-s-rental-service-rent-point-l');
  this.route('i-i-s-rental-service-rent-point-e',
  { path: 'i-i-s-rental-service-rent-point-e/:id' });
  this.route('i-i-s-rental-service-rent-point-e.new',
  { path: 'i-i-s-rental-service-rent-point-e/new' });
});

export default Router;
