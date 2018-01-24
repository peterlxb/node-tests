const utils = require('./utils');

it("should add two numbers",() => {
    var res = utils.add(11,33);
    
    if(res !== 44) {
        throw new Error("Expected 44,but got ${res}");
    }
});

it("should square the given number",() => {
    var res = utils.square(4);

    if(res !== 16){
        throw new Error("Expected 16,but got ${res}");
    }
})

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

