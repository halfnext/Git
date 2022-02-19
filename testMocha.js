"use strict"

describe("Divide a by b", function() {

    it("Divided 4 by 2", function() {
        assert.equal(divide(4, 2), 2);
    });

    it("A is not a Number", function(){
        assert.equal(divide('Name', 2), "Dividend is not a Number")
    });

    it("B is not a Number", function(){
        assert.equal(divide(2, 'Name'), "Divider is not a Number")
    });

    it("Division by 0!", function(){
        assert.equal(divide(2, 0), "Division by 0!")
    });

    it("Divider/Dividend is Infinity", function(){
        assert.equal(divide(2, Infinity), "Divider/Dividend is Infinity")
    });
    it("No parameters provided", function(){
        assert.equal(divide(null, null), "No parameters provided")
    });
});