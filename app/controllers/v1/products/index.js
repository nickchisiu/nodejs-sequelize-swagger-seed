'use strict';

const Products = require('./lib');

const products = new Products();

/**
 * @swagger
 * definition:
 *   Product:
 *     type: object
 *     required:
 *       - title
 *       - category
 *       - price
 *     properties:
 *       title:
 *         type: string
 *       category:
 *         type: string
 *       price:
 *         type: integer
 */
module.exports = (app) => {
  /**
   * @swagger
   * /v1/products:
   *   post:
   *     summary: Add a product
   *     description: Add a product as a JSON object
   *     tags:
   *       - Products
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: body
   *         name: body
   *         description: "Product object that needs to be added to the store"
   *         required: true
   *         schema:
   *           "$ref": "#/definitions/Product"
   *     responses:
   *       200:
   *         description: "successful operation"
   */
  app.post('/v1/products', (req, res) => {
    products
      .add(req.body)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });

  /**
   * @swagger
   * /v1/products:
   *   get:
   *     summary: List all products
   *     description: List all products as an JSON array
   *     tags:
   *       - Products
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: "successful operation"
   *         schema:
   *           type: array
   *           items:
   *             "$ref": "#/definitions/Product"
   */
  app.get('/v1/products', (req, res) => {
    products
      .list()
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });

  /**
   * @swagger
   * /v1/products/{id}:
   *   get:
   *     summary: Get a product
   *     description: Get a product
   *     tags:
   *       - Products
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         description: "product id"
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "successful operation"
   *         schema:
   *           "$ref": "#/definitions/Product"
   *       404:
   *         description: "not found"
   *       400:
   *         description: "bad request"
   */
  app.get('/v1/products/:id', (req, res) => {
    products
      .get(req.params.id)
      .then((data) => {
        if (data <= 0) {
          res.sendStatus(404);
        } else {
          res.send(data);
        }
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });

  /**
   * @swagger
   * /v1/products/{id}:
   *   delete:
   *     summary: Removes a product
   *     description: Removes a product
   *     tags:
   *       - Products
   *     parameters:
   *       - name: id
   *         in: path
   *         description: "product id"
   *         required: true
   *         type: integer
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: "successful operation"
   *       404:
   *         description: "not found"
   *       400:
   *         description: "bad request"
   */
  app.delete('/v1/products/:id', (req, res) => {
    products
      .remove(req.params.id)
      .then((data) => {
        if (data <= 0) {
          res.sendStatus(404);
        } else {
          res.send({
            success : true
          });
        }
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });

  /**
   * @swagger
   * /v1/products/{id}:
   *   patch:
   *     summary: Update a product
   *     description: Update a product
   *     tags:
   *       - Products
   *     parameters:
   *       - name: id
   *         in: path
   *         description: "product id"
   *         required: true
   *         type: integer
   *       - in: body
   *         name: body
   *         description: "Product object that needs to be added to the store"
   *         required: true
   *         schema:
   *           "$ref": "#/definitions/Product"
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: "successful operation"
   *       404:
   *         description: "not found"
   *       400:
   *         description: "bad request"
   */
  app.patch('/v1/products/:id', (req, res) => {
    products
      .update(req.params.id, req.body)
      .then((data) => {
        if (data <= 0) {
          res.sendStatus(404);
        } else {
          res.send({
            success : true
          });
        }
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });
};
