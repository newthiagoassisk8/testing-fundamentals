// Casos obrigatórios
//
// "Abc12345" → válida
//
// "abc12345" → inválida (sem maiúscula)
//
// "Abcdefgh" → inválida (sem número)
//
// "Ab1" → inválida (curta demais)
//
// "Abc 1234" → inválida (tem espaço)
//
// "" → inválida
//
// null → inválida

let failFirst = true;

let passwordsToTest = [
    ['Abc1345', true],
    ['abc12345', false],
    ['Abcdefgh', false],
    ['Ab1', false],
    ['Abc 1234', false],
    ['', false],
    [null, false],
];
function hasUpperCase(pwd) {
    return /[A-Z]/.test(pwd);
}

function hasNumber(pwd) {
    return /\d/.test(pwd);
}
function hasSpace(pwd) {
    return /\s/.test(pwd);
}

function testingPasswords(testPasswords) {
    for (let i = 0; i < testPasswords.length; i++) {
        let [value, expected] = testPasswords[i];
        let result = isvalidPassword(value);
        const isAssert = result === expected;
        // console.log({ value, expected, result, isAssert });

        if (!isAssert && failFirst) {
            throw new Error(`Expected ${expected} but received ${result}`);
        }
    }
}
function isBiggerThanLimit(pwd, limit) {
    return pwd.length > limit;
}

export function isvalidPassword(pwd) {
    return pwd !== null && !hasSpace(pwd) && hasUpperCase(pwd) && hasNumber(pwd) && isBiggerThanLimit(pwd, 3);
}

testingPasswords(passwordsToTest);
