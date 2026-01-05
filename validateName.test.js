//Regra: Validação se o nome recebido é uma string e a primeira letra é maiscula e se não há espacamento

let namesToTest = [
    ['Fernanda', true],
    ['Thiago', true],
    ['thiago', false],
    [' tiago', false],
    [undefined, false],
    ['fernanda', false],
    [' ', false]
];

function isValidName(name) {
    return typeof name === 'string' && name[0] === name[0].toUpperCase() && name === name.trim();
}

function testingNames(namesList) {
    for (let i = 0; i < namesList.length; i++) {
        let [value, expected] = namesList[i];
        let result = isValidName(value);
        this.isAssert = result === expected;
        console.log({ value, expected, result, isAssert });
    }
    if (!isAssert) {
        throw new Error(`Expected ${expected} but received ${result}`);
    }
}
testingNames(namesToTest);
