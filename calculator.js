class Calculator {

    add (a, b) {
        return a + b;
    }

    sub (a, b) {
        return a - b;
    }

    multi (a, b) {
        return a * b;
    }

    divide (a, b) {
        if (b == 0) return Error("Can't devide by 0")

        return a / b;
    }

}

module.exports = Calculator