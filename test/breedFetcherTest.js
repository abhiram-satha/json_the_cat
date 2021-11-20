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
  it('returns a string description for the valid breed: Chartreux', (done) => {
    fetchBreedDescription('Chartreux', (err, desc) => {

      assert.equal(err, null);

      const expected = 'The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.'
      assert.equal(expected, desc);

      done();
    })
  })
});