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

module.exports = InstrumentFamilyView;