# IDatabaseInstance.Views

IDatabaseInstance.Views
-


# IDatabaseInstance.Views


## Синтаксис


Views: [IDatabaseViews](../IDatabaseViews/IDatabaseViews.htm);


## Описание


Свойство Views возвращает объект, содержащий коллекцию всех представлений, хранящихся на сервере БД.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DBInst: IDatabaseInstance;

	    Views: IDatabaseViews;

	    ViewsName: IStringList;

	Begin

	    MB := MetabaseClass.Active;

	    ViewsName := New StringList.Create;

	    DBInst := MB.ItemById("BD").Open(Null) As IDatabaseInstance;

	    Views := DBInst.Views;

	    While Not Views.Eof Do

	        ViewsName.Add(Views.ViewName);

	        Views.Next;

	    End While;

	End Sub UserProc;


После выполнения примера в массиве «ViewsName» будут содержаться физические имена всех представлений, хранящихся на сервере БД, на который настроена база данных репозитория с идентификатором "BD".


См.также:


[IDatabaseInstance](IDatabaseInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
