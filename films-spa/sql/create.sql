drop database if exists films;

create database films default charset=utf8;

use films;

create table film_type(
    typeId int primary key,
    typeName varchar(50)
)engine=Innodb default charset=utf8;

insert into film_type values (10001,"影院热映");
insert into film_type values (10002,"最受欢迎");
insert into film_type values (10003,"即将上映");


create table film (
    sortId int primary key auto_increment,
    filmId int,
    filmName varchar(20),
    filmYear varchar(20),
    filmTypes varchar(50),
    filmDesc varchar(1000),
    filmImg varchar(200),
    castNames varchar(400),
    castList varchar(2000),
    typeId int
)engine=Innodb default charset=utf8;

create table film_comment (
    commentId int primary key auto_increment,
    username varchar(20),
    userImg varchar(50),
    userSource varchar(20),
    userMsg varchar(2000),
    createTime varchar(50),
    filmId int
)engine=Innodb default charset=utf8;