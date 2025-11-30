# IDatabase.Unicode

IDatabase.Unicode
-


# IDatabase.Unicode


## Синтаксис


Unicode: Boolean;


## Описание


Свойство Unicode определяет, будут ли строковые поля таблиц базы данных создаваться с типом NVARCHAR.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Object: IMetabaseObject;

	    Database: IDatabase;

	Begin

	    MB:=MetabaseClass.Active;

	    Object:=MB.ItemById("BD").Edit;

	    Database:=Object As IDatabase;

	    Database.Unicode:=True;

	    Object.Save;

	End Sub UserProc;


После выполнения примера, при создании строковых полей в таблицах, поля будут создаваться с типом NVARCHAR.


См. также:


[IDatabase](IDatabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
