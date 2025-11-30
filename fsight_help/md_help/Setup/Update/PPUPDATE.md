# Создание пользователя PPUPDATE

Создание пользователя PPUPDATE
-


# Создание пользователя PPUPDATE


При [автоматическом обновлении с сервера
 БД](AutomaticUpdate.htm) требуется наличие пользователя PPUPDATE, схема которого используется
 для хранения дистрибутива продукта «Форсайт. Аналитическая платформа»
 при обновлении.


Пользователь PPUPDATE используется для хранения дистрибутива продукта
 «Форсайт. Аналитическая платформа»
 на сервере БД. Дистрибутив сохраняется в базу этого пользователя и берется
 оттуда при обновлении «Форсайт. Аналитическая платформа»
 на компьютерах пользователей. В зависимости от версии СУБД скрипты для
 создания пользователя PPUPDATE имеют небольшие различия.


Примечание.
 Создание пользователя PPUPDATE доступно только для [СУБД](../01_SysReq/database_Support.htm)
 Microsoft SQL Server и Oracle.


## Создание пользователя PPUPDATE на сервере MS SQL


Для создания пользователя необходимо:


[![](../Opened.gif)![](../Closed.gif)Создать пользователя](javascript:TextPopup(this))


	Создать пользователя можно с помощью следующего скрипта:


	execute sp_addlogin @loginame = 'PPUPDATE',
	 @passwd = 'PPUPDATE', @defdb = 'master'


	go


	где:


		- PPUPDATE. Имя и
		 пароль пользователя.


	Для выполнения скрипта можно использовать приложение «Query Analyzer»,
	 которое входит в стандартный пакет клиентской и серверной частей СУБД
	 Microsoft SQL Server.


	Процедура создания пользователя должна производиться администратором
	 СУБД.


[![](../Opened.gif)![](../Closed.gif)Создать базу
 данных](javascript:TextPopup(this))


	Создание базы данных можно произвести с помощью следующего скрипта:


	use master;


	go


	create database PPUPDATE;


	go


	где:


		- PPUPDATE. Имя создаваемой
		 базы данных.


[![](../Opened.gif)![](../Closed.gif)Раздать права
 пользователю](javascript:TextPopup(this))


	Следует выполнить скрипт для раздачи прав пользователю PPUPDATE
	 на созданную базу данных:


	use PPUPDATE


	go


	exec sp_changedbowner PPUPDATE


	go


	где:


		- PPUPDATE.
		 Имя базы данных и пользователя.


