// Transforma números em significado
// Input: Nota de 0 a 10
// Saída: Reprovado | Aprovado

const statusByResult = ['Failed', 'Passed'];

function sanitizeGrade(grade) {
    let validGrades = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return validGrades.includes(grade) ? grade : false;
}
export function gradePassFailStatus(grade) {
    let gradeSanitized = sanitizeGrade(grade);
    if (gradeSanitized === false) {
        return 'grade invalid';
    }
    if (gradeSanitized < 5) {
        return statusByResult[0];
    } else {
        return statusByResult[1];
    }
}

export const gradeTestCases = [
    { input: 0, expected: 'Failed' },
    { input: 4, expected: 'Failed' },
    { input: 5, expected: 'Passed' },
    { input: 7, expected: 'Passed' },
    { input: 10, expected: 'Passed' },
    { input: -1, expected: 'grade invalid' },
    { input: 11, expected: 'grade invalid' },
    { input: null, expected: 'grade invalid' },
    { input: 'A', expected: 'grade invalid' },
    { input: undefined, expected: 'grade invalid' },
];
function runGradeTests(testCases) {
    const results = [];
    for (let { input, expected } of testCases) {
        const result = gradePassFailStatus(input);

        results.push({
            input,
            expected,
            result,
            isAssert: expected === result,
        });
    }
    return results;
}
console.log(runGradeTests(gradeTestCases));
