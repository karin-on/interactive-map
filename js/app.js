const regionsDataObj = {
    ds: {
        name: "dolnośląskie",
        enName: "Lower Silesia"
    },
    kp: {
        name: "kujawsko-pomorskie",
        enName: "Kuyavia-Pomerania"
    },
    ld: {
        name: "łódzkie",
        enName: "Łódź"
    },
    lu: {
        name: "lubelskie",
        enName: "Lublin"
    },
    lb: {
        name: "lubuskie",
        enName: "Lubusz"
    },
    ma: {
        name: "małopolskie",
        enName: "Lesser Poland"
    },
    mz: {
        name: "mazowieckie",
        enName: "Masovia"
    },
    op: {
        name: "opolskie",
        enName: "Opole"
    },
    pk: {
        name: "podkarpackie",
        enName: "Subcarpathia"
    },
    pd: {
        name: "podlaskie",
        enName: "Podlaskie"
    },
    pm: {
        name: "pomorskie",
        enName: "Pomerania"
    },
    sl: {
        name: "śląskie",
        enName: "Silesia"
    },
    sk: {
        name: "świętokrzyskie",
        enName: "Holy Cross Province"
    },
    wm: {
        name: "warmińsko-mazurskie",
        enName: "Warmia-Masuria"
    },
    wp: {
        name: "wielkopolskie",
        enName: "Greater Poland"
    },
    zp: {
        name: "zachodniopomorskie",
        enName: "West Pomerania"
    }
};


const regionsIDs = ["pl-ds", "pl-kp", "pl-ld", "pl-lu", "pl-lb", "pl-ma", "pl-mz", "pl-op", "pl-pk", "pl-pd", "pl-pm", "pl-sl", "pl-sk", "pl-wm", "pl-wp", "pl-zp"];

const defaultActiveRegion = "pl-mz";


class Region {
    constructor(id) {
        this.id = id;
        this.inDOM = document.getElementById(this.id);
    }

    printData() {
        const regionName = document.querySelector('.regionName');
        const regionEnName = document.querySelector('.regionEnName');

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


const regionsObjects = regionsIDs.map(id => new Region(id));
// regionsObjects[0].printData();
// regionsObjects[0].changeBackground();


regionsObjects.forEach((el,i) => {
    el.id === defaultActiveRegion ?
        (regionsObjects[i].printData()) :
        null;

    el.id === defaultActiveRegion ?
        (regionsObjects[i].changeBackground()) :
        null;
});

regionsObjects.forEach(el => el.updateData());




