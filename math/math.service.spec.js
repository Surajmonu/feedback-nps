const chai  = require('chai');
const { add } = require('./math.service');

describe('Math', function () {
    it('should add 2 numbers', function () {
        const sum = add(10,5)
        chai.expect(sum).to.be.equal(15)
    });

    it('should add a as string and b as number', function () {
        const sum = add("10",5)
        chai.expect(sum).to.be.equal(15)
    })

    it('should add a as number and b as string', function () {
        const sum = add(10,"5")
        chai.expect(sum).to.be.equal(15)
    })

    it('should add a as number and b as string', function () {
        const error = add(10,"a")
        chai.expect(error).to.be.equal('only numbers addition Supported')
    })
})
