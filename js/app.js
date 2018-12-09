import {regionsDataObj} from '../data/regions';


const regionsIDs = ["pl-ds", "pl-kp", "pl-ld", "pl-lu", "pl-lb", "pl-ma", "pl-mz", "pl-op", "pl-pk", "pl-pd", "pl-pm", "pl-sl", "pl-sk", "pl-wm", "pl-wp", "pl-zp"];

const defaultActiveRegion = "pl-mz";


class Region {
    constructor(id) {
        this.id = id;
        this.inDOM = document.getElementById(this.id);
    }

    printData() {
        const regionName = document.querySelector('.region-name');
        const regionEnName = document.querySelector('.region-en-name');

        regionName.innerHTML = regionsDataObj[this.id.slice(3)].name;
        regionEnName.innerHTML = regionsDataObj[this.id.slice(3)].enName;
    }

    changeBackground() {
        const regions = document.querySelectorAll('path');
        regions.forEach(el => el.classList.remove('path--active'));

        this.inDOM.classList.add('path--active');
    }

    updateData() {
        this.inDOM.addEventListener('click', () => this.printData());
        this.inDOM.addEventListener('click', () => this.changeBackground());
    }

}


//Initialize regions
const regionsObjects = regionsIDs.map(id => new Region(id));

//Default region
regionsObjects.forEach((el,i) => {
    el.id === defaultActiveRegion ?
        (regionsObjects[i].printData()) :
        null;

    el.id === defaultActiveRegion ?
        (regionsObjects[i].changeBackground()) :
        null;
});

//Switching regions
regionsObjects.forEach(el => el.updateData());




