const PubSub = require('../helpers/pub_sub.js');

    const SelectView = function (element) {
        this.element = element;
    };

    SelectView.prototype.bindEvents = function () {
        PubSub.subscribe('Families:options-ready', (event) => {
            console.log(event.detail)
            const allFamilies = event.detail;
            this.populate(allFamilies);
        });

        this.element.addEventListener('change', (event) => {
            const selectedFamily = event.target.value;
            PubSub.publish('SelectView:change', selectedFamily);
        });
    };

    SelectView.prototype.populate = function (instrumentFamilyData) {
        instrumentFamilyData.forEach((family, index) => {
            const option = document.createElement('option');
            option.textContent = family.name;
            option.value = index;
            this.element.appendChild(option);
        })
    }

    module.exports = SelectView;