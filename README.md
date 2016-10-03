# nodejs-sequelize-swagger-seed

## Features

- ECMA Script 6 standards
- Express Framework support
- Swagger API documentation
- Sequelize Framework
- Bluebird A+ class promises
- MySQL support
- multiple environments
- automatically load controllers & models ( no need to specify files when add something new to `app/models` and `app/controllers` )
- live-reload
- AirBnb linter
- JS Inspect for duplicated code
- YAML environment config files

### Directory Organization

```    
.
├── app
│   ├── controllers ( Node Express API routes )
│   └── models ( Sequelize database models )
├── config ( Environments config )
├── fixtures ( Sequelize JSON data fixtures )
├── lib ( custom libraries )
└── public ( Express static files )
```  

### Requirements

You will need these tools to set up a local development environment:

* [NPM](https://www.npmjs.com/)
* [NodeJS](https://nodejs.org/)
* [Mysql Server](https://www.mysql.com/)

### Setup & init

In order to change Node's server environment (which by default is `local`) run this :
``` 
export NODE_ENV="dev"
```

*NOTE* : check `config/` **YML** environment files

#### Create a user database on your local machine :

```
username : "test"
password : "4f1070d6e58"
database : "test"
hostname : "localhost"
```

**Live auto reload when files changes enabled on the `local` environment !!!**

#### Running the server :

```sh
$ npm install
$ npm start
```

**API url** [http://localhost:5000/](http://localhost:5000/)

**API Docs url** [http://localhost:5000/docs](http://localhost:5000/docs)

**Tests**

```sh
$ npm test
```

**Eslint**

```
$ npm run eslint
```

**JS inspect ( duplicated code check )**

```
$ npm run jsinspec
```


### Database

Database it's maintained with the power of the [Sequelize Framework](http://docs.sequelizejs.com/en/v3/)

Tables & schema are created by default when you initiate the NodeJS server . On `dev` & `local` environments 
every time when you restart the Node server your data it's wiped out and tables recreated , this it's done
with the help of `wipe: true` line stored on `config/` environment files. For `prod` , data it's created only once,
and the best to modify tables it's to use [Sequelize Migrations](http://docs.sequelizejs.com/en/latest/docs/migrations/)

### Swagger API Documentation http://swagger.io/

*NOTE* : API docs are available only on the development environments .

You can access the API documentation locally on `http://localhost:5000/docs`

[Swagger Specifications](http://swagger.io/specification/) are added on a specific way on this project:

- **paths specifications** are defined directly into the Node Express controllers `app/controllers` as YAML comments using https://www.npmjs.com/package/swagger-jsdoc
