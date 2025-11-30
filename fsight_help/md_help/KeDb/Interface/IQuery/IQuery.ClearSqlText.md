# IQuery.ClearSqlText

IQuery.ClearSqlText
-


# IQuery.ClearSqlText


## Синтаксис


ClearSqlText;


## Описание


Метод ClearSqlText осуществляет очистку текста запроса объекта Запрос.


## Пример


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    MObj: IMetabaseObject;

	    Query: IQuery;

	Begin

	    Mb:=MetabaseClass.Active;

	    MObj:=Mb.ItemById("Query").Edit;

	    Query:=MObj As IQuery;

	    Query.ClearSqlText;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера произойдет очистка текста запроса. Идентификатор объекта Запрос - «Query».


См. также:


[IQuery](IQuery.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
