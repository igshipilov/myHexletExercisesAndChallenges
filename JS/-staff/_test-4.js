import { chai } from 'chai';

const foo = 'bar';
const beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

// foo.should.be.a('string');
foo.chai.equal('bar');
foo.should.have.lengthOf(3);
beverages.should.have.property('tea').with.lengthOf(3);