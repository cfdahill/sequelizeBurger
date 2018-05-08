create database burgers_db;

use burgers_db;

create table burgers (
id int auto_increment not null,
burger_name varchar(100) not null,
devoured boolean not null default 0,
primary key(id)
)
