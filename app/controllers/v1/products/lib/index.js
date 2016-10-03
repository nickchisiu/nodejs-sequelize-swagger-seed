'use strict';

const appRoot = require('app-root-path');

const db      = require(`${appRoot}/app/models`);
const Promise = require('bluebird');

/**
 * Class that represents products orchestration trough database
 */
class Products {
  /**
   * Adds a product to database
   *
   * @param {Object} product - product JSON object
   */
  add(product) {
    return new Promise((resolve, reject) => {
      db.Product
        .create(product)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * List all products from database
   *
   * @returns {Array}
   */
  list() {
    return new Promise((resolve, reject) => {
      db.Product
        .findAll()
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Get a specific product
   *
   * @param {Integer} id - product id
   * @returns {Object}
   */
  get(productId) {
    return new Promise((resolve, reject) => {
      db.Product
        .findOne({
          where : {
            id : productId
          }
        })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Removes a product from database
   *
   * @param {Integer} id - product id
   */
  remove(productId) {
    return new Promise((resolve, reject) => {
      db.Product
        .destroy({
          where : {
            id : productId
          }
        })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Update a specific product on database
   *
   * @param {Integer} id - product id
   */
  update(productId, data) {
    return new Promise((resolve, reject) => {
      db.Product
        .update(data, {
          where : {
            id : productId
          }
        })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

module.exports = Products;
