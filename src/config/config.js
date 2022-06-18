module.exports={
    development:{
        database:{
            host: 'localhost',
            port: 3306,
            name: 'db-crud-nodejs-mysql01',
            dialect: 'mysql',
            user: 'root',
            password: ''

        }
    },

    production:{
        database:{
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}