[![](../Opened.gif)![](../Closed.gif)Создать служебные
 таблицы](javascript:TextPopup(this))


	Необходимо последовательно выполнить Скрипт1 и Скрипт2 для создания
	 таблиц в базе данных.


	Скрипт1:


	create table B_UPD (


	LNAME                varchar(127)
	         not null,


	UPD                  numeric(8,0)
	         not null,


	STAMP                datetime
	             not
	 null,


	FNAME                varchar(127)
	         not null,


	DNAME                varchar(127)
	         null,


	FSIZE                numeric(24,4)
	        null


	)


	go


	alter table B_UPD


	   add constraint PK_B_UPD primary
	 key (LNAME, UPD)


	go


	create   index IX_B_UPD on B_UPD (


	LNAME


	)


	go


	create table B_UPDD (


	LNAME                varchar(127)
	         not null,


	UPD                  numeric(8,0)
	         not null,


	DAT                  image
	                null


	)


	go


	alter table B_UPDD


	   add constraint PK_B_UPDD primary
	 key (LNAME, UPD)


	go


	Скрипт2:


	if exists (select 1


	          from
	 sysobjects


	          where
	 id = object_id('tu_b_upd')


	          and
	 type = 'TR')


	   drop trigger tu_b_upd


	go


	if exists (select 1


	          from
	 sysobjects


	          where
	 id = object_id('td_b_upd')


	          and
	 type = 'TR')


	   drop trigger td_b_upd


	go


	if exists (select 1


	          from
	 sysobjects


	          where
	 id = object_id('ti_b_updd')


	          and
	 type = 'TR')


	   drop trigger ti_b_updd


	go


	if exists (select 1


	          from
	 sysobjects


	          where
	 id = object_id('tu_b_updd')


	          and
	 type = 'TR')


	   drop trigger tu_b_updd


	go


	/*  Update trigger "tu_b_upd"
	 for table "B_UPD"  */


	create trigger tu_b_upd on B_UPD for update
	 as


	begin


	   declare


	      @numrows
	  int,


	      @numnull
	  int,


	      @errno    int,


	      @errmsg
	   varchar(255)


	      select  @numrows
	 = @@rowcount


	      if @numrows
	 = 0


	         return


	      /*  Cannot
	 modify parent code in "B_UPD" if children still exist in
	 "B_UPDD"  */


	      if update(LNAME)
	 or


	         update(UPD)


	      begin


	         if
	 exists (select 1


	                    from
	   B_UPDD t2, inserted i1, deleted d1


	                    where
	  t2.LNAME = d1.LNAME


	                     and
	   t2.UPD = d1.UPD


	                     and
	  (i1.LNAME != d1.LNAME


	                      or
	   i1.UPD != d1.UPD))


	          begin


	             select
	 @errno  = 50005,


	                    @errmsg
	 = 'Children still exist in "B_UPDD". Cannot modify parent
	 code in "B_UPD".'


	             goto
	 error


	          end


	      end


	      return


	/*  Errors handling  */


	error:


	    raiserror (N'%d: %s',
	 10, 1, @errno, @errmsg)


	    rollback  transaction


	end


	go


	/*  Delete trigger "td_b_upd"
	 for table "B_UPD"  */


	create trigger td_b_upd on B_UPD for delete
	 as


	begin


	    declare


	       @numrows
	  int,


	       @errno
	    int,


	       @errmsg
	   varchar(255)


	    select  @numrows
	 = @@rowcount


	    if @numrows = 0


	       return


	    /*  Delete all
	 children in "B_UPDD"  */


	    delete B_UPDD


	    from   B_UPDD
	 t2, deleted t1


	    where  t2.LNAME
	 = t1.LNAME


	     and   t2.UPD
	 = t1.UPD


	    return


	/*  Errors handling  */


	error:


	    raiserror (N'%d: %s',
	 10, 1, @errno, @errmsg)


	    rollback  transaction


	end


	go


	/*  Insert trigger "ti_b_updd"
	 for table "B_UPDD"  */


	create trigger ti_b_updd on B_UPDD for insert
	 as


	begin


	    declare


	       @numrows
	  int,


	       @numnull
	  int,


	       @errno
	    int,


	       @errmsg
	   varchar(255)


	    select  @numrows
	 = @@rowcount


	    if @numrows = 0


	       return


	    /*  Parent "B_UPD"
	 must exist when inserting a child in "B_UPDD"  */


	    if update(LNAME) or


	       update(UPD)


	    begin


	       if
	 (select count(*)


	           from
	   B_UPD t1, inserted t2


	           where
	  t1.LNAME = t2.LNAME


	            and
	   t1.UPD = t2.UPD) != @numrows


	        begin


	           select
	 @errno  = 50002,


	                  @errmsg
	 = 'Parent does not exist in "B_UPD". Cannot create child
	 in "B_UPDD".'


	           goto
	 error


	        end


	    end


	    return


	/*  Errors handling  */


	error:


	    raiserror (N'%d: %s',
	 10, 1, @errno, @errmsg)


	    rollback  transaction


	end


	go


	/*  Update trigger "tu_b_updd"
	 for table "B_UPDD"  */


	create trigger tu_b_updd on B_UPDD for update
	 as


	begin


	   declare


	      @numrows
	  int,


	      @numnull
	  int,


	      @errno    int,


	      @errmsg
	   varchar(255)


	      select  @numrows
	 = @@rowcount


	      if @numrows
	 = 0


	         return


	      /*  Parent
	 "B_UPD" must exist when updating a child in "B_UPDD"
	  */


	      if update(LNAME)
	 or


	         update(UPD)


	      begin


	         if
	 (select count(*)


	             from
	   B_UPD t1, inserted t2


	             where
	  t1.LNAME = t2.LNAME


	              and
	   t1.UPD = t2.UPD) != @numrows


	          begin


	             select
	 @errno  = 50003,


	                    @errmsg
	 = 'B_UPD" does not exist. Cannot modify child in "B_UPDD".'


	             goto
	 error


	          end


	      end


	      return


	/*  Errors handling  */


	error:


	    raiserror (N'%d: %s',
	 10, 1, @errno, @errmsg)


	    rollback  transaction


	end


	go


