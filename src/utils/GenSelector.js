const gen1 = 151;
const added2 = 100;
const gen2 = 251;
const added3 = 135;
const gen3 = 386;
const added4 = 107;
const gen4 = 493;
const added5 = 156;
const gen5 = 649;
const added6 = 72;
const gen6 = 721;
const added7 = 88;
const gen7 = 809;
const added8 = 89;
const gen8 = 898;

const GenSelector = (gen) => {

    switch (gen) {
        case 1:
            return {limit: gen1, offset: 0};
        case 2:
            return {limit: added2, offset: gen2};
        case 3:
            return {limit: added3, offset: gen3};
        case 4:
            return {limit: added4, offset: gen4};
        case 5:
            return {limit: added5, offset: gen5};
        case 6:
            return {limit: added6, offset: gen6};
        case 7:
            return {limit: added7, offset: gen7};
        case 8:
            return {limit: added8, offset: gen8};
        default:
            return {limit: gen1, offset: 0};
    }

}

export default GenSelector;



