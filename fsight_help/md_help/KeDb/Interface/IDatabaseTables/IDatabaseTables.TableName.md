# IDatabaseTables.TableName

IDatabaseTables.TableName
-


# IDatabaseTables.TableName


## Синтаксис


TableName: String;


## Описание


Свойство TableName возвращает физическое имя таблицы в базе данных.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DBInst: IDatabaseInstance;

	    Tables: IDatabaseTables;

	    TabName: IStringList;

	Begin

	    MB := MetabaseClass.Active;

	    TabName := New StringList.Create;

	    DBInst := MB.ItemById("BD").Open(Null) As IDatabaseInstance;

	    Tables := DBInst.Tables;

	    While Not Tables.Eof Do

	        TabName.Add(Tables.TableName);

	        Tables.Next;

	    End While;

	End Sub UserProc;


После выполнения примера в массиве «TabName» будут содержаться физические имена всех таблиц, хранящихся на сервере БД, на который настроена база данных репозитория с идентификатором «BD».


См.также:


[IDatabaseTables](IDatabaseTables.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
