# Работа с временными таблицами: Сборка Dal

Работа с временными таблицами: Сборка Dal
-


# Работа с временными таблицами


Если разрабатываемое приложение обрабатывает большие объемы данных,
 ведет расчет и использует большое количество промежуточных значений, то
 может быть актуальным вопрос использования временных таблиц СУБД. Работа
 с временными таблицами осуществляется с использованием [команды
 выполнения SQL-запросов](Dal_Command.htm). При работе необходимо учитывать синтаксис
 SQL-запросов, который различается в зависимости от используемой СУБД:


	Var

	    MB: IMetabase;

	    Connection: ISecurityConnection;

	    Command: IDalCommand;

	    SQL: String = "";

	Begin

	    MB := MetabaseClass.Active;

	    Connection := (MB.ItemById("DB").Open(Null) As IDatabaseInstance).Connection;

	    //Создание временной таблицы

	    SQL := "CREATE GLOBAL TEMPORARY TABLE temp_table (key NUMBER(2,0)) ON COMMIT PRESERVE ROWS"; //Oracle

	    SQL := "CREATE TABLE ##temp_table ([KEY] INT NULL)"; //Microsoft SQL Server

	    Command := Connection.CreateCommand(SQL);

	    Command.Execute;

	    //Занесение данных во временную таблицу

	    SQL := "INSERT INTO temp_table(key) VALUES(1)"; //Oracle

	    SQL := "INSERT INTO ##temp_table VALUES (1)"; //Microsoft SQL Server

	    Command.SQL := SQL;

	    Command.Execute;

	    //Извлечение данных из временной таблицы

	    SQL := "SELECT * FROM temp_table"; //Oracle

	    SQL := "SELECT * FROM ##temp_table"; //Microsoft SQL Server

	    Command.SQL := SQL;

	    //...

	    //Дальнейшая работа с данными и временной таблицей

	    //...

	    //Удаление временной таблицы

	    SQL := "DROP TABLE temp_table"; //Oracle

	    SQL := "DROP TABLE ##temp_table"; //Microsoft SQL Server

	    Command.SQL := SQL;

	    Command.Execute;


См.
 также:


[Введение](Dal_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
