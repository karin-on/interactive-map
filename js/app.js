// const regionsData = [
//     {
//         id: "PL-DS",
//         name: "dolnośląskie",
//         enName: "Lower Silesia"
//     },
//     {
//         id: "PL-KP",
//         name: "kujawsko-pomorskie",
//         enName: "Kuyavia-Pomerania"
//     },
//     {
//         id: "PL-LD",
//         name: "łódzkie",
//         enName: "Łódź"
//     },
//     {
//         id: "PL-LU",
//         name: "lubelskie",
//         enName: "Lublin"
//     },
//     {
//         id: "PL-LB",
//         name: "lubuskie",
//         enName: "Lubusz"
//     },
//     {
//         id: "PL-MA",
//         name: "małopolskie",
//         enName: "Lesser Poland"
//     },
//     {
//         id: "PL-MZ",
//         name: "mazowieckie",
//         enName: "Masovia"
//     },
//     {
//         id: "PL-OP",
//         name: "opolskie",
//         enName: "Opole"
//     },
//     {
//         id: "PL-PK",
//         name: "podkarpackie",
//         enName: "Subcarpathia"
//     },
//     {
//         id: "PL-PD",
//         name: "podlaskie",
//         enName: "Podlaskie"
//     },
//     {
//         id: "PL-PM",
//         name: "pomorskie",
//         enName: "Pomerania"
//     },
//     {
//         id: "PL-SL",
//         name: "śląskie",
//         enName: "Silesia"
//     },
//     {
//         id: "PL-SK",
//         name: "świętokrzyskie",
//         enName: "Holy Cross Province"
//     },
//     {
//         id: "PL-WM",
//         name: "warmińsko-mazurskie",
//         enName: "Warmia-Masuria"
//     },
//     {
//         id: "PL-WP",
//         name: "wielkopolskie",
//         enName: "Greater Poland"
//     },
//     {
//         id: "PL-ZP",
//         name: "zachodniopomorskie",
//         enName: "West Pomerania"
//     }
// ];


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

const regionsIDs = ["PL-DS", "PL-KP", "PL-LD", "PL-LU", "PL-LB", "PL-MA", "PL-MZ", "PL-OP", "PL-PK", "PL-PD", "PL-PM", "PL-SL", "PL-SK", "PL-WM", "PL-WP", "PL-ZP"];
const regionName = document.querySelector('.regionName');
const regionEnName = document.querySelector('.regionEnName');


class Region {
    constructor(id) {
        this.id = id;
        this.inDOM = document.getElementById(this.id);
    }

    printData() {
        // const regionName = document.querySelector('.regionName');
        // const regionEnName = document.querySelector('.regionEnName');
            regionName.innerHTML = regionsDataObj[this.id.slice(3).toLowerCase()].name;
            regionEnName.innerHTML = regionsDataObj[this.id.slice(3).toLowerCase()].enName;

        // this.inDOM.addEventListener('click', function () {
        //     regionName.innerHTML = regionsDataObj[this.id.slice(3).toLowerCase()].name;
        //     regionEnName.innerHTML = regionsDataObj[this.id.slice(3).toLowerCase()].enName;
        // });
    }

    changeBackground() {
        const regions = document.querySelectorAll('path');
        regions.forEach(el => el.classList.remove('active'));

        this.inDOM.classList.add('active');
    }

    updateData() {
        this.inDOM.addEventListener('click', () => this.printData());
        this.inDOM.addEventListener('click', () => this.changeBackground());
    }



    // printData() {
    //     regionName.innerHTML = regionsDataObj[this.id.slice(3).toLowerCase()].name;
    //     regionEnName.innerHTML = regionsDataObj[this.id.slice(3).toLowerCase()].enName;
    // }
    //
    // updateData() {
    //     this.inDOM.addEventListener('click', () => this.printData());
    // }
}


const regionsObjects = regionsIDs.map(id => new Region(id));
regionsObjects[0].printData();
regionsObjects[0].changeBackground();
regionsObjects.forEach(el => el.updateData());




