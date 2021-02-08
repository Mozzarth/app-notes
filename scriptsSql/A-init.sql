ALTER USER 'USER_NOTE' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASS';
FLUSH PRIVILEGES;

create database if not exists NOTE_DEV;
use NOTE_DEV;
create table if not exists users(
				   idUser BINARY(16) not null primary key,
                   email nvarchar(100) not null,
                   password nvarchar(100) not null,
                   active bit not null default 0,
                   dateActive datetime null,
                   created datetime not null default now()
                   );
create table if not exists notebooks( 
					              idNotebook binary(16) not null primary key,
                        idUser binary(16) not null,
                        title nvarchar(100) not null,
                        created datetime not null default now(),
                        dateUpdate datetime null,
                        trashed bit not null default 0,
                        dateTrashed datetime null,
                        foreign key (idUser) references users(idUser)
                        );
create table if not exists notes(
					idNote binary(16) not null primary key,
                    idNotebook binary(16) not null,
                    note nvarchar(2000) not null,
                    created datetime not null default now(),
                    dateUpdate datetime null,
                    trashed bit not null default 0,
                    dateTrashed datetime null,
                    foreign key(idNotebook) references notebooks(idNotebook)                    
                  )