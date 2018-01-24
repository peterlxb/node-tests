var expect = require('chai').expect;
var should = require('chai').should();

const utils = require('./utils');

var beverages = { tea: ['chai', 'matcha', 'oolong'] };

it("should add two numbers",() => {
    var res = utils.add(11,33);
    //expect(res).to.equal(44).to.be.a('number');

});

//async test use done
it('should async add two numbers',(done) => {
    utils.asyncAdd(4,3,(sum) => {
        expect(sum).to.equal(7).to.be.a('number');
        done();
    })
});

it('async square a number',(done) => {
    utils.asyncSquare(5, (res) => {
        expect(res).to.equal(25).to.be.a('number');
        done();
    })
});

it("should square the given number",() => {
    var res = utils.square(4);
    expect(res).to.equal(16).to.be.a('number');
    //expect(res).not.to.equal(14);
});

it("expect property of object", () => {
    //expect(beverages).to.have.property('tea').with.lengthOf(3);
    //expect([1,2,3]).to.include(2);
    expect({
        a:1,
        b:2,
        c:3
    }).to.include({
        b:2
    });
});

it('Set the proper username', () => {
    var user = utils.setName({},"peter liu");
    expect(user).to.include({firstName:"peter"});
});

// Example from mocha doc
/**
 var assert = require('assert');
 describe("Array", function () {
    describe('#indexOf()', function () {
        it("should return -1 when the value is not presented!", function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
  });
  
 **/

