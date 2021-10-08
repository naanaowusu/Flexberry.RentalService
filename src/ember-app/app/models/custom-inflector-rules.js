import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('brand', 'Brands');
inflector.irregular('bikes', 'Bikess');
inflector.irregular('point', 'Points');
inflector.irregular('IISRentalServiceRentPoints', 'IISRentalserviceRentPoints');

export default {};
