const Calculator = require("./calculator")

//Deklarera en test-grupp
describe("Calculator", () => {

    let calculator

    beforeEach( () => {
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

})