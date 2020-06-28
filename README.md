# Assignment
##########################################

## Software Dependencies
- Download Install NodeJs from `https://nodejs.org/en/`
- Mysql

## Development server
- Go to Project directory
- Install npm Dependencies using `npm install`,
- Create datbase with name `assignment` in to local mysql server.
- Run `npm start` for a dev server. ( After Running `npm start` it will automatically create table/tables into `assignment` database)
- Now you will be able access api's from `http://localhost:5000/`.

# To create model :
- node_modules/.bin/sequelize model:create --name city --attributes "id:integer,city:string,start_date:date,end_date:date, price: string, status: string, color: string"

# To create database table from migrations use :
- node_modules/.bin/sequelize db:migrate

