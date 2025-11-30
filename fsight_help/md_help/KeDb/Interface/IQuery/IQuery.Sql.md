# IQuery.Sql

IQuery.Sql
-


# IQuery.Sql


## Синтаксис


Sql: String;


## Описание


Свойство Sql определяет текст SQL-запроса к базе данных у объекта Запрос.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных с идентификатором "BD".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInf: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    Query: IQuery;

	Begin

	    MB := MetabaseClass.Active;

	    CrInf := Mb.CreateCreateInfo;

	    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_QUERY;

	    CrInf.Id := "New_Query";

	    CrInf.Name := "New_Query";

	    CrInf.Parent := Mb.Root;

	    MObj := Mb.CreateObject(CrInf).Edit;

	    Query := MObj As IQuery;

	    Query.Database := Mb.ItemById("BD").Bind As IDatabase;

	    Query.Sql := "SELECT * FROM Table_1";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан новый Запрос. При выполнении данного запроса будет выполняться выборка данных из таблицы "Table_1".


См. также:


[IQuery](IQuery.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
