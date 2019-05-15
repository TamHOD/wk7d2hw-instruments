const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilyView = function(familyInfo){
    this.familyInfo = familyInfo;
}

InstrumentFamilyView.prototype.bindEvents = function(){
    PubSub.subscribe('Family:selection', event => {
        console.log(event.detail.name);
        const family = event.detail;
        this.showFamilyName(family);
        this.showFamilyInfo(family);
        this.showFamilyInstruments(family);
    });

}
InstrumentFamilyView.prototype.showFamilyName = function(family){
    
    const nameView = document.createElement('h2');
    nameView.textContent = `${family.name}`;
    this.familyInfo.appendChild(nameView);
}

InstrumentFamilyView.prototype.showFamilyInfo = function(family){
    const infoView = document.createElement('p');
    infoView.textContent = `${family.description}`;
    this.familyInfo.appendChild(infoView);
}

InstrumentFamilyView.prototype.showFamilyInstruments = function(family){
    const instrumentView = document.createElement('ul');
    family.instruments.forEach(instrument => {
        this.listInstrument(instrument, instrumentView)
    });
    this.familyInfo.appendChild(instrumentView);

    // return instrumentView;
}

InstrumentFamilyView.prototype.listInstrument = function(instrument, ul){
    const instrumentLi = document.createElement('li');
    instrumentLi.textContent = instrument;
    ul.appendChild(instrumentLi);
}


module.exports = InstrumentFamilyView;