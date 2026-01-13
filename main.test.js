import sum from './sum.js';
import { gradePassFailStatus, gradeTestCases } from './gradeClassifier.js';
import { isvalidPassword } from './validatePassword_test.js';

let passwordsToTest = [
    { value: 'Abc1345', expected: true },
    { value: 'abc12345', expected: false },
    { value: 'Abcdefgh', expected: false },
    { value: 'Ab1', expected: false },
    { value: 'Abc 1234', expected: false },
    { value: '', expected: false },
    { value: null, expected: false },
];

test('soma 2 + 2 é igual 4', function () {
    expect(sum(2, 2)).toBe(4);
});

test('verifica se a senha é válida quando possui letra maiúscula, número e tamanho mínimo de 3 caracteres', () => {
    for (let e of passwordsToTest) {
        expect(isvalidPassword(e.value)).toBe(e.expected);
    }
});


test('verifica validação de notas', () => {
    for (let e of gradeTestCases) {
        expect(gradePassFailStatus(e.input)).toBe(e.expected);
    }
});
