# IDalCommand.SQL

IDalCommand.SQL
-


# IDalCommand.SQL


## Синтаксис


SQL: String;


## Описание


Свойство SQL определяет SQL-запрос,
 который необходимо выполнить на сервере БД.


## Комментарии


При [Type](IDalCommand.Type.htm)=StoredProcedure в качестве
 запроса передается физическое имя хранимой на сервере процедуры или функции.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором «BD».


Добавьте ссылки на системные сборки: Dal, Db, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DB: IDatabaseInstance;

	    Com: IDalCommand;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("BD").Open(Null) As IDatabaseInstance;

	    Com := DB.Connection.CreateCommand("");

	    Com.SQL := "Select * from Table_1";

	    Com.Execute;

	    Com.Close;

	End Sub UserProc;


После выполнения примера произойдет подключение к базе данных «BD»,
 после чего произойдёт выполнение SQL-запроса, который выбирает все записи
 из таблицы «Table_1».


См. также:


[IDalCommand](IDalCommand.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
