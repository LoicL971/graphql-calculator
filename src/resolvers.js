import { wordToNumber } from './schema.js';

function simpleOperation(precRes, sigle, nb) {
    if (sigle == '+') {
        return precRes + nb
    }
    else if (sigle == '-') {
        return precRes - nb
    }
    else if (sigle == '*') {
        return precRes * nb
    }
    else {
        return precRes / nb
    }

}

let symbols = {}
for (const [wordVal, intVal] of Object.entries(wordToNumber)) {
    symbols[wordVal] = ({precRes,sigle}) => {
        return simpleOperation(precRes, sigle, intVal)
    };
}

export const resolvers = {
    Query: {
        calculate: () => {return {precRes:0, sigle:"+"}},
    },
    Number: {
        add: (parent) => {return {precRes:parent, sigle:"+"}},
        minus: (parent) => {return {precRes:parent, sigle:"-"}},
        time: (parent) => {return {precRes:parent, sigle:"*"}},
        divide: (parent) => {return {precRes:parent, sigle:"/"}},
        result: (parent) => {return parent}
    },
    Symbol: symbols
};

// module.exports = resolvers;
