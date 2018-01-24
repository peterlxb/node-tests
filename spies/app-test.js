const chai = require('chai');
const expect = chai.expect;
const rewire = require('rewire');

const spies = require('chai-spies');

var app = rewire('./app');

chai.use(spies);

describe('App',() => {

    var db = {
        saveUser: chai.spy()
    };
    app.__set__('db',db);
    
    it('should call the spy correctly',() => {
        var spy = chai.spy();
        spy('peter',25);
        expect(spy).to.have.been.called.with('peter',25);
    });

    it('should call saveUser with suer object',() => {
        var email="peterlxb@gamil.com";
        var password = "123abc";

        app.handleSignup(email,password);
        expect(db.saveUser).to.have.been.called.with({email,password});
    });

});