# IDatabaseInstance.Tables

IDatabaseInstance.Tables
-


# IDatabaseInstance.Tables


## Синтаксис


Tables: [IDatabaseTables](../IDatabaseTables/IDatabaseTables.htm);


## Описание


Свойство Tables возвращает объект, содержащий коллекцию всех таблиц, хранящихся на сервере БД.


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


После выполнения примера в массиве «TabName» будут содержаться физические имена всех таблиц, хранящихся на сервере БД, на который настроена база данных репозитория с идентификатором "BD".


См.также:


[IDatabaseInstance](IDatabaseInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
