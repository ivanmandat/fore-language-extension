# IDatabaseViews.ViewName

IDatabaseViews.ViewName
-


# IDatabaseViews.ViewName


## Синтаксис


ViewName: String;


## Описание


Свойство ViewName возвращает физическое имя представления в базе данных.


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


После выполнения примера в массиве «ViewsName» будут содержаться физические имена всех представлений, хранящихся на сервере БД, на который настроена база данных репозитория с идентификатором «BD».


См.также:


[IDatabaseViews](IDatabaseViews.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
