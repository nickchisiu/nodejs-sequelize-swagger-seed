'use strict';

const Products = require('../lib');

const products = new Products();

const expect = require('chai').expect;

module.exports = () => {
  const item = {
    title    : 'TV LED',
    category : 'electronics',
    price    : 500
  };

  const modifiedItem = {
    title    : 'TV LED 4k',
    category : 'electronics & television',
    price    : 600
  };

  let itemId;

  describe('Products', () => {
    it('add an item', () => products
      .add(item)
      .then((data) => {
        itemId = data.dataValues.id;

        expect(data.dataValues)
          .to.be.an('object')
          .to.include.keys('id');
      })
    );

    it('list all items', () => products
      .list()
      .then((data) => {
        expect(data)
          .to.be.an('array')
          .to.have.length.of.at.least(1);
      })
    );

    it('get item', () => products
      .get(itemId)
      .then((data) => {
        expect(data.dataValues)
          .to.be.an('object')
          .to.include.keys('id');
      })
    );

    it('update item', () => products
      .update(itemId, modifiedItem)
      .then((data) => {
        expect(data[0])
          .to.equal(1);
      })
    );

    it('remove item', () => products
      .remove(itemId)
      .then((data) => {
        expect(data)
          .to.equal(1);
      })
    );
  });
};
