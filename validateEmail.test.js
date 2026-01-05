let failFirst = true;
let emailsToTest = [
    ['usuario@email.com', true], // válido
    ['user.name@dominio.org', true], // válido
    ['teste@sub.dominio.com', true], // válido
    [10, true], // válido
    ['usuario@', false], // inválido
    ['@dominio.com', false], // inválido
    ['usuario.com', false], // inválido
    ['usuario@dominio', false], // inválido
    ['usuario@dominio..com', false], // inválido
];

function isValidEmail(value) {
    const regexEmail = /^(?!.*\.\.)[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return typeof value === 'string' && regexEmail.test(value);
}

function testingEmails(testEmails) {
    for (let i = 0; i < testEmails.length; i++) {
        let [value, expected] = testEmails[i];
        let result = isValidEmail(value);
        const isAssert = result === expected;
        console.log({ value, expected, result, isAssert });

        if (!isAssert && failFirst) {
            throw new Error(`Expected ${expected} but received ${result}`);
        }
    }
}
testingEmails(emailsToTest);
