const Calculator = require("./calculator")

//Deklarera en test-grupp
describe("Calculator", () => {

    let calculator

    beforeAll( () => {
        calculator = new Calculator()
    })

    it("Addera 1+2 och få 3", () => {

        //Setup
        let x =1, y = 2, expected = 3;

        //Execution
        let sum = calculator.add(x, y)

        //Expect (assert)
        expect(sum).toBe(expected)

    })

    it("Addera 10+30 och få 40", () => {
        //Setup
        let x =10, y = 30, expected = 40;

        //Execution
        let sum = calculator.add(x, y)

        //Expect (assert)
        expect(sum).toBe(expected)
    })

    it("Subtrahera test", () => {

        expect(calculator.sub(10, 6)).toBe(4)

    })

    it("Succesfull divide", () => {

        expect(calculator.divide(20, 5)).toBe(4)

    })

    it("Multiplication", () => {

        expect(calculator.multi(37, 68)).toBe(2516)

    })

    it("Divide by 0, get error", () => {

        expect(calculator.divide(1, 0)).toBe("Can't devide by 0")

    })

})