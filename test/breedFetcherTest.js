const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDesription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {

      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      
      assert.equal(desc.trim(), expectedDesc);

      done();
    });
  });
  it('retuns null for a breed that is non-existant', (done) => {
    fetchBreedDescription('Siberian2', (err, desc)=> {

      assert.deepEqual(err,[]);
      const expectedDesc = null;
      assert.equal(desc, expectedDesc);
      done();
    });
  });
});