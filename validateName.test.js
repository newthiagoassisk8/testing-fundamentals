//Regra: Validação se o nome recebido é uma string e a primeira letra é maiscula
let failFirst = true;

let namesToTest = [
    ['Fernanda', true],
    ['Thiago', true],
    ['thiago', false],
    [undefined, false][('fernanda', false)],
    // [' tiago', false]
    // [' ', false]
];

function isValidName(name) {
    return typeof name === 'string' && name[0] === name[0].toUpperCase();
}

function testingNames(namesList) {
    for (let i = 0; i < namesList.length; i++) {
        let [value, expected] = namesList[i];
        let result = isValidName(value);
        const isAssert = result === expected;
        console.log({ value, expected, result, isAssert });
    }
    if (!isAssert) {
        throw new Error(`Expected ${expected} but received ${result}`);
    }
}
testingNames(namesToTest);
