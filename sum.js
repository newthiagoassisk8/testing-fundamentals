function sum(num1, num2) {
    try {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error('must be a number');
        }
        return num1 + num2;
    } catch (e) {
        return e;
    }
}

export default sum;
