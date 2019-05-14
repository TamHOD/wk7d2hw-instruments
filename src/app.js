const instrumentFamilyData = require('./data/instrument_family_data.js')
const InstrumentFamilies = require('./models/instrument_families.js')
const SelectView = require('./views/select_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#instrument-families')
  const instrumentFamiliesDropdown = new SelectView(selectElement);
  instrumentFamiliesDropdown.bindEvents();

  const instrumentFamilies = new InstrumentFamilies(instrumentFamilyData);
  instrumentFamilies.bindEvents();




});
