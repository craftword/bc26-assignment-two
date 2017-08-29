// testing code goes here

import { expect } from 'chai';
import { MobilePhones, Samsung } from '../OOP/oop.js';


describe('Test for OOP property', () => {

    it('child should be able inherit attributes from Parent', () => {
        //create instance
        let child = new Samsung('IMEI167256363', 'Andriod', 3);
        // check the child can access the attribute of parent
        expect(child._IMEICode).to.have.string('IMEI167256363');
        expect(child._OS).to.have.string('Andriod');
      
    });

    it('child should to access it own method ', () => {
        //create instance
        let child = new Samsung('IMEI167256363', 'Andriod', 3);
        
        // check the child can access the attribute of parent
        expect(child._OS).to.have.string('Andriod');
        expect(child.Receive()).to.have.string('Press any Key to recieve call');
        expect(child.screenRotation('vertical')).to.have.string('horizontal');
      
    });

    it('parent should be able to access it own function and attributes ', () => {
        //create instance
        let parent = new MobilePhones('IMEI167256363', 'Andriod', 3);

        // check the parent access its attribute
        expect(parent._OS).to.have.string('Andriod');
        expect(parent.Receive()).to.have.string('Receiving a call');

    });

    it("The MobilePhones should be a type of `object`, and an instance of the `MobilePhones` class", () => {
        let parent = new MobilePhones('IMEI167256363', 'Andriod', 3);
        expect(typeof parent).to.have.string('object');
        expect(parent).to.be.an.instanceof(MobilePhones);
    });
    
    it("The Samsung should be an instance of the `MobilePhones` class or Samsung class", () => {
        let child = new Samsung('IMEI167256363', 'Andriod', 3);
        expect(child).to.be.an.instanceof(MobilePhones);
        expect(child).to.be.an.instanceof(Samsung);
    });


    it("The Parent want to access method child ", () => {
        let parent = new MobilePhones('IMEI167256363', 'Andriod', 3);
        expect(parent).not.to.be.an.instanceof(Samsung);        
      
    });

});
