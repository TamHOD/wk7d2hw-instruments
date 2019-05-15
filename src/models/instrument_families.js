const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('Families:options-ready', this.data);
    console.log(this.data);

  PubSub.subscribe('SelectView:change', (event) => {
    const selectedIndex = event.detail;
    this.publishFamily(selectedIndex);
  })
}

InstrumentFamilies.prototype.publishFamily = function (familyIndex) {
  const selectedFamily = this.data[familyIndex];
  PubSub.publish('Family:selection', selectedFamily);
}

module.exports = InstrumentFamilies;
