const instrumentFamilyData = require('./data/instrument_family_data.js')
const InstrumentFamilies = require('./models/instrument_families.js')
const SelectView = require('./views/select_view.js')
const InstrumentFamilyView = require('./views/instrument_family_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const namePanel = document.querySelector('#family-name')
  const instrumentFamilyView = new InstrumentFamilyView(namePanel);
  instrumentFamilyView.bindEvents();

  const selectElement = document.querySelector('select#instrument-families')
  const instrumentFamiliesDropdown = new SelectView(selectElement);
  instrumentFamiliesDropdown.bindEvents();

  const instrumentFamilies = new InstrumentFamilies(instrumentFamilyData);
  instrumentFamilies.bindEvents();

  




});
