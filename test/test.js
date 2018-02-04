const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){
    it('AR', function(){
        const translation = platzom("programar")
        expect(translation).to.equal("program")
    })
    it('Z - PE', function(){
        const translation = platzom("zorro")
        expect(translation).to.equal("zorrope")
    })     
})