После успешного выполнения всех шагов можно использовать пользователя
 PPUPDATE при создании [копии](CopyMSIDistr.htm) версии платформы
 для обновления на сервере БД.


## Создание пользователя PPUPDATE на сервере Oracle


Для создания пользователя необходимо:


[![](../Opened.gif)![](../Closed.gif)Создать пользователя](javascript:TextPopup(this))


	Создать пользователя можно с помощью следующего скрипта:


	CREATE USER PPUPDATE IDENTIFIED BY PPUPDATE
	 DEFAULT TABLESPACE Users TEMPORARY TABLESPACE TEMP PROFILE DEFAULT;


	GRANT CONNECT TO PPUPDATE;


	GRANT RESOURCE TO PPUPDATE;


	REVOKE UNLIMITED TABLESPACE FROM PPUPDATE;


	ALTER USER PPUPDATE QUOTA UNLIMITED ON Users;


	COMMIT;


	Где Users - имя табличного
	 пространства, в котором будет создан пользователь PPUPDATE.


	Скрипт выполняется стандартными средствами СУБД от имени пользователя,
	 обладающего правами создания пользователей на сервере БД.


	Примечание.
	 Начиная с версии сервера Oracle 12c Release 1 роль «resource» не дает
	 привилегию «unlimited». Попытка
	 забрать эту привилегию приведет к ошибке. При использовании сервера
	 начиная с версии Oracle 12c Release 1 пропустите команду:

	REVOKE UNLIMITED TABLESPACE FROM PPUPDATE;


[![](../Opened.gif)![](../Closed.gif)Создать служебные
 таблицы](javascript:TextPopup(this))


	Стандартными средствами СУБД от имени ранее созданного пользователя
	 PPUPDATE необходимо выполнить
	 следующий скрипт:


	create table B_UPD (


	LNAME VARCHAR2(127) not null,


	UPD NUMBER(8,0) not null,


	STAMP DATE not null,


	FNAME VARCHAR2(127) not null,


	DNAME VARCHAR2(127),


	FSIZE NUMBER(24,4)


	)


	/


	alter table B_UPD


	add constraint PK_B_UPD primary key (LNAME,
	 UPD)


	/


	create table B_UPDD (


	LNAME VARCHAR2(127) not null,


	UPD NUMBER(8,0) not null,


	DAT LONG RAW


	)


	/


	alter table B_UPDD


	add constraint PK_B_UPDD primary key (LNAME,
	 UPD)


	/


	alter table B_UPDD


	add constraint FK_UPDD2UPD foreign key (LNAME,
	 UPD)


	references B_UPD (LNAME, UPD)


	on delete cascade


	/


После успешного выполнения всех шагов можно использовать пользователя
 PPUPDATE при создании [копии](CopyMSIDistr.htm) версии продукта
 «Форсайт. Аналитическая платформа»
 для обновления на сервере БД.


См. также:


[Обновление
 продукта «Форсайт. Аналитическая платформа»](Update.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
