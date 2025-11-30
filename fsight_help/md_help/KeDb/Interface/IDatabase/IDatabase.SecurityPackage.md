# IDatabase.SecurityPackage

IDatabase.SecurityPackage
-


# IDatabase.SecurityPackage


## Синтаксис


SecurityPackage: String;


## Описание


Свойство SecurityPackage определяет идентификатор пакета безопасности базы данных.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Database: IDatabase;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Database:=MB.ItemById("BD").Bind As IDatabase;

	    s:=Database.SecurityPackage;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться идентификатор пакета безопасности базы данных «BD».


См. также:


[IDatabase](IDatabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
